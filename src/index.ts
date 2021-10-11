// and also core idea of generic types is  flexibility and still strong typed, it's types which do something with other types
//в визовві функції ти робиш тільки те що тобі треба з конкретним типом переданим дженеріку, в випадку якщо заюзати юніон, тобі при запуску буде дозволено працювати з будь яким типом з переліку, це не є те що нам треба
//generic for the same types in each function calls or classes instance, union for allowing different types from the list on each call
class DataStorage<T extends string | number | boolean> {
  private data: Array<T> = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}
//flexibility combine with type safety to work with class or result of function
const numberStorage = new DataStorage<number>();
const textStorage = new DataStorage<string>();

// const objStorage = new DataStorage<object>();

interface CourseGoal {
  title: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, completeUntil: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; // utility types
  courseGoal.title = title;
  courseGoal.completeUntil = new Date();
  return courseGoal as CourseGoal;
}

const arr: Readonly<string[]> = ["sasha", "ruslana"];
// arr.push('faf')
