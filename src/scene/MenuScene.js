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
    this.load.image('title-bg', 'assets/title.png')
    this.load.image('menu-bg', 'assets/MenuBG.png')
    this.load.image('start-btn', 'assets/Start.png')
    this.load.image('manual-btn', 'assets/Manual.png')
    this.load.image('credits-btn', 'assets/Credits.png')
    this.load.image('dot-ui', 'assets/Dot.png')
  }

  create ()
  {
    this.add.image(config.width / 2, config.height / 2, 'title-bg').setScale(4)
    this.add.image(config.width / 2, config.height * 3 / 4, 'menu-bg')
    this.add.image(config.width / 2, config.height * 3 / 4 - 50, 'start-btn')
    this.add.image(config.width / 2, config.height * 3 / 4, 'manual-btn')
    this.add.image(config.width / 2, config.height * 3 / 4 + 50, 'credits-btn')
    this.dot = this.add.image(config.width / 2 - 70, config.height * 3 / 4 - 50, 'dot-ui')
    
    var scene = this
    scene.next_scenes = [
      // Start DRM
      {
        "offset": config.height * 3 / 4 - 50,
        "handler": function() {
          scene.scene.start(config.level_order[0])
        }
      },
      // Fire manual
      // TODO: figure out how to fire manual
      {
        "offset": config.height * 3 / 4,
        "handler": function() {
          window.open("http://karmi.biz/manual").focus()
        }
      },
      // Credits
      {
        "offset": config.height * 3 / 4 + 50,
        "handler": function() {
          scene.scene.start('CreditsScene')
        }
      },
    ]
    scene.dot_i = 0

    this.input.keyboard.on('keydown', function (e) {
      if (e.keyCode === 38 && scene.dot_i > 0)
      {
        // Arrow up
        scene.dot_i--
      }
      else if (e.keyCode === 40 && scene.dot_i < 2)
      {
        // Arrow down
        scene.dot_i++
      }
      else if (e.keyCode === 13)
      {
        // Enter
        scene.next_scenes[scene.dot_i].handler()
      }
      scene.dot.y = scene.next_scenes[scene.dot_i].offset
    })
  }
}