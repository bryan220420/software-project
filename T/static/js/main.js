const $sidebar = document.querySelector('#sidebar')
const $sidebarBtn = document.querySelector('#sidebar-btn')
const $sidebarHeader = document.querySelector('#sidebar-header')
const $childsHeader = $sidebarHeader.querySelectorAll('#sidebar-header > *')
const $textSidebar = document.querySelectorAll('.sidebar--item-text')

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