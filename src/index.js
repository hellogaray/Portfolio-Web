// Importing CSS styles
import './styles/modern-normalize.css';
import './styles/index.css';
import './styles/components/header.css';
import './styles/components/menu.css';
import './styles/components/hero.css';
import './styles/components/draggables.css';
import './styles/utils.css';

// Importing JavaScript libraries and plugins
import { Sortable, Plugins } from '@shopify/draggable';
import { gsap } from "gsap";
import SplitType from 'split-type';

// Variables
const textLogo = new SplitType('#text-logo');

// Animate text to move to their original position with staggered timing
addEventListener("mouseover", (event) => {});

onmouseover = (event) => {
  gsap.to('.char', {
    y: 0,
    stagger: 0.05, // Delay between each character's animation
    delay: 0.2,    // Delay before the animation starts
    duration: 0.1  // Animation duration for each character
  });
};

// Sortable elements with class 'sortable-container'
document.addEventListener('DOMContentLoaded', () => {
  const sortable = new Sortable(document.querySelector('.sortable-container'), {
      draggable: '.sortable-item',
      mirror: {
        // Ensures the mirror element matches the dimensions of the dragged item
          constrainDimensions: true, 
      },
      plugins: [Plugins.SortAnimation], // Enable sort animation plugin
      sortAnimation: {
          duration: 600, // Animation duration in milliseconds
          easingFunction: 'ease-in-out',
      },
  });
});


// Hamburger Button
const hb_button = document.querySelectorAll("button");
const sideBar = document.getElementsByClassName('header__menu');

hb_button.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the current state from the button's 'data-state' attribute
    const currentState = button.getAttribute("data-state");

    // Toggle between 'opened' and 'closed' states
    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
      // Open the sidebar
      sideBar.classList.add('open');
      sideBar.classList.remove('close');
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
      // Close the sidebar
      sideBar.classList.add('close');
      sideBar.classList.remove('open');
    }
  });
});



// Select all elements with the class '.magnet' and iterate over each magnet element
document.querySelectorAll('.magnet').forEach(magnet => {
    magnet.addEventListener('mousemove', ({ offsetX: mouseX, offsetY: mouseY, target }) => {
    // Get the magnet's width and height
    const { clientWidth: magnetWidth, clientHeight: magnetHeight } = target;
    
    // Calculate how far the mouse is from the center of the magnet element
    const magnetPullX = mouseX - magnetWidth / 2;
    const magnetPullY = mouseY - magnetHeight / 2;
    
    // Apply a CSS transform to create a magnetic pull effect on the element
    magnet.style.transform = `translate(${magnetPullX}px, ${magnetPullY}px)`;
  });
  
  // Add 'mouseout' event listener to reset the magnet's position when the mouse leaves
  magnet.addEventListener('mouseout', () => {
    magnet.style.transform = ''; // Remove the transform when the mouse leaves
  });
});
