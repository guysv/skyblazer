import PuzzleScene from '../scene/PuzzleScene'
import _ from 'lodash'

var quotes = {
    "BETTER TO REIGN IN HELL": "6624",
    "DON’T CRY BECAUSE IT ENDED": "5419",
    "DO NOT GO GENTLE INTO THAT GOOD\nNIGHT": "4697",
    "WE LOVE THE THINGS WE LOVE": "3325",
    "POETS HAVE BEEN MYSTERIOUSLY\nSILENT": "3022",
    "LET OUR SCARS": "8985",
    "FOR SPACE SCIENCE, LIKE NUCLEAR\nSCIENCE AND ALL TECHNOLOGY": "7712",
    "THE FOOL DOTH THINK HE IS WISE": "8480",
    "IF YOU JUDGE PEOPLE,": "2691"
}

export default class extends PuzzleScene {

    constructor ()
    {
        super({ key: 'QuoteLevel' });
    }

    create ()
    {
        super.create()
        this.add.nineslice(440, 240, 490, 230, 'box-9p', [12, 28, 28, 12])
        this.addText(460, 270, "INSERT THE QUOTE CODE FOR:")

        this.quote = _.sample(Object.keys(quotes))
        this.addText(460, 310, "\"" + this.quote + "\"...")

        this.add.rectangle(460 + 70, 382, 140, 32, 0x5f574f)
        this.addInput(464, 370);

        this.addProgress(460, 420)
        this.addTimer(730, 420)

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
