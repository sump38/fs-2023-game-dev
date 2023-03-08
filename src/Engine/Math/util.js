export default class Util {

  static minNumber = 0.001;


  static trunc(number) {
    if(Math.abs(number) < this.minNumber) {
      return 0;
    } 
    return number;
  }
}