//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name,status,color,hungry) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog("sadie","normal","black",false);

let moonshine = new Dog("moonshine","normal","brown",true);

let atticus = new Dog("atticus","normal","brown", false);

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name,cool) {
  this.name = name;
  this.cool = cool;
  this.pet = function(dog){
    dog.status = "happy";
  }
  this.feed = function(dog){
    dog.hungry = false;
  }
}

// Instances of Human
// Needed: mason, julia

let mason = new Human("mason",false);
let julia = new Human("julia",true);
