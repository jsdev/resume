// Resume Builder Application
let currentResumeData = { ...defaultResumeData };
let currentTemplate = 'professional';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load resume data from localStorage if available
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
        try {
            currentResumeData = JSON.parse(savedData);
        } catch (e) {
            console.error('Error loading saved resume data:', e);
            currentResumeData = { ...defaultResumeData };
        }
    }

    // Render the resume
    renderResume();

    // Set up event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Template selector buttons
    const templateButtons = document.querySelectorAll('.template-btn');
    templateButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            templateButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentTemplate = this.dataset.template;
            switchTemplate(currentTemplate);
        });
    });

    // Edit button
    document.getElementById('editBtn').addEventListener('click', openEditModal);

    // Print button
    document.getElementById('printBtn').addEventListener('click', function() {
        window.print();
    });

    // Modal controls
    const modal = document.getElementById('editModal');
    const closeBtn = document.querySelector('.close');
    const saveBtn = document.getElementById('saveBtn');
    const resetBtn = document.getElementById('resetBtn');

    closeBtn.addEventListener('click', closeEditModal);
    saveBtn.addEventListener('click', saveResumeData);
    resetBtn.addEventListener('click', resetToDefault);

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeEditModal();
        }
    });
}

function renderResume() {
    const resumeContainer = document.getElementById('resume');
    const data = currentResumeData;

    let html = `
        <div class="resume-header">
            <h1 class="resume-name">${data.personalInfo.name}</h1>
            <h2 class="resume-title">${data.personalInfo.title}</h2>
            <div class="contact-info">
                <span class="contact-item"><i>📧</i> ${data.personalInfo.email}</span>
                <span class="contact-item"><i>📱</i> ${data.personalInfo.phone}</span>
                <span class="contact-item"><i>📍</i> ${data.personalInfo.location}</span>
            </div>
            <div class="contact-links">
                ${data.personalInfo.linkedin ? `<span class="contact-item"><i>💼</i> ${data.personalInfo.linkedin}</span>` : ''}
                ${data.personalInfo.github ? `<span class="contact-item"><i>💻</i> ${data.personalInfo.github}</span>` : ''}
                ${data.personalInfo.website ? `<span class="contact-item"><i>🌐</i> ${data.personalInfo.website}</span>` : ''}
            </div>
        </div>

        ${data.personalInfo.summary ? `
        <section class="resume-section">
            <h3 class="section-title">Professional Summary</h3>
            <p class="summary-text">${data.personalInfo.summary}</p>
        </section>
        ` : ''}

        <section class="resume-section">
            <h3 class="section-title">Work Experience</h3>
            ${data.experience.map(exp => `
                <div class="experience-item">
                    <div class="item-header">
                        <div class="item-title">
                            <h4 class="position">${exp.position}</h4>
                            <p class="company">${exp.company} - ${exp.location}</p>
                        </div>
                        <div class="item-date">${exp.startDate} - ${exp.endDate}</div>
                    </div>
                    <ul class="responsibilities">
                        ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </section>

        <section class="resume-section">
            <h3 class="section-title">Education</h3>
            ${data.education.map(edu => `
                <div class="education-item">
                    <div class="item-header">
                        <div class="item-title">
                            <h4 class="degree">${edu.degree}</h4>
                            <p class="institution">${edu.institution} - ${edu.location}</p>
                            ${edu.honors ? `<p class="honors">${edu.honors}${edu.gpa ? ` • GPA: ${edu.gpa}` : ''}</p>` : ''}
                        </div>
                        <div class="item-date">${edu.graduationDate}</div>
                    </div>
                </div>
            `).join('')}
        </section>

        <section class="resume-section">
            <h3 class="section-title">Skills</h3>
            <div class="skills-grid">
                ${Object.entries(data.skills).map(([category, skills]) => `
                    <div class="skill-category">
                        <h4 class="skill-category-title">${category}:</h4>
                        <p class="skill-list">${skills.join(' • ')}</p>
                    </div>
                `).join('')}
            </div>
        </section>

        ${data.projects && data.projects.length > 0 ? `
        <section class="resume-section">
            <h3 class="section-title">Projects</h3>
            ${data.projects.map(proj => `
                <div class="project-item">
                    <h4 class="project-name">${proj.name}</h4>
                    <p class="project-description">${proj.description}</p>
                    <p class="project-tech"><strong>Technologies:</strong> ${proj.technologies.join(', ')}</p>
                    ${proj.link ? `<p class="project-link"><strong>Link:</strong> ${proj.link}</p>` : ''}
                </div>
            `).join('')}
        </section>
        ` : ''}

        ${data.certifications && data.certifications.length > 0 ? `
        <section class="resume-section">
            <h3 class="section-title">Certifications</h3>
            ${data.certifications.map(cert => `
                <div class="certification-item">
                    <h4 class="cert-name">${cert.name}</h4>
                    <p class="cert-info">${cert.issuer} • ${cert.date}</p>
                </div>
            `).join('')}
        </section>
        ` : ''}
    `;

    resumeContainer.innerHTML = html;
}

function switchTemplate(template) {
    const resumeContainer = document.getElementById('resume');
    resumeContainer.className = `resume ${template}`;
}

function openEditModal() {
    const modal = document.getElementById('editModal');
    const editor = document.getElementById('jsonEditor');
    editor.value = JSON.stringify(currentResumeData, null, 2);
    modal.style.display = 'block';
}

function closeEditModal() {
    const modal = document.getElementById('editModal');
    modal.style.display = 'none';
}

function saveResumeData() {
    const editor = document.getElementById('jsonEditor');
    try {
        const newData = JSON.parse(editor.value);
        currentResumeData = newData;
        localStorage.setItem('resumeData', JSON.stringify(newData));
        renderResume();
        closeEditModal();
        alert('Resume data saved successfully!');
    } catch (e) {
        alert('Invalid JSON format. Please check your data and try again.\n\nError: ' + e.message);
    }
}

function resetToDefault() {
    if (confirm('Are you sure you want to reset to the default resume data? This will delete your custom data.')) {
        currentResumeData = { ...defaultResumeData };
        localStorage.removeItem('resumeData');
        renderResume();
        closeEditModal();
        alert('Resume data reset to default.');
    }
}
