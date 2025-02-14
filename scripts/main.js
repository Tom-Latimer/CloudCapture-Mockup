document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contact-form').addEventListener('submit', (event) => {
        event.preventDefault();

        let contactContent = document.querySelector('.contact-banner-layout');
        let contactConfirm = document.querySelector('.contact-confirmation');

        contactContent.classList.add('invisible');
        contactConfirm.classList.remove('d-none');

    });
    
});