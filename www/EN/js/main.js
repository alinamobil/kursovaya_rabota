var cart = {}; // корзина

function init() {
    //вычитуем файл goods.json
    $.getJSON("goods.json", goodsOut);
}
function goodsOut(data) {
    //вывод на страницу
    console.log(data);
    var out='';
    // for (var key in data){
    //     out +='<h2 class="name">'+data[key].name+'</h2>';
    //     out +='<p class="author">'+data[key].author+'</p>';
    //     out +='<img src="img/'+data[key].img+'" alt="">';
    //     out +='<div class="cost">'+data[key].cost+' RUB</div>';
    //     out +='<button class="add-to-cart">BUY</button>';
    //     out +='</div>';
        //------------------
        for (var key in data){
            out +='<div class="cart">';
            out +=`<button class="later" data-id="${key}">&hearts;</button>`;
            out +=`<img src="img/${data[key].img}" alt="">`;
            out +=`<h2 class="name"> ${data[key].name}</h2>`;
            out +=`<p class="author">${data[key].author}</p>`;
            out +=`<p class="category">${data[key].category}</p>`;
            out +=`<hr>`;
            out +=`<div class="cost">${data[key].cost} RUB</div>`;
            out +=`<button class="add-to-cart" data-id="${key}">BUY</button>`;
            out +=`</div>`;
    }
        $('.goods-out').html(out);
        $('.add-to-cart').on('click', addToCart);
    $('.later').on('click', addToLater);
}

function addToLater() {
    //добавляю торав в желания
    var later ={};
    if(localStorage.getItem('later')){
        // если есть - расшифпровываю и записываю в переменную cart
        later = JSON.parse(localStorage.getItem('later'));
    }
    alert('Add to Wishes!');
    var id = $(this).attr('data-id');
    later[id] =1;
    localStorage.setItem('later', JSON.stringify(later));
}
function addToCart(){
    //добавляет товар в корзину
    var id = $(this).attr('data-id');
    //console.log(id);
    if(cart[id]==undefined){
        cart[id] = 1; //если в карзине нет товара - делаем равным единице
    }
    else {
        cart[id]++; // если такой товар есть - увеличиваем на единицу
    }
    showMiniCart();
    saveCart();
}
function saveCart() {
    //сохранение корзины в localStorage
    localStorage.setItem('cart', JSON.stringify(cart)); //корзину в строку
}
function showMiniCart(){
    //показывает мини корзину
    var out="";
    for (var key in cart){
        out += key +'---' + cart[key]+'<br>';
    }
    $('.mini-cart').html(out);
}
function loadCart(){
    //проверяю есть ли в localStorage запись cart
    if(localStorage.getItem('cart')){
        // если есть - расшифпровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
        showMiniCart();
    }
}

$(document).ready(function () {
    init();
    loadCart();
});