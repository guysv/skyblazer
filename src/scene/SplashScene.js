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
    this.load.audio('main-tune', ['assets/tune.ogg'], {volume: 0.5})
    this.load.audio('voice', ['assets/voice.ogg'])
    this.load.spritesheet('splash', 'assets/splash.png', { frameWidth: 320, frameHeight: 200})
  }

  create ()
  {
    var anim = this.anims.create({
      'key': 'splash-anim',
      'frames': this.anims.generateFrameNumbers('splash'),
      'frameRate': 8,
    })

    var sprite = this.add.sprite(config.width / 2, config.height / 2, 'splash').setScale(4);

    sprite.anims.load('splash-anim');
    sprite.anims.play('splash-anim');
    

    var scene = this
    this.input.keyboard.on('keydown', function (e) {
      scene.sound.add('voice').play()
      scene.scene.start('MenuScene')
    })

    this.sound.add('main-tune').play()
  }
}