//your code here

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  

  let btn = document.querySelector("#btn");

  btn.addEventListener("click", (e) => {
    let randomNumber = getRandomArbitrary(-20, 20);
    console.log(randomNumber);


    let userGuess = document.querySelector("#guess");
    let response = document.querySelector("#respond");
    let diff = Math.abs(userGuess.value - randomNumber);
    if(diff >= 0 && diff <= 3){
        response.innerText = "Hot";
    }else{
        response.innerText = "Cold";
    
    }
10    

  });
 