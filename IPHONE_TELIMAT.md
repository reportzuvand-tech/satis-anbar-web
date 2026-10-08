# Satış və Anbar — iPhone (pulsuz)

iPhone-da proqram App Store-suz quraşdırılır: Safari-dən **"Ana ekrana əlavə et"** ilə.
Ana ekranda ZUVAND ikonu yaranır, proqram ayrıca pəncərədə açılır, internetsiz də işləyir.

## 1. Faylları internetə qoyun (bir dəfə, GitHub Pages — pulsuz)
1. github.com-da **+ → New repository**:
   - Ad: `satis-anbar-web`
   - **Public** seçin (GitHub Pages pulsuz yalnız açıq repoda işləyir; bu fayllarda gizli məlumat yoxdur — açarlar burada saxlanmır)
   - **Create repository**
2. **uploading an existing file** → bu qovluğun içindəki bütün faylları sürükləyin → **Commit changes**.
   (Burada `.github` qovluğu yoxdur, problem olmayacaq.)
3. **Settings → Pages** → *Source*: **Deploy from a branch** → Branch: **main**, qovluq: **/ (root)** → **Save**.
4. 1–2 dəqiqə sonra səhifənin yuxarısında ünvan çıxacaq:
   `https://<istifadəçi-adınız>.github.io/satis-anbar-web/`

`config.js`-də server ünvanı yazılıbsa, işçilər yalnız açarlarını daxil edir. Yazılmayıbsa, proqram ilk açılışda ünvanı soruşur.

## 2. iPhone-a quraşdırın (hər işçi)
1. **Safari** ilə yuxarıdakı ünvanı açın (Chrome yox — yalnız Safari).
2. Aşağıdakı **Paylaş** düyməsi (kvadrat + yuxarı ox) → **Ana ekrana əlavə et** (Add to Home Screen) → **Əlavə et**.
3. Ana ekrandakı **Satış Anbar** ikonundan açın, adınızı və açarınızı yazın.

## Yeniləmə
Yeni `index.html` gələndə GitHub-da `satis-anbar-web` reposuna **Add file → Upload files** ilə yükləyin.
iPhone-lar internetə qoşulanda yeni versiyanı özləri götürür (proqramı bağlayıb yenidən açın).

## Bilməli olduğunuz
- PDF hazır olanda iPhone-un **Paylaş** pəncərəsi açılır: “Fayllarda saxla”, WhatsApp, Mail və s.
- Proqram ana ekrandan açılmalıdır — Safari tabında açılanda məlumatlar ayrıca saxlanılır.
- App Store-da rəsmi tətbiq üçün Apple Developer hesabı (ildə 99 $) və Mac kompüter lazımdır; bu yol pulsuzdur.
