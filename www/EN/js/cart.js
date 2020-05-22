var cart = {};
function loadCart() {
    //проверяю есть ли в localStorage запись cart
    if (localStorage.getItem('cart')) {
        // если есть - расшифпровываю и записываю в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
            showCart();
        }
        else {
            $('.main-cart').html('Cart is empty!');
        }
    }

    function showCart() {
        //вывод корзины
    if (!isEmpty(cart)) {
        $('.main-cart').html('Cart is empty!');
    }
    else {
        $.getJSON('goods.json', function (data) {
            var goods = data;
            var out = '';
            for (var id in cart) {
                out += `<button data-id="${id}" class="del-goods">x</button>`;
                out += `<img src="img\\${goods[id].img}">`;
                out += `<br>`;
                out += ` ${goods[id].name}`;
                out += `<br>`;
                out += ` ${goods[id].author}`;
                out += `<br>`;
                out += ` ${cart[id]} piece`;
                out += `<br>`;
            }
            $('.main-cart').html(out);
            $('.del-goods').on('click', delGoods);
        });
    }
}

function delGoods(){
    //удаляем товар из корзины
    var id = $(this).attr('data-id');
    delete cart[id];
    saveCart();
    showCart();
}

function saveCart() {
    //сохранение корзины в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));//корзину в строку
}

function isEmpty(object) {
    //проверка корзины на пустоту
    for (var key in object)
    if (object.hasOwnProperty(key)) return true;
    return false;
}

    $(document).ready(function () {
        loadCart();
    });