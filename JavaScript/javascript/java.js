let price = 1000

if (price < 100) {
    console.log("cheap")
} else if (price < 800) {
    console.log("Good price")
} else if (price < 2000) {
    console.log("Okay")
} else {
    console.log("Too Expensive")
}

function greetUser(greetUser) {
    console.log("Good morning " + greetUser)
}

greetUser('Chidex')
greetUser('Daddy')
greetUser('Mum')
greetUser('My love')
greetUser('World')


let users = ["Chidera", "John", "Dave", "Ngozi" ]

function signup(user) {
    users.push(user)
}

signup("Alex")
signup("Chidex")
console.log(users)