document.getElementById('burger').addEventListener('click', (e) => {
    let navContent = document.getElementById('nav-list')

    if (navContent.style.display === 'none') {
        navContent.style.display = 'block'
        console.log('Navbar is now visible')
    } else {
        navContent.style.display = 'none'
        console.log('Navbar is now hidden')
    }
})
