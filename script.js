let options = document.querySelectorAll(".options");
let reset = document.querySelector("#reset");
let yous = document.querySelector("#yous");
let comps = document.querySelector("#comps");
let resultText = document.querySelector("#result");
let resultBox = document.querySelector(".resultbox");

let ycount = 0;
let ccount = 0;

reset.addEventListener("click", () => {
     yous.innerText = "0";
     comps.innerText = "0";
     ycount = 0;
     ccount = 0;
     resultText.innerText = "Select an Option";
     resultBox.style.backgroundColor = "aqua";
});

function result(choice) {
     let op = ["Rock", "Paper", "Scissors"];
     let gen = Math.floor(Math.random() * 3);
     if (choice === gen) {
          resultText.innerText = "It was a tie";
          resultBox.style.backgroundColor = "yellow";
     }
     else if ((choice === 0 && gen === 1) || (choice === 1 && gen === 2) || (choice === 2 && gen === 0)) {
          ccount++;
          comps.innerText = ccount;
          resultText.innerText = `You Lost! Computer choose ${op[gen]}`;
          resultBox.style.backgroundColor = "rgb(255, 78, 78)";
     }
     else {
          ycount++;
          yous.innerText = ycount;
          resultText.innerText = `You Won! Computer choose ${op[gen]}`;
          resultBox.style.backgroundColor = "greenyellow";
     }
}
options[0].addEventListener("click", () => {
     result(0);
});
options[1].addEventListener("click", () => {
     result(1);
});
options[2].addEventListener("click", () => {
     result(2);
}); 