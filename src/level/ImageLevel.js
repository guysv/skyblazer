import PuzzleScene from '../scene/PuzzleScene'
import _ from 'lodash'

var image_to_code = {
  'img-supercomputer': "501308",
  'img-engine': "361030",
  'img-astrofood': "657081",
  'img-uniform': "986281",
  'img-dogfight': "474901",
  'img-weapon': "517268",
  'img-soldier': "893512",
  'img-earth': "978188",
}

export default class extends PuzzleScene {

  constructor ()
  {
    super({ key: 'ImageLevel' });
  }

  preload ()
  {
    super.preload()
    this.load.image('img-supercomputer', 'assets/Computer.png')
    this.load.image('img-engine', 'assets/Engine.png')
    this.load.image('img-astrofood', 'assets/Astrofood.png')
    this.load.image('img-uniform', 'assets/Uniform.png')
    this.load.image('img-dogfight', 'assets/Dogfight.png') //TODO: dogfight..
    this.load.image('img-weapon', 'assets/Weapon.png')
    this.load.image('img-soldier', 'assets/Soldier.png')
    this.load.image('img-earth', 'assets/Earth.png')
  }

  create ()
  {
    super.create()
    this.add.nineslice(400, 270, 410, 380, 'box-9p', [12, 28, 28, 12])
    this.addText(440, 300, "ENTER IMAGE CODE:")
    this.image_index = _.sample(Object.keys(image_to_code))
    this.add.image(600, 440, this.image_index).setScale(4)

    this.add.rectangle(440 + 70, 570, 140, 32, 0x5f574f)
    this.addInput(444, 560);

    this.addProgress(418, 600)
    this.addTimer(620, 600)

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