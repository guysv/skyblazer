import Phaser from 'phaser'
import config from '../config'
import _ from 'lodash'

export default class extends Phaser.Scene {

  constructor ()
  {
    super({ key: 'CreditsScene' });
  }

  preload ()
  {
    // Load needed assets
    this.load.bitmapFont('dos-font', 'assets/dosfont.png', 'assets/dosfont.xml');
  }

  create ()
  {
    var scene = this

    scene.time.addEvent({delay: 2000, callback: function() {
      var entry = scene.addText(420, config.height, credits[credits.length - timer.repeatCount])
      var count = timer.repeatCount
      scene.tweens.add({
        targets: entry,
        
        duration: 20000,
        onComplete: function () {
          if (!count) {
            scene.finish()
          }
        }
      });
    }})
  }

  addText(x, y, text, color=0xffffff)
  {
    var text = this.add.bitmapText(x, y, "dos-font", text)
    text.setFontSize(64)
    text.tint = color
    return text
  }
}