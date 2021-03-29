const box = document.getElementById('box')

let subBox1 = document.createElement('div')
subBox1.className = 'sub-box1'
let pilar1 = document.createElement('div')
pilar1.className = 'pilar'
let base1 = document.createElement('div')
base1.className = 'base'
subBox1.appendChild(pilar1)
subBox1.appendChild(base1)
box.appendChild(subBox1)

let subBox2 = document.createElement('div')
subBox2.className = 'sub-box2'
let pilar2 = document.createElement('div')
pilar2.className = 'pilar'
let base2 = document.createElement('div')
base2.className = 'base'
subBox2.appendChild(pilar2)
subBox2.appendChild(base2)
box.appendChild(subBox2)

let subBox3 = document.createElement('div')
subBox3.className = 'sub-box3'
let pilar3 = document.createElement('div')
pilar3.className = 'pilar'
let base3 = document.createElement('div')
base3.className = 'base'
subBox3.appendChild(pilar3)
subBox3.appendChild(base3)
box.appendChild(subBox3)
