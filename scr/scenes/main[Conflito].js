var mainScene = new Phaser.Scene('main');
console.log("FASE-------------1")
mainScene.init = function () {

    this.capiMaxX = 600;
    this.capiMinX = 40;
};

mainScene.preload = function () {
    this.load.image('background', 'assets/images/background.png');
    this.load.spritesheet('capivara', 'assets/images/capivara.png', { frameWidth: 75, frameHeight: 48 });
    this.load.spritesheet('capivara1', 'assets/images/capivara.png', { frameWidth: 75, frameHeight: 48 });
    this.load.spritesheet('capivara2', 'assets/images/capivara.png', { frameWidth: 75, frameHeight: 48 });
    this.load.spritesheet('capivara3', 'assets/images/capivara.png', { frameWidth: 75, frameHeight: 48 });

    this.load.image('certo', 'assets/images/certo.png');
    this.load.image('errado', 'assets/images/errado.png');


    this.load.image('botao','assets/images/botao.png');
    this.load.spritesheet('coracao2','assets/images/coracao2.png', { frameWidth: 2290, frameHeight: 2140 });
    this.load.image('triangulo','assets/images/triangulo.png');
    this.load.image('quadrado','assets/images/quadrado.png');
    this.load.image('varias_capi3','assets/images/varias_capi3.png');
    this.load.image('varias_capi2','assets/images/varias_capi2.png');
    this.load.image('varias_capi1','assets/images/varias_capi1.png');
    this.load.image('varias_capi0','assets/images/varias_capi0.png');
    this.load.image('bola','assets/images/bola.png');
    this.load.spritesheet('fullscreen', 'assets/images/fullscreen.png', { frameWidth: 64, frameHeight: 64 });
};

