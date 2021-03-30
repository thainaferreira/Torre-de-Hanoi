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