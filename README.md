# Resume Builder

A beautiful, interactive resume builder with visually appealing templates that stores content in JSON format.

## Features

- 📝 **JSON-Based Storage**: All resume data is stored in a clean, structured JSON format
- 🎨 **Multiple Templates**: Choose from three visually appealing templates:
  - **Professional**: Clean and corporate design with blue accents
  - **Modern**: Sleek gradient header with contemporary styling
  - **Creative**: Bold and colorful design with unique shapes
- 💾 **Local Storage**: Your resume data is automatically saved in browser storage
- ✏️ **Easy Editing**: Built-in JSON editor to modify your resume data
- 🖨️ **Print Support**: Generate PDF versions of your resume
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## Quick Start

1. Clone this repository or download the files
2. Open `index.html` in your web browser
3. Your resume will be displayed with the default data

## Usage

### Viewing Your Resume

Simply open `index.html` in any modern web browser. The resume will be displayed with the default template (Professional).

### Switching Templates

Click on any of the template buttons at the top:
- **Professional**: Traditional corporate style
- **Modern**: Contemporary design with gradient header
- **Creative**: Bold and artistic layout

### Editing Resume Data

1. Click the "Edit Resume Data" button
2. A modal will open with the JSON data editor
3. Modify your resume data in JSON format
4. Click "Save & Apply" to update your resume
5. Your changes are automatically saved to browser storage

### Printing/Saving as PDF

1. Click the "Print / Save PDF" button
2. Use your browser's print dialog
3. Select "Save as PDF" as the destination
4. Choose your preferred settings and save

### Resetting to Default

In the edit modal, click "Reset to Default" to restore the original sample resume data.

## JSON Data Structure

The resume data follows this structure:

```json
{
  "personalInfo": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "email": "your.email@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "City, State",
    "linkedin": "linkedin.com/in/yourprofile",
    "github": "github.com/yourusername",
    "website": "yourwebsite.com",
    "summary": "Your professional summary..."
  },
  "experience": [
    {
      "position": "Job Title",
      "company": "Company Name",
      "location": "City, State",
      "startDate": "Month Year",
      "endDate": "Month Year or Present",
      "responsibilities": [
        "Achievement or responsibility 1",
        "Achievement or responsibility 2"
      ]
    }
  ],
  "education": [
    {
      "degree": "Degree Name",
      "institution": "University Name",
      "location": "City, State",
      "graduationDate": "Month Year",
      "gpa": "X.X/4.0",
      "honors": "Honors received"
    }
  ],
  "skills": {
    "Category 1": ["Skill 1", "Skill 2", "Skill 3"],
    "Category 2": ["Skill A", "Skill B"]
  },
  "projects": [
    {
      "name": "Project Name",
      "description": "Project description",
      "technologies": ["Tech 1", "Tech 2"],
      "link": "github.com/project"
    }
  ],
  "certifications": [
    {
      "name": "Certification Name",
      "issuer": "Issuing Organization",
      "date": "Year"
    }
  ]
}
```

## Files

- **index.html**: Main HTML structure
- **styles.css**: All styling including three template designs
- **app.js**: JavaScript functionality for rendering and editing
- **resume-data.js**: Default resume data in JSON format

## Customization

### Adding New Templates

1. Open `styles.css`
2. Create a new template class (e.g., `.resume.mynewtemplate`)
3. Define custom styles for all resume elements
4. Add a new button in `index.html` with `data-template="mynewtemplate"`

### Modifying Default Data

Edit the `defaultResumeData` object in `resume-data.js` to change the sample resume content.

## Browser Compatibility

Works with all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Tips

- Use the JSON editor to quickly update multiple sections
- Keep your JSON properly formatted to avoid errors
- Use the print preview to see how your resume will look on paper
- Try different templates to see which best represents your style
- Export to PDF for sharing with potential employers

## License

This project is open source and available for personal and commercial use.
