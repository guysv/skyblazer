import PuzzleScene from '../scene/PuzzleScene'
import _ from 'lodash'

var quotes = {
    "BETTER TO REIGN IN HELL": "6624",
    "DON’T CRY BECAUSE IT ENDED": "5419",
    "DO NOT GO GENTLE INTO THAT GOOD NIGHT": "4697",
    "WE LOVE THE THINGS WE LOVE": "3325",
    "POETS HAVE BEEN MYSTERIOUSLY SILENT": "3022",
    "LET OUR SCARS": "8985",
    "FOR SPACE SCIENCE, LIKE NUCLEAR SCIENCE\nAND ALL TECHNOLOGY": "7712"
}

export default class extends PuzzleScene {

    constructor ()
    {
        super({ key: 'QuoteLevel' });
    }

    create ()
    {
        super.create()
        this.add.nineslice(440, 240, 400, 220, 'box-9p', [12, 28, 28, 12])
        this.addText(460, 270, "INSERT THE CODE THAT FITS THIS QUOTE:")

        this.quote = _.sample(Object.keys(quotes))
        this.addText(460, 330, "\"" + this.quote + "\"...")

        this.add.rectangle(460 + 50, 376, 100, 22, 0x5f574f)
        this.addInput(464, 370);

        this.addProgress(460, 420)
        this.addTimer(620, 420)

        console.log(quotes[this.quote]) //cheat
    }

    testAnswer(answer)
    {
        // Correct answer
        if (answer.localeCompare(quotes[this.quote]) === 0)
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
