import config from './config'
import 'phaser';

console.log(config.scene)
var game = new Phaser.Game(config);
export default {game}
