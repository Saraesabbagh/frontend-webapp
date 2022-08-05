class NotesView {
    constructor(model, api) {
        this.model = model;
        this.api = api;
        this.mainContainerEl = document.querySelector('#main-containter');
        this.inputEl = document.querySelector('#note-input');

        this.buttonEl = document.querySelector('#add-note-button'); 
        
        this.buttonEl.addEventListener('click', () => {
            const newNote = document.querySelector('#note-input');
            this.addNewNote(newNote.value);
            newNote.value = '';
            
        })

    }

    addToNotes(){
        const noteInput = this.inputEl.value;
        const notes = await this.api.createNote(noteInput);
        console.log(`saved notes ${notes}`);
        notes.forEach((note) => {
            const noteEl = document.createElement('div');
            noteEl.innterText = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl);
            console.log(`adding ${note}`);
        })
        this.inputEl.value = '';
    }

    // addNewNote(newNote) {
    //     this.model.addNotes(newNote);
        
    //     this.displayNotes();
    //   }

      displayNotesFromApi() {
        this.api.loadNotes((data) =>{
            data.forEach(note => this.model.addNotes(note));
            this.displayNotes();
        })
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