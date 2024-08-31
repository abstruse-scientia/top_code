const myLibrary = [];
let counter = -1;

function addBook(Title, Author, Pages, Status){
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Status = Status;
}

function formDialog(edit_btn){
    const edit_dialog = document.querySelector(".edit-dialog"); 
    const edit_form = edit_dialog.querySelector(".edit-form");
    const edit_confirm_btn = edit_form.querySelector(".edit-confirm");
    const edit_input = edit_form.querySelector("#edit-status");
    const status = document.querySelector(".status-box");

    
    edit_btn.addEventListener("click", () => {
        edit_dialog.showModal();
    });

    edit_confirm_btn.addEventListener("click", (event) => {
        event.preventDefault();
        const val = edit_input.value;
        status.textContent = val;
        edit_dialog.close();
        setTimeout(() => edit_form.reset(), 0);
    });
    
}


function createRemoveButton(card){
    const remove_btn = document.createElement("button");
    remove_btn.className = 'remove btn-style';
    remove_btn.textContent = 'Remove';
    card.appendChild(remove_btn);
    const delete_btn = document.querySelector(".remove");
    const book_card = main.querySelector(".card-style");
    delete_btn.addEventListener("click", () => {
        main.removeChild(book_card);
    });
    return remove_btn;

}

function createEditButton(card){
    const edit_status = document.createElement("button");
    edit_status.className = 'edit btn-style';
    edit_status.textContent = `Edit Status`;
    card.appendChild(edit_status);
    const edit = document.querySelector(".edit");
    edit.addEventListener("click", () => {
        formDialog(edit_status);
    })
    return edit_status;
}


function createElement(labelDiv, detailDiv){
    const label = document.createElement("div");
    label.textContent = `${labelDiv}: `;

    const detail = document.createElement("div");
    if(labelDiv == 'Status'){
        detail.className = 'status-box';
    }
    detail.textContent = detailDiv;

    return [label, detail];
}

function createEntry(new_book){
    const card = document.createElement("div");
    card.className = 'card-style';
    main.appendChild(card);
    for (key in new_book){
        const [label, detail] = createElement(key, new_book[key]);
        card.appendChild(label);
        card.appendChild(detail);
    }

    const status = createEditButton(card);
    card.appendChild(status);
    
    const deleteCard = createRemoveButton(card);
    card.appendChild(deleteCard);
}



const main = document.querySelector(".main")
const showbtn = document.querySelector("#show-dialog");//main 
const startPrompt = document.querySelector(".prompt");
const bookDialog = document.querySelector("#book-form");
const openbtn = document.querySelector("#open-dialog");//header


const formDetail = bookDialog.querySelector(".form-detail");
const confirmBtn = bookDialog.querySelector("#confirm-btn");
const cancelbtn = bookDialog.querySelector("#cancel-btn");




showbtn.addEventListener("click", () => {
    main.removeChild(startPrompt);
    bookDialog.showModal();
    openbtn.disabled = false;
});

openbtn.addEventListener("click", () => {
    bookDialog.showModal();
}); 

cancelbtn.addEventListener("click",()=>{
    if (myLibrary.length() == 0){
        main.appendChildK(startPrompt);
    }
})

confirmBtn.addEventListener("click", (event) =>{
    const name = formDetail.elements['name'].value;
    const author  = formDetail.elements['author'].value;
    const pages = formDetail.elements['pages'].value;
    const isRead = formDetail.elements['complete'].value;
    const book = new addBook(name, author, pages, isRead);
    myLibrary.push(book);
    bookDialog.close();
    formDetail.reset();
    counter++;
    // showEntry(counter);
    createEntry(myLibrary[counter]);
});

