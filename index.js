const NotesModel = require('./notesModel');

const notesModel = new NotesModel();
console.log(notesModel.getNotes());

console.log('The notes app is running');