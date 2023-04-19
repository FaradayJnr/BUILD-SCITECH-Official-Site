class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
    /* Define the keyframe for the typewriter animation */
    #paragraph{
      justify-content: center;
      padding-top: 20px;
    }
    </style>
    
    <div class="text-center bg-body-tertiary rounded-3" style="margin: 15px;font-size: 15px;">
    <div class="d-inline-flex gap-2">
      <button class="d-inline-flex align-items-center btn btn-primary btn-sm rounded-pill" type="button">
        <span class="fs-6">Our Mission</span>
      </button>
      <button class="btn btn-outline-secondary btn-sm rounded-pill" type="button" onclick="document.getElementById('paragraph');">
        <span class="fs-6">Our Vision</span>
      </button>
    </div>
    <p id="paragraph" class="col-lg-8 mx-auto fs-7 text-muted"><i>
    This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
  <i></p>
  </div>
  
        `;
  }
}
customElements.define("jumbotron-component", Jumbotron);
