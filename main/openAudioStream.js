function openStream(url) {
    let a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Добавляем обработчик клика на все неактивные аудиоплееры
document.addEventListener('click', function(event) {
    const audioElement = event.target.closest('.inactive-audio');
    if (audioElement) {
        const streamUrl = audioElement.getAttribute('data-stream-url');
        if (streamUrl) {
            openStream(streamUrl);
        }
    }
});