var winScene2 = new Phaser.Scene('win2');

winScene2.init = function () {
};

winScene2.preload = function () {
};

winScene2.create = function () {
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);
   

    this.add.text(100, 50, 'Vitória', { fontSize: '100px', fontFamily: 'Arial', fill: '#fff' });
    this.add.text(40, 150, 'Você zerou nosso jogo!', { fontSize: '33px', fill: '#fff', fontFamily: 'Arial' });
    this.add.text(40, 260, 'Pressione a barra de espaço para ir ao mapa', { fontSize: '18px', fill: '#fff', fontFamily: 'Arial' });
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