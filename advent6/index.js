const arrData = [4,1,1,4,1,1,1,1,1,1,1,1,3,4,1,1,1,3,1,3,1,1,1,1,1,1,1,1,1,3,1,3,1,1,1,5,1,2,1,1,5,3,4,2,1,1,4,1,1,5,1,1,5,5,1,1,5,2,1,4,1,2,1,4,5,4,1,1,1,1,3,1,1,1,4,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,2,1,1,1,1,1,1,1,2,4,4,1,1,3,1,3,2,4,3,1,1,1,1,1,2,1,1,1,1,2,5,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,4,1,5,1,3,1,1,1,1,1,5,1,1,1,3,1,2,1,2,1,3,4,5,1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,3,1,1,3,1,1,4,1,1,1,1,1,2,1,1,1,1,3,2,1,1,1,4,2,1,1,1,4,1,1,2,3,1,4,1,5,1,1,1,2,1,5,3,3,3,1,5,3,1,1,1,1,1,1,1,1,4,5,3,1,1,5,1,1,1,4,1,1,5,1,2,3,4,2,1,5,2,1,2,5,1,1,1,1,4,1,2,1,1,1,2,5,1,1,5,1,1,1,3,2,4,1,3,1,1,2,1,5,1,3,4,4,2,2,1,1,1,1,5,1,5,2];
let groupedData = [];
let amount0 = 0;
let amount1 = 0;
let amount2 = 0;
let amount3 = 0;
let amount4 = 0;
let amount5 = 0;
let amount6 = 0;
let amount7 = 0;
let amount8 = 0;

function growPopBetter()
{
    let tempAmount0 = amount1;
    let tempAmount1 = amount2;
    let tempAmount2 = amount3;
    let tempAmount3 = amount4;
    let tempAmount4 = amount5;
    let tempAmount5 = amount6;
    let tempAmount6 = amount7 + amount0;
    let tempAmount7 = amount8;
    let tempAmount8 = amount0;

    amount0 = tempAmount0;
    amount1 = tempAmount1;
    amount2 = tempAmount2;
    amount3 = tempAmount3;
    amount4 = tempAmount4;
    amount5 = tempAmount5;
    amount6 = tempAmount6;
    amount7 = tempAmount7;
    amount8 = tempAmount8;
}

function group()
{
    for (let i = 0; i < arrData.length; i++)
    {
        switch (arrData[i])
        {
            case 1 :
                amount1++;
                break
            case 2 :
                amount2++;
                break
            case 3 :
                amount3++;
                break
            case 4 :
                amount4++;
                break
            case 5 :
                amount5++;
                break
        }
    }
}















function growPop()
{
    let popToAdd = 0;

    for (let i = 0; i < arrData.length; i++)
    {
        if(arrData[i] > 0)
        {
            arrData[i]--;
        }
        else if(arrData[i] === 0)
        {
            arrData[i] = 6;
            popToAdd++;
        }
    }

    for (let i = 0; i < popToAdd; i++)
    {
        arrData.push(8);
    }
}

group();

for (let i = 0; i < 256; i++)
{
    growPopBetter();
    console.log(
    amount0 +
    amount1 +
    amount2 +
    amount3 +
    amount4 +
    amount5 +
    amount6 +
    amount7 +
    amount8
    );
}

