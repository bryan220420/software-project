const $sidebar = document.querySelector('#sidebar')
const $sidebarBtn = document.querySelector('#sidebar-btn')
const $sidebarHeader = document.querySelector('#sidebar-header')
const $childsHeader = $sidebarHeader.querySelectorAll('#sidebar-header > *')
const $textSidebar = document.querySelectorAll('.sidebar--item-text')
const columnas=document.querySelectorAll("#tabla .columna")

//Sidebar Events
$sidebarBtn.addEventListener('click', () => {
  $sidebar.classList.toggle('hidden')
})
$sidebar.addEventListener('transitionstart', () => {
  if($sidebar.classList.contains('hidden')) {
    $textSidebar.forEach(item => item.style.visibility = 'hidden')
  }
})
$sidebarHeader.addEventListener("transitionend", () => {
  if(!$sidebar.classList.contains('hidden')) {
    $textSidebar.forEach(item => item.style.visibility = 'visible')
  }
})
$sidebarHeader.addEventListener("transitionstart", () => {
  if($sidebar.classList.contains('hidden')) {
    $childsHeader.forEach(item => item.style.visibility = 'hidden')
  }
});
$sidebarHeader.addEventListener("transitionend", () => {
  if(!$sidebar.classList.contains('hidden')) {
    $childsHeader.forEach(item => item.style.visibility = 'visible')
  }
});



//window.onload = calcular;

      function calcular() { 

      

      //console.log(columnas.length);
      
      const sumaTotal = []
      
      for(let i = 0; i < columnas.length; i++) {
          let position = i+2
          const $valores = Array.from(document.querySelectorAll(`.fila .valor:nth-child(${position})`))
          //console.log($valores)
          let total = $valores.reduce((accum, item) => {
          const valor = parseFloat(item.textContent)
          return accum + valor
      }, 0)
          total=total.toFixed(2)
          sumaTotal.push(total)
      }

      //console.log(sumaTotal);

      const sumas=document.querySelectorAll("#tabla .fila .suma");

      sumas.forEach((suma,index) => {
          suma.innerText=sumaTotal[index]
      });

      //console.log(sumas.length);
    } 


//window.onload = calcular1;

    function calcular1() { 

    

    console.log(columnas.length);
    
    const sumaTotal1 = []
    
    for(let i = 0; i < columnas.length; i++) {
        let position = i+2
        const $valores = Array.from(document.querySelectorAll(`.fila1 .valor1:nth-child(${position})`))
        console.log($valores)
        let total = $valores.reduce((accum, item) => {
        const valor = parseFloat(item.textContent)
        return accum + valor
    }, 0)
        total=total.toFixed(2)
        sumaTotal1.push(total)
    }

    console.log(sumaTotal1);

    const sumas=document.querySelectorAll("#tabla .fila1 .suma1");

    sumas.forEach((suma,index) => {
        suma.innerText=sumaTotal1[index]
    });

    console.log(sumas.length);
  }  
  
  calcular()
  calcular1()