import { domainToUnicode } from "url"
import { Container } from "./IoC/container"
import { Person } from "./models/person"
import { people } from "./repository/people"

const btnObj = document.getElementById('btnSubmit')
btnObj?.addEventListener('click', createPerson)

function createPerson() {

    const txtIdObj = <HTMLInputElement>document.getElementById('txtId')
    const id = Number(txtIdObj?.value)

    const txtNameObj = <HTMLInputElement>document.getElementById('txtName')
    const name = txtNameObj?.value

    const txtSalaryObj = <HTMLInputElement>document.getElementById('txtSalary')
    const salary = +(txtSalaryObj?.value)

    const obj: Person = new Person(id, name, salary)

    const manager: Manager<Person> = Container.create()
    window.alert(manager.add(obj) ? "added" : "could not add")
    createRow(obj)
}

function createRow(person: Person) {

    const tbody = document.getElementById('personTbdoy')
    if (tbody && tbody.hidden) {
        tbody.hidden = false
    }

    const tdId = <HTMLTableCellElement>document.createElement('td')
    tdId.innerText = person.id.toString()

    const tdName = <HTMLTableCellElement>document.createElement('td')
    tdName.innerText = person.name

    const tdSalary = <HTMLTableCellElement>document.createElement('td')
    tdSalary.innerText = person.salary.toString()


    const deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Delete"
    deleteBtn.type = "button"
    deleteBtn.classList.add('btn', 'btn-danger')
    deleteBtn.addEventListener('click', deleteRow)

    const tdDelete = document.createElement('td')
    tdDelete.appendChild(deleteBtn)

    const row = <HTMLTableRowElement>document.createElement('tr')

    row.append(tdId, tdName, tdSalary, tdDelete)

    tbody?.appendChild(row)
}

function deleteRow() {
    window.alert('deleted')
}