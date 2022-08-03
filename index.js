const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const model = new NotesModel();
model.addNotes('This is an example note');
model.addNotes('This is another note see!')

const notesView = new NotesView(model);
notesView.displayNotes();





console.log('The notes app is running');