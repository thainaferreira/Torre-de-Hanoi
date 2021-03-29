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

let diskOrange = document.createElement('div')
diskOrange.setAttribute('id', 'diskOrange')
let diskGreen = document.createElement('div')
diskGreen.setAttribute('id', 'diskGreen')
let diskBlue = document.createElement('div')
diskBlue.setAttribute('id', 'diskBlue')
let diskRed = document.createElement('div')
diskRed.setAttribute('id', 'diskRed')

subBox1.appendChild(diskOrange)
subBox1.appendChild(diskGreen)
subBox1.appendChild(diskBlue)
subBox1.appendChild(diskRed)