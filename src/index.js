import './styles/index.css';
import { Sortable, Plugins } from '@shopify/draggable';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Sortable on the sortable-container
    const sortable = new Sortable(document.querySelector('.sortable-container'), {
        draggable: '.sortable-item',
        plugins: [Plugins.SortAnimation],
        sortAnimation: {
            duration: 250,
            easingFunction: 'ease-in-out',
        },
    });

    // Add classes during dragging to maintain the size
    sortable.on('drag:start', (e) => {
        e.data.source.style.width = `${e.data.source.clientWidth}px`;
        e.data.source.style.height = `${e.data.source.clientHeight}px`;
    });

    // Cleanup after dragging ends
    sortable.on('drag:stop', (e) => {
        e.data.source.style.width = '';
        e.data.source.style.height = '';
    });
});
