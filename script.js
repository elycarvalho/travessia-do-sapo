veiculos1 = document.querySelector('.veiculos1')
veiculos2 = document.querySelector('.veiculos2')
veiculos3 = document.querySelector('.veiculos3')
veiculos4 = document.querySelector('.veiculos4')
character = document.querySelector('.character')
let posicao = 95
let posicao2 = 95
let posicao3 = 95
let posicao4 = 95

function moveVeiculos1() {
    veiculos1.style.left = `${posicao}%`
    posicao--
    if(posicao < -80) {
    	posicao = 95
    } 
    console.log('pos 1 ' + posicao)
    if(posicao > -25 && posicao < 18 && upDown > 366 && upDown < 456) {
        alert('atropelou')
    }
}

function moveVeiculos2() {
    veiculos2.style.left = `${posicao2}%`
    posicao2--
    if(posicao2 < -80) {
        posicao2 = 95
    } 
    console.log('pos 2 ' + posicao2)
    if(posicao2 > -25 && posicao2 < 18 && upDown > 260 && upDown < 300) {
        alert('atropelou')
    }
}

function moveVeiculos3() {
    veiculos3.style.right = `${posicao3}%`
    posicao3--
    if(posicao3 < -80) {
        posicao3 = 95
    } 
    console.log('pos 3 ' + posicao3)
    console.log('updown ' + upDown)
    if(posicao3 > 25 && posicao3 < 80 && upDown > 148 && upDown < 234) {
        alert('atropelou')
    }
}

function moveVeiculos4() {
    veiculos4.style.right = `${posicao4}%`
    posicao4--
    if(posicao4 < -80) {
        posicao4 = 95
    } 
    if(posicao4 > 23 && posicao4 < 80 && upDown > 40 && upDown < 126) {
        alert('atropelou')
    }
}

intervalo = setInterval(moveVeiculos1, 10)
intervalo2 = setInterval(moveVeiculos2, 13)
intervalo3 = setInterval(moveVeiculos3, 10)
intervalo4 = setInterval(moveVeiculos4, 13) 

let upDown = 0 
let leftRight = 0

document.addEventListener('keydown', (e) => {
    switch(e.key){
      case 'ArrowUp':
        upDown = upDown + 6
        character.style.bottom = upDown + 'px'
        console.log(upDown)
        break

    case 'ArrowDown':
        upDown = upDown - 6
        character.style.bottom = upDown + 'px'
        break

    case 'Enter':
        clearInterval(intervalo)
        clearInterval(intervalo2)
        clearInterval(intervalo3)
        clearInterval(intervalo4)
        console.log('enter')
        break
    }

    if(upDown < 0) {upDown = 0}
    if(upDown > 475){
        alert("Parabéns! Você levou o sapo até o lago!")
    }
})

function para() {
document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        clearInterval(intervalo)
    }
})
}
