import './styles/index.css';
import { Sortable, Plugins } from '@shopify/draggable';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Sortable on the sortable-container
    const sortable = new Sortable(document.querySelector('.sortable-container'), {
        draggable: '.sortable-item',
        mirror: {
            constrainDimensions: true,
          },
        plugins: [Plugins.SortAnimation],
        sortAnimation: {
            duration: 250,
            easingFunction: 'ease-in-out',
        },
    });
});
