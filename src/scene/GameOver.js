import Phaser from 'phaser'
import PuzzleScene from '../scene/PuzzleScene'
import config from '../config'

export default class extends PuzzleScene {

  constructor ()
  {
      super({ key: 'GameOver' });
  }

    create ()
    {
      // hack
    super.create()
    this.add.nineslice(250, 170, 820, 520, 'box-9p', [12, 28, 28, 12])
    this.addText(620, 200, ":DRM:")
    this.addText(270, 240, "!!! WARNING !!!\n" +
                           "Illegitimate copy detected.\n"+"In compliance with the terms of service, this software shall\n"+
                           "be locked for 20 years.\n\n"+"PRESS ENTER TO CONTINUE...");

                           var scene = this
                           this.input.keyboard.on('keydown', function (event) {
                           scene.finish()
                          })
                        }
                      
                        finish()
                        {
                          this.scene.start('MenuScene')
                        }
    }
