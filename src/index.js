import './styles/modern-normalize.css';
import './styles/index.css';
import './styles/components/header.css';
import './styles/components/menu.css';
import './styles/components/hero.css';
import './styles/components/draggables.css';
import './styles/utils.css';

import { Sortable, Plugins } from '@shopify/draggable';
import { gsap } from "gsap";
import SplitType from 'split-type';

// Variables
const textLogo = new SplitType('#text-logo');


addEventListener("mouseover", (event) => {});

onmouseover = (event) => {
  gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.1
  });
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Sortable on the sortable-container
    const sortable = new Sortable(document.querySelector('.sortable-container'), {
        draggable: '.sortable-item',
        mirror: {
            constrainDimensions: true,
          },
        plugins: [Plugins.SortAnimation],
        sortAnimation: {
            duration: 600,
            easingFunction: 'ease-in-out',
        },
    });
});

// Hamburger Button
const hb_button = document.querySelectorAll("button");
const sideBar = document.getElementsByClassName('header__menu');

hb_button.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
      sideBar.classList.add('open');
      sideBar.classList.remove('close');
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
      sideBar.classList.add('close');
      sideBar.classList.remove('open');
    }
  });
});
