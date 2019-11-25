var mapScene = new Phaser.Scene('map');

mapScene.init = function () {
};

mapScene.preload = function () {
    this.load.image('mapa', 'assets/images/mapa.png');
    this.load.image('play', 'assets/images/play.png');

};

mapScene.create = function () {
    let bg = this.add.image(0, 0, 'mapa');
    bg.setOrigin(0, 0);
    trocaSceneFase1=false;
    trocaSceneFase2=false;

   /*----------------------------BOTAO_PLAY---------------------------------- */

   var botao_fase1 = this.add.image(100, 180, 'play').setScale(0.5).setInteractive();
   botao_fase1.on('pointerdown', function (event) {
    trocaSceneFase1=true;
    console.log("play")
     });
   /*-------------------------------------------------------------- */
   var botao_fase2 = this.add.image(500, 180, 'play').setScale(0.5).setAlpha(0.5);
   
   if(localStorage.getItem('placar1')==3){   
    botao_fase2.setInteractive().setAlpha();
}
   
   botao_fase2.on('pointerdown', function (event) {
        trocaSceneFase2=true;

    


    
    
    console.log("play")
  });

   if(localStorage.getItem('placar1')==3){   
    

}

};

mapScene.update = function () {

    if(trocaSceneFase1==true){
        this.scene.start('main');
    }

    if(trocaSceneFase2==true){
        this.scene.start('fase2');
    }
};