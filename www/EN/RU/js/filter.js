
$(function () {

    let filter = $("[data-filter]");
    filter.on("click", function (event) {
        event.preventDefault();
        let category = $(this).data('filter');

            if(category == 'all'){
            $("[data-category]").removeClass("hide");
        }
        else {
            $("[data-category]").each(function () {

                let workCategory = $(this).data('category');
                //console.log(workCategory);
                if (workCategory != category) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });
});