const menuItem = document.querySelectorAll('.menu-item');
const messageNotifiaction = document.querySelector('#message-notifications')
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search')
const theme = document.querySelector("#theme")
const themeModel = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.customize-size span')
var  root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1 ')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')
const faHeart = document.querySelectorAll("#heart")
const interaction = document.querySelector('.interaction-buttons')


interaction.addEventListener("click",() => {
    faHeart.forEach((item)=>{
        console.log(item)
        item.style.backgroundColor === "" ? item.style.backgroundColor  = "red" : item.style.backgroundColor = ""
    }) 
})
const changeActiveItem = () => {
    menuItem.forEach((item)=>{
        item.classList.remove('active')
    }) 
}
menuItem.forEach((item)=>{
item.addEventListener("click", () => {
    changeActiveItem()
    item.classList.add('active')
    if(item.id !== "notifications"){
        document.querySelector('.notification-popup').
        style.display = "none"
    }else{
        document.querySelector(".notification-popup").
        style.display ="block";
        document.querySelector('#notifications .notification-count').
        style.display = "none"

    }
})
})
messageNotifiaction.addEventListener("click", () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    messageNotifiaction.querySelector('.notification-count').style.display = "none"
    setTimeout(()=>{
        messages.style.boxShadow = "none"

    },2000)
})
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase()
    console.log(val)
    message.forEach((chat)=>{
        let name = chat.querySelector('h5').textContent.toLowerCase()
        if(name.indexOf(val) !== -1){
        chat.style.display = "flex";
        }else{
            chat.style.display = "none"
        }
    })
}
messageSearch.addEventListener("keyup"  ,searchMessage)
const openThemeModel = () => {
    themeModel.style.display = "grid"
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModel.style.display = "none"
    }
}
themeModel.addEventListener("click",closeThemeModal)
theme.addEventListener("click", openThemeModel)

const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active")
    })
}
fontSizes.forEach((size)=>{
    removeSizeSelector()
    let fontSize;
    size.addEventListener("click", () => {
    if(size.classList.contains('font-size-1')){
        fontSize = "10px";
        root.style.setProperty('--sticky-top-left', '5.4rem')
        root.style.setProperty('--sticky-top-right', '5.4rem')

    }else if (size.classList.contains('font-size-2')){
    fontSize = "13px"
    root.style.setProperty('--sticky-top-left', '5.4rem')
    root.style.setProperty('--sticky-top-right', '-7rem')

    }
    else if (size.classList.contains('font-size-3')){
        fontSize = "16px"
        root.style.setProperty('--sticky-top-left', '-2rem')
        root.style.setProperty('--sticky-top-right', '-17rem')

    }else if (size.classList.contains('font-size-4')){
        fontSize = "19px"
        root.style.setProperty('--sticky-top-left', '-5rem')
        root.style.setProperty('--sticky-top-right', '-25rem')

    }else if (size.classList.contains('font-size-5')){
        fontSize = "22px"
        root.style.setProperty('--sticky-top-left', '-12rem')
        root.style.setProperty('--sticky-top-right','-35rem')

     }
     document.querySelector('html').style.fontSize = fontSize
    })
})
const changeActive = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active')
    })  
}
colorPalette.forEach(color=>{
    color.addEventListener('click', () => {
        changeActive();
        if(color.classList.contains('color-1')){
            prmaryHue = 252;
        }else if(color.classList.contains('color-2')){
            prmaryHue = 52;
        }else if(color.classList.contains('color-3')){
            prmaryHue = 352;
        }else if(color.classList.contains('color-4')){
            prmaryHue = 152;
        }else if(color.classList.contains('color-5')){
            prmaryHue = 202;
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue', prmaryHue)

    })
})
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whiteColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)


}

Bg1.addEventListener('click', () => {
     Bg1.classList.add('active')
    Bg2.classList.remove('active')
    Bg3.classList.remove('active')
    window.location.reload()

})
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    Bg2.classList.add('active')
    Bg1.classList.remove('active')
    Bg3.classList.remove('active')
    changeBG()
})
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    Bg3.classList.add('active')
    Bg1.classList.remove('active')
    Bg2.classList.remove('active')
    changeBG()
})
