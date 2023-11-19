//////////////////////
//Restaurant Menu
//////////////////////
const starters = JSON.parse(
  "[" +
    '{ "type":"separator", "description":"PİDE & LAHMACUN" },' +
    '{ "type":"food", "name":"LAHMACUN", "description":"", "price":"50 ₺" },' +
    '{ "type":"food", "name":"KIYMALI PİDE", "description":"", "price":"70 ₺" },' +
    '{ "type":"food", "name":"KAŞARLI PİDE", "description":"", "price":"80 ₺" },' +
    '{ "type":"food", "name":"KUŞBAŞILI PİDE", "description":"", "price":"80 ₺" },' +
    '{ "type":"food", "name":"KIYMALI-KAŞARLI PİDE", "description":"", "price":"80 ₺" },' +
    '{ "type":"food", "name":"KUŞBAŞILI-KAŞARLI PİDE", "description":"", "price":"90 ₺" },' +
    '{ "type":"food", "name":"KARIŞIK PİDE", "description":"", "price":"80 ₺" },' +
    '{ "type":"food", "name":"SUCUKLU-KAŞARLI PİDE", "description":"", "price":"100 ₺" } ]'
);
const mains = JSON.parse(
  "[" +
    '{ "type":"separator", "description":"KEBAPLAR & IZGARALAR" },' +
    '{ "type":"food", "name":"ADANA KEBAP", "description":"", "price":"150 ₺" },' +
    '{ "type":"food", "name":"URFA KEBAP", "description":"", "price":"150 ₺" },' +
    '{ "type":"food", "name":"TAVUK ŞİŞ", "description":"", "price":"150 ₺" },' +
    '{ "type":"food", "name":"KARIŞIK KEBAP", "description":"", "price":"360 ₺" } ]'
);
const desserts = JSON.parse(
  "[" +
    '{ "type":"separator", "description":"DİĞER LEZZETLER" },' +
    '{ "type":"food", "name":"CENNET KEBAP", "description":"", "price":"150 ₺" },' +
    '{ "type":"food", "name":"KİREMİT DANA", "description":"", "price":"150 ₺" } ]'
);
const drinks = JSON.parse(
  "[" +
    '{ "type":"separator", "description":"İÇECEKLER" },' +
    '{ "type":"drink", "name":"COCA-COLA", "description":"", "price":"25 ₺" },' +
    '{ "type":"drink", "name":"COCA-COLA(ZERO SUGAR)", "description":"", "price":"25 ₺" },' +
    '{ "type":"drink", "name":"FANTA", "description":"", "price":"25 ₺" },' +
    '{ "type":"drink", "name":"SPRİTE", "description":"", "price":"25 ₺" },' +
    '{ "type":"drink", "name":"EKER AYRAN", "description":"", "price":"10 ₺" },' +
    '{ "type":"drink", "name":"MEYVELİ SODA", "description":"", "price":"15 ₺" },' +
    '{ "type":"drink", "name":"SADE SODA", "description":"", "price":"10 ₺" },' +
    '{ "type":"drink", "name":"COCA-COLA(2.5 LİTRE)", "description":"", "price":"50 ₺" },' +
    '{ "type":"drink", "name":"ŞALGAM(ACILI-ACISIZ)", "description":"", "price":"20 ₺" } ]'
);

/////////////////////////////////////////////////////////////////
let sl = 0;

let startersbutton = document.getElementById("startersbutton");
let mainsbutton = document.getElementById("mainsbutton");
let dessertsbutton = document.getElementById("dessertsbutton");
let drinksbutton = document.getElementById("drinksbutton");

let ni1 = document.getElementById("ni1");
let ni2 = document.getElementById("ni2");
let ni3 = document.getElementById("ni3");
let ni4 = document.getElementById("ni4");

startersbutton.addEventListener("click", (e) => {
  setIndicator(0);
  populateItems(starters);
});
mainsbutton.addEventListener("click", (e) => {
  setIndicator(1);
  populateItems(mains);
});
dessertsbutton.addEventListener("click", (e) => {
  setIndicator(2);
  populateItems(desserts);
});
drinksbutton.addEventListener("click", (e) => {
  setIndicator(3);
  populateItems(drinks);
});

function populateItems(items) {
  let menu = document.querySelector(".menu");
  menu.innerHTML = "";
  for (i = 0; i < items.length; i++) {
    if (items[i].type === "separator") {
      let menuitem = document.createElement("div");
      menuitem.setAttribute("class", "menu-separator");
      menuitem.innerHTML = items[i].description;
      menu.appendChild(menuitem);
    }
    if (items[i].type === "food") {
      let menuitem = document.createElement("div");
      let menuitemname = document.createElement("div");
      let menuitemdesc = document.createElement("div");
      let menuitemprize = document.createElement("div");
      menuitem.setAttribute("class", "menu-item");
      menuitemname.setAttribute("class", "menu-item-name");
      menuitemdesc.setAttribute("class", "menu-item-description");
      menuitemprize.setAttribute("class", "menu-item-price");

      menuitemname.innerHTML = items[i].name;
      menuitemdesc.innerHTML = items[i].description;
      menuitemprize.innerHTML = items[i].price;

      menuitem.appendChild(menuitemname);
      menuitem.appendChild(menuitemdesc);
      menuitem.appendChild(menuitemprize);
      menu.appendChild(menuitem);
    }
    if (items[i].type === "drink") {
      let drinkitem = document.createElement("div");
      let drinkitemname = document.createElement("div");
      let drinkitemdesc = document.createElement("div");
      let drinkitemprize = document.createElement("div");
      drinkitem.setAttribute("class", "drink-item");
      drinkitemname.setAttribute("class", "drink-item-name");
      drinkitemdesc.setAttribute("class", "drink-item-description");
      drinkitemprize.setAttribute("class", "drink-item-price");

      drinkitemname.innerHTML = items[i].name;
      drinkitemdesc.innerHTML = items[i].description;
      drinkitemprize.innerHTML = items[i].price;

      drinkitem.appendChild(drinkitemname);
      drinkitem.appendChild(drinkitemdesc);
      drinkitem.appendChild(drinkitemprize);
      menu.appendChild(drinkitem);
    }
  }
}
function setIndicator(sel) {
  sl = sel;
  let vp = "";
  if (window.innerWidth < 800) {
    vp = "60px";
  } else {
    vp = "85%";
  }
  let elems = [ni1, ni2, ni3, ni4];
  for (i = 0; i < elems.length; i++) {
    if (i === sel) {
      elems[i].style.width = vp;
      elems[i].style.boxShadow =
        "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
    } else {
      elems[i].style.width = "0";
      elems[i].style.boxShadow = "none";
    }
  }
}

window.addEventListener("resize", (e) => {
  setIndicator(sl);
});

//default runs
setIndicator(sl);
populateItems(starters);
