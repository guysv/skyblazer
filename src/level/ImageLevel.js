import PuzzleScene from '../scene/PuzzleScene'
import _ from 'lodash'

var image_to_code = {
  0: "501308",
  1: "361030",
  2: "657081",
  3: "986281",
  4: "474901",
  5: "517268",
  6: "893512",
  7: "978188",
}

export default class extends PuzzleScene {

  constructor ()
  {
    super({ key: 'ImageLevel' });
  }

  create ()
  {
    this.add.nineslice(440, 240, 400, 220, 'box-9p', [12, 28, 28, 12])
    this.addText(460, 270, "ENTER IMAGE CODE:")
    this.image_index = _.sample(Object.keys(image_to_code))
    this.addText(460, 300, this.image_index.toString())

    this.add.rectangle(460 + 50, 376, 100, 22, 0x5f574f)
    this.addInput(464, 370);

    this.addProgress(460, 420)
    this.addTimer(620, 420)

    console.log(image_to_code[this.image_index]) //cheat
  }

  testAnswer(answer)
  {
    // Correct answer
    if (answer.localeCompare(image_to_code[this.image_index]) === 0)
    {
      this.nextLevel()
    }
    // Incorrect answer
    else
    {
      console.log("game over")
      this.scene.start("GameOver")
    }
  }
}