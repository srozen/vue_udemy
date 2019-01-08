var app = new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    actionLog: []
  },
  methods: {
    startGame: function(){
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.actionLog = [];
    },
    attack: function(){
      var dmg = this.damage(3,10);
      this.monsterHealth -= dmg;
      var message = "Player dealt " + dmg + " damages";
      this.logger(message, true);
      if (this.checkVictory()){
        return;
      }
      this.monsterTurn();
    },
    specialAttack: function(){
      var dmg = this.damage(10,20);
      this.monsterHealth -= dmg;
      var message = "Player dealt " + dmg + " damages";
      this.logger(message, true);
      if (this.checkVictory()){
        return;
      }
      this.monsterTurn();
    },
    heal: function(){
      if (this.playerHealth <= 90){
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }
      var message = "Player heal 10 HP";
      this.logger(message, true);
      this.monsterTurn();
    },
    giveUp: function(){
      this.gameIsRunning = false;
    },
    damage: function(min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    },
    monsterTurn: function(){
      var dmg = this.damage(5, 12);
      this.playerHealth -= dmg;
      var message = "Monster dealt " + dmg + " damages";
      this.logger(message, false);
      this.checkVictory();
    },
    checkVictory: function(){
      if (this.monsterHealth <= 0){
        if (confirm('You Won! New Game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0){
        if (confirm('You Lose! New Game?')){
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
    logger: function(message, player){
      this.actionLog.unshift({message: message, player: player})
    }
  }
});