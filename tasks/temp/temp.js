document.addEventListener('DOMContentLoaded', function() {
  const checkboxes = document.querySelectorAll('#checkboxes input[type="checkbox"]');

  checkboxes.forEach(checkbox => {
    const label = document.querySelector(`label[for="${checkbox.id}"]`);
    let timestampDiv = document.getElementById(`timestamp-${checkbox.id}`);
    // Eğer timestamp div'i yoksa oluştur
    if (!timestampDiv) {
      timestampDiv = document.createElement('span');
      timestampDiv.id = `timestamp-${checkbox.id}`;
      label.parentNode.insertBefore(timestampDiv, label.nextSibling);
    }

    checkbox.addEventListener('change', function() {
      if (this.checked) {
        label.style.textDecoration = "line-through";
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        timestampDiv.textContent = ` - Tamamlandı: ${dateTimeString}`;
        localStorage.setItem(checkbox.id, 'true');
        localStorage.setItem(`timestamp-${checkbox.id}`, dateTimeString);
      } else {
        label.style.textDecoration = "none";
        timestampDiv.textContent = "";
        localStorage.removeItem(checkbox.id);
        localStorage.removeItem(`timestamp-${checkbox.id}`);
      }
    });

    // Sayfa yüklendiğinde, localStorage'dan durumu ve zaman damgasını kontrol et
    if (localStorage.getItem(checkbox.id) === 'true') {
      checkbox.checked = true;
      label.style.textDecoration = "line-through";
      const savedDateTime = localStorage.getItem(`timestamp-${checkbox.id}`);
      if (savedDateTime) {
        timestampDiv.textContent = ` - Tamamlandı: ${savedDateTime}`;
      }
    }
  });
});