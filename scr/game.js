(function () {
    var config = {

        width: 640,
        height: 360,
        title: 'Salve a Capivara!',
        backgroundColor: 0x24c215,
        //type: Phaser.AUTO,
        //mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      //autoCenter: Phaser.Scale.CENTER,
        input: {
            keyboard: true,
            mouse: true,
            touch: true,
        },
        physics: {
            default: 'arcade',
            arcade: {
                debug: false,
                gravity:false,
            }
        },
        scene: [
            mainScene,
            mapScene,
            menuScene,
            playSetScene,
            winScene,
            winScene2,
            loseScene,
            overScene,
            infoScene,
            fase2,
        ],
        //autoCenter: Phaser.Scale.CENTER_BOTH,

    };

    var game = new Phaser.Game(config);
    game.scene.start('menu');
})();