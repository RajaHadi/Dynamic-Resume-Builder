// Get form elements
var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('generatedResume');
// Real-time updates for the resume
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    input.addEventListener('input', function () {
        generateResume(); // Function to update resume dynamically
    });
});
// Function to generate and update the resume
function generateResume() {
    // Get input values
    var address = document.getElementById('address').value
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var position = document.getElementById('position').value;
    var company = document.getElementById('company').value;
    var skills = document.getElementById('skills').value.split(',');
    // Clear previous resume
    resumeContainer.innerHTML = '';
    // Dynamically generate resume content
    resumeContainer.innerHTML = "\n        <h1>".concat(name, "</h1>\n        <p>Email: ").concat(email, "</p>\n    <p>Address: ").concat(address, "</p>\n     <h4>Education</h4>\n        <p>").concat(degree, " - ").concat(school, "</p>\n        <h4>Work Experience</h4>\n       <ul> <li><p>").concat(position, " at ").concat(company, "</p></li></ul> \n        <h4>Skills</h4>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n    ");
}
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Form validation
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var position = document.getElementById('position').value;
    var company = document.getElementById('company').value;
    var skills = document.getElementById('skills').value.split(',');
    if (!name || !email || !degree || !school || !position || !company || skills.length === 0) {
        alert('Please fill out all fields.');
        return;
    }
    // Generate the resume again in case form is submitted before changes
    generateResume();
});
document.getElementById('downloadResume').style.display = 'inline-block';

    // Update the download button to trigger PDF generation when clicked
    document.getElementById('downloadResume').addEventListener('click', function() {
        downloadPDF(name, email, address, degree, school, position, company, skills);
    });
}

// Function to download the resume as a PDF
function downloadPDF(name, email, address, degree, school, position, company, skills) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add the resume content to the PDF
    doc.setFontSize(18);
    doc.text(name, 20, 20);  // Name at the top

    doc.setFontSize(12);
    doc.text(`Email: ${email}`, 20, 30);
    doc.text(`Address: ${address}`, 20, 40);
    
    doc.text('Education:', 20, 50);
    doc.text(`${degree} - ${school}`, 20, 60);

    doc.text('Work Experience:', 20, 70);
    doc.text(`${position} at ${company}`, 20, 80);

    doc.text('Skills:', 20, 90);
    skills.forEach((skill, index) => {
        doc.text(skill.trim(), 20, 100 + (index * 10)); // List skills
    });

    // Trigger the download
    doc.save(`${name}_Resume.pdf`);
}

