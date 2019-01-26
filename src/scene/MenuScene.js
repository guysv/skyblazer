import Phaser from 'phaser'
import config from '../config'

export default class extends Phaser.Scene {
  
  constructor ()
  {
    super({ key: 'MenuScene' });
  }

  preload ()
  {
    // Load needed assets
    this.load.image('title-bg', 'assets/title-placeholder.png')
    this.load.image('menu-bg', 'assets/MenuBG.png')
    this.load.image('start-btn', 'assets/Start.png')
    this.load.image('manual-btn', 'assets/Manual.png')
    this.load.image('credits-btn', 'assets/Credits.png')
    this.load.image('dot-ui', 'assets/Dot.png')
  }

  create ()
  {
    this.add.image(config.width / 2, config.height / 2, 'title-bg')
    this.add.image(400, 400, 'menu-bg')
  }
}