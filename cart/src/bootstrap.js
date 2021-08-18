import fake from 'faker'

const mount = (el) => {
    const cartText = `<div>You have ${fake.random.number(100)} items in your cart</div>`

    el.innerHTML = cartText
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-cart')
    if(el){
        mount(el)
    }
}

export { mount}