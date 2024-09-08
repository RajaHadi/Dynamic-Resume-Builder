// Get form elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.getElementById('generatedResume');

// Real-time updates for the resume
const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.addEventListener('input', () => {
        generateResume(); // Function to update resume dynamically
    });
});

// Function to generate and update the resume
function generateResume() {
    // Get input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Clear previous resume
    resumeContainer!.innerHTML = '';

    // Dynamically generate resume content
    resumeContainer!.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <h4>Education</h4>
        <p>${degree} - ${school}</p>
        <h4>Work Experience</h4>
        <p>${position} at ${company}</p>
        <h4>Skills</h4>
        <ul>
            ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
    `;
}

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Form validation
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const position = (document.getElementById('position') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    if (!name || !email || !degree || !school || !position || !company || skills.length === 0) {
        alert('Please fill out all fields.');
        return;
    }

    // Generate the resume again in case form is submitted before changes
    generateResume();
});
