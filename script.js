const url = "https://jsonplaceholder.typicode.com/users"

const getData = async () => {
    const response  = await fetch(url)
    const result = await response.json()
    // console.log(result)

}