// Kullanıcıdan ismi alma
let userName = prompt("Lütfen isminizi girin:");
const nameElement = document.getElementById("myName");
nameElement.textContent = userName; // İsim alanını güncelle

// Saat ve tarih gösterimi
function updateClock() {
    const now = new Date();
    
    // Gün, saat ve dakikayı formatlama
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, options); // Tarih formatı
    const timeString = now.toLocaleTimeString(); // Saat formatı

    // Saat ve tarihi güncelleme
    document.getElementById("myClock").textContent = `${dateString}, ${timeString}`;
}

// İlk saat ve tarih güncellemesi
updateClock();

// Her saniyede bir saat güncelle
setInterval(updateClock, 1000);
