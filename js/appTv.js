import { doApi } from "./tvList.js";
import { declareEvents } from "./tvForm.js"; 
import { declareLightBoxEvent } from "./lightBox.js";
const init =()=>{
    // main function   
    doApi("batman");
    declareEvents();
    declareLightBoxEvent();///call the light box js functions
    
}

















init();