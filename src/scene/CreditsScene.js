import Phaser from 'phaser'
import config from '../config'
import _ from 'lodash'

var credits = [
  'ALON KARMI: GAME DESIGNER',
  'SAHAR HARUSH: ARTIST',
  'GIL MICHAELI: ARTIST',
  'GUY SVIRY: DEVELOPER',
  'TOM ZYLBERSZTEIN: MUSICIAN',
  '',
  'WRITTEN UNDER 36 HOURS DURING\nTHE GLOBAL GAME JAM 2019',
  '',
  'SPECIAL THANKS TO:',
  '- SG INTERACTIVE',
  '- PHOTONSTORM',
  '- PEOPLE WHO TRIED TO EMBED',
  '  DRM BEFORE THE INTERNET',
  '',
  '',
  '(C) 1989 GAMEPUNKS INC.'
]

export default class extends Phaser.Scene {

  constructor ()
  {
    super({ key: 'CreditsScene' });
  }

  preload ()
  {
    // Load needed assets
    this.load.bitmapFont('dos-font', 'assets/dosfont.png', 'assets/dosfont.xml');
    this.load.image('title-bg', 'assets/title.png')
  }

  create ()
  {
    config.time_left = config.initial_time

    var bg = this.add.image(config.width / 2, config.height / 2, 'title-bg')
    bg.alpha = 0.5
    bg.setScale(4)
    
    var scene = this
    var timer = scene.time.addEvent({delay: 1500, repeat: credits.length, callback: function() {
      var entry = scene.addText(350, config.height, credits[credits.length - timer.repeatCount])
      var count = timer.repeatCount
      scene.tweens.add({
        targets: entry,
        y: -100,
        duration: 20000,
        onComplete: function () {
          if (!count) {
            scene.finish()
          }
        }
      });
    }})

    this.input.keyboard.on('keydown', function (event) {
      if (event.keyCode === 27) {
        scene.finish()
      }
    })
  }

  finish()
  {
    this.scene.start('MenuScene')
  }

  addText(x, y, text, color=0xffff00)
  {
    var text = this.add.bitmapText(x, y, "dos-font", text)
    text.setFontSize(48)
    text.tint = color
    return text
  }
}