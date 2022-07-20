$(function()
{
     let num=[0,0,0,0,0,0,0,0,0,0];
     let op=["","","","","","","","",""];
    var display = $('#screen');
    display.val(0);
    let flag=0;

    $('button').click(function inputData()
    {
        wh(display.val() != 0)    //take input add value 
        display.val(display.val() + $(this).val());
       
       display.val($(this).val()); //display finalized value 
       
        if(!(Number.isInteger(display.val())))
        {
        op[flag] = ($(this).val());   //operator input
        num[flag] = display.val($(this).val()); //take num out for calculattions
        }
    });
      flag++;                                 //increase flag value
       if(op != "=")                         //not pressed equal to go back
        inputData();

        switch(op[flag-1])
        {
            case "*":
              result= num[0]*num[1];
                break;
            case "-":
               result= num[0]-num[1];
                break;
            case "+":
               result= num[0]+num[1];
                break;
            case "/":
                result= num[0]/num[1];
                break;
            case "**":
                result= num[0]**num[1];
                break;
            default :                 //user pressed =equalto atlast
            result=num[0]

        }
    });
$("#clear").click(reset());