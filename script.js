// Resume data structure
class ResumeManager {
    constructor() {
        this.storageKey = 'resumeData';
        this.data = this.loadFromStorage() || this.getDefaultData();
        this.experienceCount = 0;
        this.educationCount = 0;
    }

    getDefaultData() {
        return {
            personalInfo: {
                fullName: '',
                email: '',
                phone: '',
                location: '',
                website: '',
                summary: ''
            },
            experience: [],
            education: [],
            skills: []
        };
    }

    loadFromStorage() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return null;
        }
    }

    saveToStorage() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
            return true;
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            return false;
        }
    }

    updateData(newData) {
        this.data = newData;
        return this.saveToStorage();
    }

    clearData() {
        this.data = this.getDefaultData();
        localStorage.removeItem(this.storageKey);
    }

    exportToJSON() {
        return JSON.stringify(this.data, null, 2);
    }

    importFromJSON(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            // Validate basic structure
            if (!data.personalInfo || !data.experience || !data.education || !data.skills) {
                throw new Error('Invalid resume data structure');
            }
            this.data = data;
            return this.saveToStorage();
        } catch (error) {
            console.error('Error importing JSON:', error);
            throw error;
        }
    }
}

// Initialize resume manager
const resumeManager = new ResumeManager();

// DOM Elements
const form = document.getElementById('resumeForm');
const experienceList = document.getElementById('experienceList');
const educationList = document.getElementById('educationList');
const previewDiv = document.getElementById('resumePreview');
const notification = document.getElementById('notification');

// Form fields
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const locationInput = document.getElementById('location');
const websiteInput = document.getElementById('website');
const summaryInput = document.getElementById('summary');
const skillsInput = document.getElementById('skills');

// Buttons
const addExperienceBtn = document.getElementById('addExperience');
const addEducationBtn = document.getElementById('addEducation');
const exportBtn = document.getElementById('exportBtn');
const importBtn = document.getElementById('importBtn');
const fileInput = document.getElementById('fileInput');
const clearBtn = document.getElementById('clearBtn');

