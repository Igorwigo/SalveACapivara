var mainScene = new Phaser.Scene('main');
console.log("FASE-------------1")
mainScene.init = function () {

    this.capiMaxX = 600;
    this.capiMinX = 40;
};

mainScene.preload = function () {
    this.load.image('background', 'assets/images/background.png');
    this.load.spritesheet('capivara', 'assets/images/capivara.png', { frameWidth: 75, frameHeight: 48 });
    this.load.image('botao','assets/images/botao.png');
    this.load.image('vida1','assets/images/vida1.png');
    this.load.image('triangulo','assets/images/triangulo.png');
    this.load.image('quadrado','assets/images/quadrado.png');
    this.load.image('bola','assets/images/bola.png');
    this.load.spritesheet('fullscreen', 'assets/images/fullscreen.png', { frameWidth: 64, frameHeight: 64 });
};

mainScene.create = function () {

  

    let bg = this.add.image(0, 0, 'background');
    bg.setOrigin(0, 0);


//
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
    capivara = this.physics.add.sprite(60, 250, 'capivara',3);
    capivara.setScale(1);
    
    //capivara.setCollideWorldBounds(true);
 

    
    direita=false;
    


    cursors = this.input.keyboard.createCursorKeys();

    var img_triangulo = this.add.image(219,40,'triangulo');

    var img_vida_Full = this.add.image(100,40,'vida1').setScale(0.14);
    var img_vida_Half = this.add.image(100,40,'vida2').setScale(0.14).setVisible(false);
    var img_vida_LOW = this.add.image(100,40,'vida3').setScale(0.14).setVisible(false);




    var img_bola = this.add.image(293,40,'bola');
    
    var img_quadrado = this.add.image(367,40,'quadrado');
    /*------------------------------Logica das ordens-------------------------------- */
    
    let lista = [false,false,false];
    /*-------------------------------------------------------------- */
    /*------------------------------Botao fullscreen-------------------------------- */


console.log(lista)
        /*-------------------------------------------------------------- */

    /* Adicionado o SCORE*/
   // score= 0;
    //var scoreText;
   // scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '28px', fill: '#000' });
    /*-------------------------------------------------------------- */
    
        /*----------------------------BOTAO_TRIANGULO---------------------------------- */
      
      
        //  var botao_bola = this.add.image(293, 315, 'bola').setInteractive();

        contador_vida = 3;

    var botao_triangulo = this.add.image(293, 315, 'triangulo').setInteractive();
    botao_triangulo.on('pointerdown', function (event) {
        if(img_triangulo.texture.key=="triangulo" && lista[0]==false && lista[1]==false && lista[2]==false){
        img_triangulo.setVisible(false);
        console.log("Triângulo")
        botao_triangulo.disableInteractive();
       // score += 10;
        //scoreText.setText('Score: ' + score);
        console.log("entrou no if - ",lista)
        lista[0]=true;
        lista[1]=true;
        direita=true;
    }
    else{
        contador_vida = contador_vida -1;
        img_triangulo.setVisible(false);
        score -= 10;
        scoreText.setText('Score: ' + score);
        botao_triangulo.disableInteractive();
        console.log("entrou no else- ",lista)

    }
    });
        /*-------------------------------------------------------------- */
    /*-------------------------BOTAO_BOLA------------------------------------- */

    var botao_bola = this.add.image(219, 315, 'bola').setInteractive();
    botao_bola.on('pointerdown', function (event) {
      if(img_bola.texture.key=="bola" && lista[0]==true && lista[1]==true && lista[2]==false){
     console.log("bola")  
     img_bola.setVisible(false); 
     botao_bola.disableInteractive();
     score += 10;
     scoreText.setText('Score: ' + score);
     lista[2]=true;
     direita=true;

    }
     else{
        contador_vida = contador_vida -1;
      img_bola.setVisible(false); 
      botao_bola.disableInteractive(); 
      score -= 10;
      scoreText.setText('Score: ' + score);


     }
    });
        /*-------------------------------------------------------------- */
    /*----------------------------BOTAO_QUADRADO---------------------------------- */

    var botao_quadrado = this.add.image(367, 315, 'quadrado').setInteractive();
    botao_quadrado.on('pointerdown', function (event) {
      
        if(img_quadrado.texture.key=="quadrado"  && lista[0]==true && lista[1]==true && lista[2]==true ){
        img_quadrado.setVisible(false)
        console.log("quadro")   
        botao_quadrado.disableInteractive();
        score += 10;
        scoreText.setText('Score: ' + score);
        direita=true;       

      }
        else{
          contador_vida = contador_vida -1;
          lista[2]=false;
          score -= 10;
          scoreText.setText('Score: ' + score);
          botao_quadrado.disableInteractive();
          img_quadrado.setVisible(false)

        }

      });
    /*-------------------------------------------------------------- */


  
};


function vida( ) {

}


mainScene.update = function () {


 /*------------------------logica da capivara andando-------------*/
    if ( direita==true && capivara.x>0) {
        capivara.setVelocityX(160);
        capivara.anims.play('right', true);
        console.log("right",capivara.x)
    }
        
        if(capivara.x>=600){
            direita=false;

            capivara.setVelocityX(-160);
            capivara.anims.play('left',true);
            console.log('esquerda',capivara.x)
        }

        if(direita==false&&capivara.x<50){


            capivara.setVelocityX(0);
            capivara.anims.play('turn',true);
            console.log('parada',capivara.x)
            if(contador_vida==3 ){
                localStorage.setItem("placar1",contador_vida);
                this.scene.start('win');
             }
            else{
                if(contador_vida ==2){
                    img_vida_Full.setVisible(false);
                    img_vida_Half.setVisible(true);
            
                }
                if(contador_vida ==1){
                    img_vida_Full.setVisible(false);
                    img_vida_Half.setVisible(false);
                    img_vida_Half.setVisible(true);
                }

            }
        }

               
    
/*
    if(direita==false ){

        capivara.setVelocityX(-160);
        capivara.anims.play('left', true);
        console.log("Volando",capivara.x)

        if(capivara.x<=50){

            capivara.setVelocityX(0);
            capivara.anims.play('turn');

        }
    }*/
 /*------------------------------------------------------------------------*/



/*
    else{

        capivara.setVelocityX(0);
        capivara.anims.play('turn');

    }
*/
 



  /*  if (cursors.left.isDown) {
        capivara.setVelocityX(-160);
        capivara.anims.play('left', true);
    }
    else if (cursors.right.isDown) {
        capivara.setVelocityX(160);
        capivara.anims.play('right', true);
     }
    else {
        capivara.setVelocityX(0);
        capivara.anims.play('turn');
    }*/
    /*if (esquerda1==true) {
        capivara.setVelocityX(-160);
        capivara.anims.play('left', true);
    }*/
};
