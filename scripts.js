document.getElementById('addBtn').addEventListener('click', function() {
    const noteText = document.getElementById('Write').value;
    const noteColor = document.getElementById('colorBox').value;

    if (noteText.trim() !== '') {
        addNote(noteText, noteColor);
        document.getElementById('Write').value = ''; // Clear the textarea
    }
});

function addNote(text, color) {
    const notesGrid = document.getElementById('notes-grid');

    const note = document.createElement('div');
    note.className = 'note';
    note.style.backgroundColor = color;

    const noteText = document.createElement('p');
    noteText.textContent = text;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = '✖';
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', function() {
        notesGrid.removeChild(note);
    });

    note.appendChild(noteText);
    note.appendChild(deleteBtn);
    notesGrid.appendChild(note);
}