//imports modules
import { hslToHex } from "./hslToHex.js"
import { hexToRgb } from "./hslToRgb.js"
import { copy } from "./copy.js"

//preview da cor, inputs range
const colorPreview = document.querySelector('.preview')
const colorSlider = document.getElementById('hue-slider')
const contrastSlider = document.getElementById('contrast-slider')
const brightnessSlider = document.getElementById('brightness-slider')
const opacitySlider = document.getElementById('opacity-slider')

//interação do input
colorSlider.addEventListener('input', atualizarCor)
contrastSlider.addEventListener('input', atualizarCor)
brightnessSlider.addEventListener('input', atualizarCor)
opacitySlider.addEventListener('input', atualizarCor)

atualizarCor()

//função ao ouvir evento
function atualizarCor () {
    //background dos inputs
    const boxHue = document.getElementById('box-input-hue')
    const boxContrast = document.getElementById('box-input-constrast')
    const boxBrightness = document.getElementById('box-input-brightness')
    const boxOpacity = document.getElementById('box-input-opacity')

    //box html para receber os valores dos inputs 
    const hueValue = document.getElementById('hue-value')
    const contrastValue = document.getElementById('contrast-value')
    const brightnessValue = document.getElementById('brightness-value')
    const opacityValue = document.getElementById('opacity-value')

    //variaveis com os valores de cor, brilho, contraste e opacidade
    let color = colorSlider.value
    let contrast = contrastSlider.value
    let brightness = brightnessSlider.value
    let opacity = opacitySlider.value

    //cores em Hsl, Hex e Rgb
    let hsl = `hsl(${color}, ${contrast}%, ${brightness}%, ${opacity})`
    let hex = hslToHex(color, contrast, brightness)
    let rgb = hexToRgb(hex)

    //box com código das cores
    const boxHex = document.getElementById('colors-hex')
    const boxRgb = document.getElementById('colors-rgb')
    const boxHsl = document.getElementById('colors-hsl')

    //alteração da cor do preview
    colorPreview.style.backgroundColor = hsl
    colorPreview.style.boxShadow = `0px 0px 53px 13px ${hsl}`
    
    //alteração da box com os valores
    hueValue.innerHTML = color
    contrastValue.innerHTML = contrast
    brightnessValue.innerHTML = brightness
    opacityValue.innerHTML = opacity

    //background cor
    boxHue.style.background = `linear-gradient(to right, 
        hsl(0, ${contrast}%, ${brightness}%, ${opacity}),
        hsl(60, ${contrast}%, ${brightness}%, ${opacity}), 
        hsl(120, ${contrast}%, ${brightness}%, ${opacity}), 
        hsl(180, ${contrast}%, ${brightness}%, ${opacity}), 
        hsl(240, ${contrast}%, ${brightness}%, ${opacity}), 
        hsl(300, ${contrast}%, ${brightness}%, ${opacity}), 
        hsl(360, ${contrast}%, ${brightness}%, ${opacity}))`
        
    //background contraste
    boxContrast.style.background = `linear-gradient(to right,
        hsl(0, 0%, ${brightness}%, ${opacity}),
        hsl(${color}, 100%, ${brightness}%, ${opacity}))`

    //background brilho
    boxBrightness.style.background = `linear-gradient(to right,
        hsl(0, 0%, 0%, ${opacity}),
        hsl(${color}, ${contrast}%, 50% ,${opacity}) ,
        hsl(0, 100%, 100%, ${opacity}))`
    
    //background opacidade
    boxOpacity.style.background = `linear-gradient(90deg ,
        hsla(0, 100%, 100%, 0) 0%,
        hsl(${color}, ${contrast}%, ${brightness}%, 1) 100% )`

    //box com código das cores recebendo valores atualizado da cor
    boxRgb.innerHTML = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})` 
    boxHex.innerHTML = hex
    boxHsl.innerHTML = hsl
    
    //função de copiar os valores das cores
    copy()
}

// Ouvinte de evento, para usar input com scroll (input de cor)
colorSlider.addEventListener('wheel', function(event) {
    event.preventDefault()

    // Detecta a direção do scroll
    let delta = Math.sign(event.deltaY)

    // Atualiza o valor do input com base na direção do scroll
    if (delta > 0) {
        colorSlider.value = parseInt(colorSlider.value) - 3.6
    } else if (delta < 0) {
        colorSlider.value = parseInt(colorSlider.value) + 3.6
    }
    atualizarCor()
});

// Ouvinte de evento, para usar input com scroll (input de brilho)
brightnessSlider.addEventListener('wheel', function(event) {
    event.preventDefault()

    let delta = Math.sign(event.deltaY)

    if (delta > 0) {
        brightnessSlider.value = parseInt(brightnessSlider.value) - 1
    } else if (delta < 0) {
        brightnessSlider.value = parseInt(brightnessSlider.value) + 1
    }
    atualizarCor()
});

// Ouvinte de evento, para usar input com scroll (input de contraste)
contrastSlider.addEventListener('wheel', function(event) {
    event.preventDefault()

    let delta = Math.sign(event.deltaY)

    if (delta > 0) {
        contrastSlider.value = parseInt(contrastSlider.value) - 1
    } else if (delta < 0) {
        contrastSlider.value = parseInt(contrastSlider.value) + 1
    }
    atualizarCor()
})

// Ouvinte de evento, para usar input com scroll (input de opacidade)
opacitySlider.addEventListener('wheel', function(event) {
    event.preventDefault()

    let delta = Math.sign(event.deltaY)

    if (delta > 0) {
        opacitySlider.value = (parseFloat(opacitySlider.value) - 0.01).toFixed(2)
    } else if (delta < 0) {
        opacitySlider.value = (parseFloat(opacitySlider.value) + 0.01).toFixed(2)
    }
    atualizarCor()
})
