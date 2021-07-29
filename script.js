const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

const text = document.querySelector('#text');
const btn_reset = document.querySelector('#reset');
const btn_search = document.querySelector('#search');

//backup original paragraph text for Reset
const tempText = text.innerHTML;

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

//Cut the word push in array
const wordCut = (str) => {
  let arrText = [];
  const word = str.split(" ");
  arrText.push(word);
  return arrText;
}

// Add Span to word that over length
const textOverLength = () => {
  const textCutted = wordCut(tempText);
  for(let i = 0; i < 312; i++){
    if(textCutted[0][i].length >= length.value){
      textCutted[0][i] = "<span style='color:"+ `${color.value}` + "'>" + textCutted[0][i] + "</span>";
    }
  }
  //console.log(textCutted);
  return textCutted;
}

btn_search.onclick = () => {
  const addedSpan = textOverLength();
  let textWithSpan = "";
  if(textWithSpan.length >= 0){
    textWithSpan = "";
  }
  for(let i = 0; i < 312; i++){
    textWithSpan += `${addedSpan[0][i]}` + " ";
  }
  //console.log(textWithSpan);
  text.innerHTML = textWithSpan;
}

btn_reset.onclick = () => {
  length.value = "5";
  color.value ="#FF0000";
  text.innerHTML = tempText;
}