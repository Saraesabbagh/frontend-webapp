const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const Api = require('./NotesApi');


const model = new NotesModel();
const api = new Api();
// model.addNotes('This is an example note');


const notesView = new NotesView(model, api);
notesView.displayNotesFromApi();





console.log('The notes app is running');