﻿import InlineNote from './src/inline-note.js';

(function() {
	
	/* Check: Custom elements supported? */
	if(!('customElements' in window)) {
		return false;
	}

	/* Check: <inline-note> already defined? */
	if(window.customElements.get('inline-note')) {
		return false;
	}
	
	/* Define <inline-note> element */
	window.customElements.define('inline-note', InlineNote);

	const definePromiseArray = [
		customElements.whenDefined('inline-note')
	];

	Promise.all(definePromiseArray)
	.then(() => {

		/* Web component: InlineNote */
		/* Set index programmatically (optional) */
		const inlineNotes = document.querySelectorAll('inline-note');
		inlineNotes.forEach((note, index) => {
			if(!note.hasAttribute('index')) {
				note.setAttribute('index', index + 1);
			}
		});
		
		/* Add Event Listener (optional) */
		inlineNotes.forEach((note, index) => {
			note.addEventListener('visible-changed', (event) => {
				console.log(`Inline note ${note.getAttribute('index')}: visible = ${event.detail.visible}`);
			}, false);
		});
		
	})
	.catch(error => {
		console.error(error);
	});

})();