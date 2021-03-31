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

function resetGame(){
    rest = 20
    restSpan.innerText = rest
    let disk1 = document.getElementById('disk1')
    let disk2 = document.getElementById('disk2')
    let disk3 = document.getElementById('disk3')
    let disk4 = document.getElementById('disk4')
    subBox1.appendChild(disk1)
    subBox1.appendChild(disk2)
    subBox1.appendChild(disk3)
    subBox1.appendChild(disk4)
}

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

function score(){
    let resultDiv = document.getElementById('sub-box3')
    if(resultDiv.childElementCount === 6){
        victory++
        resetGame()
    } else if (rest === 0){
        defeat++
        resetGame()
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
        if (targetDisk.className === 'disco'){
            movingDisk = targetDisk
            event.target.removeChild(movingDisk)
        }
    } else if (targetDisk.dataset.value === undefined) {
        event.currentTarget.appendChild(movingDisk)
        movingDisk = undefined
        rest--
        console.log(rest)
        score()
    } else  {
        if(movingDisk.dataset.value < targetDisk.dataset.value){
        event.currentTarget.appendChild(movingDisk)
        movingDisk = undefined
        rest--
        }
      }
      score()
    }

subBox1.addEventListener('click', moveDisk1)
subBox2.addEventListener('click', moveDisk1)
subBox3.addEventListener('click', moveDisk1)