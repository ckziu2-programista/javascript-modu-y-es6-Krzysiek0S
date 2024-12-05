import { addUser, removeUser, findUser } from './userManager.js'

const users = []

addUser(users, { id: 1, name: 'Jan Kowalski' })
addUser(users, { id: 2, name: 'Anna Nowak' })
addUser(users, { id: 3, name: 'Piotr Wiśniewski' })

console.log('Lista użytkowników po dodaniu:')
console.log(users)

removeUser(users, 2)

console.log('Lista użytkowników po usunięciu:')
console.log(users)

const user = findUser(users, 1)
console.log('Znaleziony użytkownik:')
console.log(user)
