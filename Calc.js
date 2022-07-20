let num={0,0};

$(function()
{
    var display = $('#screen');
    display.val(0);
    let flag=0;

    $('button').click(function inputData()
    {
        if(display.val() != 0)
        {
            display.val(display.val() + $(this).val());
        }
        else
        {
            display.val($(this).val());
        }
        num[flag] = $(this).val();

        if(!(Number.isInteger(display.val())))
        {
        
        
        }
}
);
    
    }
    );

$("#clear").click(reset());