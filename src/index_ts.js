import './styles.css'
import wp from './assets/webpack.svg'
import png from './assets/pngwing.com.png'

const nums = [1, 2, 3]

const Enum = () => console.log(...nums)

console.log('Hola Webpack')

Enum()
const d = document
const $app = d.getElementById('app')
const $h1 = d.createElement('h1')
// const $imgWP = d.createElement('img')
const $imgPNG = d.createElement('img')
$h1.textContent = 'Hola Webpack 5'
$imgPNG.src = png
$imgPNG.classList.add('imagen')
$app.innerHTML = `<img class="imagen" src="${wp}">`
$app.appendChild($h1)
$app.appendChild($imgWP)
$app.appendChild($imgPNG)
