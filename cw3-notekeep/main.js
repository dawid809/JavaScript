const localStorageNotesKey= 'notes';
const notes =[];

//nowa notatka
const note={
    title:'nowa notatka',
    content:'treść notatki',
    coloir:'#ff0000',
    pinned: false,
    creaeDate: new Date ()
};

//notatka dodana do tablicy notatek
notes.push(note)
notes.push(note)
notes.push(note)



//tablica zapisana w localStograge
localStorage.setItem(localStorageNotesKey, JSON.stringify(notes));

//odczytanie tablicy notatek z localStorage
const notesFromStorage=JSON.parse(localStorage.getItem(localStorageNotesKey));
notes=notes.map(note=>{
    note.creaeDate=new Date(note.creaeDate);
    return note;
})

//zmiana html-a z poziomu js-a
for (let note of notes) {
const htmlSection =document.createElement('section')
const htmlTitle =document.createElement('h1')
const htmlContent =document.createElement('p')
const htmlDate =document.createElement('h4')

htmlSection.classList.add('note');
htmlTitle.innerHTML=note.title;
htmlContent.innerHTML=note.content;
htmlDate.innerHTML=note.creaeDate.toLocaleString();

htmlSection.appendChild(htmlTitle);
htmlSection.appendChild(htmlContent);
htmlSection.appendChild(htmlDate);

const main =document.querySelector('main');
main.appendChild(htmlSection);
}
//main.removeChild()


for(let note of notes){
    const htmlNote=`
    <section class="note">
    <h1>${note.title}</h1>
    <p>${note.content}</p>
    <h4>${note.creaeDate.toLocaleString()}</h4>
    </section>
    `;
    document.body.innerHTML +=htmlNote;
}
