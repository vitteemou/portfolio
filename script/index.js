(function() {
  let panelTitle = document.querySelector('.education--panel_title');
  panelTitle.addEventListener('click', toggleExpansionPanel);

  let leftArrow = document.querySelector('.slider--arrow-left');
  leftArrow.addEventListener('click', showPrevious);

  let rightArrow = document.querySelector('.slider--arrow-right');
  rightArrow.addEventListener('click', showNext);

  function showPrevious() {
    showNext();
  }

  function showNext() {
    let curItem = document.querySelector('.slider_item-active');
    let nextItem = document.querySelector('.slider_item-active + div');

    if(!nextItem) {
      nextItem = document.querySelector('.slider_item:first-child');
    }

    curItem.classList.remove('slider_item-active');
    nextItem.classList.add('slider_item-active');
  }

  function toggleExpansionPanel() {
    let listContainer = document.querySelector('.education--list_container');
    let isShow = listContainer.classList.contains('education--list_container-hidden');
    let originalHeight = isShow ? 0 : parseInt(listContainer.style.height);
    let start = Date.now();

    listContainer.classList.toggle('education--list_container-hidden');

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;
  
      if (timePassed >= 1100) {
        clearInterval(timer);
        return;
      }

      let curHeight = isShow ? (timePassed / 5) : (originalHeight - timePassed / 5);
      listContainer.style.height = curHeight + 'px';

    }, 20);
  }
})();