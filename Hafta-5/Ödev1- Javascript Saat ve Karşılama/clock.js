
let userName = prompt("İsminizi girin lütfen"); //ismi aldık

const nameEl = document.getElementById("myName"); //elementi yakaladık

nameEl.textContent = userName; //aldığımız ismi elemente enjekte ettim  //Bu arada eşitlikte tarafların yerini değiştirince çalışmadı.

//nameEl.textContent = prompt("İsminizi girin lütfen"); //Bu şekilde daha kısa bir haldede yazabiliriz. Ama yukarıda yaptığımız daha okunaklı bir kodlama şekli.


//Güncel zaman göstericez

function showCurrentTime() {
    const now = new Date();
}
