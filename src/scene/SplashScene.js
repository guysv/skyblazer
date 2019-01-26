import Phaser from 'phaser'
import config from '../config'

export default class extends Phaser.Scene {

  constructor ()
  {
    super({ key: 'SplashScene' });
  }

  preload ()
  {
    // Load needed assets
    this.load.audio('main-tune', ['assets/tune.ogg'])
  }

  create ()
  {
    this.sound.add('main-tune').play()
  }
}