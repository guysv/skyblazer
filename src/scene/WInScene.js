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
    this.addText(270, 240,
                           "You have bypassed the SKYBLAZER Copy Protection Test. The game will now be made available.\n" +
                           "Looking at these words, you smile with glee and relief.\n" +
                          "You and your friend feel as if you were transported back to your childhood,\n" +
                          "reliving the fond memories of SKYBLAZER, gazing at the open space with sheer awe.\n\n" +
                          "For a few hours, you are back at home.");"

                           var scene = this
                           this.input.keyboard.on('keydown', function (event) {
                           scene.finish()
                          })
                        }
                      
                        finish()
                        {
                          this.scene.start('CreditsScene')
                        }
    }