mainScene.create = function () {
    let bg = this.add.image(0, 0, 'background');
    bg.setOrigin(0, 0);
    varias_capi3 = this.add.sprite(550,190,'varias_capi3').setScale(0.40).setVisible(true);
    varias_capi2 = this.add.image(550,190,'varias_capi2').setScale(0.40).setVisible(false);
    varias_capi1 = this.add.image(550,190,'varias_capi1').setScale(0.40).setVisible(false);
    varias_capi0 = this.add.image(550,190,'varias_capi0').setScale(0.40).setVisible(false);

/*---------------------------------Animação da capivara padrão-----------------------*/
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('capivara', { start: 0, end: 2 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('capivara', { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{ key: 'capivara', frame: 3 }],
        frameRate: 10,
    });
    /*----------------------------------------------------------------------*/

/*---------------------------------Animação da capivara SOLTA 1111111111111111111111111-----------------------*/
this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('capivara1', { start: 0, end: 2 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('capivara1', { start: 3, end: 5 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [{ key: 'capivara1', frame: 3 }],
    frameRate: 10,
});
/*---------------------------------Animação da capivara SOLTA 2222222222222222222222-----------------------*/
this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('capivara2', { start: 0, end: 2 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('capivara2', { start: 3, end: 5 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [{ key: 'capivara2', frame: 3 }],
    frameRate: 10,
});
/*---------------------------------Animação da capivara SOLTA 333333333333333333333-----------------------*/
this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('capivara3', { start: 0, end: 2 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('capivara3', { start: 3, end: 5 }),
    frameRate: 10,
    repeat: -1
});

this.anims.create({
    key: 'turn',
    frames: [{ key: 'capivara3', frame: 3 }],
    frameRate: 10,
});
    /*--------------------------colocando as capivaras-------------------*/
    capivara = this.physics.add.sprite(60, 210, 'capivara',3);
    capivara.setScale(1);
        /*--------------------------colocando as soltas-------------------*/

    capivara1 = this.physics.add.sprite(550, 220, 'capivara1',2);
    capivara1.setScale(0.5).setVisible(false);

    capivara2 = this.physics.add.sprite(550, 220, 'capivara2',2);
    capivara2.setScale(0.5).setVisible(false);

    capivara3 = this.physics.add.sprite(550, 220, 'capivara3',2);
    capivara3.setScale(0.5).setVisible(false);
        /*----------------------------------------------------------------------*/
   
    direita=false;
    
    libera1=false;
    libera2=false;
    libera3=false;


    var img_triangulo = this.add.image(219,40,'triangulo');

    var coracao = this.add.sprite(50,40,'coracao2',0).setScale(0.018).setVisible(false);
    var coracao1 = this.add.image(100,40,'coracao2',1).setScale(0.018).setVisible(false);
    var coracao2 = this.add.image(150,40,'coracao2',2).setScale(0.018).setVisible(false);



    var img_bola = this.add.image(293,40,'bola');
    
    var img_quadrado = this.add.image(367,40,'quadrado');
    /*------------------------------Logica das ordens-------------------------------- */
    
    let lista = [false,false,false];
    lista_Presa = [false,false,false];

    /*-------------------------------------------------------------- */
    contador_vida = 0;
    contador_capivara=[];
/*----------------------------------TRIANGULO----------------------------*/
    var botao_triangulo = this.add.image(293, 315, 'triangulo').setInteractive();
    certo1 = this.add.image(219,40,'certo').setVisible(false);
    erro1 = this.add.image(219,40,'erro').setVisible(false);

    botao_triangulo.on('pointerdown', function (event) {
        if(img_triangulo.texture.key=="triangulo" && lista[0]==false && lista[1]==false && lista[2]==false){
        
        console.log("Triângulo")
        botao_triangulo.disableInteractive();
        contador_vida += 1;
        coracao.setVisible(true);
        lista_Presa[0]=true;
        console.log("Contador de vidas - ",contador_vida)
        lista[0]=true;
        lista[1]=true;
        direita=true;
        certo1.setVisible(true);
    }
    else{
        contador_vida -=1;
        img_triangulo.setVisible(false);

        botao_triangulo.disableInteractive();
        console.log("entrou no else- ",lista)

    }
    });
        /*-------------------------------------------------------------- */
    /*-------------------------BOTAO_BOLA------------------------------------- */
    errou1=false;
    errou2=false;
    var botao_bola = this.add.image(219, 315, 'bola').setInteractive();
    certo2 = this.add.image(293,40,'certo').setVisible(false);
    erro2 = this.add.image(293,40,'erro').setVisible(false);

    botao_bola.on('pointerdown', function (event) {
      if(img_bola.texture.key=="bola" && lista[0]==true && lista[1]==true && lista[2]==false){
     console.log("bola")  
     botao_bola.disableInteractive();
     lista[2]=true;
     lista_Presa[1]=true;
     direita=true;
     coracao1.setVisible(true);
     certo2.setVisible(true);
    }
     else{
         errou1=true;
         if( errou1==true&&errou2==false  ){erro2.setVisible(true)}
         if(contador_vida==1){coracao.setVisible(false);}
        if(contador_vida==0){coracao.setVisible(false)}
        contador_vida = contador_vida -1;

        console.log("errou--BOLA")


     }
    });
        /*-------------------------------------------------------------- */
    /*----------------------------BOTAO_QUADRADO---------------------------------- */

    var botao_quadrado = this.add.image(367, 315, 'quadrado').setInteractive();
    certo3 = this.add.image(367,40,'certo').setVisible(false);
    erro3 = this.add.image(367,40,'erro').setVisible(false);

    botao_quadrado.on('pointerdown', function (event) {
      
        if(img_quadrado.texture.key=="quadrado"  && lista[0]==true && lista[1]==true && lista[2]==true ){
        console.log("quadro")   
        botao_quadrado.disableInteractive();
        coracao2.setVisible(true);
        direita=true;       
        lista_Presa[2]=true;
        certo3.setVisible(true);


      }
        else{
            botao_quadrado.setInteractive();
            errou2=true;
            if(contador_vida==1){coracao.setVisible(false);}
            if(contador_vida==2){coracao1.setVisible(false)}
         coracao1.setVisible(false);
          contador_vida = contador_vida -1;
          lista[2]=false;

console.log("errou--QUADRADO")
        }

      });
    /*-------------------------------------------------------------- */ 
};


function gameOver() {
    if( contador_vida==1&&coracao.setVisible()==false||contador_vida==0&&coracao.setVisible()==false){
            console.log("lose")

    }
    if( contador_vida==1&&coracao.setVisible()==false||contador_vida==2&&coracao1.setVisible()==false){
        this.scene.start('lose');
}

}


mainScene.update = function () {


 /*------------------------logica da capivara andando-------------*/
    if ( direita==true && capivara.x>0) {
        capivara.setVelocityX(160);
        capivara.anims.play('right', true);
        console.log("right",capivara.x)
    }
        
        if(capivara.x>=415){
            direita=false;

            capivara.setVelocityX(-160);
            capivara.anims.play('left',true);
            console.log('esquerda',capivara.x)


            if(lista_Presa[0]==true){
                libera1=false;
                varias_capi3.setVisible(false);
                varias_capi2.setVisible(true);
                console.log("Liberou 1: ",lista_Presa[0])
                capivara1.setVisible(true);
                capivara1.anims.play('left',true);
                capivara1.setVelocityX(-160);
            }
             if(lista_Presa[1]==true){
                lista_Presa[1]==false;
                varias_capi2.setVisible(false);
                varias_capi1.setVisible(true);
                libera2=false;
                capivara2.setVisible(true);
                capivara2.anims.play('left',true);
                capivara2.setVelocityX(-160);
                console.log("Liberou 2: ",lista_Presa[1])

            }
            if(lista_Presa[2]==true){
                lista_Presa[2]==false;
                
                varias_capi1.setVisible(false);
                varias_capi0.setVisible(true);
                libera3=false;
                capivara3.setVisible(true);
                capivara3.anims.play('left',true);
                capivara3.setVelocityX(-160);
                console.log("Liberou 3: ",lista_Presa[2])
            }
        }


        if(direita==false&&capivara.x<100){


            capivara.setVelocityX(0);
            capivara.anims.play('turn',true);
            
            console.log('parada',capivara.x)


        }
        if(direita==false&&capivara1.x<25){
            capivara1.setVelocityX(0);
            capivara1.anims.play('turn',true);
            contador_capivara[0]=true;
        }
        if(direita==false&&capivara2.x<40){
            capivara2.setVelocityX(0);
            capivara2.anims.play('turn',true);
            contador_capivara[1]=true;
        }
        if(direita==false&&capivara3.x<50){
            capivara3.setVelocityX(0);
            capivara3.anims.play('turn',true);
            contador_capivara[2]=true;
        }
    
        if(contador_capivara[0]==true &&contador_capivara[1]==true &&contador_capivara[2]==true ){
            localStorage.setItem("placar1",contador_capivara);
            this.scene.start('win');
         }
};
