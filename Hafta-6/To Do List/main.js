// Toast bildirimlerini göstermek için fonksiyon
function showToast(type, message) {
  const toastContainer = document.getElementById("toastContainer");

  // Toast container'ını kontrol et, boşsa oluştur
  if (!toastContainer) {
    const newToastContainer = document.createElement("div");
    newToastContainer.id = "toastContainer";
    document.body.appendChild(newToastContainer);
  }

  const toast = document.createElement("div");

  // Bootstrap toast yapısına uygun şekilde toast oluşturuyoruz
  toast.classList.add("toast", type, "show");
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "assertive");
  toast.setAttribute("aria-atomic", "true");
  toast.innerHTML = `
    <div class="toast-body">${message}</div>
    <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `;

  toastContainer.appendChild(toast);

  // Toast'u 2 saniye sonra kaldırıyoruz
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// Yeni görev ekleme fonksiyonu
function newElement() {
  const taskInput = document.getElementById("task");
  const taskValue = taskInput.value.trim();  // Boşluklardan temizlenmiş değer

  // Eğer görev değeri boşsa, boş yazı uyarısı gösterilecektir
  if (taskValue === "") {
    showToast("error", "Listeye boş ekleme yapamazsınız!");  // Hata bildirimi
    return; // Eğer boşsa fonksiyon duracak ve devam etmeyecek
  }

  // Yeni görevli elementi oluşturuyoruz
  const li = document.createElement("li");
  li.textContent = taskValue;

  // Silme butonu ekliyoruz
  const closeBtn = document.createElement("span");
  closeBtn.textContent = "×";
  closeBtn.classList.add("close");
  li.appendChild(closeBtn);

  // Görev ekleme işlemi başarılıysa toast bildirimi
  showToast("success", "Listeye eklendi.");

  // Listeye yeni görevi ekliyoruz
  document.getElementById("list").appendChild(li);

  // Input alanını temizliyoruz
  taskInput.value = "";

  // Silme butonuna tıklandığında görevi silme
  closeBtn.addEventListener("click", function() {
    li.remove();
    // Görev silindiğinde toast bildirimi
    showToast("warning", "Görev silindi.");
  });

  // Görev işaretleme (yapıldı) fonksiyonu
  li.addEventListener("click", function() {
    li.classList.toggle("checked");
  });
}

// Sayfa yüklenince yapılacak ilk işlemler
document.getElementById("liveToastBtn").addEventListener("click", newElement);
