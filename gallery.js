const images = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Open the modal and display the clicked image
images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImage.src = this.src;
    });
});

// Close the modal when clicking the close button or outside the image
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
