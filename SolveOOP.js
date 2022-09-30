var product1 = new Product("718 Cayman", 2200000000, "Grey", "SUV", "./porsche-718-cayman-model.png", "Cayman")
var product2 = new Product("718 Cayman T", 2590000000, "Red", "SUV", "./718T.png", "Cayman")
var product3 = new Product("718 Cayman S", 2930000000, "Mint", "SUV", "./718S.png", "Cayman")
var product4 = new Product("Taycan", 4760000000, "Pink", "SUV", "./Taycan.png", "Taycan")
var product5 = new Product("Taycan 4S", 5720000000, "Bluesea", "SUV", "./Taycan4ss.png", "Taycan")
var product6 = new Product("Taycan GTS", 6520000000, "Red", "SUV", "./Taycan4S.png", "Taycan")
var product7 = new Product("Macan ", 8992000000, "Blue", "SUV", "./Macan.png", "Macan")
var product8 = new Product("Macan T ", 3234000000, "White", "SUV", "./MacanT.png", "Macan")
var product9 = new Product("Macan S", 7817000000, "Orange", "SUV", "./MacanS.png", "Macan")
var product10 = new Product("Cayenne", 8720000000, "Milk", "SUV", "./Cayenne.png", "Cayenne")
var product11 = new Product("Cayenne Platinum Edition", 5160000000, "Black", "SUV", "./CayennePE.png", "Cayenne")
var product12 = new Product("Cayenne S", 6620000000, "Black", "SUV", "./CayenneS.png", "Cayenne")
var arrProduct = [[product1, product2, product3], [product4, product5, product6], [product7, product8, product9], [product10, product11, product12]]
let a = ["Cayman Version", "Taycan Version", "Macan Version", "Cayenne Version"]
// hien thi san pham
function display(arrProduct) {
    var data = "";
    data += "<table>"
    for (let i = 0; i < arrProduct.length; i++) {
        data += "<tr><td>" + a[i] + "<hr>" + "</td>"
        for (let j = 0; j < arrProduct[i].length; j++) {
            data += "<td>"
            data += `
<div class="product-item"
           <div class="image">
           <img src="${arrProduct[i][j].image}" width="300px" height="200px"></div>
           <div class="name">
           <a href="">${arrProduct[i][j].name}</a></div>
           <div class="price">
           <span>Price Standard:  ${arrProduct[i][j].price} VND</span></div>
           <div class="color">
           <span>Color:  ${arrProduct[i][j].color}</span></div>
           <div class="category">
           <span>Category: ${arrProduct[i][j].category}</span>
           <div class="button" >
           <button id="buy" onclick="show()" >Buy Product</button></div>
           </div>`
            data += "</td>"
        }
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("displayElement").innerHTML = data;
}

display(arrProduct)

function filterCayman() {
    let Cayman = document.getElementById("Cayman1");
    let Taycan = document.getElementById("Taycan1");
    let Macan = document.getElementById("Macan1");
    let Cayenne = document.getElementById("Cayenne1");
    let arrCayman = []
    if (Cayman.checked === true) {
        arrCayman[0] = []
        for (let i = 0; i < arrProduct.length; i++) {
            for (let j = 0; j < arrProduct[i].length; j++) {
                if (arrProduct[i][j].category === "Cayman") {
                    arrCayman[0].push(arrProduct[i][j])
                }
            }
        }
        Taycan.checked = false
        Macan.checked = false
        Cayenne.checked = false
        display(arrCayman);
    } else {
        display(arrProduct)
    }
}

filterCayman()

function filterTaycan() {
    let Cayman = document.getElementById("Cayman1");
    let Taycan = document.getElementById("Taycan1");
    let Macan = document.getElementById("Macan1");
    let Cayenne = document.getElementById("Cayenne1");
    let arrTaycan = []
    if (Taycan.checked === true) {
        arrTaycan[0] = []
        for (let i = 0; i < arrProduct.length; i++) {
            for (let j = 0; j < arrProduct[i].length; j++) {
                if (arrProduct[i][j].category === "Taycan") {
                    arrTaycan[0].push(arrProduct[i][j])
                }
            }
        }
        Cayman.checked = false
        Macan.checked = false
        Cayenne.checked = false
        display(arrTaycan);
    } else {
        display(arrProduct)
    }
}

filterTaycan()

function filterMacan() {
    let Cayman = document.getElementById("Cayman1");
    let Taycan = document.getElementById("Taycan1");
    let Macan = document.getElementById("Macan1");
    let Cayenne = document.getElementById("Cayenne1");
    let arrMacan = []
    if (Macan.checked === true) {
        arrMacan[0] = []
        for (let i = 0; i < arrProduct.length; i++) {
            for (let j = 0; j < arrProduct[i].length; j++) {
                if (arrProduct[i][j].category === "Macan") {
                    arrMacan[0].push(arrProduct[i][j])
                }
            }
        }
        Cayman.checked = false
        Taycan.checked = false
        Cayenne.checked = false
        display(arrMacan);
    } else {
        display(arrProduct)
    }
}

filterMacan()

function filterCayenne() {
    let Cayman = document.getElementById("Cayman1");
    let Taycan = document.getElementById("Taycan1");
    let Macan = document.getElementById("Macan1");
    let Cayenne = document.getElementById("Cayenne1");
    let arrCayenne = []
    if (Cayenne.checked === true) {
        arrCayenne[0] = []
        for (let i = 0; i < arrProduct.length; i++) {
            for (let j = 0; j < arrProduct[i].length; j++) {
                if (arrProduct[i][j].category === "Cayenne") {
                    arrCayenne[0].push(arrProduct[i][j])
                }
            }
        }
        Cayman.checked = false
        Taycan.checked = false
        Macan.checked = false
        display(arrCayenne);
    } else {
        display(arrProduct)
    }
}
filterCayenne()

// tao form dang ki
const open = document.getElementById('buy');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

function show() {
    modal_container.classList.add('show');
}

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
});

function confirmRegister() {
    alert("Successful Registration!")
}
function filterPrice() {
    let selectProduct = document.getElementById("price");
    let arrPrice = []
    if (selectProduct.value === "low") {
        arrPrice[0]=[]
        for (let i = 0; i < arrProduct.length; i++) {
            for (let j = 0; j < arrProduct[i].length; j++) {
                if (arrProduct[i][j].price >= 1000000000 && arrProduct[i][j].price <= 3000000000) {
                    arrPrice[0].push(arrProduct[i][j])
                }
            }
        }
        display(arrPrice);
    } else if (selectProduct.value ==="medium") {
        arrPrice[0]=[]
        for (let i = 0; i < arrProduct.length; i++) {
            for (let j = 0; j < arrProduct[i].length; j++) {
                if (arrProduct[i][j].price >= 3000000000 && arrProduct[i][j].price <= 6000000000) {
                    arrPrice[0].push(arrProduct[i][j])
                }
            }
        }
        display(arrPrice)
    } else if (selectProduct.value ==="high") {
        arrPrice[0]=[]
        for (let i = 0; i < arrProduct.length; i++) {
            for (let j = 0; j < arrProduct[i].length; j++) {
                if (arrProduct[i][j].price >= 6000000000 && arrProduct[i][j].price <= 9000000000) {
                    arrPrice[0].push(arrProduct[i][j])
                }
            }
        }
            display(arrPrice)
        } else {
        display(arrProduct)
    }
}



