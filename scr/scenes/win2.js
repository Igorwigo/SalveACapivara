var winScene2 = new Phaser.Scene('win2');

winScene2.init = function () {
};

winScene2.preload = function () {

    this.load.image('vitoria2', 'assets/images/vitoria2.png');

};

winScene2.create = function () {
    let bg = this.add.sprite(0, 0, 'vitoria2');
    bg.setOrigin(0, 0);
   

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
};


winScene2.update = function () {
    if (this.spacebar.isDown) {
        this.time.delayedCall(250, function () {
            this.cameras.main.fade(250);
        }, [], this);
        this.scene.start('map');
    }
}