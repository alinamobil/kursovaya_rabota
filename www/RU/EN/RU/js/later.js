function init() {
    //вычитуем файл goods.json
    $.getJSON("goods.json", goodsOut);
}
function goodsOut(data) {
    //вывод на страницу
    console.log(data);
    var out='';
    var later = {};
    if(localStorage.getItem('later')){
        later = JSON.parse(localStorage.getItem('later'));
        for (var key in later){
            out +='<div class="cart">';
            out +=`<button>X</button>`;
            out +=`<img src="img/${data[key].img}" alt="">`;
            out +=`<h2 class="name">${data[key].name}</h2>`;
            out +=`<p class="author">${data[key].author}</p>`;
            out +=`<div class="cost">${data[key].cost} RUB</div>`;
            out +=`<a href="goods.html#${key}">LEARN MORE</a>`;
            out +=`</div>`;
        }
        $('.goods-out').html(out);
    }
    else {
        $('.goods-out').html('<p>Добавте книгу!</p>');
    }

}


$(document).ready(function () {
    init();

});