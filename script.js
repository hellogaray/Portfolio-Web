import {Sortable, Plugins} from '@shopify/draggable';

// Initialize Sortable on the sortable-container
const sortable = new Sortable(document.querySelector('.sortable-container'), {
  draggable: '.sortable-item',
  plugins: [Plugins.SortAnimation],
  sortAnimation: {
    duration: 200,
    easingFunction: 'ease-in-out',
  }
});

// Event listeners
sortable.on('sortable:start', () => console.log('sortable:start'));
sortable.on('sortable:sort', () => console.log('sortable:sort'));
sortable.on('sortable:sorted', () => console.log('sortable:sorted'));
sortable.on('sortable:stop', () => console.log('sortable:stop'));
