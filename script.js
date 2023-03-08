const body = document.querySelector('body')
const container = document.querySelector('.container')
const rainbowButton = document.querySelector('.rainbow')
const eraserButton = document.querySelector('.eraser')
const clearButton = document.querySelector('.clear')
const grid16 = document.querySelector('.small-grid')
const grid32 = document.querySelector('.medium-grid')
const grid64 = document.querySelector('.large-grid')
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

let gridSize = 32 

let rainbow = false
let erase = false
let mouseDown = false

document.body.onmousedown = () => mouseDown = true
document.body.onmouseup = () => mouseDown = false

grid16.addEventListener('click', () => {
    grid16.style.backgroundColor = 'black'
    grid16.style.color = 'white'
    grid32.style.backgroundColor = 'darksalmon'
    grid32.style.color = 'black'
    grid64.style.backgroundColor = 'darksalmon'
    grid64.style.color = 'black'
    gridSize = 16
    makeGrid(gridSize)
})

grid32.addEventListener('click', () => {
    grid32.style.backgroundColor = 'black'
    grid32.style.color = 'white'
    grid16.style.backgroundColor = 'darksalmon'
    grid16.style.color = 'black'
    grid64.style.backgroundColor = 'darksalmon'
    grid64.style.color = 'black'
    gridSize = 32
    makeGrid(gridSize)
})

grid64.addEventListener('click', () => {
    grid64.style.backgroundColor = 'black'
    grid64.style.color = 'white'
    grid32.style.backgroundColor = 'darksalmon'
    grid32.style.color = 'black'
    grid16.style.backgroundColor = 'darksalmon'
    grid16.style.color = 'black'
    gridSize = 64
    makeGrid(gridSize)
})


rainbowButton.addEventListener('click', () => {
    if (!rainbow && !erase) {
        rainbow = !rainbow
        rainbowButton.style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)'
    } else if (!rainbow && erase) {
        erase = !erase
        eraserButton.style.backgroundColor = 'darksalmon'
        eraserButton.style.color = 'black'

        rainbow = !rainbow
        rainbowButton.style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)'
    } else if (rainbow && !erase) {
        rainbow = !rainbow
        rainbowButton.style.background = 'darksalmon'
    }
})

eraserButton.addEventListener('click', () => {
    if (!rainbow && !erase) {
        erase = !erase
        eraserButton.style.backgroundColor = 'black'
        eraserButton.style.color = 'white'
    } else if (!rainbow && erase) {
        erase = !erase
        eraserButton.style.backgroundColor = 'darksalmon'
        eraserButton.style.color = 'black'

    } else if (rainbow && !erase) {
        erase = !erase
        eraserButton.style.backgroundColor = 'black'
        eraserButton.style.color = 'white'

        rainbow = !rainbow
        rainbowButton.style.background = 'darksalmon'
    }
})

clearButton.addEventListener('click', () => {
    makeGrid(gridSize)
})

makeGrid(gridSize)

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return 
    if (erase) {
        e.target.style.backgroundColor = 'white'
    } else {
        e.target.style.backgroundColor = 'black'
    }
}

function changeColorRainbow(e) {
    if (e.type === 'mouseover' && !mouseDown) return 
    // RANDOM RGB VALUE
    // let randomRed = Math.floor(Math.random() * 255)
    // let randomGreen = Math.floor(Math.random() * 255) 
    // let randomBlue = Math.floor(Math.random() * 255)
    // e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`

    // RANDOM ROYGBIV COLOR
    let randomColor = Math.floor(Math.random() * 7)
    e.target.style.backgroundColor = colors[randomColor] 
}

function makeGrid (size) {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            let div = document.createElement('div')
            div.classList.add(('square'))
            div.classList.add(`${i+1}-${j+1}`)
            container.appendChild(div)
            div.addEventListener('mousedown', (e) => {
                e.preventDefault()
                if (rainbow) {
                    changeColorRainbow(e)
                } else {
                    changeColor(e)
                }
            })
            div.addEventListener('mouseover', (e) => {
                e.preventDefault()
                if (rainbow) {
                    changeColorRainbow(e)
                } else {
                    changeColor(e)
                }
            })
        }
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

