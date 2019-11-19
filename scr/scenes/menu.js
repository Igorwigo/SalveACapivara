var menu = new Phaser.Scene('main');

menu.init = function () {
};

menu.preload = function () {
    this.load.image('background', 'assets/images/background.png');
    this.load.image('play','assets/images/botao.png')

};

menu.create = function () {



    let bg = this.add.image(0, 0, 'background');
    bg.setOrigin(0, 0);




    var img_triangulo = this.add.image(219,40,'triangulo');

    var botao_triangulo = this.add.image(219, 315, 'triangulo').setInteractive();
    botao_triangulo.on('pointerdown', function (event) {
        if(img_triangulo.texture.key=="triangulo"){
        img_triangulo.setVisible(false);
        console.log("Triângulo")
   
    }
    });



};

menu.update = function () {

};
