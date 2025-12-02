// Находим элементы на странице
const record = document.querySelector('.vinyl-record');
const audio = document.getElementById('audio-player');
const trackCard = document.querySelector('.track-info');

function togglePlayer() {
    // Если музыка на паузе — включаем
    if (audio.paused) {
        audio.play()
            .then(() => {
                console.log("Музыка играет");
                // Добавляем класс вращения
                record.classList.add('playing');
            })
            .catch(error => {
                console.error("Ошибка запуска музыки:", error);
                alert("Браузер заблокировал автоплей или файл не найден. Проверь консоль (F12).");
            });
    } 
    // Если музыка играет — ставим на паузу
    else {
        audio.pause();
        // Убираем класс вращения
        record.classList.remove('playing');
        console.log("Музыка на паузе");
    }
}

function togglePlayer() {
    if (!audio || !record) return;

    if (audio.paused) {
        audio.play().then(() => {
            record.classList.add('playing');
            // Показываем карточку
            trackCard.classList.add('visible');
        }).catch((err) => {
            console.error("Ошибка:", err);
            alert("Не удалось включить трек");
        });
    } else {
        audio.pause();
        record.classList.remove('playing');
        // Прячем карточку
        trackCard.classList.remove('visible');
    }
}