import { Person } from "../models/person"
import { people } from "../repository/people"

export class PersonManager implements Manager<Person> {
    add(obj: Person): boolean {
        let status = false
        const found = people.find(
            (p) => p.id === obj.id
        )
        if (!found) {
            status = true
            people.push(obj)
        }
        return status
    }
}