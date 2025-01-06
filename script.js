document.addEventListener('DOMContentLoaded', function () {
    // Cambios entre secciones
    document.querySelectorAll('button[data-section], button[data-next], button[data-prev]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const targetSection = e.target.dataset.section || e.target.dataset.next || e.target.dataset.prev;
            if (targetSection) {
                document.querySelectorAll('.section').forEach((section) => {
                    section.classList.remove('active');
                });
                document.getElementById(targetSection).classList.add('active');
            }
        });
    });

    // Cargar videos en la sección de nutrición
    function loadVideos() {
        const videos = [
            "https://www.youtube.com/embed/something1", // Video 1
            "https://www.youtube.com/embed/something2", // Video 2
            "https://www.youtube.com/embed/something3", // Video 3
            "https://www.youtube.com/embed/something4", // Video 4
            "https://www.youtube.com/embed/something5", // Video 5
            "https://www.youtube.com/embed/something6"  // Video 6
        ];

        const videoContainer = document.querySelector('.video-container');
        videos.forEach(videoUrl => {
            const iframe = document.createElement('iframe');
            iframe.setAttribute('width', '560');
            iframe.setAttribute('height', '315');
            iframe.setAttribute('src', videoUrl);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', 'true');
            videoContainer.appendChild(iframe);
        });
    }

    // Manejar comentarios
    function loadComments() {
        const commentsList = document.getElementById('comments-list');
        commentsList.innerHTML = ''; // Limpiar lista de comentarios
    }

    // Agregar un nuevo comentario
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar el comportamiento por defecto del formulario

        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        if (name && message) {
            const newComment = { name, message };

            // Agregar el comentario a la lista de comentarios en la sesión actual
            const commentsList = document.getElementById('comments-list');
            const li = document.createElement('li');
            li.innerHTML = `<b>${newComment.name}:</b> ${newComment.message}`;
            commentsList.appendChild(li);

            // Limpiar formulario
            document.getElementById('name').value = '';
            document.getElementById('message').value = '';
        }
    });

    // Inicializar sin comentarios previos
    loadComments();

    // Cargar los videos
    loadVideos();

    // Mostrar la información nutricional
    const nutritionInfo = [
        {
            title: "Buena Nutrición",
            content: "La buena nutrición es esencial para el desarrollo y el bienestar de los estudiantes. Comer alimentos ricos en vitaminas y minerales ayuda a mejorar la concentración y el rendimiento académico."
        },
        {
            title: "Nutrición Deficiente",
            content: "Una dieta pobre en nutrientes puede causar problemas de salud, como fatiga, falta de concentración y bajo rendimiento académico. Evitar alimentos procesados y azúcares es clave para una mejor salud."
        }
    ];

    const nutritionSection = document.getElementById('nutrition-info');
    nutritionInfo.forEach(info => {
        const nutritionCard = document.createElement('div');
        nutritionCard.classList.add('nutrition-info');
        nutritionCard.innerHTML = `
            <h2>${info.title}</h2>
            <p>${info.content}</p>
        `;
        nutritionSection.appendChild(nutritionCard);
    });

    // Function to handle section navigation
    const buttons = document.querySelectorAll('button[data-section], .next-btn, .prev-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const sectionId = event.target.getAttribute('data-section');
            const prevSection = event.target.getAttribute('data-prev');
            const nextSection = event.target.getAttribute('data-next');

            if (sectionId) {
                showSection(sectionId);
            }

            if (prevSection) {
                showSection(prevSection);
            }

            if (nextSection) {
                showSection(nextSection);
            }
        });
    });

    // Function to show the selected section
    function showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.remove('active'));

        // Show the section that matches the given ID
        const sectionToShow = document.getElementById(sectionId);
        if (sectionToShow) {
            sectionToShow.classList.add('active');
        }
    }

    // Initial section display (optional)
    showSection('inicio');  // Default starting section
});
