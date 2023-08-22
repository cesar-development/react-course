const url = 'https://jsonplaceholder.typicode.com/users'

const fn = async () => {
  const response = await fetch(url, {
    method: 'POST', // GET, POST, PUT, PATCH, DELETE
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer acadebieseexistiruntokendeautorizacion'
    },
    body: JSON.stringify({
      name: 'Chanchito feliz',
      website: 'google.com'
    })
  })

  const data = await response.json()
  
  return data
}

console.log(fn())
