function squareP(side){
    return side*4;
}

function squarePCalculate(){
    const numberSide = document.getElementById("squareInput");
    const result = parseInt(numberSide.value);

    const P = squareP(result);
    document.getElementById("squareP").innerText = "Its perimeter is: " +P + "cm";
}

function squareArea(side){
    return side * side;
}

function squareACalculate(){
    const numberSide = document.getElementById("squareInput");
    const result = parseInt(numberSide.value);

    const A = squareArea(result);
    document.getElementById("squareArea").innerText = "Its AREA is: " + A + "cm";
}