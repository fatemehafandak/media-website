let teams=document.querySelectorAll('.teams-1')
let team=document.querySelector('.teams')
let about=document.querySelector('.about')
let abt=document.querySelectorAll(".abt")

window.onload=function(){
let drive=document.querySelector(".drive")

setTimeout(() => {
    drive.style.transform="translateX(100%)"
}, 500);

let img=document.querySelectorAll('.img')
let a=document.querySelectorAll(".a")
let b=document.querySelectorAll(".b")

img.forEach(item=>{
    item.addEventListener("mouseover",function(){
        item.children[0].style.display="block"
        item.children[1].style.transform="translateY(0)"
    })
    item.addEventListener("mouseout",function(){
        item.children[0].style.display="none"
        item.children[1].style.transform="translateY(200%)"
    })
})

teams.forEach(item=>{
    item.addEventListener("mouseover",function(){
        item.children[0].style.transform="scale(1.2)"
        item.children[1].style.transform="translateY(0)"
    })
    item.addEventListener("mouseout",function(){
        item.children[0].style.transform="scale(1)"
        item.children[1].style.transform="translateY(-100%)"
    })

})

abt.forEach(item=>{
    item.addEventListener("mouseover",function(){
        item.style.transform="scale(1.1)"
        item.style.boxShadow="0 0 1px 2px rgba(12, 125, 129, 0.4)"
    })
    item.addEventListener("mouseout",function(){
        item.style.transform="scale(1)"
        item.style.boxShadow="none"
    })
})
let bld=document.querySelectorAll(".bld")
bld.forEach(item=>{
    item.addEventListener("mouseover",function(){
        item.style.transform="scale(1.05)"
        item.style.boxShadow="0 0 1px 3px rgba(12, 125, 129, 0.4)"
    })
    item.addEventListener("mouseout",function(){
        item.style.transform="scale(1)"
        item.style.boxShadow="none"
    })
})
}


window.addEventListener("scroll",function(){

if (window.scrollY>about.offsetTop-200) {

    abt.forEach(item=>{
        item.style.transform="scale(1)"
    })
}else{
    abt.forEach(item=>{
        item.style.transform="scale(0)"
    }) 
}
if (window.scrollY>team.offsetTop-250) {
    teams.forEach(item=>{
        item.style.transform="scale(1)"
    })
} else {
    teams.forEach(item=>{
        item.style.transform="scale(0)"
    })
    
}
})

let aboutt=document.querySelector('.aboutt')
let workk=document.querySelector('.workk')
let works=document.querySelector('.work')
let teamm=document.querySelector(".teamm")
let service=document.querySelector(".services")
let test=document.querySelector(".service")
let contactt=document.querySelector('.contactt')
let contact=document.querySelector('.contact')

aboutt.addEventListener('click',function(){
    window.scrollBy(0 , about.offsetTop)
})
workk.addEventListener("click",function(){
    window.scrollBy(0 , works.offsetTop)
})
teamm.addEventListener("click",function(){
    window.scrollBy(0 , team.offsetTop)
})
service.addEventListener("click",function(){
    window.scrollBy(0 , test.offsetTop-200)
})
contactt.addEventListener("click",function(){
    window.scrollBy(0 , contact.offsetTop)
})
