

# Yıldızlarla Üçgen Çizimi

### Proje Açıklaması

Bu projede, kullanıcıdan alınan bir sayı değeri kadar satır içeren bir yıldız üçgeni oluşturulacaktır. Üçgenin her satırı, bir önceki satıra göre daha fazla yıldız içerir ve kullanıcının belirlediği satır sayısına göre üçgen genişler.

### Projenin Akışı

1. **Kullanıcıdan Satır Sayısını Alma**

   - `prompt()` ile kullanıcıdan üçgenin kaç satırdan oluşacağını sorarak bir giriş alırız.
   - Girişin geçerli bir sayı olup olmadığını kontrol etmek için `isNaN()` fonksiyonu kullanılır. Eğer kullanıcı geçersiz bir değer girerse, uygun bir uyarı verilir ve yeniden giriş istenir.

2. **Üçgenin Oluşumu**

   - `for` döngüsü kullanarak üçgenin her satırını oluştururuz.
   - `yıldızSatırı` adında bir değişken tanımlanarak her satır için yıldızlar geçici olarak burada biriktirilir.
   - Her satırda, yıldız sayısı `i` değişkenine bağlı olarak artar.

3. **Yıldız Satırını Ekleme**

   - İç içe `for` döngüsü ile her satırda yer alacak yıldız sayısı kadar `*` karakteri eklenir ve bu karakterler `yıldızSatırı` değişkenine atanır.
   - İç döngüde yıldızlar oluşturuldukça bir sonraki satırın karakter sayısı artar.

4. **Sonucu Gösterme**
   - Üçgenin tamamı birleştirilmiş `yıldızSatırı` değişkeninde toplanarak `alert()` veya `console.log()` ile ekrana yazdırılır.

### Anahtar Kelimeler ve Değişkenler

- **Değişkenler:**

  - `satirSayisi`: Kullanıcının girdiği üçgenin satır sayısını tutar.
  - `yıldızSatırı`: Her satırdaki yıldızları geçici olarak birleştirmek için kullanılan değişken.
  - `sonuc`: Tüm üçgen şeklini saklamak için tanımlanan değişken. Her yeni satır `yıldızSatırı` olarak bu değişkene eklenir.

- **Fonksiyonlar:**

  - `prompt()`: Kullanıcıdan üçgenin satır sayısını almak için kullanılır.
  - `alert()` veya `console.log()`: Oluşturulan yıldız üçgenini kullanıcıya göstermek için kullanılır.

- **Döngüler:**

  - `for` döngüsü: Dıştaki `for` döngüsü satır sayısı kadar tekrar ederken, içteki `for` döngüsü her satırda yıldız sayısını belirler.

- **Operatörler:**
  - `+=`: `yıldızSatırı` ve `sonuc` değişkenlerine yeni yıldız veya satır eklemek için kullanılır.

### Özet

Bu projede, bir `for` döngüsü kullanarak kullanıcı tarafından belirlenen satır sayısına göre her satırda artan sayıda yıldız içeren bir üçgen çizimi gerçekleştirilmiştir. Döngüler ve `prompt()`, `alert()` gibi temel JavaScript fonksiyonları kullanılarak üçgen çizimi ekrana yansıtılır.
"""

