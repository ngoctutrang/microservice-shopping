import {mount as productMount} from 'products/ProductsIndex'
import {mount as cartMount} from 'cart/CartShow'

productMount(document.querySelector('#my-products'))
cartMount(document.querySelector('#dev-cart'))
console.log('Container!')