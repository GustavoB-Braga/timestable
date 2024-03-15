function times(){
    let number1= window.document.getElementById('number1')
    let result= window.document.getElementById('res')

    if(number1.value.length == 0){
        window.alert('Insira o valor')
    }else{
        z = Number(number1.value)
        result.innerHTML = ""
        for(let c = 0; c <=10; c++){
        result.innerHTML += `<br>`+`<p>${z} X ${c} = ${z*c} </p> `
        
        }

    }
}

