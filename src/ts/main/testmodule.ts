import { foo } from "../../css/styles.css";
import { bar } from "../../css/styles.scss";
import * as image from "../../../assets/image.bmp";

export default class TestModule {
    constructor(public name: string) {

    }

    public foo():void {
        const img=document.createElement("img") as HTMLImageElement;
        img.src=image;
        document.body.appendChild(img);
        const div1=document.createElement("div");
        div1.className=foo;
        document.body.appendChild(div1);
        const div2=document.createElement("div");
        div2.className=bar;
        document.body.appendChild(div2);
    }
    
}
