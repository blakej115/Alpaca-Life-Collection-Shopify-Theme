import Nav from "./nav"

// This class contains all of our custom JS.
class App {
  // All nav menus that need JS.
  navs = {}

  constructor() {
    // Init nav menus.
    this.initNavs()
  }

  initNavs() {
    // Create a nav instance for each element with the data-nav attribute.
    document.querySelectorAll('[data-nav]').forEach(elem => {
      // The value of the data-nav attribute of the element.
      let name = elem.dataset.nav

      // We can access a specific nav by key. The key used is the value of the data-nav attribute of the element.
      this.navs[name] = new Nav(name, elem)
    })
  }
}

// Init our "App".
const app = new App()