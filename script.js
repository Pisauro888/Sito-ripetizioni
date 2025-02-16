 function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isOpen = element.classList.contains('open');

    // Chiudi tutti gli altri accordion
    const allTitles = document.querySelectorAll('.accordion-title');
    const allContents = document.querySelectorAll('.accordion-content');
    allTitles.forEach(title => title.classList.remove('open'));
    allContents.forEach(content => {
        content.style.maxHeight = null;
        content.style.padding = "0 15px";
    });

    if (!isOpen) {
        element.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = "15px";
    }
}
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const isOpen = element.classList.contains('open');

    // Chiudi tutti gli altri accordion
    const allTitles = document.querySelectorAll('.accordion-title');
    const allContents = document.querySelectorAll('.accordion-content');
    allTitles.forEach(title => title.classList.remove('open'));
    allContents.forEach(content => {
        content.style.maxHeight = null;
        content.style.padding = "0 15px";
    });

    if (!isOpen) {
        element.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.padding = "15px";
    }
}

function closeCalendarForm() {
    document.getElementById('calendarForm').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function showCalendarForm() {
    document.getElementById('calendarForm').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const note = document.getElementById('note').value;

    if (!name || !email || !date) {
        alert('Per favore, compila tutti i campi richiesti.');
        return;
    }

    const requestBody = {
        name,
        email,
        date,
        note
    };

    console.log('Invio dati:', requestBody);

    alert(`Richiesta inviata con successo!\n\nNome: ${name}\nEmail: ${email}\nData: ${date}\nNota: ${note}`);

    closeCalendarForm();

    document.getElementById('calendarForm').reset();
}

// Aggiungi il pulsante di chiusura al popup
document.addEventListener('DOMContentLoaded', () => {
    const calendarForm = document.getElementById('calendarForm');
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', closeCalendarForm);
    calendarForm.appendChild(closeButton);
});

function showCalendarForm() {
    document.getElementById('calendarForm').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeCalendarForm() {
    document.getElementById('calendarForm').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const note = document.getElementById('note').value;

    if (!name || !email || !date) {
        alert('Per favore, compila tutti i campi richiesti.');
        return;
    }

    const requestBody = {
        name,
        email,
        date,
        note
    };

    // Simula l'invio della richiesta via email (da implementare con un server backend reale)
    console.log('Invio dati:', requestBody);

    alert(`Richiesta inviata con successo!\n\nNome: ${name}\nEmail: ${email}\nData: ${date}\nNota: ${note}`);

    closeCalendarForm();

    // Resetta il modulo
    document.getElementById('calendarForm').reset();
}


// prova carte

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".flip-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });
});


window.onload = function() {
    document.getElementById("animatedText").classList.add("animate");
};
