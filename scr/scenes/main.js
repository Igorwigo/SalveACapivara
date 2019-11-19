var mainScene = new Phaser.Scene('main');

mainScene.init = function () {
};

mainScene.preload = function () {
    this.load.image('background', 'assets/images/background.png');
    this.load.spritesheet('capivara', 'assets/images/capivara.png', { frameWidth: 75, frameHeight: 48 });
    this.load.image('botao','assets/images/botao.png')

};

mainScene.create = function () {



    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);

    player = this.physics.add.sprite(150, 250, 'capivara');
    player.setScale(0.7);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('capivara', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('capivara', { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

    var botao1 = this.add.image(219, 315, 'botao').setInteractive();
    botao1.on('pointerdown', function (event) {
     console.log("butao1")   
    });
    var botao2 = this.add.image(293, 315, 'botao').setInteractive();
    botao2.on('pointerdown', function (event) {
     console.log("butao2")   
    });
    var botao3 = this.add.image(367, 315, 'botao').setInteractive();
    botao3.on('pointerdown', function (event) {
     console.log("butao3")   
    });



};

mainScene.update = function () {
    
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }

};
