import './styles/style.css';
import { Sortable, Plugins } from '@shopify/draggable';

document.addEventListener('DOMContentLoaded', () => {
    const sortable = new Sortable(document.querySelector('.sortable-container'), {
        draggable: '.sortable-item',
        plugins: [Plugins.SortAnimation],
        sortAnimation: {
            duration: 200,
            easingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // easeInOutBack effect
        },
    });

    // Event listeners for Sortable
    sortable.on('sortable:start', () => console.log('sortable:start'));
    sortable.on('sortable:sort', () => console.log('sortable:sort'));
    sortable.on('sortable:sorted', () => console.log('sortable:sorted'));
    sortable.on('sortable:stop', () => console.log('sortable:stop'));
});
