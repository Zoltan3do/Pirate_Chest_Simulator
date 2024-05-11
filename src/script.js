let successPercentage = 2.88; // numero di tentativi del blocco
let lg4 = 36 // Numero di successi desiderati
let attempts = 1000;// numero di tentativi

document.getElementById("lg4-target").innerHTML = lg4;

let successes = 0;
let prove = 0;
let tries = 0;
let plt = 0;
let n = 0;


function openCase() {
  n = 0;
  
  prove++;
  
  let randomNumber = generateRandomDecimal();
  // document.getElementById("case-img").src = "scrigno-aperto.png";

  
  while(successes < lg4 && n < attempts){
    if (randomNumber < successPercentage) {
      successes++;
      
      document.getElementById("successes").textContent = successes;
    }
      if (successes === lg4) {
        document.getElementById("congrats").textContent = "Congratulazioni! Hai ottenuto tutti gli LG4!";
  
      }
      n++;
      
      if(n === attempts){
        break;
      }
      console.log(randomNumber);
      //document.getElementById("ciclo").innerHTML = "ciclo in corso ...";
      randomNumber = generateRandomDecimal();
  }
  tries += n;
  document.getElementById("try").textContent = tries;
  //document.getElementById("ciclo").innerHTML = "ciclo terminato";
  document.getElementById("totalAttempts").textContent = prove;
  // setTimeout(() => {
  //   document.getElementById("case-img").src = "scrigno-chiuso.png";
  // }, 100);

  plt = tries*2000;
  document.getElementById("plt").textContent = plt;

}


function generateRandomDecimal() {
    const random = Math.random() * 101;
    return parseFloat(random.toFixed(2));
}


function reset() {
  successes = 0;
  prove = 0;
  tries = 0;
  document.getElementById("successes").textContent = successes;
  document.getElementById("totalAttempts").textContent = prove;
  document.getElementById("try").textContent = tries;
  document.getElementById("congrats").textContent = "";
  document.getElementById("ciclo").innerHTML = "";
  document.getElementById("plt").innerHTML = "0";
}


document.getElementById("set-attempts-button").addEventListener("click", function() {
  attempts = parseInt(document.getElementById("attempts-input").value);
  document.getElementById("attempts-label").textContent = "Numero di tentativi: " + attempts;
  document.getElementById("tent").textContent = attempts;
});


document.getElementById("set-lg4-button").addEventListener("click", function() {
  lg4 = parseInt(document.getElementById("lg4-input").value);
  document.getElementById("lg4-target").textContent = lg4;
});


document.getElementById("set-percentage-button").addEventListener("click", function() {
  successPercentage = parseFloat(document.getElementById("percentage-input").value);
  const formattedPercentage = successPercentage.toFixed(2);
  document.getElementById("percentage").textContent = formattedPercentage;
});
