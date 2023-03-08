const container = document.querySelector('.container')
const body = document.querySelector('body')

let rainbow = false

const gridButton = document.createElement('button')
gridButton.classList.add('grid-button')
gridButton.textContent = 'Make Grid'
body.insertBefore(gridButton, container)

const rainbowButton = document.createElement('button')
rainbowButton.classList.add('rainbow')
rainbowButton.textContent = 'Rainbow'
rainbowButton.style.background = 'lightgrey'
body.insertBefore(rainbowButton, container)

function setRainbow() {
    rainbow = !rainbow
    if (rainbow) {
        console.log('RAINBOW')
        rainbowButton.style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)'
    } else {
        rainbowButton.style.background = 'lightgrey'
    }
}

function changeColor(e) {
    e.target.classList.add('black')
}

function changeColorRainbow(e) {
    let randomRed = Math.floor(Math.random() * 255)
    let randomGreen = Math.floor(Math.random() * 255) 
    let randomBlue = Math.floor(Math.random() * 255)
    e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
}

function makeGrid () {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }

    let dimensions = Number(prompt("How large? (NxN)"))
    if (dimensions > 100) {
        dimensions = 100
    }
    console.log(dimensions)
    for (let i = 0; i < dimensions; i++) {
        for (let j = 0; j < dimensions; j++) {
            let div = document.createElement('div')
            div.classList.add(('square'))
            div.classList.add(`${i+1}-${j+1}`)
            container.appendChild(div)
            div.addEventListener('dragover', (e) => {
                if (rainbow) {
                    changeColorRainbow(e)
                } else {
                    changeColor(e)
                }
            })
            div.addEventListener('dragstart', (e) => {
                if (rainbow) {
                    changeColorRainbow(e)
                } else {
                    changeColor(e)
                }
            })
            div.addEventListener('dragend', (e) => {
                if (rainbow) {
                    changeColorRainbow(e)
                } else {
                    changeColor(e)
                }
            })
            div.addEventListener('dragenter', (e) => {
                if (rainbow) {
                    changeColorRainbow(e)
                } else {
                    changeColor(e)
                }
            })
            div.addEventListener('dragleave', (e) => {
                if (rainbow) {
                    changeColorRainbow(e)
                } else {
                    changeColor(e)
                }
            })
        }
    }
    container.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`
    container.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`
}

rainbowButton.addEventListener('click', setRainbow)
gridButton.addEventListener('click', makeGrid)