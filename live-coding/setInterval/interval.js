function move(){
  let counterID = setInterval(frame, 100);
  let width = 0;
  let myBar = document.getElementById('myBar');

  function frame(){
    if(width===100){
      clearInterval(counterID);
      console.log('done');
    }
    width++;
    myBar.style.width = width + '%';
  }
}