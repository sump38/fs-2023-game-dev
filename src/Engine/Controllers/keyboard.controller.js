export default class Controller {
  constructor() {
    this.upButton = false;
    this.downButton = false;
    this.leftButton = false;
    this.rightButton = false;
    this.actionOne = false;
    this.actionTwo = false;


    this.events = [];
    
    window.addEventListener('keydown', (event) => {
      switch(event.code) {
        case ('ArrowRight'): {
          this.rightButton = true;
          break;
        }
        case ('ArrowLeft'): {
          this.leftButton = true;
          break;
        }
        case ('ArrowUp'): {
          this.upButton = true;
          break;
        }
        case ('ArrowDown'): {
          this.downButton = true;
          break;
        }
        case ('ControlLeft'): {
          this.actionOne = true;
          break;
        }
        case ('Space'): {
          this.actionTwo = true;
        }
        default: {
          break;
        }
      }
    });

    window.addEventListener('keyup', (event) => {
      switch(event.code) {
        case ('ArrowRight'): {
          this.rightButton = false;
          break;
        }
        case ('ArrowLeft'): {
          this.leftButton = false;
          break;
        }
        case ('ArrowUp'): {
          this.upButton = false;
          break;
        }
        case ('ArrowDown'): {
          this.downButton = false;
          break;
        }
        case ('ControlLeft'): {
          this.actionOne = false;
          break;
        }
        case ('Space'): {
          this.actionTwo = false;
        }
        default: {
          break;
        }
      }
    });
  }

  update() { 
    this.events.forEach(event => {
      event(this);
    })
  }

  /**
   * 
   * @callback controllerCallback
   * @param {Controller} c
   * 
   */

  /**
   * @param {controllerCallback} cb
   */
  register(cb) {
    this.events.push(cb);
  }
}