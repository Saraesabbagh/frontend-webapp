class NotesView {
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-containter');
    }

    displayNotes() {
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