let step = 0;
const formData = {
    firstName: '',
    lastName: '',
    userId: '',
    password: ''
};

const card = document.getElementById('card');
const steps = ['step0', 'step1', 'step2', 'step3', 'step4'];

function showStep(stepNumber) {
    steps.forEach((stepId, index) => {
        const stepElement = document.getElementById(stepId);
        if (index === stepNumber) {
            stepElement.classList.remove('hidden');
        } else {
            stepElement.classList.add('hidden');
        }
    });

    if (stepNumber > 0) {
        card.classList.add('bg-[#B5E2D6]');
        card.classList.remove('bg-black');
    } else {
        card.classList.add('bg-black');
        card.classList.remove('bg-[#B5E2D6]');
    }
}

function handleNext() {
    step++;
    showStep(step);
}

// Event Listeners
document.getElementById('getStartBtn').addEventListener('click', handleNext);
document.getElementById('loginBtn').addEventListener('click', handleNext);
document.getElementById('createAccountBtn').addEventListener('click', handleNext);
document.getElementById('createAccountSubmitBtn').addEventListener('click', handleNext);
document.getElementById('saveProfileBtn').addEventListener('click', handleNext);
document.getElementById('startMessagingBtn').addEventListener('click', handleNext);

// Form data handling
['firstName', 'lastName', 'userId', 'password'].forEach(id => {
    document.getElementById(id).addEventListener('input', (e) => {
        formData[id] = e.target.value;
    });
});

// Initialize
showStep(0);