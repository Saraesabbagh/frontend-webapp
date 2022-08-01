const NotesModel = require('./notesModel');

describe('notes model', () => {
    const notesModel = new NotesModel();

    describe('getNotes', () => {
        it('gets the list of notes', () => {
        const notesModel = new NotesModel();
        expect(notesModel.getNotes()).toEqual([]);
        })
    })
    describe('addNote', () => {
        it('adds a note to the list of notes', () => {
        const notesModel = new NotesModel();
        notesModel.addNote('cleaning');
        notesModel.addNote('dishes');
        expect(notesModel.getNotes()).toEqual(['cleaning', 'dishes']);
        })
    })
    describe('reset', () => {
        it('resets the list of notes', () => {
        const notesModel = new NotesModel();
        notesModel.addNote('cleaning');
        notesModel.reset();
        expect(notesModel.getNotes()).toEqual([]);
        })
    })


})