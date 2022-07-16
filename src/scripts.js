function showSubMenu(tab){

    var trigger = document.getElementById(tab + '-trigger');
    var submenu = document.getElementById(tab + '-submenu');

    if(trigger.classList.contains('active-menu-trigger')){
        trigger.classList.remove('active-menu-trigger');
        submenu.style.display = "none";
    } else {
        var submenus = document.getElementsByClassName('submenu');        
        for(var x = 0; x < submenus; x++){
            x.style.display = 'none';
        }
        submenu.style.display = "flex";
        trigger.classList.add('active-menu-trigger');
    }
}