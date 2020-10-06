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

//ingresar tramo
let ingresarTramo = document.getElementById("ingresarTramo");
ingresarTramo.addEventListener("click", () => {
  printmodal(`
  <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div class="row tab-item">
    <div class="col-2">
      <label>Cod.Ruta:</label>
      <input class="input" type="text" style="width:35px; " disabled="true" value="001"/>
    </div>
    <div class="col-3">
      <label>Cod.Ruta Py:</label>
      <input class="input" type="text" style="width: 75px; " disabled="true" value="AN-112"/>
    </div>
    <div class="col-7">
      <label>Den. corto:</label>
      <input class="input" type="text" style="width: 380px; " disabled="true" value="Emp. PE 16 hasta Emp. PE 16 A (Dv.Rinconada)"/>
    </div>
  </div>
  <div class="row tab-item">
    <div class="col-2">
      <label>Cod.Tramo:</label>
      <input class="input" type="text" style="width:45px;" disabled="true" value="001"/>
    </div>
    <div class="col-3">
      <label>Cod.Tramo Py:</label>
      <input class="input" type="text" style="width: 100px;" value="AN-112/001"/>
    </div>
    <div class="col-3">
      <label>Fecha:</label>
      <input class="input" type="date"/>
    </div>
    <div class="col-4">
      <label>Estado:</label>
      <select style="width: 100px;">
        <option>Vigente</option>
        <option>Vigentea</option>
        <option>Vigenteb</option>
        <option>Vigentec</option>
        <option>Vigented</option>
      </select>
    </div>
  </div>
  <div class="row tab-item">
    <div class="col">
      <label>Denominación Tramo:</label>
      <textarea class="form-control" rows="4"></textarea>
    </div>
  </div>
  <div class="row tab-item">
    <div class="col-5">
      <label>Den. corto:</label>
      <input class="input" type="text" style="width: 200px; "/>
    </div>
    <div class="col-4">
      <label>Zona GPS:</label>
      <select style="width: 80px; ">
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
      </select>
    </div>
    <div class="col-3">
      <label>Long:</label>
      <input class="input" type="text" style="width: 60px; " disabled="true" value="53.700"/>
      <label>Kms.</label>
    </div>
  </div>
  <div class="row tab-item">
    <div class="col-3">
      <label>Prog Inicio:</label>
      <input class="input" type="text" style="width:115px; "/>
    </div>
    <div class="col-3">
      <label>Latitud Inicio:</label>
      <input class="input" type="text" style="width:115px; "/>
    </div>
    <div class="col-3">
      <label>Longitud.Inicio:</label>
      <input class="input" type="text" style="width:115px; "/>
    </div>
    <div class="col-3">
      <label>ALtitud Inicio:</label>
      <input class="input" type="text" style="width:115px; "/>
    </div>
  </div>
  <div class="row tab-item">
    <div class="col-3">
      <label>Prog Final:</label>
      <input class="input" type="text" style="width:115px; "/>
    </div>
    <div class="col-3">
      <label>Latitud Final:</label>
      <input class="input" type="text" style="width:115px; "/>
    </div>
    <div class="col-3">
      <label>Longitud.Final:</label>
      <input class="input" type="text" style="width:115px; "/>
    </div>
    <div class="col-3">
      <label>ALtitud Final:</label>
      <input class="input" type="text" style="width:115px; "/>
    </div>
  </div>
  <div class="row tab-item">
    <div class="col">
      <label>Observación:</label>
      <textarea class="form-control" rows="4"></textarea>
    </div>
  </div>
  <button type="" class="btn btn-primary">Aceptar</button>
  <button type="" class="btn btn-light">Cancelar</button>
</div>  `);
});
