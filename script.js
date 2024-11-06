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
