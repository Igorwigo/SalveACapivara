var mainScene = new Phaser.Scene('main');

mainScene.init = function () {
};

mainScene.preload = function () {
    this.load.image('background', 'assets/images/background.png');
    this.load.spritesheet('capivara', 'assets/images/capivara.png', { frameWidth: 75, frameHeight: 48 });
};

mainScene.create = function () {
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);

    player = this.physics.add.sprite(150, 250, 'capivara');
    player.setScale(0.7);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('capivara', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'capivara', frame: 4 }],
        frameRate: 10
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('capivara', { start: 100, end: 0 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();

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
    else {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

};
