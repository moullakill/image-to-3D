document.getElementById('upload-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const file = document.getElementById('image').files[0];
    if (!file) {
        alert("Veuillez téléverser une image !");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch("https://api.huggingface.co/models/stabilityai/stable-fast-3d", {
            method: "POST",
            headers: {
                "Authorization": "Bearer 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",
            },
            body: formData
        });

        if (!response.ok) throw new Error("Erreur API");

        const result = await response.json();
        alert("Modèle 3D généré !");
        document.getElementById("preview").innerHTML = `<iframe src="${result.output}" width="500" height="500"></iframe>`;

    } catch (error) {
        console.error("Erreur :", error);
        alert("Échec de génération, réessayez !");
    }
});
