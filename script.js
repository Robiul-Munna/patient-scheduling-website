
document.addEventListener('DOMContentLoaded', function() {
    const steps = [
        document.getElementById('step-1'),
        document.getElementById('step-2'),
        document.getElementById('step-3'),
        document.getElementById('step-4')
    ];
    let currentStep = 0;
    const form = document.getElementById('appointmentForm');
    const confirmation = document.getElementById('confirmation');
    const reviewDetails = document.getElementById('reviewDetails');

    function showStep(step) {
        steps.forEach((s, i) => {
            if (s) s.classList.toggle('hidden', i !== step);
        });
        currentStep = step;
    }

    // Navigation buttons
    document.getElementById('next-1').onclick = function() {
        if (validateStep1()) showStep(1);
    };
    document.getElementById('next-2').onclick = function() {
        if (validateStep2()) showStep(2);
    };
    document.getElementById('next-3').onclick = function() {
        if (validateStep3()) {
            fillReview();
            showStep(3);
        }
    };
    document.getElementById('prev-2').onclick = function() { showStep(0); };
    document.getElementById('prev-3').onclick = function() { showStep(1); };
    document.getElementById('prev-4').onclick = function() { showStep(2); };

    function validateStep1() {
        const visitType = document.getElementById('visitType').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        if (!visitType || !date || !time) {
            alert('Please fill in all fields for appointment selection.');
            return false;
        }
        return true;
    }
    function validateStep2() {
        const requiredFields = [
            'whoFor','userType','firstName','lastName','dob','sex','phoneType','phone','email','confirmEmail','address','city','state','zipcode'
        ];
        for (let id of requiredFields) {
            const el = document.getElementById(id);
            if (!el.value) {
                alert('Please fill in all patient information fields.');
                return false;
            }
        }
        if (document.getElementById('email').value !== document.getElementById('confirmEmail').value) {
            alert('Emails do not match.');
            return false;
        }
        return true;
    }
    function validateStep3() {
        // Reason is optional, but you can add more validation if needed
        return true;
    }

    function fillReview() {
        // Gather all values
        const get = id => document.getElementById(id)?.value || '';
        reviewDetails.innerHTML = `
            <strong>Visit Type:</strong> ${get('visitType')}<br>
            <strong>Date:</strong> ${get('date')}<br>
            <strong>Time:</strong> ${get('time')}<br>
            <strong>Who for:</strong> ${get('whoFor')}<br>
            <strong>User Type:</strong> ${get('userType')}<br>
            <strong>Name:</strong> ${get('firstName')} ${get('lastName')}<br>
            <strong>Date of Birth:</strong> ${get('dob')}<br>
            <strong>Sex:</strong> ${get('sex')}<br>
            <strong>Phone Type:</strong> ${get('phoneType')}<br>
            <strong>Phone:</strong> ${get('phone')}<br>
            <strong>Email:</strong> ${get('email')}<br>
            <strong>Address:</strong> ${get('address')}, ${get('city')}, ${get('state')} ${get('zipcode')}<br>
            <strong>Insurance:</strong> ${get('insurance')}<br>
            <strong>Member ID:</strong> ${get('memberId')}<br>
            <strong>Group Number:</strong> ${get('groupNumber')}<br>
            <strong>Reason:</strong> ${get('reason')}<br>
            <strong>Referring Doctor:</strong> ${get('refDoctor')}<br>
        `;
    }

    form.onsubmit = function(e) {
        e.preventDefault();
        if (!document.getElementById('consent').checked) {
            alert('You must give consent to proceed.');
            return;
        }
        // Simulate booking (in real app, send to server or email)
        confirmation.textContent = 'Thank you! Your appointment is scheduled. A confirmation email will be sent.';
        confirmation.style.color = 'green';
        confirmation.classList.remove('hidden');
        form.classList.add('hidden');
    };

    // Show first step
    showStep(0);
});
