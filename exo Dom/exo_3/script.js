
function updateMainImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    thumbnails.forEach(function(thumbnail) {
      thumbnail.addEventListener('click', function() {
        updateMainImage(thumbnail.src);
      });
    });
  });
  