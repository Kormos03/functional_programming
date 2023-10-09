import './style.css'

function init()
{

}
const fv = init;

//anonym / névtelen függvénnyel eseménykezelő felvétele
const fv2 = function()
{
  fv();
};

document.addEventListener('DOMContentLoaded', function() {
  console.log("Anonim függvény ami akkor hívódik meg amikor az oldal betöltődött.")
});

//arrow function
const arrowFunction = (parameter1, parameter2, parameter3) => 
{
  //utasitas1
  //utasitas2
  //utasitas...
  console.log("parameter1", parameter1);
  console.log("parameter2", parameter2);
  console.log("parameter3", parameter3);
};
//eseménykezelő megadása arrow functionnel (ugyan úgy anonim függvény) (lambda function)
document.addEventListener('DOMContentLoaded', () => {
  arrowFunction(1,2,3);
  obj.logThis1;
  obj.logThis2;
  logThis3;
});

/*
anonim függvények esetében, szintakszistól függően másképp viselkedik a 'this'
*/ 
const obj = {
  logThis1: function(){console.log(this)},
  logThis2: function(){console.log(this)}
}

const logThis3 = () => {console.log(this)}



document.addEventListener('DOMContentLoaded', () => 
{const gomb = document.getElementById('button');
gomb.addEventListener('click', () => {
  alert('hello world');
})})

const lista  = [];

lista.push(
  {
    vezetekNev: "Gipsz",
    keresztNev: "Karton",
    eletkor: 19
  }
)
lista.push(
  {
    vezetekNev: "Gipsz",
    keresztNev: "Kéz",
    eletkor: 99
  }
)
lista.push(
  {
    vezetekNev: "Gipsz",
    keresztNev: "József",
    eletkor: 12
  }
)
lista.push(
  {
    vezetekNev: "Gipsz",
    keresztNev: "Karcsi",
    eletkor: 30
  } 
)
lista.push(
  {
    vezetekNev: "aaaa",
    keresztNev: "Elemér",
    eletkor: 30
  } 
)
;


function kivalogato(szemely)
{
  return szemely.eletkor > 20;
}

const idosebbMint20v2AnonimFvNelkul = lista.filter(kivalogato);
//DRY: Dont Repeat Yourself

//Válogassuk ki a 20 évesnél idősebbeket
//filter függvény - végigmegy a listán bemenő paramétere egy függvény amit a lista minden elemén lefuttat és amelyik elemre igaz értéket ad vissza a függvény azt fogja új listába belerakni
const idosebbMint20 = lista.filter(szemely => {return szemely.eletkor > 20});
//arrow function esetén, ha csak 1 bemenő paraméter van a sima zárójel elhagyható, ha csak 1 utasítást szeretnénk futtatni a kapcso zárójel is elhagyható

console.log(idosebbMint20);
const idosebbMint20v2 = lista.filter((szemely) => {return szemely.eletkor > 20});
console.log(idosebbMint20v2AnonimFvNelkul);


const idosebbMint20Gipsz = lista.filter(szemely => szemely.eletkor > 20 && szemely.vezetekNev == "Gipsz");
console.log(idosebbMint20Gipsz);

const idosebbMint20Gipszv2 = lista.filter(szemely => szemely.eletkor > 20).filter(szemely => szemely.vezetekNev = "Gipsz");
console.log(idosebbMint20Gipszv2);

//Gyűjtsük ki az összes személy teljes nevét 
//map - minden elemre új értéket hoz létre 
const nevek = lista.map(szemely => {return szemely.vezetekNev + " " + szemely.keresztNev;});
console.log(lista);
console.log(nevek);

const idosebbMint20TeljesNevuk = lista
.filter(szemely => szemely.eletkor > 20)
.map(szemely => szemely.vezetekNev + " " + szemely.keresztNev);

console.log(idosebbMint20TeljesNevuk);

//A filter, map, és hasonló függvények nem módsítják az eredeti tömböt, hanem új tömböt hoznak létre

/*
Tiszta függvény - Pure Function
- programon belül létezhetnek globális változók pl. : document, window
- Tiszta függvény nem hivatkozhat semmilyen globális dologra
-Viselkedését a paraméterei fogják meghatározni 
-Nem használhat fel globális változót, nem módosíthatja azok értékét
Filter és map függvények csak akkor megbízhatóak, ha ezek tiszta függvények
 */
//JS-ben a rendezés számára létrehozott sort föggvény nem új listát hoz létre, hanem módosítja a listában az elemek sorrendjét
//Gyakorló feladat: jelenítsük meg az összes személy teljes nevet az oldalon HTML listában

