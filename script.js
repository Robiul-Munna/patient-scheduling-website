// Renamed from script.js.txt
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        if (!name || !email || !date || !time) {
            confirmation.textContent = 'Please fill in all fields.';
            confirmation.style.color = 'red';
            confirmation.classList.remove('hidden');
            return;
        }

        // Simulate booking (in real app, send to server)
        confirmation.textContent = `Thank you, ${name}! Your appointment is booked for ${date} at ${time}.`;
        confirmation.style.color = 'green';
        confirmation.classList.remove('hidden');
        form.reset();
    });
});
