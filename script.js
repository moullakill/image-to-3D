document.getElementById('image').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('image-preview').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Fonctionnalité à implémenter : Envoyer l'image et le prompt à l'IA !");
});
