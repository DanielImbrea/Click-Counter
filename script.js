let counter = 0;
document.addEventListener('DOMContentLoaded', function (event) {
  const body = document.querySelector("body");
  let output = document.createElement("div");
  body.appendChild(output);
  output.innerHTML = "Click the button";
  output.setAttribute("class", "message");
  let btn = document.createElement("button");
  btn.innerHTML = "click me";
 let direction = 1;
    let counter = 0;
  btn.addEventListener("click", function () {
    let mes = "You clicked this " + counter + " times";
    document.querySelector(".message").innerHTML = mes;

   
    if (direction === 1) {
      if (counter >= 10) {
        direction = 0;
        counter--;
      } else {
        counter++;
      }
    } else {
      if (counter === 0) {
        direction = 1;
        counter++;
      } else {
        counter--;
      }
    }


  });

  body.appendChild(btn);
});