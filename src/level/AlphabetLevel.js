import PuzzleScene from '../scene/PuzzleScene'
import _ from 'lodash'

var alien_words = [
  "HONOR",
  "STORAGE",
  "WEAPON",
  "DESTROY",
  "STRANGE",
  "ACQUIRE",
  "PLASMA",
  "COMMS",
  "TRAVEL",
  "FIGHTER",
  "ARMADA",
  "SOLDIER",
  "DEATH",
]

var char_to_index = {
  "A": 0,
  "B": 1,
  "C": 2,
  "D": 3,
  "E": 4,
  "F": 5,
  "G": 6,
  "H": 7,
  "I": 8,
  "J": 9,
  "K": 10,
  "L": 11,
  "M": 12,
  "N": 13,
  "O": 14,
  "P": 15,
  "Q": 16,
  "R": 17,
  "S": 18,
  "T": 19,
  "U": 20,
  "V": 21,
  "W": 22,
  "X": 23,
  "Y": 24,
  "Z": 25,
}

export default class extends PuzzleScene {

  constructor ()
  {
    super({ key: 'AlphabetLevel' });
  }

  preload ()
  {
    super.preload()
    // Load needed assets
    this.load.spritesheet('alien-alphabet', 'assets/alien-alphabet.png', { frameWidth: 19, frameHeight: 24, endFrame: 26 })
  }

  create ()
  {
    super.create()
    this.add.nineslice(440, 240, 420, 220, 'box-9p', [12, 28, 28, 12])
    this.addText(460, 260, "TRANSLATE THE KIRIONIC TEXT:")
    this.word = _.sample(alien_words)
    var self = this
    var x = 470
    _.forEach(this.word.split(""), function(val) {
      self.addCharByIndex(x, 310, char_to_index[val])
      x += 20
    })
    this.add.rectangle(460 + 70, 380, 140, 32, 0x5f574f)
    this.addInput(464, 370);

    this.addProgress(460, 420)
    this.addTimer(670, 420)
    
    console.log(this.word.toUpperCase()) //cheat
  }

  addCharByIndex(x, y, i)
  {
    this.add.sprite(x, y, 'alien-alphabet', i)  
  }

  testAnswer(answer)
    {
        // Correct answer
        if (answer.localeCompare(this.word.toUpperCase()) === 0)
        {
          console.log("success")
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