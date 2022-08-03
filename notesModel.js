class NotesModel {
    constructor() {
        this.notes = ["cleaning"];
    }

    getNotes() {
        return this.notes;
    }

    addNotes(note) {
        this.notes.push(note);
    }

    reset() {
        this.notes = [];
    }

}

module.exports = NotesModel;