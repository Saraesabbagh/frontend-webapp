/**
 * @jest-environment jsdom
 */
const Api = require('./NotesApi')
const fs = require('fs');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

require('jest-fetch-mock').enableMocks();


jest.mock('./notesApi');

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
    
      it('clear the list of previous notes before displaying', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
      
        const model = new NotesModel();
        const view = new NotesView(model);
        model.addNote('one');
        model.addNote('two');
      
        view.displayNotes();
        view.displayNotes();
      
        expect(document.querySelectorAll('div.note').length).toEqual(2);
      });


    it("displays note from the API", () => {
      document.body.innerHTML = fs.readFileSync('./index.html');

      const api_double = new Api()
      api_double.loadNotes.mockImplementation((callback) => { callback(["test"]) })

      const model = new NotesModel();
      const view = new NotesView(model, api_double);
      view.displayNotesFromApi()

      const div = document.querySelectorAll('div.note');
      expect(div[0].innerText).toEqual("test");

  })


        
});
