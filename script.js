const counterEl = document.querrySelector('.counter p ');


let count = 10000;


setInterval(() => {
  count = count-1;
   if(counter <= 0) {
  count = 0;
  }
  counterEl.textContent = count;


}, 1000);

            
