const cardContainer = document.querySelector('.card-container');
const buttonAddCard = document.querySelector('.btnAdd');
const modal = document.querySelector('.modal');
const submit = document.querySelector('.submitbtn');
const titleValue = document.querySelector('#title');
const pageValue = document.querySelector('#number');
const readValue = document.querySelector('#checkbox');
const form = document.querySelector('.form');
let initializedArray = false;

const myLibrary = [];
let bookNumber = 0;

function Book(title, pages, read) {
  this.ID = bookNumber;
  this.title = title;
  this.pages = pages;
  this.read = read;
  bookNumber++;
  
}


function addBookToLibrary(title, pages, read) {
  const newBook = new Book(title, pages, read);
  myLibrary.push(newBook);
  
}
addBookToLibrary('Harry Potter',235 , false);
addBookToLibrary('Lord of the Rings', 407, true);






function displayBooks(){

for (let i = 0; i<myLibrary.length;i++){
    const bookCard = document.createElement('div');
    const bookTitle = document.createElement('h1');
    const bookPages = document.createElement('p');
    const bookRead = document.createElement('p');
    bookCard.setAttribute('class','card');
    bookTitle.textContent = myLibrary[i].title;
    bookPages.textContent = "Pages: " + myLibrary[i].pages;
    bookRead.textContent = "Read: " + myLibrary[i].read;
    cardContainer.append(bookCard);
    bookCard.append(bookTitle);
    bookCard.append(bookPages);
    bookCard.append(bookRead);
    bookNumber++;
  

}
}

function displayNewBook(){
  
  const bookCard = document.createElement('div');
  const bookTitle = document.createElement('h1');
  const bookPages = document.createElement('p');
  const bookRead = document.createElement('p');
  bookCard.setAttribute('class','card');
  bookTitle.textContent = myLibrary[myLibrary.length-1].title;
  bookPages.textContent = "Pages: " + myLibrary[myLibrary.length-1].pages;
  bookRead.textContent = "Read: " + myLibrary[myLibrary.length-1].read;
  cardContainer.append(bookCard);
  bookCard.append(bookTitle);
  bookCard.append(bookPages);
  bookCard.append(bookRead);
  bookNumber++;
  console.log("hallo?");

}

buttonAddCard.addEventListener("click", ()=>{
  modal.showModal();
});
submit.addEventListener("click", (e)=>{
  console.log(pageValue.value);
  addBookToLibrary(titleValue.value, pageValue.value, readValue.value);
  // console.log(myLibrary);
  displayNewBook();
  e.preventDefault();
  modal.close();
  form.reset();

});


displayBooks();