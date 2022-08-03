/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');


describe('notesView', () => {

    beforeEach(() => { 
        document.body.innerHTML = fs.readFileSync('./index.html');
    })
    

    it('displays the notes on the html in a div', () => {
        const model = new NotesModel();
        const notesView = new NotesView(model);
        // notesView.addNotes('A first note');
        // notesView.addNotes('A second note');
        notesView.displayNotes();

        expect(document.querySelector('div.note').innerText).toBe("cleaning");  
    });
        
});
