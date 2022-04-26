import '../assets/sass/main.scss';
import $ from 'jquery';



window.addEventListener('load', () => {
    initEventsInSidebar();

})


const initEventsInSidebar = () => {
    const sideItems = document.querySelectorAll('.menu_item');
    sideItems.forEach(i => {
        i.addEventListener('click', (ev) => {
            sideItems.forEach(i_ => {
                if (!ev.composedPath().includes(i)) {
                    i_.classList.remove('opened');
                }
            })
            if (i.querySelector('.submenu')) {
                i.classList.toggle('opened');
            }
        })
    })
}

let aside = document.querySelector('.sidebar');
let navhtml = `<header class="header">
<div class="header_holder">
    <div class="header_brand">
        <a  alt="logotipo" href="/"><img src="/assets/img/logo.svg" alt="logotipo" class="logo"></a>
    </div>
</div>
<div class="separador"></div>
</header>


<nav class="menu_wrap_scroll">

<div class="menu_group">
    <h5 class="menu_tagline">Fundamentales</h5>
    <ul class="menu">
        <li id="valores" class="menu_item">
            <div class="menu_item_heading">
                <a  class="element" href="/pages/valores.html">Valores</a>
            </div>
        </li>
        

        <li class="menu_item">
            <div class="menu_item_heading">
                <div class="element">Basics</div>
                <span class="fa icon-fa-down"></span>
            </div>
            <div class="menu_item_submenu">
                <ul class="submenu">
                    <li class="submenu_item"><a class="element" href="/pages/logos.html">Logos</a>
                    </li>
                    <li class="submenu_item"><a class="element" href="/pages/color.html">Color</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/tipo.html">Tipografía</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/icons.html">Iconos</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/grid.html">Grid</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/imagen.html">Imagen</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/ilustracion.html">Ilustración</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/animacion.html">Animación</a></li>

                </ul>
            </div>
        </li>


        
    </ul>
</div>

<div class="menu_group">
    <h5 class="menu_tagline">User Interface</h5>
    <ul class="menu">

        <li class="menu_item">
            <div class="menu_item_heading">
                <a class="element" href="#">Componentes</a>
                <span class="fa icon-fa-down"></span>
            </div>
            <div class="menu_item_submenu">
                <ul class="submenu">
                    <li class="submenu_item"><a class="element" href="/pages/ui/botones.html">Botones</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/ui/cards.html">Cards</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/ui/inputs.html">Inputs</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/ui/cabeceras.html">Cabeceras</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/ui/cintillos.html">Cintillos</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/ui/notificaciones.html">Notificaciones y alertas</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/ui/navegacion.html">Navegación</a></li>
                    <li class="submenu_item"><a class="element" href="/pages/ui/patrocinios.html">Patrocinios</a></li>
                    
                </ul>
            </div>
        </li>

        <li class="menu_item">
            <div class="menu_item_heading">
                <a href="/pages/ui/prototipo.html" class="element">Prototipo</a>
            </div>
        </li>

    </ul>
</div>
</nav>`;

aside.innerHTML = navhtml;


//PÁGINA ACTIVA
let pageAct = $('.sidebar').attr('page');
console.log(pageAct);

let pages = [];
let getPages = () => {
    let items = $('.element');
    for (let i = 0; i < items.length; i++) {
        let page = items[i].innerText;
        let parent = $(items[i]).parents(".menu_item");
        if (page == pageAct) {
            $(parent).addClass('active');
        }
    }




}

getPages();

//ABRIR MENÚ EN MOBIL
let openMenu = () => {
    let burguer = $('.hamburguer');
    let burguersvg = $('.hamburguer > img');

    burguer.on('click', function () {
        if ($(aside).hasClass('closed')) {
            console.log(burguer);
            burguersvg.attr('src', '/assets/img/menu_opened.svg');
            $(aside).removeClass('closed');
        } else {
            console.log(aside);
        burguersvg.attr('src', '/assets/img/hamburguer.svg');
        $(aside).addClass('closed');
        }
    })


    

}
openMenu();


