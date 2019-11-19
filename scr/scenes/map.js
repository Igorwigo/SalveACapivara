var mapScene = new Phaser.Scene('map');

mapScene.init = function () {
};

mapScene.preload = function () {
    this.load.image('mapa', 'assets/images/mapa.png');

};

mapScene.create = function () {
    let bg = this.add.image(0, 0, 'mapa');
    bg.setOrigin(0, 0);
};

mapScene.update = function () {
};
