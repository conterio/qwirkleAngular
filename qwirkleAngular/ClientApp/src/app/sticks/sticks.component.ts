import { Component } from '@angular/core';

@Component({
  selector: 'app-sticks-component',
  templateUrl: './sticks.component.html'
})
export class SticksComponent {  
  public sticks = 21;
  public logs = [];
  public trickPlayer = 0;
  public playerTookOne = false;
    
  public takeOne() {
    this.playerTookOne = true;
    this.trickPlayer = 0;
    if (this.sticks == 1) {
      this.sticks = 0;
      this.addToLog("", true);
    } else {
      --this.sticks;
      this.addToLog("You took 1 stick.", true);
      this.computersTurn();
    }
  }

  public takeTwo() {
    ++this.trickPlayer;
    if (this.sticks < 3) {
      this.sticks = 0;
      this.addToLog("", true);
    } else {
      this.sticks = this.sticks - 2;
      this.addToLog("You took 2 sticks.", true);
      this.computersTurn();
    }
  }

  public computersTurn() {

    if (this.trickPlayer > 4) {
      if (this.playerTookOne == true) {

      } else {
        this.trickPlayer = 0;
        this.sticks = this.sticks - 2;
        this.addToLog("Computer took 2 sticks.", false);
        this.trickPlayer = 0;
        return;
      }      
    }

    let mod = this.sticks % 3;
    if (mod == 0) {
      this.sticks = this.sticks - 2;
      this.addToLog("Computer took 2 sticks.",false);
    } else {
      --this.sticks;
      this.addToLog("Computer took 1 stick.",false);
    }
  }

  public addToLog(message, playersTurn) {    
    this.logs.push(message + ` Sticks Left: ${this.sticks}`);
    if (this.sticks < 1 && playersTurn == true) {
      this.logs.push("You took the last stick. You Lose!");
    } else if (this.sticks < 1 && playersTurn == false) {
      this.logs.push("Computer Took the last Stick. You Win!");
    }
  }

  public getStickCount = function () {
    return new Array(this.sticks);
  }

  public resetGame() {    
    this.sticks = 21;
    this.logs = [];
    this.trickPlayer = 0;
    this.playerTookOne = false;
  }

}
