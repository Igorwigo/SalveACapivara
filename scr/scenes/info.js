var infoScene = new Phaser.Scene('info');

infoScene.init = function () {
};

infoScene.preload = function () {
    this.load.image('volta', 'assets/images/volta.png');

};

infoScene.create = function () {
    console.log("------------INFO-----------")

    trocaSceneMenu=false;
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);
             /*----------------------------BOTAO_VOLTAR---------------------------------- */

             var botao_volta = this.add.image(600,330, 'volta').setInteractive();
             botao_volta.on('pointerdown', function (event) {
               trocaSceneMenu=true;
               });
             /*-------------------------------------------------------------- */

    this.add.text(100, 50, 'Olá', { fontSize: '50px', fontFamily: 'Arial', fill: '#fff' });
   this.add.text(40, 150, 'Trabalho desenvolvido na disciplina de multimidia e hipermidia!', { fontSize: '15px', fill: '#fff', fontFamily: 'Arial' });
    

};

infoScene.update = function(){
    if(trocaSceneMenu==true){
        this.scene.start('menu');
    }

}