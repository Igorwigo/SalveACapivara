var loseScene = new Phaser.Scene('lose');

loseScene.init = function () {
};

loseScene.preload = function () {
    
    this.load.image('reinicio', 'assets/images/star.png');


};

loseScene.create = function () {
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);



    this.add.text(100, 50, 'PERDEU PLAYBOY', { fontSize: '100px', fontFamily: 'Arial', fill: '#fff' });
    this.add.text(40, 150, 'Você alcançou o tesouro!', { fontSize: '33px', fill: '#fff', fontFamily: 'Arial' });
    this.add.text(40, 260, 'Pressione a barra PARA REINICIAR', { fontSize: '18px', fill: '#fff', fontFamily: 'Arial' });
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
};

loseScene.update = function () {
    if (this.spacebar.isDown) {
        this.time.delayedCall(250, function () {
            this.cameras.main.fade(250);
        }, [], this);
        this.scene.start('main');
    }
};
