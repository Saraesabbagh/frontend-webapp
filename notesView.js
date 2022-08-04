class NotesView {
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-containter');
        document.querySelector('#add-note-button').addEventListener('click', () => {
            const newNote = document.querySelector('#note-input').value;
            this.addNewNote(newNote);
        })

    }

    addNewNote(newNote) {
        this.model.addNotes(newNote);
        document.querySelector('#note-input').value = '';
        this.displayNotes();
      }

    displayNotes() {
        document.querySelectorAll('.note').forEach(element => {
            element.remove();
        });

        const notes = this.model.getNotes()
       
        notes.forEach((note) => {

            const noteEl = document.createElement('div');
            noteEl.innerText = note;
            noteEl.className = 'note';
            
            this.mainContainerEl.append(noteEl);
        })
        console.log(notes);
    }
}


module.exports = NotesView;