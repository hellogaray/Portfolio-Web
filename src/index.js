import './styles/index.css';
import { Sortable, Plugins } from '@shopify/draggable';
import { gsap } from "gsap";
import SplitType from 'split-type';


const textLogo = new SplitType('#text-logo');

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.1
});


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
