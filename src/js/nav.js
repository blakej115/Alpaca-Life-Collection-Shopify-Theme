export default class Nav {
  constructor(name, elem) {
    // Set the name and nav element.
    this.name = name
    this.elem = elem

    // Init navs, depending on which nav is which.
    if (this.name === 'primary') {
      this.initPrimary()
    }
  }

  initPrimary() {
    // Create an observer for when a sticky nav is at the top of the screen.
    this.observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('active', e.intersectionRatio < 1),
      { threshold: [1] }
    )
    // Observe the nav element.
    this.observer.observe(this.elem)
  }
}