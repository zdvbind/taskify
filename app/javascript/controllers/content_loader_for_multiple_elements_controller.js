import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="content-loader-for-multiple-elements"
export default class extends Controller {
  load(event) {
    event.preventDefault()
    const url = event.params.url
    fetch(url)
        .then(response => response.text())
        .then(html => this.element.innerHTML = html)
  }
}
