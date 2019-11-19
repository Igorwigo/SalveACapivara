var winScene2 = new Phaser.Scene('win2');

winScene2.init = function () {
};

winScene2.preload = function () {
};

winScene2.create = function () {
    let bg = this.add.sprite(0, 0, 'background');
    bg.setOrigin(0, 0);
   

    this.add.text(100, 50, 'Vitória', { fontSize: '100px', fontFamily: 'Arial', fill: '#fff' });
    this.add.text(40, 150, 'Você zerou nosso jogo!', { fontSize: '33px', fill: '#fff', fontFamily: 'Arial' });

};


