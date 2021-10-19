interface Named {
  readonly name: string;
}

// in type we can store any values as literal, unions and other types, in interfaces only object or function types, and also interfaces can extend another one

type ToolType = {
  name2: string;
};
interface ToolFull extends Named {
  price: number;
  downloadingCounts: number;
}

class ToolMaker implements ToolFull, ToolType {
  dataFromTheSide: string; // we have to implement all properties from iterface but also we can add another properties
  constructor(
    public name: string,
    public name2: string,
    public price: number,
    public downloadingCounts: number,
    dataFromTheSide: string
  ) {
    this.dataFromTheSide = dataFromTheSide;
  }
}

let towardCss: ToolFull;
towardCss = new ToolMaker("string", "towardCss", 0, 100, "sideData");
console.log(towardCss);

// type addFn = (a: number, b: number) => number

// not very useful but sometimes you may find that inside project
interface addFn {
  (a: number, b: number): number;
}

let add: addFn = (n1, n2) => n1 + n2;
console.log("asffa");
interface ClickableAndTouchable {
  allowClick: boolean;
  allowTouch: boolean;
}
