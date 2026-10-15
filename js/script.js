document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch and render featured projects from JSON
    fetch('data/projects.json')
        .then(response => response.json())
        .then(projects => {
            const container = document.getElementById('projects-container');
            container.innerHTML = '';

            projects.forEach(project => {
                const tagsHtml = project.tags
                    .map(tag => `<span class="tag">${tag}</span>`)
                    .join('');

                const projectCard = `
                    <div class="project-card">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div>${tagsHtml}</div>
                    </div>
                `;
                container.innerHTML += projectCard;
            });
        })
        .catch(error => {
            console.error('Error fetching projects:', error);
            document.getElementById('projects-container').innerHTML = 
                '<p>Unable to load featured projects at this moment.</p>';
        });

    // 2. Handle Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;

        alert(`Thank you, ${fullName}! Your message has been received. Alexandra Thea Tuazon will get back to you at ${email}.`);
        contactForm.reset();
    });
});
