var mapScene = new Phaser.Scene('map');

mapScene.init = function () {
};

mapScene.preload = function () {
    this.load.image('mapa', 'assets/images/mapa.png');

};

mapScene.create = function () {
    let bg = this.add.image(0, 0, 'mapa');
    bg.setOrigin(0, 0);
    trocaSceneFase1=false;

   /*----------------------------BOTAO_PLAY---------------------------------- */

   var botao_quadrado = this.add.image(320, 180, 'play').setInteractive();
   botao_quadrado.on('pointerdown', function (event) {
    trocaSceneFase1=true;
     });
   /*-------------------------------------------------------------- */










};

mapScene.update = function () {

    if(trocaSceneFase1==true){
        this.scene.start('main');
    }

};