// Utility functions
function showNotification(message, isError = false) {
    notification.textContent = message;
    notification.classList.add('show');
    if (isError) {
        notification.classList.add('error');
    } else {
        notification.classList.remove('error');
    }
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function createExperienceItem(data = {}) {
    const id = `exp-${resumeManager.experienceCount++}`;
    const div = document.createElement('div');
    div.className = 'experience-item';
    div.dataset.id = id;
    
    div.innerHTML = `
        <div class="item-header">
            <h4>Experience Entry</h4>
            <button type="button" class="btn btn-remove" onclick="removeExperience('${id}')">Remove</button>
        </div>
        <div class="form-group">
            <label>Job Title *</label>
            <input type="text" class="exp-title" value="${data.title || ''}" required>
        </div>
        <div class="form-group">
            <label>Company *</label>
            <input type="text" class="exp-company" value="${data.company || ''}" required>
        </div>
        <div class="form-group">
            <label>Start Date</label>
            <input type="text" class="exp-start" value="${data.startDate || ''}" placeholder="e.g., Jan 2020">
        </div>
        <div class="form-group">
            <label>End Date</label>
            <input type="text" class="exp-end" value="${data.endDate || ''}" placeholder="e.g., Present">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="exp-desc" rows="3">${data.description || ''}</textarea>
        </div>
    `;
    
    experienceList.appendChild(div);
}

function createEducationItem(data = {}) {
    const id = `edu-${resumeManager.educationCount++}`;
    const div = document.createElement('div');
    div.className = 'education-item';
    div.dataset.id = id;
    
    div.innerHTML = `
        <div class="item-header">
            <h4>Education Entry</h4>
            <button type="button" class="btn btn-remove" onclick="removeEducation('${id}')">Remove</button>
        </div>
        <div class="form-group">
            <label>Degree *</label>
            <input type="text" class="edu-degree" value="${data.degree || ''}" required>
        </div>
        <div class="form-group">
            <label>School *</label>
            <input type="text" class="edu-school" value="${data.school || ''}" required>
        </div>
        <div class="form-group">
            <label>Year</label>
            <input type="text" class="edu-year" value="${data.year || ''}" placeholder="e.g., 2020">
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="edu-desc" rows="2">${data.description || ''}</textarea>
        </div>
    `;
    
    educationList.appendChild(div);
}

function removeExperience(id) {
    const item = document.querySelector(`.experience-item[data-id="${id}"]`);
    if (item) {
        item.remove();
    }
}

function removeEducation(id) {
    const item = document.querySelector(`.education-item[data-id="${id}"]`);
    if (item) {
        item.remove();
    }
}

// Make remove functions global
window.removeExperience = removeExperience;
window.removeEducation = removeEducation;

function collectFormData() {
    const data = {
        personalInfo: {
            fullName: fullNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            location: locationInput.value,
            website: websiteInput.value,
            summary: summaryInput.value
        },
        experience: [],
        education: [],
        skills: skillsInput.value.split(',').map(s => s.trim()).filter(s => s)
    };
    
    // Collect experience
    document.querySelectorAll('.experience-item').forEach(item => {
        data.experience.push({
            title: item.querySelector('.exp-title').value,
            company: item.querySelector('.exp-company').value,
            startDate: item.querySelector('.exp-start').value,
            endDate: item.querySelector('.exp-end').value,
            description: item.querySelector('.exp-desc').value
        });
    });
    
    // Collect education
    document.querySelectorAll('.education-item').forEach(item => {
        data.education.push({
            degree: item.querySelector('.edu-degree').value,
            school: item.querySelector('.edu-school').value,
            year: item.querySelector('.edu-year').value,
            description: item.querySelector('.edu-desc').value
        });
    });
    
    return data;
}

function loadFormData(data) {
    // Load personal info
    fullNameInput.value = data.personalInfo.fullName || '';
    emailInput.value = data.personalInfo.email || '';
    phoneInput.value = data.personalInfo.phone || '';
    locationInput.value = data.personalInfo.location || '';
    websiteInput.value = data.personalInfo.website || '';
    summaryInput.value = data.personalInfo.summary || '';
    skillsInput.value = data.skills.join(', ');
    
    // Clear and load experience
    experienceList.innerHTML = '';
    data.experience.forEach(exp => createExperienceItem(exp));
    
    // Clear and load education
    educationList.innerHTML = '';
    data.education.forEach(edu => createEducationItem(edu));
    
    updatePreview(data);
}

function updatePreview(data) {
    const { personalInfo, experience, education, skills } = data;
    
    let html = '';
    
    // Personal info section
    if (personalInfo.fullName) {
        html += `<h2>${personalInfo.fullName}</h2>`;
        html += '<div class="contact-info">';
        
        const contacts = [];
        if (personalInfo.email) contacts.push(personalInfo.email);
        if (personalInfo.phone) contacts.push(personalInfo.phone);
        if (personalInfo.location) contacts.push(personalInfo.location);
        if (personalInfo.website) contacts.push(`<a href="${personalInfo.website}" target="_blank">${personalInfo.website}</a>`);
        
        html += contacts.join(' | ');
        html += '</div>';
    }
    
    // Summary
    if (personalInfo.summary) {
        html += '<div class="section">';
        html += '<h3>Summary</h3>';
        html += `<p>${personalInfo.summary}</p>`;
        html += '</div>';
    }
    
    // Experience
    if (experience.length > 0) {
        html += '<div class="section">';
        html += '<h3>Experience</h3>';
        experience.forEach(exp => {
            html += '<div class="job">';
            html += '<div class="job-header">';
            html += `<div><span class="job-title">${exp.title}</span> at <span class="company">${exp.company}</span></div>`;
            if (exp.startDate || exp.endDate) {
                html += `<div class="dates">${exp.startDate} - ${exp.endDate}</div>`;
            }
            html += '</div>';
            if (exp.description) {
                html += `<div class="description">${exp.description}</div>`;
            }
            html += '</div>';
        });
        html += '</div>';
    }
    
    // Education
    if (education.length > 0) {
        html += '<div class="section">';
        html += '<h3>Education</h3>';
        education.forEach(edu => {
            html += '<div class="edu">';
            html += '<div class="edu-header">';
            html += `<div><span class="degree">${edu.degree}</span> - <span class="school">${edu.school}</span></div>`;
            if (edu.year) {
                html += `<div class="dates">${edu.year}</div>`;
            }
            html += '</div>';
            if (edu.description) {
                html += `<div class="description">${edu.description}</div>`;
            }
            html += '</div>';
        });
        html += '</div>';
    }
    
    // Skills
    if (skills.length > 0) {
        html += '<div class="section">';
        html += '<h3>Skills</h3>';
        html += '<div class="skills-list">';
        skills.forEach(skill => {
            html += `<span class="skill-tag">${skill}</span>`;
        });
        html += '</div>';
        html += '</div>';
    }
    
    if (html) {
        previewDiv.innerHTML = html;
    } else {
        previewDiv.innerHTML = '<p class="placeholder">Your resume preview will appear here</p>';
    }
}

// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = collectFormData();
    
    if (resumeManager.updateData(data)) {
        updatePreview(data);
        showNotification('Resume saved successfully!');
    } else {
        showNotification('Error saving resume', true);
    }
});

addExperienceBtn.addEventListener('click', () => {
    createExperienceItem();
});

addEducationBtn.addEventListener('click', () => {
    createEducationItem();
});

exportBtn.addEventListener('click', () => {
    const data = collectFormData();
    resumeManager.updateData(data);
    
    const jsonString = resumeManager.exportToJSON();
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resume-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('Resume exported successfully!');
});

importBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            resumeManager.importFromJSON(event.target.result);
            loadFormData(resumeManager.data);
            showNotification('Resume imported successfully!');
        } catch (error) {
            showNotification('Error importing resume: Invalid JSON format', true);
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    fileInput.value = '';
});

clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all resume data? This action cannot be undone.')) {
        resumeManager.clearData();
        loadFormData(resumeManager.data);
        showNotification('Resume data cleared');
    }
});

// Auto-save on input (debounced)
let autoSaveTimeout;
function autoSave() {
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
        const data = collectFormData();
        resumeManager.updateData(data);
        updatePreview(data);
    }, 1000);
}

// Add auto-save listeners to all inputs
[fullNameInput, emailInput, phoneInput, locationInput, websiteInput, summaryInput, skillsInput].forEach(input => {
    input.addEventListener('input', autoSave);
});

// Delegate events for dynamically created inputs
experienceList.addEventListener('input', autoSave);
educationList.addEventListener('input', autoSave);

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    loadFormData(resumeManager.data);
    showNotification('Resume loaded from local storage');
});
