import { hslToHex } from "./hslToHex.js"
import { hexToRgb } from "./hslToRgb.js"

const colorPreview = document.querySelector('.preview')
const colorSlider = document.getElementById('hue-slider')
const brightnessSlider = document.getElementById('brightness-slider')
const contrastSlider = document.getElementById('contrast-slider')
const opacitySlider = document.getElementById('opacity-slider')

colorSlider.addEventListener('input', atualizarCor)
brightnessSlider.addEventListener('input', atualizarCor)
contrastSlider.addEventListener('input', atualizarCor)
opacitySlider.addEventListener('input', atualizarCor)


const hueValue = document.getElementById('hue-value')
const contrastValue = document.getElementById('contrast-value')
const brightnessValue = document.getElementById('brightness-value')
const opacityValue = document.getElementById('opacity-value')


function atualizarCor () {
    let color = colorSlider.value
    let brightness = brightnessSlider.value
    let contrast = contrastSlider.value
    let opacity = opacitySlider.value

    let hsl = `hsl(${color}, ${contrast}%, ${brightness}%, ${opacity})`
    let hex = hslToHex(color, contrast, brightness)
    let rgb = hexToRgb(hex)



    colorPreview.style.backgroundColor = hsl
    colorPreview.style.boxShadow = `0px 0px 53px 13px ${hsl}`
    
    hueValue.innerHTML = color
    contrastValue.innerHTML = contrast
    brightnessValue.innerHTML = brightness
    opacityValue.innerHTML = opacity


    const boxBrightness = document.getElementById('box-input-brightness')
    const boxContrast = document.getElementById('box-input-constrast')
    const boxHue = document.getElementById('box-input-hue')
    const boxOpacity = document.getElementById('box-input-opacity')


    boxHue.style.background = `linear-gradient(to right, 
        hsl(0, ${contrast}%, ${brightness}%, ${opacity}),
        hsl(60, ${contrast}%, ${brightness}%, ${opacity}), 
        hsl(120, ${contrast}%, ${brightness}%, ${opacity}), 
        hsl(180, ${contrast}%, ${brightness}%, ${opacity}), 
        hsl(240, ${contrast}%, ${brightness}%, ${opacity}), 
        hsl(300, ${contrast}%, ${brightness}%, ${opacity}), 
        hsl(360, ${contrast}%, ${brightness}%, ${opacity}))`
        
    boxContrast.style.background = `linear-gradient(to right, hsl(0, 0%, ${brightness}%, ${opacity}), hsl(${color}, 100%, ${brightness}%, ${opacity}))`
    boxBrightness.style.background = `linear-gradient(to right, hsl(0, 0%, 0%, ${opacity}), hsl(${color}, ${contrast}%, 50% ,${opacity}) , hsl(0, 100%, 100%, ${opacity}))`
    boxOpacity.style.background = `linear-gradient(90deg ,hsla(0, 100%, 100%, 0) 0%, hsl(${color}, ${contrast}%, ${brightness}%, 1) 100% )`


    //
    const boxHex = document.getElementById('colors-hex')
    const boxRgb = document.getElementById('colors-rgb')
    const boxHsl = document.getElementById('colors-hsl')

    boxRgb.innerHTML = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})` 
    boxHex.innerHTML = hex
    boxHsl.innerHTML = hsl
}

atualizarCor()
// Ouvinte de evento para o evento 'wheel'
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

opacitySlider.addEventListener('wheel', function(event) {
    event.preventDefault()

    let delta = Math.sign(event.deltaY)

    if (delta > 0) {
        opacitySlider.value = parseInt(opacitySlider.value) - 1
    } else if (delta < 0) {
        opacitySlider.value = parseInt(opacitySlider.value) + 1
    }
    atualizarCor()
})
