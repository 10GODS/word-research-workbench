const buttons=[...document.querySelectorAll('[data-panel]')];
const panels=[...document.querySelectorAll('.panel')];
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  panels.forEach(p=>p.classList.remove('active'));
  document.getElementById(btn.dataset.panel)?.classList.add('active');
}));

document.getElementById('searchBtn')?.addEventListener('click',()=>{
  document.getElementById('result')?.classList.remove('hidden');
});

const note=document.getElementById('note');
const saved=document.getElementById('saved');
if(note){ note.value=localStorage.getItem('researchWorkbenchNote')||''; }
document.getElementById('saveNote')?.addEventListener('click',()=>{
  localStorage.setItem('researchWorkbenchNote', note?.value||'');
  if(saved){saved.textContent='Saved locally'; setTimeout(()=>saved.textContent='',1800);}
});
