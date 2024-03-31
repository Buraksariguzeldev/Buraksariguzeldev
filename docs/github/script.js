function copyCode(btn) {
    const code = btn.previousElementSibling.textContent.trim();
    navigator.clipboard.writeText(code)
        .then(() => {
            btn.textContent = "Kopyalandı!";
            setTimeout(() => (btn.textContent = "Kopyala"), 2000);
        })
        .catch(err => {
            console.error("Metin kopyalanırken bir hata oluştu: ", err);
            btn.textContent = "Kopyalama Başarısız!";
            setTimeout(() => (btn.textContent = "Kopyala"), 2000);
        });
}