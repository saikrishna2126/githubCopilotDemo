document.addEventListener('DOMContentLoaded', () => {
    console.log('Amazon Clone Loaded');

    const button = document.querySelector('.hero button');
    button.addEventListener('click', () => {
        alert('Shop Now button clicked!');
    });
});