import { showLightBox } from "./lightBox.js";
export default class TvItem{
    constructor(_parent,_item){
        this.parent=_parent;
        this.title=_item.name;
        this.publishYear=_item.premiered;
        this.rating=_item.rating.average;
        this.description=_item.summary;
        this.img=_item.image.medium;

    }
    render(){
        let article=document.createElement("article");
        document.querySelector(this.parent).append(article);
        article.className="col-md-4";
        article.innerHTML= `
        <div class="border shadow p-2 h-100 overflow-hidden">
            <img class="float-start me-3 col-5" src="${this.img}"  alt="">
            <h3>${this.title}</h3>
            <div>Year: ${this.publishYear}</div>
            <div>Rating: ${this.rating}</div>
            <button class="btn btn-dark my-3 info-btn">More info</button>
        </div>
        `
        let infoBtn=article.querySelector(".info-btn");
        infoBtn.addEventListener("click",()=>{
            // window.alert("more info");
            showLightBox(this);///display window.
        })
    }
}