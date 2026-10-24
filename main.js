const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = themeBtn.querySelector('i');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        document.body.style.backgroundColor = '#f3f4f6';
        document.body.style.color = '#111827';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        document.body.style.backgroundColor = '#0b0f19';
        document.body.style.color = '#f3f4f6';
    }
});
