import { add } from "./utility";

document
    .getElementById('btnAdd')?.
    addEventListener('click',
        function () {
            const first = Number((<HTMLInputElement>document.getElementById('txtFirst'))?.value)

            const second = Number((<HTMLInputElement>document.getElementById('txtSecond'))?.value)

            window.alert(add(first, second))
        }
    )