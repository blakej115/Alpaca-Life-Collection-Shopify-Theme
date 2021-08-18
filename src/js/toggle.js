export default class Toggle {
    constructor(elem, name) {
        // Set element and name of element that will have a class toggled on it.
        this.elem = elem
        this.name = name

        // Get all elements that will trigger a class change.
        this.triggers = document.querySelectorAll(`[data-toggle-trigger="${this.name}"]`)

        // Init events
        this.initEvents()
    }

    // Init our click event
    initEvents() {
        // For each trigger
        this.triggers.forEach(trigger => {
            // When a trigger is clicked
            trigger.addEventListener('click', e => {
                // Don't visit whatever the href attribute is set to.
                e.preventDefault()

                // Toggle a class, based on a data attribute on the trigger element.
                this.elem.classList.toggle(trigger.dataset.toggleClass)
            })
        })
    }
}