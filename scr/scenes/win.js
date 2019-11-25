var winScene = new Phaser.Scene('win');

winScene.init = function () {
};

winScene.preload = function () {
    
   this.load.image('vitoria1', 'assets/images/vitoria1.png');


};

winScene.create = function () {
    let bg = this.add.sprite(0, 0, 'vitoria1');
    bg.setOrigin(0, 0);

if(localStorage.getItem('placar1')==3){
       
    ;};
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
};

winScene.update = function () {
    if (this.spacebar.isDown) {
        this.time.delayedCall(250, function () {
            this.cameras.main.fade(250);
        }, [], this);
        this.scene.start('map');
    }
};
