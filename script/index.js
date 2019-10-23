(function() {
  let panelTitle = document.querySelector('.education--panel_title');

  panelTitle.addEventListener('click', function() {
    let listContainer = document.querySelector('.education--list_container');
    let isShow = listContainer.classList.contains('education--list_container-hidden');

    if(isShow) {
      let start = Date.now();
      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
    
        if (timePassed >= 1100) {
          clearInterval(timer);
          return;
        }
        listContainer.style.height = timePassed / 5 + 'px';
      }, 20);
    }
    else {
      let originalHeight = listContainer.style.height;
      let start = Date.now();
      let timer = setInterval(function() {
        let timePassed = Date.now() - start;
    
        if (timePassed >= 1100) {
          clearInterval(timer);
          return;
        }
        listContainer.style.height = (parseInt(originalHeight) - timePassed / 5) + 'px';
      }, 20);
    }
    
    listContainer.classList.toggle('education--list_container-hidden');
  });
})();