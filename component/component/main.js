class Carousel extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" pause="hover" touch="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./assets/images/img_1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./assets/images/img_2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="./assets/images/img_3.png" class="d-block w-100" alt="...">
    </div>
  </div>
</div>
        `;
  }
}
customElements.define("carousel-component", Carousel);
