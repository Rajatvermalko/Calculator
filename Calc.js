$(function () {
    let num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let op = ["", "", "", "", "", "", "", "", ""];
    let display = $('#screen');
    let flag = 0,
        op2 = 0,
        n = 0;
    $('button').click(function inputData() {
        //     if(Number.isInteger(display.val()))
        //     {
        // n=$(this).val();
        // temp= display.val((display.val()*10)+ n);
        //     }
        //     else{
        //         num[flag]=temp;
        //         flag+=1;
        //         op[op2]=$(this).val();
        //     }
        if ((Number.isInteger(display.val()))) {
            display.val((display.val() * 10) + $(this).val());
            display.val($(this).val()); //display finalized value 
        } else {
            op[flag] = ($(this).val()); //operator input
            num[flag] = display.val($(this).val()); //take num out for calculattions
        }
    }); //increase flag value

    if (op != "=") //not pressed equal to go back
        inputData();

    switch (op[flag - 1]) {
        case "*":
            result = num[0] * num[1];
            break;
        case "-":
            result = num[0] - num[1];
            break;
        case "+":
            result = num[0] + num[1];
            break;
        case "/":
            result = num[0] / num[1];
            break;
        case "**":
            result = num[0] ** num[1];
            break;
        default: //user pressed =equalto atlast
            result = num[0]

    }
});



$("#clear").click(reset());