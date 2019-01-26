import Phaser from 'phaser'
import config from '../config'

export default class extends Phaser.Scene {

  constructor ()
  {
      super({ key: 'GameOver' });
  }

    create ()
    {
      // hack
      var style = {fill: "#ffffff", wordWrap: { width: 350 }}
      this.add.text(100, 100, "GAME OVER", style)

      this.scene.start("MenuScene")
    }
}
