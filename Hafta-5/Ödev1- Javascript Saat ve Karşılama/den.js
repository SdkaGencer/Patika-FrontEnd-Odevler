
function showCurrentTime() {
    const now = new Date(); // Güncel tarihi ve saati al

    // Günün adını al
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const dayName = days[now.getDay()]; // Get the day name

    // Saat ve dakika formatla
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Saati ve günü HTML'de göster
    const dateTimeElement = document.getElementById('myClock');
    dateTimeElement.textContent = `Bugün ${dayName}, ve şu an saat ${timeString}.`;
}

// Sayfa yüklendiğinde showDateTime fonksiyonunu çağır
window.onload = showCurrentTime;