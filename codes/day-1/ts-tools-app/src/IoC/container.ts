import { PersonManager } from "../manager/person-manager";
import { Person } from "../models/person";

export class Container {
    public static create(): Manager<Person> {
        return new PersonManager()
    }
}