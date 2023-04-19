class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <style>
    .dropdown-menu {
      background-color: #f9f9f9;
      border: none;
    }
    
    .dropdown-menu a {
      color: #333;
    }
    
    .dropdown-menu a:hover {
      color: #fff;
      background-color: #333;
    }
 </style>    
    <footer>
  <div class="container">
      <div class="col-md-3">
        <h3>Connect With Us</h3>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Connect With Us
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#"><i class="fab fa-facebook"></i> Facebook</a>
            <a class="dropdown-item" href="#"><i class="fab fa-twitter"></i> Twitter</a>
            <a class="dropdown-item" href="#"><i class="fab fa-instagram"></i> Instagram</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p>&copy; 2023 My Website. All Rights Reserved.</p>
        </div>
        <div class="col-md-6">
          <p>Designed by <a href="#">Your Name</a></p>
        </div>
      </div>
    </div>
  </div>
</footer>

  
  
        `;
  }
}
customElements.define("footer-component", Footer);
