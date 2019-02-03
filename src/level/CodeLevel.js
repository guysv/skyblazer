import PuzzleScene from '../scene/PuzzleScene'
import _ from 'lodash'

export default class extends PuzzleScene {

  constructor ()
  {
    super({ key: 'CodeLevel' });
  }

  create ()
  {
    super.create()
    this.add.nineslice(105, 60, 110, 57, 'box-9p', [3, 7, 7, 3])
    this.addText(460, 270, "DECIPHER THE PIN CODE:")
    this.key = _.times(_.random(5, 8), () => _.random(35).toString(36)).join('').toUpperCase()
    this.addText(460, 300, "[" + this.key + "]")
    
    this.solution = ""
    // Figure out the solution lol
    if (_.sum(_.map(['A', 'E', 'I', 'O', 'U', function (val) {
      return _.countBy(this.key)[val]
    }])) > 0)
    {
      this.solution += "O"
    }
    else if (this.key.length % 2)
    {
      this.solution += "H"
    }
    else
    {
      this.solution += "F"
    }

    if (!this.key.match(/\d/g) && this.key.match(/(.)\1/g))
    {
      this.solution += "A"
    }
    else if (!this.key.match(/\d/g))
    {
      this.solution += "C"
    }
    else if (this.key.match(/\d/g).length === 1)
    {
      this.solution += "I"
    }
    else if (this.key.match(/\d/g).length === 2 && _.sum(_.map(this.key.match(/\d/g), function(v) { return parseInt(v) })))
    {
      this.solution += "P"
    }
    else
    {
      this.solution += "D"
    }

    if (this.key.length > 5 && "0123456789AEIOU".indexOf(this.key[5]) > -1) {
      this.solution += "S"
    }
    else if ("BCDFGHJKLMNPQRSTVWXYZ".indexOf(this.key[5]) > -1)
    {
      this.solution += "U"
    }
    else
    {
      this.solution += "Y"
    }

    if (!this.key.match(/[ICBM]/g) && this.key.match(/[13579]/g)) {
      this.solution += "X"
    }
    else if (this.key.match(/[ICBM]/g))
    {
      this.solution += "E"
    }
    else
    {
      this.solution += "K"
    }

    console.log(this.solution)


    this.add.rectangle(460 + 70, 380, 140, 32, 0x5f574f)
    this.addInput(464, 370);

    this.addProgress(440, 420)
    this.addTimer(670, 420)

    console.log(this.solution) //cheat
  }

  testAnswer(answer)
  {
    // Correct answer
    if (answer.localeCompare(this.solution) === 0)
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