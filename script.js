const box = document.getElementById('box')

const restSpan = document.getElementById('rest')
const victorySpan = document.getElementById('victory')
const defeatSpan = document.getElementById('defeat')

for (let i = 1; i <= 3; i++){
    let subBox = document.createElement('div')
    subBox.setAttribute('id', `sub-box${i}`)
    let pilar = document.createElement('div')
    pilar.className = 'pilar'
    let base = document.createElement('div')
    base.className = 'base'
    subBox.appendChild(pilar)
    subBox.appendChild(base)
    box.appendChild(subBox)
}

const subBox1 = document.getElementById('sub-box1')
const subBox2 = document.getElementById('sub-box2')
const subBox3 = document.getElementById('sub-box3')

let x = 4

for (let i = 0; i < x; i++){
    let disk = document.createElement('div')
    disk.setAttribute('id', `disk${i + 1}`)
    disk.className = 'disco'
    disk.dataset.value = x - i
    subBox1.appendChild(disk)
}



// handler de clique nos discos
// 1 - quando clicar na div sub-box
// 2 - mover o disco acima
// 3 - mudar o estado da variável de controle
// 4 - quando clicar em outra sub-box
// 5 - verificar se tem algum disco menor ou maior (Math.min com width?)
// 6 - fazer verificação de aceitação
// 7 - depositar o disco se possível
// 8 - mudar o estado da variável de controle novamente
// 9 - reduzir o numero de jogadas


// 1 - evitar que os dos iFs sejam executados simultaneamente
let movingDisk = undefined

function moveDisk1(event) {
    if (!movingDisk){
        let discoDiv = event.target.lastElementChild
        if (discoDiv.className === 'disco'){
            movingDisk = discoDiv
        }
    } else {
        event.target.appendChild(movingDisk)
        movingDisk = undefined
    }
}

subBox1.addEventListener('click', moveDisk1)
subBox2.addEventListener('click', moveDisk1)
subBox3.addEventListener('click', moveDisk1)


 
//a logica da condicao de vitoria
//na hora de clicar no destino
//verifica se o lastelement atual de onde voce ta clicando
//tem o value maior ou menor que o que voce ta jogando
//evt.target.dataset.value < mydisk.dataset.value
//assim voce verifica se o movimento e possivel
//e pra saber se ganhou
//verifica se o arr.length da torre é 4
//entao verifica se a ultima torre tem 4 elementos
//no caso 6 contando a base e o pilar

let rest = 20
let victory = 0
let defeat = 0

function score(){
    restSpan.innerText = rest
    victorySpan.innerText = victory
    defeatSpan.innerText = defeat
}
score()