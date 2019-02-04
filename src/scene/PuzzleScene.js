import Phaser from 'phaser'
import config from '../config'

export default class extends Phaser.Scene {

    preload ()
    {
        // Load needed assets
        this.load.image('box-9p', 'assets/box.9p.scaled.png')
        this.load.bitmapFont('dos-font', 'assets/dosfont.png', 'assets/dosfont.xml');
        this.load.image('title-bg', 'assets/title.png')
    }

    create ()
    {
        this.add.image(config.width / 2, config.height / 2, 'title-bg').setScale(4)
    }

    nextLevel()
    {
        config.current_level++
        if (config.current_level < config.level_order.length)
        {
            this.scene.start(config.level_order[config.current_level])
        }
        else
        {
            this.scene.start('WinScene')
        }
    }

    addText(x, y, text, color=0x5f574f)
    {
        var text = this.add.bitmapText(x, y, "dos-font", text)
        text.setFontSize(24)
        text.tint = color
        return text
    }

    addInput(x, y, color=0xc3c3c3)
    {
        var textEntry = this.addText(x, y, '', color);
        var prompt = this.addText(x, y + 2, '_', color)
        this.time.addEvent({delay: 200, loop: true, callback: function() { prompt.visible = !prompt.visible }})
        var scene = this
        this.input.keyboard.on('keydown', function (event) {

            if (event.keyCode === 8 && textEntry.text.length > 0)
            {
                textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
                prompt.x -= prompt.width
            }
            else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90))
            {
                textEntry.text += event.key.toUpperCase();
                prompt.x += prompt.width
            }
            else if (event.keyCode === 13)
            {
                // Test answer
                scene.testAnswer(textEntry.text)
            }

        });

    }

    addProgress(x, y)
    {
        this.addText(x, y, "Progress: [" + "*".repeat(config.current_level).padEnd(config.level_order.length, "-") + "]")
    }

    addTimer(x, y)
    {
        var initial_text = "Time Left: "
        var timer_text = this.addText(x, y, initial_text + config.time_left.toString())
        var scene = this
        this.time.addEvent({delay: 1000, loop: true, callback: function() { 
            config.time_left--
            if (config.time_left < 0)
            {
                scene.onTimeout()
            }
            else
            {
                timer_text.text = initial_text + config.time_left.toString()
            }
        }})
    }

    onTimeout()
    {
        this.scene.start('GameOver')
    }

    testAnswer()
    {
        throw "Needs to be overridden"
    }
}
