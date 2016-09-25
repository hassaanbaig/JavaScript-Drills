function Add()
{
    var a = parseInt(prompt("Enter 1st Value"));
    document.getElementById("AddOp1").innerHTML = a;
    var b = parseInt (prompt("Enter 2nd Value"));
    document.getElementById("AddOp2").innerHTML = b;

    var c = a+b;
    document.getElementById("AddRes").innerHTML= c;

}

function Sub()
{
    var a = parseInt(prompt("Enter 1st Value"));
    document.getElementById("SubOp1").innerHTML = a;
    var b = parseInt (prompt("Enter 2nd Value"));
    document.getElementById("SubOp2").innerHTML = b;

    var c = a-b;
    document.getElementById("SubRes").innerHTML= c;

}

function Mul()
{
    var a =  parseInt(prompt("Enter 1st Operand"));
    document.getElementById("MulOp1").innerHTML= a;
    var b = parseInt(prompt("Enter 2nd Operand"));
    document.getElementById("MulOp2").innerHTML = b;

    var c = a*b;
    document.getElementById("MulRes").innerHTML = c;
}

function Div()
{
    var a =  parseInt(prompt("Enter 1st Operand"));
    document.getElementById("DivOp1").innerHTML= a;
    var b = parseInt(prompt("Enter 2nd Operand"));
    document.getElementById("DivOp2").innerHTML = b;

    var c = a/b;
    document.getElementById("DivRes").innerHTML = c;
}


function Mod()
{
    var a =  parseInt(prompt("Enter 1st Operand"));
    document.getElementById("ModOp1").innerHTML= a;
    var b = parseInt(prompt("Enter 2nd Operand"));
    document.getElementById("ModOp2").innerHTML = b;

    var c = a%b;
    document.getElementById("ModRes").innerHTML = c;
}