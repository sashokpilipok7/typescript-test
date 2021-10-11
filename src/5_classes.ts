console.log("Hello geys"); //  public private protected / readonly static
abstract class Cars {
  static manufactureCountry = "Ukraine";
  protected details: string[] = []; // private key gives access only from currrent class but protected gives access from any extended class

  constructor(public readonly name: string, private model: string) {}

  static makeSimpleCar(name: string, model: string) {
    // static method which we can use without making instance of class, it"s like utils function inside Cars namespacing
    return { name, model, country: Cars.manufactureCountry };
  }

  getModel(this: Cars) {
    // this always ref to instance of current Class
    return this.model;
  }

  addDetail(detail: string) {
    this.details.push(detail);
  }

  printDetailsInformation() {
    console.log(this.details.length);
    console.log(this.details);
  }

  abstract printCarPresentation(this: Cars): void;
}

// const lada = new Cars("lastochka", "vaz-2110");
// console.log(lada, "lada");

// lada.addDetail("kapot");
// // lada.details = [];

// lada.printDetailsInformation();

class Mercedes extends Cars {
  get get_additionalFeatures() {
    return this.additionalFeatures;
  }

  constructor(model: string, private additionalFeatures: string[]) {
    super("Mercedes", model);
    this.details = [];
  }

  addDetail() {
    this.details = ["ha ha from ihertianced class"];
  }

  printAdditionalFeatures() {
    return this.additionalFeatures;
  }

  printCarPresentation() {
    console.log(
      `The name is ${this.name}, and the new super model is ${this.getModel()}`
    );
  }
}
// const car = new Cars("lada", "2110");
const mercGl = new Mercedes("gl", ["multiHelm"]);
// console.log("lada", lada);
console.log("mercGl", mercGl);

console.log(Cars.makeSimpleCar("deo", "lanus"));
mercGl.printCarPresentation();

//-------------------------------
// private constructor - singelton = it's oop pattern

class SelfMadeBuggati extends Cars {
  private static instance: SelfMadeBuggati;

  private constructor() {
    super("buggati", "noire");
  }
  printCarPresentation() {}

  static getItem() {
    if (!SelfMadeBuggati.instance) {
      this.instance = new SelfMadeBuggati();
    }
    return this.instance;
  }
}

const myCar = SelfMadeBuggati.getItem();
console.log(myCar);

myCar.addDetail("brakes");
myCar.addDetail("helm");
console.log(myCar);
console.log(myCar.printDetailsInformation());
