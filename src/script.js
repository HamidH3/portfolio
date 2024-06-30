
//turns pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);

    if(pageTurn.classList.contains('turn')){
      pageTurn.classList.remove('turn')
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 10);
    }
    else{
       pageTurn.classList.add("turn");
        setTimeout(() => {
          pageTurn.style.zIndex = 20 + index;
        }, 10);
    }
  }
})
  

