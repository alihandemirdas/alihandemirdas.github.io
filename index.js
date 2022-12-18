const text = document.getElementById("root");

const initialText = "Welcome to Alihan Demirdaş's personal webpage!";

let currentText = [];
let initialChance = 1;

let timer;
function start(){
  timer = setInterval(() => {
    initialText.split("").forEach(text => {
      const random = Math.floor(Math.random() * initialChance + 1);
      console.log("random", random);
      if(random != initialChance) {
        currentText.push(text);
        return;
      }
      if(!text.match(/[^ ]/)){
        currentText.push(text);
      }else{
        currentText.push(String.fromCharCode(Math.floor(Math.random() * 255)));
      }
    });
    const displayText = currentText.join("");
    text.innerHTML = displayText;
    currentText = [];
    if(Math.floor(Math.random() * 2) == 0){
      initialChance++;
    }
    if(initialChance > 30) {
      clearInterval(timer);
      text.innerHTML = initialText;
    };
  }, 50);
}

start();

