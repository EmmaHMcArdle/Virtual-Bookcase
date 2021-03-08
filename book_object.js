let myLibrary = [];
const lib = document.querySelector('.lib');

function Book (title, author, pages) {
    // a property is simply a variable defined on a function
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return this.title + " by " + this.author + ', ' + this.pages + " pages, not read yet"
    }
}


function pickRandomRGBValue() {
  return (Math.floor(Math.random() * 255));
}

function addBookToLibrary(book) {
  // let book = prompt("Please enter a book.")
  myLibrary.push(book);
}
function displayLibrary(library) {
  $('div.onShelf').remove();
  for (let i = 0; i < myLibrary.length; i++) {
    let libBook = document.createElement("div");
    lib.appendChild(libBook);
    console.log(`rgb(${pickRandomRGBValue()}, ${pickRandomRGBValue()}, ${pickRandomRGBValue()})`)
    libBook.style.borderColor = `rgb(${pickRandomRGBValue()}, ${pickRandomRGBValue()}, ${pickRandomRGBValue()})`;
    // console.log(randomColor())
    
    libBook.classList.add("onShelf");
    libBook.textContent = `${library[i].title} \r\n \r\n ${library[i].author} \r\n \r\n Pages: ${library[i].pages}`;
  }
  // color = pickRandomColor();
  // console.log(color);
  
}


let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295);
// console.log(theHobbit.info());
addBookToLibrary(theHobbit);
displayLibrary(myLibrary);
let harryPotter = new Book("Harry Potter", "JK Rowling", 315);
addBookToLibrary(harryPotter);
displayLibrary(myLibrary);


function openForm() {
  if (document.getElementById("myForm").style.display == "block") {
      document.getElementById("myForm").style.display = "none";
  }
  else {
    document.getElementById("myForm").style.display = "block";
  }
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}