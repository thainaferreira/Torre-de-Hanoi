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
    let targetDisk = event.currentTarget.lastElementChild
    if (!movingDisk){
        let discoDiv = event.target.lastElementChild
        console.log('oi' , movingDisk)
        if (discoDiv.className === 'disco'){
            movingDisk = discoDiv
            event.target.removeChild(movingDisk)
        }
    } else if(targetDisk.dataset.value === undefined) {
        event.target.appendChild(movingDisk)
        movingDisk = undefined
    } else  {
        if(movingDisk.dataset.value < targetDisk.dataset.value){
        event.target.appendChild(movingDisk)
        movingDisk = undefined
        }
        
    } 
    
}

subBox1.addEventListener('click', moveDisk1)
subBox2.addEventListener('click', moveDisk1)
subBox3.addEventListener('click', moveDisk1)

console.log(disk1.dataset.value)