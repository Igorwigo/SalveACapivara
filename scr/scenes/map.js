var mapScene = new Phaser.Scene('map');

mapScene.init = function () {
};

mapScene.preload = function () {
    this.load.image('mapa', 'assets/images/mapa.png');
    this.load.image('fase1-icon', 'assets/images/fase1-icon.png');
    this.load.image('fase2-icon', 'assets/images/fase2-icon.png');
    this.load.image('volta', 'assets/images/volta.png');

};

mapScene.create = function () {
    let bg = this.add.image(0, 0, 'mapa');
    bg.setOrigin(0, 0);
    trocaSceneFase1=false;
    trocaSceneFase2=false;
    trocaSceneMenu=false;

    /*----------------------------BOTAO_VOLTAR---------------------------------- */

    var botao_volta = this.add.image(30,30, 'volta').setInteractive();
    botao_volta.on('pointerdown', function (event) {
    trocaSceneMenu=true;
    });
    /*-------------------------------------------------------------- */


   /*----------------------------BOTAO_fase1-icon---------------------------------- */

   var botao_fase1 = this.add.image(166, 267, 'fase1-icon').setScale(0.5).setInteractive();
   botao_fase1.on('pointerdown', function (event) {
    trocaSceneFase1=true;
     });
   /*-------------------------------------------------------------- */
  var botao_fase2 = this.add.image(91, 235, 'fase2-icon').setScale(0.5).setAlpha(0.5);
   if(localStorage.getItem('placar1')==3){   
    botao_fase2.setInteractive().setAlpha();
    botao_fase2.on('pointerdown', function (event) {
    trocaSceneFase2=true;
    });


}

};

mapScene.update = function () {

    if(trocaSceneFase1==true){
        this.scene.start('fase1');
    }

    if(trocaSceneFase2==true){
        this.scene.start('fase2');
    }
    if(trocaSceneMenu==true){
        this.scene.start('menu');
    }
};