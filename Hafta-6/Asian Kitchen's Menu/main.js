async function fetchMenuData() {
    try {
      const response = await fetch('menu.json'); // JSON dosyasını fetch ile çekiyoruz
      const menu = await response.json();        // Veriyi JSON olarak alıyoruz
      displayMenuItems(menu);                    // Menü öğelerini gösteriyoruz
      displayFilterButtons(menu);                // Filtre butonlarını gösteriyoruz
    } catch (error) {
      console.error("Veri çekilemedi:", error);
    }
  }
  
  // Menü öğelerini görüntüleme işlevi
  function displayMenuItems(menuItems) {
    const sectionCenter = document.querySelector('.section-center');
    let displayMenu = menuItems.map(item => {
      return `
        <div class="col-6 menu-item">
          <img src="${item.img}" class="photo" alt="${item.title}">
          <div class="menu-info">
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
            <p class="menu-text">${item.desc}</p>
          </div>
        </div>
      `;
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
  }
  
  // Filtreleme butonlarını görüntüleme işlevi
  function displayFilterButtons(menu) {
    const btnContainer = document.querySelector('.btn-container');
    
    // `reduce` kullanarak benzersiz kategorileri belirliyoruz
    const categories = menu.reduce((values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    }, ['All']); // "All" kategorisini başta ekliyoruz
    
    // Kategoriye göre butonları HTML'e ekliyoruz
    const categoryBtns = categories.map(category => {
      return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    }).join('');
    
    btnContainer.innerHTML = categoryBtns;
    
    // Butonlara tıklama olayını ekliyoruz
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = category === 'All' ? menu : menu.filter(item => item.category === category);
        displayMenuItems(menuCategory);
      });
    });
  }
  
  // Sayfa yüklendiğinde veriyi çekiyoruz
  window.addEventListener('DOMContentLoaded', fetchMenuData);
  
  
  