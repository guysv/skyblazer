import PuzzleScene from '../scene/PuzzleScene'
import _ from 'lodash'
import config from '../config'

export default class extends PuzzleScene {

  constructor ()
  {
    super({ key: 'BriefingScene' });
  }

  create ()
  {
    super.create()
    this.add.nineslice(62, 42, 205, 155, 'box-9p', [3, 7, 7, 3])
    this.addText(155, 50, ":DRM:")
    this.addText(270, 240, "SKYBLAZER requires you to pass a copy protection test to play.\n" +
                           "Please make sure you have both parts of the SKYBLAZER Copy\nProtection Manual at hand, available from the main menu.\n\n\n" +
                           "!!! READ ITS INSTRUCTIONS CAREFULLY. !!!\n" + 
                           "It is recommended that you have another person to aid you with\nthis test.\n" +
                           "By starting this video game, you agree that falsifying or\notherwise withholding answers is seen as proof of piracy and\nwill block this game for a period of up to 25 years.\n" +
                           "\n\n\n" +
                           "Press ENTER to continue...")
    // this.addText(450, 260, ":DRM:")

    var scene = this
    this.input.keyboard.on('keydown', function (event) {
      scene.scene.start(config.level_order[0])
    })
  }

}