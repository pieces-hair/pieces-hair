(function(){
  const links = document.querySelectorAll('#debug a');
  if(!links.length) return;
  for(const a of links){
    fetch(a.getAttribute('href'), {cache:'no-store'}).then(r=>{
      if(!r.ok){
        const warn = document.createElement('span');
        warn.textContent = ' ← 404（見つかりません）';
        warn.style.color = '#c00';
        a.parentElement.appendChild(warn);
      }
    }).catch(()=>{});
  }
})();