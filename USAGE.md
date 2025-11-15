# Resume Builder - Usage Guide

## Getting Started

### Step 1: Open the Resume Builder
Simply open `index.html` in your web browser. No installation or build process required!

### Step 2: Choose a Template
At the top of the page, you'll see three template options:
- **Professional**: Best for corporate and traditional industries
- **Modern**: Perfect for tech and creative roles
- **Creative**: Ideal for design and creative positions

Click any template button to instantly switch the design.

## Editing Your Resume

### Method 1: Using the JSON Editor (Recommended)

1. Click the **"Edit Resume Data"** button
2. The JSON editor will open with your current resume data
3. Edit any field you want to change
4. Click **"Save & Apply"** to update your resume
5. Your changes are automatically saved to your browser

### Method 2: Editing the Source File

You can also edit `resume-data.js` directly:
1. Open `resume-data.js` in any text editor
2. Modify the `defaultResumeData` object
3. Save the file and refresh your browser

## JSON Data Structure Guide

### Personal Information
```json
"personalInfo": {
  "name": "Your Full Name",
  "title": "Your Job Title",
  "email": "your@email.com",
  "phone": "+1 (555) 123-4567",
  "location": "City, State",
  "linkedin": "linkedin.com/in/yourprofile",
  "github": "github.com/yourusername",
  "website": "yourwebsite.com",
  "summary": "Your professional summary..."
}
```

**Tips:**
- Keep URLs without `https://` prefix
- Summary should be 2-4 sentences
- All fields except `name`, `title`, and `email` are optional

### Work Experience
```json
"experience": [
  {
    "position": "Job Title",
    "company": "Company Name",
    "location": "City, State",
    "startDate": "Jan 2020",
    "endDate": "Present",
    "responsibilities": [
      "Achievement 1 with metrics",
      "Achievement 2 with impact"
    ]
  }
]
```

**Tips:**
- List experiences in reverse chronological order (newest first)
- Use "Present" for your current job
- Use action verbs (Led, Developed, Improved, Achieved)
- Include numbers and metrics when possible
- Focus on achievements, not just duties

### Education
```json
"education": [
  {
    "degree": "Bachelor of Science in Computer Science",
    "institution": "University Name",
    "location": "City, State",
    "graduationDate": "May 2020",
    "gpa": "3.8/4.0",
    "honors": "Magna Cum Laude"
  }
]
```

**Tips:**
- GPA is optional (include if 3.5+)
- Honors can include: Cum Laude, Dean's List, scholarships

### Skills
```json
"skills": {
  "Programming Languages": ["JavaScript", "Python", "Java"],
  "Frameworks": ["React", "Node.js", "Django"],
  "Tools": ["Git", "Docker", "AWS"]
}
```

**Tips:**
- Organize by category for better readability
- List most relevant/strongest skills first
- Be honest - only list skills you can discuss in an interview

### Projects (Optional)
```json
"projects": [
  {
    "name": "E-Commerce Platform",
    "description": "Built a full-featured online store...",
    "technologies": ["React", "Node.js", "MongoDB"],
    "link": "github.com/username/project"
  }
]
```

**Tips:**
- Highlight 2-3 best projects
- Include links to live demos or GitHub repos
- Mention the problem solved or impact created

### Certifications (Optional)
```json
"certifications": [
  {
    "name": "AWS Certified Solutions Architect",
    "issuer": "Amazon Web Services",
    "date": "2022"
  }
]
```

## Exporting Your Resume

### Save as PDF
1. Click the **"Print / Save PDF"** button
2. In the print dialog, select **"Save as PDF"**
3. Choose your save location
4. Click **"Save"**

**Pro Tips:**
- Use the print preview to ensure everything looks good
- Check that page breaks are in good locations
- Consider saving different versions for different job applications

### Print Settings Recommendations
- **Paper Size**: Letter (8.5 x 11 inches) or A4
- **Margins**: Normal
- **Background Graphics**: Enabled (to show colors)
- **Orientation**: Portrait

## Customization Tips

### Color Schemes
Each template has a unique color scheme:
- **Professional**: Blue (#3498db) - trustworthy and professional
- **Modern**: Purple (#667eea) - innovative and modern
- **Creative**: Pink/Red gradient - bold and creative

To change colors, edit `styles.css` and modify the color values in the respective template sections.

### Adding New Sections
You can add custom sections by:
1. Adding data to your JSON
2. Modifying `app.js` to render the new section
3. Styling it in `styles.css`

### Responsive Design
The resume automatically adapts to different screen sizes:
- **Desktop**: Full layout with all features
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Stacked layout for better readability

## Troubleshooting

### My changes aren't showing
- Make sure you clicked "Save & Apply" in the JSON editor
- Try refreshing the page
- Check browser console for JSON syntax errors

### Invalid JSON error
- Check for missing commas between items
- Ensure all quotes are properly closed
- Use a JSON validator to find syntax errors
- Click "Reset to Default" to start fresh

### Resume looks different when printed
- Make sure "Background Graphics" is enabled in print settings
- Try different browsers (Chrome recommended for best results)
- Check the print preview before saving

### Lost my custom data
- Data is stored in browser localStorage
- Clearing browser data will delete your resume
- Export your resume JSON and save it as a backup file

## Best Practices

### Resume Content
1. **Keep it concise**: 1-2 pages maximum
2. **Tailor for each job**: Adjust skills and experience to match job description
3. **Use keywords**: Include industry-relevant terms
4. **Quantify achievements**: Use numbers, percentages, and metrics
5. **Proofread**: Check for spelling and grammar errors

### Design Guidelines
1. **Professional template**: Conservative industries (finance, law, healthcare)
2. **Modern template**: Tech, startups, and progressive companies
3. **Creative template**: Design, marketing, and creative fields
4. **Consistency**: Stick with one template per application
5. **White space**: Don't overcrowd - let content breathe

### File Management
1. Save different versions for different industries
2. Keep a backup of your JSON data
3. Update regularly as you gain new experience
4. Use descriptive filenames (e.g., "JohnDoe_Resume_SoftwareEngineer.pdf")

## Advanced Usage

### Using Custom Resume Files
1. Create a new JSON file based on `example-custom-resume.json`
2. Load it via the JSON editor
3. Save to apply changes

### Hosting Online
You can host this resume builder on any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3

Simply upload all files and access via the provided URL.

### Integration with Other Tools
The JSON format makes it easy to:
- Import/export data from other resume tools
- Build automated resume generators
- Create multiple resume versions programmatically
- Integrate with applicant tracking systems

## Getting Help

If you encounter issues or have questions:
1. Check this usage guide
2. Review the README.md for setup instructions
3. Inspect the browser console for errors
4. Verify your JSON syntax using a JSON validator

## Tips for Success

✅ **Do:**
- Keep your resume up-to-date
- Tailor content for each application
- Use strong action verbs
- Quantify your achievements
- Include relevant keywords
- Proofread carefully

❌ **Don't:**
- Lie or exaggerate
- Include personal information (age, photo, etc.)
- Use unprofessional email addresses
- Make it too long (>2 pages)
- Use small fonts (<10pt)
- Include irrelevant information
