var mainScene = new Phaser.Scene('main');
console.log("FASE-------------1")
mainScene.init = function () {
};

mainScene.preload = function () {
    this.load.image('background', 'assets/images/background.png');
    this.load.spritesheet('capivara', 'assets/images/capivara.png', { frameWidth: 75, frameHeight: 48 });
    this.load.image('botao','assets/images/botao.png')
    this.load.image('triangulo','assets/images/triangulo.png')
    this.load.image('quadrado','assets/images/quadrado.png')
    this.load.image('bola','assets/images/bola.png')
};

mainScene.create = function () {

  

    let bg = this.add.image(0, 0, 'background');
    bg.setOrigin(0, 0);

    capivara = this.physics.add.sprite(30, 250, 'capivara');
    capivara.setScale(1);

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

    
    esquerda1=false;
    direita1=false;


    cursors = this.input.keyboard.createCursorKeys();

    var img_triangulo = this.add.image(219,40,'triangulo');

    var img_bola = this.add.image(293,40,'bola');
    
    var img_quadrado = this.add.image(367,40,'quadrado');
    /*------------------------------Logica das ordens-------------------------------- */
    
    let lista = [false,false,false];
    /*-------------------------------------------------------------- */


console.log(lista)
    
    /* Adicionado o SCORE*/
    score= 0;
    var scoreText;
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '28px', fill: '#000' });
    /*-------------------------------------------------------------- */
    
        /*----------------------------BOTAO_TRIANGULO---------------------------------- */
      
      
        //  var botao_bola = this.add.image(293, 315, 'bola').setInteractive();

    var botao_triangulo = this.add.image(293, 315, 'triangulo').setInteractive();
    botao_triangulo.on('pointerdown', function (event) {
        if(img_triangulo.texture.key=="triangulo" && lista[0]==false && lista[1]==false && lista[2]==false){
        img_triangulo.setVisible(false);
        console.log("Triângulo")
        botao_triangulo.disableInteractive();
        score += 10;
        scoreText.setText('Score: ' + score);
        console.log("entrou no if - ",lista)
        lista[0]=true;
        lista[1]=true;
        esquerda1=true;
        direita1=true;
    }
    else{
        
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
    }
     else{
      
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
        
        console.log('quadrado if',lista)
      }
        else{
          lista[2]=false;
          score -= 10;
          scoreText.setText('Score: ' + score);
          botao_quadrado.disableInteractive();
          img_quadrado.setVisible(false)

        }

      });
    /*-------------------------------------------------------------- */


  
};






mainScene.update = function () {

  if(score==30 ){
    localStorage.setItem("placar1",score);
    this.scene.start('win');
 }
  



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
    if ( direita1==true) {
        capivara.setVelocityX(160);
        capivara.anims.play('right', true);
        
    }
    else{

        capivara.setVelocityX(0);
        capivara.anims.play('turn');

    }
};
