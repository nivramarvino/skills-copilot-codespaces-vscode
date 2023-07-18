function skillsMember() {
    let member = document.getElementById("member");
    let skills = document.getElementById("skills");
    let experience = document.getElementById("experience");
    let education = document.getElementById("education");
    let memberButton = document.getElementById("memberButton");
    let skillsButton = document.getElementById("skillsButton");
    let experienceButton = document.getElementById("experienceButton");
    let educationButton = document.getElementById("educationButton");

    member.style.display = "block";
    skills.style.display = "none";
    experience.style.display = "none";
    education.style.display = "none";

    memberButton.style.backgroundColor = "#f8f9fa";
    memberButton.style.color = "#007bff";
    skillsButton.style.backgroundColor = "#007bff";
    skillsButton.style.color = "#f8f9fa";
    experienceButton.style.backgroundColor = "#007bff";
    experienceButton.style.color = "#f8f9fa";
    educationButton.style.backgroundColor = "#007bff";
    educationButton.style.color = "#f8f9fa";
}