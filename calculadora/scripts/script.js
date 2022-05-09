function calc(n1, n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    selector = document.getElementById("selector").value
    
    switch(selector){
        case '+':
            cal = (n1 + n2)
            document.getElementById("res").innerHTML = `O resultado da soma entre ${n1} + ${n2} é = ${cal}`
            break
        case '-':
            cal = (n1 - n2)
            document.getElementById("res").innerHTML = `O resultado da subtração entre ${n1} - ${n2} é = ${cal}`
            break
        case '*':
            cal = (n1 * n2)
            document.getElementById("res").innerHTML = `O resultado da multiplicação entre ${n1} x ${n2} é = ${cal}`
            break
        case '/':
            cal = (n1 / n2)
            document.getElementById("res").innerHTML = `O resultado da divisão entre ${n1} / ${n2} é = ${cal}`
            break
    }
}