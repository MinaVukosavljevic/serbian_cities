const $citySelect = document.querySelector('.city');
const $noteInput = document.querySelector('#note');
const $addNoteButton = document.querySelector('.create-note button');
const $createNoteForm = document.querySelector('.create-note');

$addNoteButton.addEventListener('click', onAddNoteHandler);

function onAddNoteHandler(event) {
    event.preventDefault();

    console.log(document.querySelector('article[data-city="beograd"]'));
    const city = $citySelect.value;
    console.log(city);

    if ($noteInput.value !== '') {
        const note = '<li>' + $noteInput.value + '</li>';
        const $userNotes = document.querySelector(`article[data-city="beograd"] .user-notes ul`);
        console.log(document.querySelector(`article[data-city="beograd"] .user-notes ul`));
        $userNotes.innerHTML += note;
        $createNoteForm.reset();
    }
}
