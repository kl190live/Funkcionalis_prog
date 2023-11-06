import './style.css'
import {quotes} from'./quotes.json'

document.addEventListener('DOMContentLoaded',()=>{
  console.log("Összes idézet")
  const idezet=Array.from(quotes.map((quotes)=>quotes.author+" : "+"„"+quotes.quote+"”"))
  idezet.sort((a,b)=>{ 
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
  });
  console.log(idezet)
})




