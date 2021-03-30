const box = document.getElementById('box')


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


let disk1 = document.createElement('div')
disk1.setAttribute('id', 'disk1')
let disk2 = document.createElement('div')
disk2.setAttribute('id', 'disk2')
let disk3 = document.createElement('div')
disk3.setAttribute('id', 'disk3')
let disk4 = document.createElement('div')
disk4.setAttribute('id', 'disk4')

subBox1.appendChild(disk1)
subBox1.appendChild(disk2)
subBox1.appendChild(disk3)
subBox1.appendChild(disk4)



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
let variavelDeControle = true
let movingDisk

function moveDisk1(event) {
    movingDisk = event.target
    if(variavelDeControle === false) {
        subBox1.appendChild(movingDisk)
    }
    variavelDeControle = true
    
    if(variavelDeControle === true) {
        movingDisk = subBox1.removeChild(subBox1.lastElementChild)
        
    }
    variavelDeControle = false
    console.log(variavelDeControle)
   

}

box.addEventListener('click', moveDisk1)
