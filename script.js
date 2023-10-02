const url = "https://jsonplaceholder.typicode.com/users"

const ricerca = document.querySelector('#ricerca')

let filtro = document.querySelector('#filtro')

let contenuto = document.querySelector(".container .row")

// FUNZIONE PER FAR APPARIRE I DATI RICHIESTI DELLE PERSONE
const getData = async () => {
    const response = await fetch(url)
    const result = await response.json()

    contenuto.innerHTML = result.map((data) => {
        return /*html*/ `
        <table class="table">
        <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>        
        <tr class="list">
                    <td class="name">${data.name}</td>
                    <td class="username">${data.username}</td>
                    <td class="email">${data.email}</td>
        </tr>
        </tbody>
        </table>
        `
    }).join('')
}

window.onload = () => {
    try {
        getData()
    } catch (error) {
        console.log(error)
    }
}


// FUNZIONE CHE FA UTILIZZARE LA RICERCA (INPUT DI TESTO) E VARIA IN BASE AL FILTRO (DROPDOWN)
function searchData() {
    let query = ricerca.value.toLowerCase()
    let filtroID = filtro.value
    let allData = document.querySelectorAll(`.${filtroID}`)

    allData.forEach(data => {
        const dataCorrente = data.parentElement.parentElement.parentElement
        if(!(data.textContent.toLowerCase()).includes(query)){
            dataCorrente.style.display = 'none'
        } else {
            dataCorrente.style.display = ''
        }
    })
}

ricerca.addEventListener('input', searchData)

filtro.addEventListener('change', searchData)

searchData()