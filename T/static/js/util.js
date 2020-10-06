var toggler = document.getElementsByClassName("caret");
var i;
var menu = document.getElementById("mi-menu");
for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}

let container = document.querySelectorAll(".click-derecho");
console.log(container);
let content = document.getElementById("content");
content.addEventListener("click", (event) => {
  if (event.target != container) {
    var menu = document.getElementById("mi-menu");
    menu.style.display = "";
    menu.style.left = "";
    menu.style.top = "";
  }
});
let dato;
const addmenu = (event) => {
  event.preventDefault();
  menu.style.display = "block";
  menu.style.left = event.pageX + "px";
  menu.style.top = event.pageY + "px";
  console.log(event.target.parentNode);
  dato = event.target.parentNode;
};
const salirmenu = (event) => {
  menu.style.display = "";
  menu.style.left = "";
  menu.style.top = "";
};
container.forEach((element) => {
  element.addEventListener("contextmenu", addmenu);
  element.addEventListener("click", salirmenu);
});

// Crear elementos con atributos e hijo
const createCustomElement = (element, attributes, children) => {
  let customElement = document.createElement(element);
  if (children !== undefined)
    children.forEach((el) => {
      if (el.nodeType) {
        if (el.nodeType === 1 || el.nodeType === 11)
          customElement.appendChild(el);
      } else {
        customElement.innerHTML += el;
      }
    });
  addAttributes(customElement, attributes);
  return customElement;
};
// Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
  for (let attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
  }
};
// const imprimir modal
const printmodal = (content) => {
  const modalcontentEl = createCustomElement(
    "div",
    {
      id: "modal-content",
      class: "modal-content",
    },
    [content]
  );

  const modalContainerEl = createCustomElement(
    "div",
    {
      id: "modal-container",
      class: "modal-container",
    },
    [modalcontentEl]
  );
  //imprimir
  document.body.appendChild(modalContainerEl);

  //FUNCION DE QUITAR

  const removemodal = () => document.body.removeChild(modalContainerEl);

  modalContainerEl.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target === modalContainerEl) removemodal();
  });
};
//ingresar ruta

//Eliminar ruta
let eliminar = document.getElementById("delete");
eliminar.addEventListener("click", () => {
  printmodal(`
     <div class="delete"> 

<img src="/static/img/delete.png"   alt="img-delete">

     <p>¿Estas seguro que deseas eliminar el registro?</p>
         <button class="btn btn-danger" id="eliminar">Eliminar</button>

    <button  class="btn btn-light" >Cancelar</button>
 
    </div>  
           `);

  menu.style.display = "none";
});
