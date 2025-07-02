
import "@/style.css";
import { getNode, insertLast } from "kind-tiger";
import logo from "@/assets/js.svg";
import logo_8b from "@/assets/8b.png";
import classes from "@/style.module.css";

console.log(classes);

const app = getNode('#app')

const template = `
    <figure class="figure">
        <img src="${logo}" />
        <figcaption>자바스크립트 로고</figcaption>
    </figure>

    <figure class="${classes.figure}">
        <img width="100"px src="${logo_8b}" />
        <figcaption>8b studio 로고</figcaption>
    </figure>
`;
insertLast(app,template)
console.log(app);


































































