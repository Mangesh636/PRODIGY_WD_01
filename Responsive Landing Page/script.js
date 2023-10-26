var NavList = document.getElementById('nav-list');

NavList.style.maxHeight = '0px';

function NavToggle() {
    if (NavList.style.maxHeight == '0px') {
        NavList.style.maxHeight = '130px';
    } else {
        NavList.style.maxHeight = '0px';
    }
}