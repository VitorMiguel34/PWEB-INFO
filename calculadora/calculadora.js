function ver_tabuada(){
    let numero = document.getElementById("numero").value
    if(numero != ""){
    let string;
    document.getElementById("tabela").innerHTML = `<theader>Tabuada do ${numero}<theader>`
    for(let i = 1; i <= 10;i++){
        string = `<tr>${numero} x ${i} = ${numero * i}</tr>`
        document.getElementById("tabela").innerHTML += string
    }
}
}