import faker from 'faker'
const mount = (el) => {
        let products = '';

        for (let i = 0; i < 3; i++){
            const name = faker.commerce.productName()
            products += `<div>${name}</div>`
        }
    what();
    function what(){
        el.innerHTML=products
    };

   
    

}
console.log('process.env.NODE_ENV', process.env.NODE_ENV)

//Use on develop
if (process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products')
    if(el){
        mount(el)
    }
}

export {mount}