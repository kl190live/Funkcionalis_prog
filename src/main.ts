import './style.css'
import {quotes} from'./quotes.json'

document.addEventListener('DOMContentLoaded',()=>{
  const Feladat_1=document.createElement('button')
  Feladat_1.textContent="Összes idézet"
  document.getElementById('app')!.appendChild(Feladat_1)
    Feladat_1.addEventListener('click',()=>{
      const lista_1=document.getElementById('lista_1')
      const idezet=Array.from(quotes.map((quotes)=>quotes.author+" : "+quotes.quote))
      idezet.sort((a,b)=>{ 
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
      });
      idezet.forEach((item)=>{
        let szoveg=item.split(': ')
        let quote=document.createElement('blockquote')
        let li=document.createElement('li')
        li.textContent=szoveg[0];
        quote.textContent=szoveg[1];
        li.appendChild(quote)
        lista_1!.appendChild(li)
      })
    })
  const Feladat_2=document.createElement('button')
  Feladat_2.textContent="The"
  document.getElementById('app')!.appendChild(Feladat_2)
    Feladat_2.addEventListener('click',()=>{
      
      const The=Array.from(quotes.map((quotes)=>"„"+quotes.quote+"”"))
      const the=The.find((the)=>the==="The","the")
      
      console.log(The)
    })
  const Feladat_3=document.createElement('button')
  Feladat_3.textContent="Hossz"
  document.getElementById('app')!.appendChild(Feladat_3)
  document.getElementById('app')!.appendChild(Feladat_3)
    Feladat_3.addEventListener('click',()=>{
      

    })
  const Feladat_4=document.createElement('button')
  Feladat_4.textContent="Darabszám"
  document.getElementById('app')!.appendChild(Feladat_4)
  document.getElementById('app')!.appendChild(Feladat_4)
    Feladat_4.addEventListener('click',()=>{
      

    })
})
