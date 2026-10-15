document.addEventListener('DOMContentLoaded', () => {
    // 1. Fetch and render projects dynamically from JSON
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
            console.error('Error loading projects:', error);
            document.getElementById('projects-container').innerHTML = 
                '<p>Unable to load projects at this time.</p>';
        });

    // 2. Copy GitHub README Markdown button logic
    const copyBtn = document.getElementById('copy-btn');
    const readmeCode = document.getElementById('readme-code');

    copyBtn.addEventListener('click', () => {
        const codeText = readmeCode.innerText;
        navigator.clipboard.writeText(codeText).then(() => {
            copyBtn.textContent = 'Copied!';
            copyBtn.style.background = '#00f2fe';
            copyBtn.style.color = '#000';

            setTimeout(() => {
                copyBtn.textContent = 'Copy Markdown';
                copyBtn.style.background = 'transparent';
                copyBtn.style.color = 'var(--text-primary)';
            }, 2000);
        });
    });

    // 3. Contact Form Submission mock handler
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message, Thea! The form was submitted successfully.');
        contactForm.reset();
    });
});
