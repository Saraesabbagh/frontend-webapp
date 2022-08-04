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
    it('adds a new note', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
      
        const model = new NotesModel();
        const view = new NotesView(model);
      
        // 1. Fill the input
        const input = document.querySelector('#note-input');
        input.value = 'My new amazing test note';
      
        // 2. Click the button
        const button = document.querySelector('#add-note-button');
        button.click();
      
        // 3. The note should be on the page
        expect(document.querySelectorAll('div.note').length).toEqual(1);
        expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
      });


        
});
