# Resume Editor

A simple, user-friendly web-based resume editor that allows you to create, edit, and manage your resume with automatic local storage.

## Features

- **Easy Resume Editing**: Intuitive form-based interface for entering resume information
- **Local Storage**: Automatically saves your resume data to browser's localStorage
- **Auto-save**: Changes are automatically saved as you type
- **Real-time Preview**: See your resume preview as you edit
- **JSON Export/Import**: Export your resume as JSON file or import existing resume data
- **Responsive Design**: Works on desktop and mobile devices

## Usage

1. Open `index.html` in your web browser
2. Fill in your resume information:
   - Personal Information (name, email, phone, location, website, summary)
   - Experience entries (job title, company, dates, description)
   - Education entries (degree, school, year, description)
   - Skills (comma-separated list)
3. Click "Save Resume" or changes auto-save after 1 second
4. Your data is automatically saved to browser's localStorage

## Data Management

### Export Resume
Click the "Export JSON" button to download your resume data as a JSON file. This creates a backup you can save anywhere.

### Import Resume
Click the "Import JSON" button and select a previously exported JSON file to restore your resume data.

### Clear Data
Click "Clear All" to remove all resume data from localStorage (requires confirmation).

## Data Storage

Your resume data is stored locally in your browser using localStorage. The data structure:

```json
{
  "personalInfo": {
    "fullName": "Your Name",
    "email": "email@example.com",
    "phone": "123-456-7890",
    "location": "City, State",
    "website": "https://yourwebsite.com",
    "summary": "Professional summary..."
  },
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "startDate": "Jan 2020",
      "endDate": "Present",
      "description": "Job description..."
    }
  ],
  "education": [
    {
      "degree": "Degree Name",
      "school": "School Name",
      "year": "2020",
      "description": "Additional info..."
    }
  ],
  "skills": ["Skill1", "Skill2", "Skill3"]
}
```

## Browser Compatibility

Works in all modern browsers that support:
- localStorage API
- ES6 JavaScript
- CSS Grid

## Privacy

All data is stored locally in your browser. No data is sent to any server. Your resume information remains completely private and under your control.
