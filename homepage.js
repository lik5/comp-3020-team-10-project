function navigateTo(sectionId) {
    // Scroll to the section
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });

    // Update active tab
    const buttons = document.querySelectorAll('.nav-tabs button');
    buttons.forEach(button => button.classList.remove('active'));
    document.querySelector(`.nav-tabs button[onclick="navigateTo('${sectionId}')"]`).classList.add('active');
}
