document.addEventListener('DOMContentLoaded', () => {
    const datetime1Input = document.getElementById('datetime1');
    const datetime2Input = document.getElementById('datetime2');
    const reasonInput = document.getElementById('reason');
    const resultDiv = document.getElementById('result');
    const calculateButton = document.getElementById('calculate');
    const sortButton = document.getElementById('sort');
    const historyDiv = document.getElementById('history');

    // Yerel depolamadan kayıtları yükleyin ve gösterin
    const loadHistory = () => {
        const history = JSON.parse(localStorage.getItem('history')) || [];
        displayHistory(history);
    };

    const displayHistory = (history) => {
        historyDiv.innerHTML = '';
        history.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('history-item');
            div.innerHTML = `
                <strong>Hesaplama Zamanı:</strong> ${item.timestamp}<br>
                ${item.result}<br>
                <strong>Aralık:</strong> ${item.range}<br>
                <strong>Neden:</strong> ${item.reason}
                <br><br>
                <button class="delete-btn" data-index="${index}">Sil</button>
                <hr>
            `;
            historyDiv.appendChild(div);
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteHistoryItem);
        });
    };

    const deleteHistoryItem = (event) => {
        const index = event.target.getAttribute('data-index');
        let history = JSON.parse(localStorage.getItem('history')) || [];
        history.splice(index, 1);
        localStorage.setItem('history', JSON.stringify(history));
        loadHistory();
    };

    calculateButton.addEventListener('click', () => {
        const datetime1 = datetime1Input.value;
        const datetime2 = datetime2Input.value;
        const reason = reasonInput.value;

        if (datetime1 && datetime2) {
            const date1 = new Date(datetime1);
            const date2 = new Date(datetime2);

            let diffInMinutes = (date2 - date1) / (1000 * 60); // Farkı dakika cinsinden al
            let diffInHours = diffInMinutes / 60; // Farkı saat cinsinden al

            if (diffInMinutes < 0) {
                resultDiv.textContent = 'Bitiş zamanı, başlangıç zamanından önce olamaz.';
                return;
            }

            const timestamp = new Date().toLocaleString();
            const result = `Fark: ${diffInMinutes.toFixed(2)} dakika (${diffInHours.toFixed(2)} saat)`;
            const range = `${date1.toLocaleString()} - ${date2.toLocaleString()}`;

            resultDiv.innerHTML = `${result}<br><br>Aralık: ${range}<br><br>Neden: ${reason}`;

            // Yeni kaydı oluşturun
            const newRecord = {
                timestamp: timestamp,
                result: result,
                range: range,
                reason: reason
            };

            // Yerel depolamadan mevcut kayıtları alın ve yeni kaydı ekleyin
            const history = JSON.parse(localStorage.getItem('history')) || [];
            history.push(newRecord);
            localStorage.setItem('history', JSON.stringify(history));

            // Yeni kaydı ekrana ekleyin
            loadHistory();
        } else {
            resultDiv.textContent = 'Lütfen iki zamanı da giriniz.';
        }
    });

    sortButton.addEventListener('click', () => {
        const history = JSON.parse(localStorage.getItem('history')) || [];
        history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        localStorage.setItem('history', JSON.stringify(history));
        displayHistory(history);
    });

    loadHistory();
});