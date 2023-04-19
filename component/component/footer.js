class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML =`

        `;
  }
}
customElements.define("footer-component", Footer);
