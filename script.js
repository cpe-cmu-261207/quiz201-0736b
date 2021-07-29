const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

const text = document.querySelector('#text');
const btn_reset = document.querySelector('#reset');
const btn_search = document.querySelector('#search');


btn_toggle.onclick = () => {
  // your code here
  calculation.innerHTML = 630610736 + parseInt(length.value);
  if(author.style.display === "none"){
    author.style.display = "block";
    calculation.style.display = "none";
    btn_toggle.innerHTML = "Show Calculation";
  }
  else{
    author.style.display = "none";
    calculation.style.display = "block";
    btn_toggle.innerHTML = "Show Author";
  }
}

// more codes for Search and Reset buttons here
