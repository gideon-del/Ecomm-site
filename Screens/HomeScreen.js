let HomeScreen = {
  render() {
    return `
    <section class="categories">
    <h2 class="header-secondary">Category</h2>
    <div class="container">
      <div class="card">
        <img src="./image/laptop-category.jpg" alt="Laptop" />
        <a href="/category" class="card__content">Laptop</a>
      </div>
      <div class="card">
        <img src="./image/desktop-catogory.jpg" alt="Phone" />

        <a href="/category" class="card__content">Desktop</a>
      </div>
      <div class="card">
        <img src="./image/phone-category.jpg" alt="Laptop" />

        <a href="/category" class="card__content">Phone</a>
      </div>
      <div class="card">
        <img src="./image/accesory.jpg" alt="Laptop" />
        <a href="/category" class="card__content">Accessory</a>
      </div>
    </div>
  </section>
        
        `;
  },
};
export default HomeScreen;
