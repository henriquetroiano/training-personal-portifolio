const menuButton = document.querySelector('#navbar');

menuButton.addEventListener('click', function(event) {
    const menu = document.querySelector('#navbar ul');
    menu.classList.toggle('hide')
    
})