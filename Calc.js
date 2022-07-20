$(function(){
    var display = $('#screen');
    display.val(0);

    $('click', 'button.num', function(){
        if(display.val() != 0) {
            display.val(display.val() + $(this).val());
        } else {
            display.val($(this).val());
        }

    });
});

$("#clear").val(-1);