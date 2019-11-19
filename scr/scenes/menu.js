var menuScene = new Phaser.Scene('menu');

menuScene.init = function () {
};

menuScene.preload = function () {
    this.load.image('fundo', 'assets/images/menu.jpg');
    this.load.image('play', 'assets/images/play.png');
    this.load.image('info', 'assets/images/info.png');
};

menuScene.create = function () {
    console.log("------------MENU-----------")
  
trocaScenePlay=false;
trocaSceneInfo=false;

    let bg = this.add.image(0, 0, 'fundo');
    bg.setOrigin(0, 0);
   /*----------------------------BOTAO_PLAY---------------------------------- */

   var botao_quadrado = this.add.image(320, 180, 'play').setInteractive();
   botao_quadrado.on('pointerdown', function (event) {
        trocaScenePlay=true;
     });
   /*-------------------------------------------------------------- */
      /*----------------------------BOTAO_INFO---------------------------------- */

      var botao_quadrado = this.add.image(320, 270, 'info').setInteractive();
      botao_quadrado.on('pointerdown', function (event) {
           trocaSceneInfo=true;
        });
      /*-------------------------------------------------------------- */
};

menuScene.update=function(){
if(trocaScenePlay==true){
    this.scene.start('main');
}
if(trocaSceneInfo==true){
    this.scene.start('info');
}

}
