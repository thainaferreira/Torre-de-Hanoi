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

let rest = 20
let victory = 0
let defeat = 0
// let boxVic = document.querySelector('.subBox3').children

function score(){
    if (subBox3.childNodes.length === 6){
        console.log('oi' ,subBox3.childNodes)
        victory++
    }
    if (rest === 0){
        defeat++
    }
    restSpan.innerText = rest
    victorySpan.innerText = victory
    defeatSpan.innerText = defeat
}
score()

let movingDisk = undefined

function moveDisk1(event) {
    let targetDisk = event.currentTarget.lastElementChild
    if (!movingDisk){
        let discoDiv = event.target.lastElementChild
        if (discoDiv.className === 'disco'){
            movingDisk = discoDiv
            event.target.removeChild(movingDisk)
        }
    } else if(targetDisk.dataset.value === undefined) {
        event.target.appendChild(movingDisk)
        movingDisk = undefined
        rest--
        score()
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