/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const list     = document.getElementById('navbar__list');

/**
 * End Global Variables
*/


// Build menu

// build the nav
/* method to let every link takes the same name of section
  fist link is section 1 */
sections.forEach(function create (section) {
    /*function variabels */
    let addLink     = document.createElement('li');
    let createLinks = document.createElement('a');
    let linkName    = section.getAttribute('data-nav');
    let textNode    = document.createTextNode(linkName);


    /* to refer links to html file */
   createLinks.appendChild(textNode);
    addLink.appendChild(createLinks);

// Scroll to anchor ID using scrollTO event
createLinks.addEventListener('click',goToSection );
function goToSection(event){
    section.scrollIntoView(
        { behavior: "smooth",
        inline: "nearest" });
        
}
// Scroll to section on link click
list.appendChild(addLink);
});

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll',function(){
    /* let every section get addActiveClass function alone*/
    sections.forEach(function addActiveCLass(section){
        /* variables for this fuction */
        const navigationName =section.getAttribute('data-nav');
        const topSection = section.getBoundingClientRect().top;
        const allLinks = document.querySelectorAll('a');

 // Set sections as active.
         /*conditions for activate the getBoundingCilentRect*/
        if(topSection >=0 && topSection <= 250){
            /*to add this condition to every section */
            section.classList.add('your-active-class');
            /*to get every link highlighted */
            allLinks.forEach(function highlightLink(link){
                /* condition to let a spacific section and link highlighted at the same time*/
                if(link.textContent==navigationName){
                    link.classList.add('your-active-class');
                }else{
                    link.classList.remove('your-active-class');
                }
            })
        }else{
            section.classList.remove('your-active-class');
        }
    })
});        
