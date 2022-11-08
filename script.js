let carts = document.getElementsByClassName('.add-cart')


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {

        var addCart = document.getElementsByClassName('.add-cart');
        cartNumbers();


    })
}

function cartNumbers() {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt('productNumbers');

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.add-cart').textContent(productNumbers + 1);

    }

    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.add-cart').textContent = 1;
    }

}