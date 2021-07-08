const switcher = document.querySelector('.switch')
// ночной режим
function nightMode(){
    if (night ===  false){
        night = true;
        document.body.classList.add('night')
        document.querySelector('.header').classList.add('header-night-mode')
        document.querySelector('.header > h1').style.color = '#fff';
        document.querySelector('.header-text').style.color = '#fff';

        document.querySelectorAll('.wrap-block').forEach(item => {
            item.classList.add('wrap-block__night');
        });
        document.querySelectorAll('.wrap-block > h2').forEach(item => {
            item.style.color = '#fff';
        });

        document.querySelectorAll('.btn-size').forEach(item => {
            item.classList.add('btn-size__night')
            item.style.backgroundColor = 'rgb(75, 0, 130, 0.4)'
            item.style.color = '#fff'
        })
        document.querySelectorAll('.btn-block').forEach(item => {
            item.style.backgroundColor = 'rgb(75, 0, 130, 0.4)'
            item.style.color = '#fff'
        })

        document.querySelectorAll('.price').forEach(item => {
            item.style.color = '#fff';
        })
        document.querySelector('.btn-add').classList.add('btn-add__night')
    }else{
        night = false
        document.body.classList.remove('night')
        document.querySelector('.header').classList.remove('header-night-mode')
        document.querySelector('.header > h1').style.color = '#000';
        document.querySelector('.header-text').style.color = '#000';

        document.querySelectorAll('.wrap-block').forEach(item => {
            item.classList.remove('wrap-block__night')
        });
        document.querySelectorAll('.wrap-block > h2').forEach(item => {
            item.style.color = '#000';
        });

        document.querySelectorAll('.btn-size').forEach(item =>{
            item.classList.remove('btn-size__night')
            item.style.backgroundColor = '#fff'
            item.style.color = '#000';

        })
        document.querySelectorAll('.btn-block').forEach(item =>{
            item.style.backgroundColor = 'rgb(0,0,0,0.07)';
            item.style.color = '#000'
        })

        document.querySelectorAll('.price').forEach(item => {
            item.style.color = '#000';
        })
        document.querySelector('.btn-add').classList.remove('btn-add__night')
    }
}

let night = false;

switcher.addEventListener('change', () => {
    nightMode();
})
// Функция с изменением цены
function imgChange(){
    //XR
    document.getElementById('btn-black__XR').addEventListener('click', () => {
        document.getElementById('iphoneXR').src = '/img/XR/1.jpg'
    })
    document.getElementById('btn-red__XR').addEventListener('click', () => {
        document.getElementById('iphoneXR').src = '/img/XR/2.jpg'
    })
    document.getElementById('btn-yellow__XR').addEventListener('click', () => {
        document.getElementById('iphoneXR').src = '/img/XR/3.jpg'
    })
    //X
    document.getElementById('btn-white__X').addEventListener('click', () => {
        document.getElementById('iphoneX').src = 'img/X/1.png'
    })
    document.getElementById('btn-black__X').addEventListener('click', () => {
        document.getElementById('iphoneX').src = 'img/X/2.png'
    })
    // 8
    document.getElementById('btn-white__8').addEventListener('click', () => {
        document.getElementById('iphone8').src = 'img/8/1.png'
    })
    document.getElementById('btn-black__8').addEventListener('click', () => {
        document.getElementById('iphone8').src = 'img/8/2.png'
    })
    document.getElementById('btn-yellow__8').addEventListener('click', () => {
        document.getElementById('iphone8').src = 'img/8/3.png'
    })
    // XS
    document.getElementById('btn-white__XS').addEventListener('click', () => {
        document.getElementById('iphoneXS').src = 'img/XS/1.png'
    })
    document.getElementById('btn-black__XS').addEventListener('click', () => {
        document.getElementById('iphoneXS').src = 'img/XS/2.png'
    })
    document.getElementById('btn-yellow__XS').addEventListener('click', () => {
        document.getElementById('iphoneXS').src = 'img/XS/3.png'
    })
    // SE
    document.getElementById('btn-white__SE').addEventListener('click', () => {
        document.getElementById('iphoneSE').src = 'img/SE/1.png'
    })
    document.getElementById('btn-black__SE').addEventListener('click', () => {
        document.getElementById('iphoneSE').src = 'img/SE/2.png'
    })
    document.getElementById('btn-yellow__SE').addEventListener('click', () => {
        document.getElementById('iphoneSE').src = 'img/SE/3.png'
    })

}
imgChange()

const priceXR = ['799$', '899$', '999$'],
priceX = ['499$', '599$', '699$'],
price8 = ['400$', '500$', '600$'],
priceXS = ['1000$', '1100$', '1200$'],
priceSE = ['150$', '200$', '250$'];
// функция для смены цены
function btnPrice(btn64, btn128, btn256, text_block, priceBlock) {
    document.querySelector(btn64).addEventListener('click', () => {
        document.querySelector(text_block).innerHTML = priceBlock[0]
    })
    document.querySelector(btn128).addEventListener('click', () => {
        document.querySelector(text_block).innerHTML = priceBlock[1]
    })
    document.querySelector(btn256).addEventListener('click', () => {
        document.querySelector(text_block).innerHTML = priceBlock[2]
    })

}

function priceChange() {
    btnPrice('#btn64XR', '#btn128XR', '#btn256XR', '#iphoneXR-text', priceXR)
    btnPrice('#btn64X', '#btn128X', '#btn256X', '#iphoneX-text', priceX)
    btnPrice('#btn64__8', '#btn128__8', '#btn256__8', '#iphone8-text', price8)
    btnPrice('#btn64__XS', '#btn128__XS', '#btn256__XS', '#iphoneXS-text', priceXS)
    btnPrice('#btn64__SE', '#btn128__SE', '#btn256__SE', '#iphoneSE-text', priceSE)
}

priceChange()
// Загрузить ещё
function hiddenBlock(){
    btn = document.querySelector('.btn-add')
    btn.addEventListener('click', () => {    
        document.querySelectorAll('#newiphone').forEach(item => {
            item.classList.remove('display-none')
        })
        btn.remove()
    })
    

}
hiddenBlock()
