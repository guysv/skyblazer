import { Plugin as NineSlicePlugin } from 'phaser3-nineslice'
import GameOver from './scene/GameOver';
import QuoteLevel from './level/QuoteLevel'
import AlphabetLevel from './level/AlphabetLevel';
import ImageLevel from './level/ImageLevel';
import CodeLevel from './level/CodeLevel';
import _ from 'lodash'
import SplashScene from './scene/SplashScene';
import CreditsScene from './scene/CreditsScene';

var level_to_obj = {
    'QuoteLevel': QuoteLevel,
    'AlphabetLevel': AlphabetLevel,
    'ImageLevel': ImageLevel,
    'CodeLevel': CodeLevel
}

var level_order = _.shuffle(Object.keys(level_to_obj))
var level_config_array = _.map(level_order, function(v) { return level_to_obj[v]})

export default {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1280,
    height: 800,
    backgroundColor: 0x000000,
    pixelArt: true,
    // Globals hack
    level_order: level_order,
    current_level: 0,
    time_left: 120,

    plugins: {
      global: [ NineSlicePlugin.DefaultCfg ]
    },
    scene: [
        CreditsScene,
        SplashScene
    ].concat(level_config_array).concat([
        GameOver
    ]),
    // scene: [
    //     AlphabetLevel,
    //     QuoteLevel,
    //     GameOver
    // ]
};