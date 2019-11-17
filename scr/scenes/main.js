var mainScene = new Phaser.Scene('main');

mainScene.init = function () {
};

mainScene.preload = function () {
    this.load.image('background', 'assets/images/background.png');
};

mainScene.create = function () {
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);
};

mainScene.update = function () {
};
