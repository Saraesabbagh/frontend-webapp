const NotesModel = require('./notesModel');

describe('notes model', () => {
    const notesModel = new NotesModel();

    describe('getNotes', () => {
        it('gets the list of notes', () => {
        const notesModel = new NotesModel();
        expect(notesModel.getNotes()).toEqual(["cleaning"]);
        })
    })
    describe('addNote', () => {
        it('adds a note to the list of notes', () => {
        const notesModel = new NotesModel();
        notesModel.addNotes('cleaning');
        notesModel.addNotes('dishes');
        expect(notesModel.getNotes()).toEqual(["cleaning", 'cleaning', 'dishes']);
        })
    })
    describe('reset', () => {
        it('resets the list of notes', () => {
        const notesModel = new NotesModel();
        notesModel.addNotes('cleaning');
        notesModel.reset();
        expect(notesModel.getNotes()).toEqual([]);
        })
    })

})