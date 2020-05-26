import GameManager from './managers/GameManager.js'
import Renderer from './renderer.js'


const DOM = new Renderer()
const gameManager = new GameManager(DOM)

gameManager.setMenu()


export default gameManager