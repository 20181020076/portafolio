// const btnMenu = document.querySelector("#btnMenu");



// btnMenu.addEventListener("click", ()=>{
//     let men = document.getElementsByClassName("menu__desplegable")
//     men.style
// });
 function changeStyle(){
    // let element = document.getElementsByClassName("menu__desplegable");
    // element.height = "500px";
    // element.overflow = "visible";
    let element = document.getElementById("menu")
    let comp = element.currentStyle || getComputedStyle(element, null);
        if (comp.height == "0px"){
        element.setAttribute('style', 'height: 130px')
    }else{
        element.setAttribute('style', 'height: 0px')
    }
};
