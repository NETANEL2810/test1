export const showLightBox=(item)=>{
    let id_boxWindow=document.querySelector("#id_lightWindow");
// take all information of this movie
    id_boxWindow.style.display="flex";
    id_boxWindow.querySelector("img").src=item.img;
    id_boxWindow.querySelector("h2").innerHTML=item.title;
    id_boxWindow.querySelector("#id_light_date").innerHTML=item.publishYear;
    id_boxWindow.querySelector("#id_light_rating").innerHTML=item.rating;
    id_boxWindow.querySelector("#id_light_plot").innerHTML=item.description;

}
export const hideLightBox=()=>{
    let id_boxWindow=document.querySelector("#id_lightWindow");
    id_boxWindow.style.display="none";
}
export const declareLightBoxEvent=()=>{

    let id_boxWindow=document.querySelector("#id_lightWindow");
    id_boxWindow.addEventListener("click",hideLightBox);//close window

}