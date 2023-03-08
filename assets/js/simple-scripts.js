
// Change List Tabs ->
const tab = document.querySelectorAll('#tabs li a');

const changeTab = (el) => {
    
    // change active button
    el.preventDefault();
    tab.forEach((el) => {el.classList.remove('active')})
    el.target.classList.add('active');
    
    // change pane
    const target = el.target.attributes.href.value.replace('#','');
    const listContainers = document.querySelectorAll('#blog-list .posts-list');
    listContainers.forEach((el) => {el.classList.remove('show')});
    document.getElementById(target).classList.add('show');
}

tab.forEach((el) => {
    el.addEventListener('click', changeTab)
}) 
// <- Change List Tabs


// Menu Mobile ->

const buttonMenu = document.querySelector('#button-menu');
buttonMenu.addEventListener('click', (el) => {
    el.target.classList.toggle('open');
})

// <- Menu Mobile