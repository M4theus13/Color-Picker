
export function copy () {
    const codeHex = document.getElementById('colors-hex')
    const codeRgb = document.getElementById('colors-rgb')
    const codeHsl = document.getElementById('colors-hsl')

    let hex = codeHex.innerText
    let rgb = codeRgb.innerHTML
    let hsl = codeHsl.innerHTML

    codeHex.addEventListener('click', function() {
        navigator.clipboard.writeText(hex)
    })

    codeHsl.addEventListener('click', function() {
        navigator.clipboard.writeText(hsl)
    })

    codeRgb.addEventListener('click', function() {
        navigator.clipboard.writeText(rgb)
    })
}
