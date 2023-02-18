//PRE-ENTREGA1+ALVARENGA
//Funciones
function cuadrado(){
    let a = Number(prompt("Ingrese la medida del lado del cuadrado: "))
    resultado = a*a
    alert("El resultado del área del cuadrado es de: " + resultado)
}
function rectangulo(){
    let b = Number(prompt("Ingrese la base del rectangulo: "))
    let h = Number(prompt("Ingrese la altura del rectangulo: "))
    resultado = b*h
    alert("El resultado del área del rectangulo es de: " + resultado)
}
function triangul(){
    let b = Number(prompt("Ingrese la base del triángulo: "))
    let h = Number(prompt("Ingrese la altura del triángulo: "))
    resultado = (b*h)/2
    alert("El resultado del área del triángulo es de: " + resultado)
}
function parale (){
    let b = Number(prompt("Ingrese la base del paralelogramo: "))
    let h = Number(prompt("Ingrese la altura del paralelogramo: "))
    resultado = b*h
    alert("El resultado del área del paralelogramo es de: " + resultado)
}
function trape(){
    let bMayus = Number(prompt("Ingrese la base mayor del trapecio: "))
    let bMinus = Number(prompt("Ingrese la base menor del trapecio: "))
    let h = Number(prompt("Ingrese la altura del trapecio: "))
    resultado = ((bMayus*bMinus)/2)*h
    alert("El resultado del área del trapecio es de: " + resultado)
}
function circle(){
    let r = Number(prompt("Ingrese el radio del círculo: "))
    resultado = pi*r*2
    alert("El resultado del área del círculo es de: " + resultado)
}
function rombo(){
    let dMayus = Number(prompt("Ingrese la primera diagonal del rombo: "))
    let dMinus = Number(prompt("Ingrese la segunda diagonal del rombo: "))
    resultado = (dMayus*dMinus)/2
    alert("El resultado del área del rombo es de: " + resultado)
}

const pi = 3.1416
let i = 0
let rep = 0
let figura = null
//Base
alert("Calculadora de áreas de figuras geométricas")

while(i!="ESC"){
    figura = prompt("¿Qué figura desea calcular?\n1. Cuadrado.\n2. Rectángulo.\n3. Triángulo\n4. Paralelogramo.\n5. Trapecio.\n6. Círculo.\n7. Rombo.")
    if(figura = "1"){ cuadrado()
    } else if( figura = "2"){
        rectangulo()
    }else if( figura = "3"){
        triangul()
    }else if( figura = "4"){
        parale()
    }else if( figura = "5"){
        trape()
    }else if( figura = "6"){
        circle()
    }else if( figura = "7"){
        rombo()
    }else{
        alert("El número ingresado no es correcto.")
    }
    i = prompt("Si desea continuar ingrese cualquier tecla.\nPara finalizar ingrese 'ESC'").toUpperCase();
    rep++
}
alert("¡Gracias por utilizar la calculadora de áreas!\nHa realizado un total de "+rep+" cálculos.")