import { doApi } from "./tvList.js";

export const declareEvents=()=>{

    let id_inpt=document.querySelector("#id_input");
    let btn_search=document.querySelector("#searc_btn");
    id_inpt.addEventListener("keydown",(e)=>{
        if(e.key=="Enter"){
            doApi(id_inpt.value);//search the value.
        }
    })
    btn_search.addEventListener("click",()=>{
        // window.alert("click serch");
        doApi(id_inpt.value);//search the value.
    })

}