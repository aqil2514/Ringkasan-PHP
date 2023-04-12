const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const article = document.querySelectorAll('.content-container article');
const menuList = document.querySelectorAll('.menu-section');
const menuContainer = document.querySelectorAll('.art-menu-list');
let currentSide = 0;
let menuSide= 0;

menu.addEventListener('click', function(){
    menu.classList.toggle('menu-active');
    navbar.classList.toggle('navbar-active');
})

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbar.classList.contains(e.target)){
        menu.classList.remove('menu-active');
        navbar.classList.remove('navbar-active');
    }
})

function prevPage(currentArt, prevArt){
    currentArt = article[currentSide];
    prevArt = article[currentSide-1];
    if(prevArt == undefined){
        alert('ini adalah halaman pertama');
        return;
    } else{
        currentSide -=1;
        currentArt.classList.add('disactive-article');
        prevArt.classList.remove('disactive-article');
    }
}

function nextPage(currentArt, nextArt){
    currentArt = article[currentSide];
    nextArt = article[currentSide+1];
    if(nextArt == undefined){
        alert('Belum diupdate');
        return;
    } else{
        currentSide +=1;
        currentArt.classList.add('disactive-article');
        nextArt.classList.remove('disactive-article');
    }
}

function goToSide(slide){
    let currentArt = article[currentSide];
    let jumpSlide = article[slide];

    currentArt.classList.toggle('disactive-article');
    jumpSlide.classList.toggle('disactive-article');
    currentSide = slide;
}

function menuNext(){
    let currentMenu = menuContainer[menuSide];
    let nextMenu = menuContainer[menuSide + 1];

    if(nextMenu == undefined){
        alert('Ini halaman terakhir');
        return;
    }else{
        menuSide++;
        nextMenu.classList.toggle('menu-list-disactive');
        currentMenu.classList.toggle('menu-list-disactive');
    }
}

function menuPrev(){
    let currentMenu = menuContainer[menuSide];
    let prevMenu = menuContainer[menuSide - 1];

    if(prevMenu == undefined){
        alert('Ini halaman pertama');
        return;
    }else{
        menuSide--;
        prevMenu.classList.toggle('menu-list-disactive');
        currentMenu.classList.toggle('menu-list-disactive');
    }
}