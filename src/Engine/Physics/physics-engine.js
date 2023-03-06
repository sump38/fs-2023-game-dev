class PhysicsEngine {
  constructor() {
    this.objectList = [];
  }

  start() {

  }

  addObjectToList(object) {
    const index = this.objectList.indexOf(object);
    if(index === -1) {
      this.objectList.push()
    } 
  }

  removeObjcetFromList(object) {
    const index = this.objectList.indexOf(object);
    if(index !== -1) {
      this.objectList.splice(index, 1);
    }
  }

  


}