import Nav from "./nav"
import Toggle from "./toggle";

// This class contains all of our custom JS.
class App {
  // All nav menus that need JS.
  navs = {}
  // All class toggles.
  toggles = []

  constructor() {
    // Init nav menus, pass through needed elements.
    this.initNavs(document.querySelectorAll('[data-nav]'))

    // Init toggles, pass through needed elements.
    this.initToggles(document.querySelectorAll('[data-toggle]'))
  }

  // Handle navs
  initNavs(navs) {
    // Create a nav instance for each element with the data-nav attribute.
    navs.forEach(elem => {
      // The value of the data-nav attribute of the element.
      let name = elem.dataset.nav

      // We can access a specific nav by key. The key used is the value of the data-nav attribute of the element.
      this.navs[name] = new Nav(elem, name)
    })
  }

  // Handle toggles
  initToggles(toggles) {
    // For each element that needs a class toggled on it.
    toggles.forEach(elem => {
      // Make a new instance and add it to our array.
      this.toggles = [
          ...this.toggles,
          new Toggle(elem, elem.dataset.toggle)
      ]
    })
  }
}

// Init our "App".
const app = new App()