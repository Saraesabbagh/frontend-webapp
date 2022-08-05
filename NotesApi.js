class NotesApi {
    loadNotes(callback) {
        fetch('http://localhost:3000/notes')
            .then(response => response.json())
            .then(data => {
                callback(data)
            });
    }
    async createNote(data) {
        let notes = null
        fetch('http://localhost:3000/notes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'content': data,
          })
        })
        .then(response => response.json())
        .then(list => {
          // console.log('Success:', list);
          return list;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
}

module.exports = NotesApi;