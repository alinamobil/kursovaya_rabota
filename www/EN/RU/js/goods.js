
function init() {
    //вычитуем файл goods.json
    $.getJSON("goods.json", goodsOut);
    //var hash = window.location.hash.substring(1);
   // console.log(hash);
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
        out +='<div class="cart-more">';
        out +=`<img src="img/${data[key].img}" alt="">`;
        out +=`<h2 class="name">${data[key].name}</h2>`;
        out +=`<p class="author">${data[key].author}</p>`;
        out +=`<hr>`;
        out+= `<a class="description">${data[key].description}</a>`;
        out +=`</div>`;
    }
    $('.goods-out').html(out);
    $('.later').on('click', addToLater);
}

function addToLater() {
    //добавляю торав в желания
    var later ={};
    if(localStorage.getItem('later')){
        // если есть - расшифпровываю и записываю в переменную cart
        later = JSON.parse(localStorage.getItem('later'));
    }
    alert('Добавьте книгу в желания!');
    var id = $(this).attr('data-id');
    later[id] =1;
    localStorage.setItem('later', JSON.stringify(later));
}


$(document).ready(function () {
    init();
});