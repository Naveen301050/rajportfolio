function openModal() {
    document.getElementById('project-modal').style.display = "block";
}

function closeModal() {
    document.getElementById('project-modal').style.display = "none";
}

// Close modal when clicking outside of the modal
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}