const myLibrary=[];

function Book (title,author,chapters,read,icon){
  this.title=title;
  this.author=author;
  this.chapters=chapters;
  this.status=read;
  this.icon=icon;
}


// FORM OBJECT
const formObj={
  form:form=document.getElementById("new-book-form"),
  title: document.getElementById("title"),
  author: document.getElementById("author"),
  chapters: document.getElementById("chapters"),
  read: document.getElementById("read"),
  modal: document.getElementById("form-dialog"),
  resetForm: function (){
    formObj.title.value="";
    formObj.author.value="";
    formObj.chapters.value="";
    formObj.read.checked=false;
  } 
}


// SHOW FORM
const newBookBtn=document.getElementById("new-book-btn");
newBookBtn.addEventListener("click",()=>{
  formObj.modal.showModal();
  formObj.resetForm();
});


// ADD BOOKS TO THE LIBRARY
form.addEventListener("submit", () =>{
  event.preventDefault();
  addBookToLibrary();
});


// ICON VIARIABLES
const readIcon=`<i class="fa-regular fa-square-check" id="read-icon"></i>`;
const unreadIcon=`<i class="fa-regular fa-square" id="unread-icon"></i>`;

let icon = unreadIcon;

function toggleIcon(read){
  let icon=unreadIcon;

  if(read===true){
    icon=readIcon;
  }
  return icon;
};


function addBookToLibrary(){
  const title = formObj.title.value;
  const author = formObj.author.value;
  const chapters =formObj.chapters.value; 
  const read = formObj.read.checked;
  const icon = toggleIcon(read);

  const newBook = new Book(title,author,chapters,read,icon);
  myLibrary.push(newBook);
  render(newBook,icon);
  formObj.modal.close();
  console.log(myLibrary);
}


// RENDER BOOKS ON SCREEN
function render(newBook,icon){
  const shelf=document.getElementById("shelf");
  const book=document.createElement("div");

    // HTML FOR THE BOOK
  book.classList.add("book");
  book.setAttribute("id",`${myLibrary.length-1}`);

  book.innerHTML= `<h2> ${newBook.title} </h2>
                   <h4>by ${newBook.author} </h4>
                   <h4>Chapters: ${newBook.chapters} </h4>
                   <div class="book-btns">
                     ${icon}
                     <i class="fa-regular fa-trash-can" id="trash-icon"></i>
                   </div>`
  
  shelf.appendChild(book);


    // BOOK BUTTON FUNCTIONS
  // const books=document.querySelectorAll(".book");
  // books.forEach(addEvent);

  // function addEvent(book){
  //   book.addEventListener("click",(e)=>{
  //     const target=e.target;
  //     const current=e.currentTarget;
  //       if (target.id==="read-icon"){
  //         icon=unreadIcon;
  //         return icon;

  //       }else if(target.id==="unread-icon"){
  //         icon=readIcon;
  //         return icon;

  //       }else if(target.id==="trash-icon"){
  //         const num= parseInt(current.id);
  //       };
  //   });
  // }
}

