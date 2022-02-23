// Created by will


alert("Guys this calculator is awesome!" )

function colors() {
 var color = ["red", "orange",
  "yellow",
  "green", "blue", "indigo",
  "violet"
 ];
 number = Math.floor(Math.random() *
  8)
 document.getElementById("result")
  .style
  .color = color[number];
}

function display(num) {
 colors()
 var display = document
  .getElementById(
   "result").value

 document.getElementById("result")
  .value =
  display + num
}