//BOTÓN TEMA 
let vectorWrapp = $('.vectorWrapp');
let botonL = $('.lightTheme');
let botonD = $('.darkTheme');
let tema = 'dark';
let lightVector = $('.lightVector');
let darkVector = $('.darkVector');
const lightButton = $('.lightTheme');
const darkButton = $('.darkTheme');
const downloads = $('.downloads');

//CAMBIAR DESCARGABLES

let lightDownloads = () => {

    document.getElementById('logo').href = '/assets/img/logo_light.svg';
    document.getElementById('logo').innerHTML = `<div class="downloadButton"></div>
        <h4 class="titleD">Logotipo espín light<br><span>SVG</span></h4>`;
    document.getElementById('intv').href = '/assets/img/intv_logo_light.svg';
    document.getElementById('intv').innerHTML = `<div class="downloadButton"></div>
        <h4 class="titleD">Logotipo ínTV light<br><span>SVG</span></h4>`;
    document.getElementById('in').href = '/assets/img/in_logo_light.svg';
    document.getElementById('in').innerHTML = `<div class="downloadButton"></div>
        <h4 class="titleD">Logotipo espín mini light<br><span>SVG</span></h4>`;


}
let darkDownloads = () => {
    console.log('func')
    document.getElementById('logo').href = '/assets/img/logo.svg';
    document.getElementById('logo').innerHTML = `<div class="downloadButton"></div>
        <h4 class="titleD">Logotipo espín<br><span>SVG</span></h4>`;
    document.getElementById('intv').href = '/assets/img/intv_logo.svg';
    document.getElementById('intv').innerHTML = `<div class="downloadButton"></div>
        <h4 class="titleD">Logotipo ínTV<br><span>SVG</span></h4>`;
    document.getElementById('in').href = '/assets/img/in_logo.svg';
    document.getElementById('in').innerHTML = `<div class="downloadButton"></div>
        <h4 class="titleD">Logotipo espín mini<br><span>SVG</span></h4>`;


}


let changeTheme = () => {
    botonL.click(
        function () {
            tema = 'light';
            console.log(tema);
            lightVector.removeClass('none');
            darkVector.addClass('none');
            vectorWrapp.removeClass('darkWrapp');
            vectorWrapp.addClass('lightWrapp');
            darkButton.removeClass('active');
            lightButton.addClass('active');
            downloads.addClass('shadow');
            lightDownloads();
        }
    )
    botonD.click(
        function () {
            tema = 'dark';
            console.log(tema);
            darkVector.removeClass('none');
            lightVector.addClass('none');
            vectorWrapp.addClass('darkWrapp');
            vectorWrapp.removeClass('lightWrapp');
            darkButton.addClass('active');
            lightButton.removeClass('active');
            downloads.removeClass('shadow');
            darkDownloads();
        }
    )

}
changeTheme();


//Grid display

const desktopB = $('#desktopB');
const tabletB = $('#tabletB');
const mobileB = $('#mobileB');
const device = $('#device');
const content = $('#content');
let deviceState = 'desktop';
let changeDevice = () => {
    desktopB.click(
        function () {
            if (deviceState != 'desktop') {
                deviceState = 'desktop';
                device.removeClass();
                mobileB.removeClass('active');
                tabletB.removeClass('active');

                desktopB.addClass('active');
                device.addClass('desktop');
            }
        }
    )
    mobileB.click(
        function () {
            if (deviceState != 'mobile') {
                deviceState = 'mobile';
                device.removeClass();
                desktopB.removeClass('active');
                tabletB.removeClass('active');
                mobileB.addClass('active');
                device.addClass('mobile');
            }
        }
    )
    tabletB.click(
        function () {
            if (deviceState != 'tablet') {
                deviceState = 'tablet';
                device.removeClass();
                desktopB.removeClass('active');
                mobileB.removeClass('active');
                tabletB.addClass('active');
                device.addClass('tablet')
            }
        }
    )
}



if (pageAct == 'Grid') {
    changeDevice();



}
