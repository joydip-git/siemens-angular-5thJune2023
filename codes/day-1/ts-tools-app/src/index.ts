class Person {

    constructor(private _id: number, private _name: string, private _salary: number) {
    }

    public get salary(): number {
        return this._salary;
    }
    public set salary(value: number) {
        this._salary = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    print() {
        return `name=${this._name},
        salary=${this._salary},
        id=${this._id}
        `
    }
}

const anilObj: Person = new Person(1, "anil", 1000)
const sunilObj: Person = new Person(2, "sunil", 2000)

const people: Person[] = [anilObj, sunilObj]

people
    .filter(
        (p: Person) => p.salary > 1500
    )
    .forEach(
        (p: Person) => console.log(p.name)
    )

console.log('this is typescript')