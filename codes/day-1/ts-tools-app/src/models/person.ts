export class Person {

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