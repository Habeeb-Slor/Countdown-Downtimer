let mySong = new Audio('Xiaomi.mp3')
const startCountDown = ()=> {
  let countedHour = myHour.value;
  let countedMin = myMin.value;
  let countedSec = mySec.value;
  countedSec--;
  mySec.value = countedSec;
  myTimer = setTimeout(startCountDown,1000)
  if(countedSec < 0 && countedMin == 0 && countedHour == 0 ){
    clearTimeout(startCountDown)
    mySec.value = '00'
    myMin.value = '00'
    myHour.value = '00'
    clearTimeout(myTimer)
    mySong.play()
  }
  if(countedSec < 0 && myMin.value > 0){
    mySec.value = 59;
  }
  if(countedSec < 0 && countedMin > 0){
    myMin.value--
  }
  else if(countedHour > 0 && countedMin == 0){
    myHour.value--
    myMin.value = 59;
    mySec.value = 59;
  }
  // if(countedHour > 0 && countedMin == 0){
    //   countedHour--;
    //   myMin.value = 60;
    // }
    
}


