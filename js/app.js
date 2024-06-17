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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// navigation variable
const navigation = document.getElementById('navbar__list');
// sections variable
const sections = document.querySelectorAll('section'); //I use querySelectorAll because we have more than one section 

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const buildNAV = () => {

    let LI = '';
    // loop on all sections 
    // I used foeEach because I don't want to change any thing in the sections only loop on them.
    sections.forEach(section => {

        const ID = section.id;
        const DATA = section.dataset.nav;  //dataset is a DOM element that provides a map of all the element's data attributes
        LI += `<li><a href="#${ID}" class="menu__link" >${DATA}</a></li>`;

    });
    // add all elements to navigation
    navigation.innerHTML = LI;


};

buildNAV();

// Add class 'active' to section when near top of viewport

const offset = (section) => {  // get relative position and size of the element
    return Math.floor(section.getBoundingClientRect().top); //return the largest value that is less or equal to the number
};

//remove active class from the section when it isn't click on it
const removeActiveClass = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background: linear-gradient(#112233, #effdcc);";
};

// adding the active class when i click on the section
const addActiveClass = (condition, section) => { 
    if(condition){//if condition is true then i add the active class to the section
        section.classList.add('your-active-class');
        section.style.cssText =`background: linear-gradient(to top , #feebfa, #f68dc8 25%, #f575bd 50%, #f68dc8 75%, #feebfa); 
                                transition: background 1s ;
        `;
    };
};


const activeSection = () => {
    sections.forEach(section => {  //loop on sections 
        const eleOffset = offset(section);

        viewport = () => eleOffset < 200 && eleOffset >= -200;  

        removeActiveClass(section); 
        addActiveClass(viewport(),section); // add 'your-active-class' then change the background color if the viewport is in the range. 
    });
};

window.addEventListener('scroll' ,activeSection);


// Scroll to anchor ID using scrollTO event


const scrollUpAndDown = () => {

    const links = document.querySelectorAll('.navbar__menu a');  //make the navbar appear all times when scrolling to all sections down and up
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener('click',sectionScroll(link)); 
            }
        });
    });

};

scrollUpAndDown();


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


