(function () {
    var config = {
        width: 640,
        height: 360,
        type: Phaser.AUTO,
        title: 'Salve a Capivara!',
        backgroundColor: 0x24c215,
        input: {
            keyboard: true,
            mouse: true,
            touch: true,
        },
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
        scene: [
            mainScene,
            mapScene,
            playSetScene,
            winScene,
            winScene2,
            overScene,
            infoScene,
            helpScene,
            fase2,
        ]
    };

    var game = new Phaser.Game(config);
    game.scene.start('main');
})();