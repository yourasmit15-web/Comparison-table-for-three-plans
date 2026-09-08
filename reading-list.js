const KEY='comparison-reading-list-v1';
const listEl=document.querySelector('#list');
const statusEl=document.querySelector('#status');
const form=document.querySelector('#add-form');

function read(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return null}}
function write(items){localStorage.setItem(KEY,JSON.stringify(items))}
function render(){
  const items=read();
  if(items===null){statusEl.className='status error';statusEl.textContent='Something went wrong while loading your saved items. Check browser storage permissions and refresh.';listEl.innerHTML='';return}
  statusEl.className='status';statusEl.textContent=items.length?`${items.length} saved item${items.length===1?'':'s'}.`:'Your reading list is empty.';
  if(!items.length){listEl.innerHTML='<div class="empty"><strong>Nothing saved yet.</strong><p>Add your first article above to start your personal reading list.</p></div>';return}
  listEl.innerHTML='';
  items.forEach(item=>{
    const article=document.createElement('article'); article.className='item';
    const info=document.createElement('div');
    const h3=document.createElement('h3'); const link=document.createElement('a'); link.href=item.url;link.target='_blank';link.rel='noopener';link.textContent=item.title;h3.append(link);
    const p=document.createElement('p');p.textContent=item.url;info.append(h3,p);
    const button=document.createElement('button');button.className='remove';button.type='button';button.textContent='Remove';button.dataset.id=item.id;button.setAttribute('aria-label',`Remove ${item.title}`);
    article.append(info,button);listEl.append(article);
  });
}
form.addEventListener('submit',e=>{e.preventDefault();const title=new FormData(form).get('title').trim();const url=new FormData(form).get('url').trim();if(!title||!url)return;const items=read()||[];items.unshift({id:crypto.randomUUID(),title,url});write(items);form.reset();document.querySelector('#title').focus();render()});
listEl.addEventListener('click',e=>{const button=e.target.closest('.remove');if(!button)return;const items=read()||[];write(items.filter(item=>item.id!==button.dataset.id));render()});
function demoState(){const state=new URLSearchParams(location.search).get('state');if(state==='loading'){statusEl.textContent='Loading your reading list…';listEl.innerHTML='';setTimeout(render,900)}else if(state==='error'){statusEl.className='status error';statusEl.textContent='Could not load your reading list. Remove ?state=error from the URL and try again.';listEl.innerHTML=''}else if(state==='empty'){listEl.innerHTML='<div class="empty"><strong>Your reading list is empty.</strong><p>Save your first article using the form above.</p></div>';statusEl.textContent='0 saved items.'}else render()}
demoState();
