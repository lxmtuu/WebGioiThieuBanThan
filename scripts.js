// Hiệu ứng cuộn trang mượt mà (Smooth Scroll)
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hiệu ứng hiện lên khi cuộn trang
const elements = document.querySelectorAll('.fadeInUp');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

elements.forEach(el => {
    observer.observe(el);
});

// Chức năng cuộn đến phần Sở Thích
function scrollToHobbies() {
    const hobbiesSection = document.getElementById('hobbies');
    hobbiesSection.scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt mà đến phần sở thích
}

// Chức năng cuộn đến phần Sở Thích
document.querySelector('.btn-hobbies').addEventListener('click', function(event) {
    event.preventDefault(); // Ngừng hành động mặc định của liên kết
    const hobbiesSection = document.getElementById('hobbies');
    hobbiesSection.scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt mà đến phần sở thích
});
