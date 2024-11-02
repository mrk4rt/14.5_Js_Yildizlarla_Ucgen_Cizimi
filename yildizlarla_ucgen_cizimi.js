// Kullanıcıdan üçgenin satır sayısını al
let satirSayisi = parseInt(prompt("Üçgenin kaç satır olmasını istersiniz?"));

// Kullanıcının geçerli bir sayı girip girmediğini kontrol et
while (isNaN(satirSayisi) || satirSayisi <= 0) {
  satirSayisi = parseInt(prompt("Lütfen geçerli bir pozitif sayı girin."));
}

// Sonucu biriktirecek değişken
let sonuc = "";

// Üçgenin her satırı için döngü
for (let i = 1; i <= satirSayisi; i++) {
  let yıldızSatırı = "";
  for (let j = 1; j <= i; j++) {
    yıldızSatırı = yıldızSatırı + "*";
  }
  sonuc += yıldızSatırı + "\n";
}

// Üçgeni göster
alert(sonuc);
console.log(sonuc);
