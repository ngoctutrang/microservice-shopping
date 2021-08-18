import fake from 'faker'

const cartText = `<div>You have ${fake.random.number(100)} items in your cart</div>`

document.querySelector('#dev-cart').innerHTML = cartText