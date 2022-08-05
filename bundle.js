(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
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
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.mainContainerEl = document.querySelector("#main-containter");
          this.inputEl = document.querySelector("#note-input");
          this.buttonEl = document.querySelector("#add-note-button");
          this.buttonEl.addEventListener("click", () => {
            const newNote = document.querySelector("#note-input");
            this.addNewNote(newNote.value);
            newNote.value = "";
          });
        }
        addToNotes() {
          const noteInput = this.inputEl.value;
          const notes = await;
        }
        addNewNote(newNote) {
          this.model.addNotes(newNote);
          this.displayNotes();
        }
        displayNotesFromApi() {
          this.api.loadNotes((data) => {
            data.forEach((note) => this.model.addNotes(note));
            this.displayNotes();
          });
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((element) => {
            element.remove();
          });
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
          console.log(notes);
        }
      };
      module.exports = NotesView2;
    }
  });

  // NotesApi.js
  var require_NotesApi = __commonJS({
    "NotesApi.js"(exports, module) {
      var NotesApi = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        async createNote(data) {
          let notes = null;
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "content": data
            })
          }).then((response) => response.json()).then((list) => {
            return list;
          }).catch((error) => {
            console.error("Error:", error);
          });
        }
      };
      module.exports = NotesApi;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var Api = require_NotesApi();
  var model = new NotesModel();
  var api = new Api();
  var notesView = new NotesView(model, api);
  notesView.displayNotesFromApi();
  console.log("The notes app is running");
})();
