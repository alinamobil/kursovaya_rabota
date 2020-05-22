$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
        $('#result').html('');
        $('#state').val('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField, "i");
        $.getJSON('goods.json', function(data) {
            $.each(data, function(key, value){
                if (value.name.search(expression) != -1 || value.author.search(expression) != -1 || value.category.search(expression) != -1)
                {
                    $('#result').append('<div class="cart link-class">' +
                        '<img src="img/'+value.img+'"/> ' +
                        '<h2 class="name">'+value.name+'</h2>' +
                        '<p class="author">'+value.author+'</p>' +
                        '<p class="category">'+value.category+'</p>' +
                        '<div class="cost">'+value.cost+' RUB</div></div>');
                }
            });
        });
    });

    $('#result').on('click', 'li', function() {
        var click_text = $(this).text().split('|');
        $('#search').val($.trim(click_text[0]));
        $("#result").html('');
    });
});