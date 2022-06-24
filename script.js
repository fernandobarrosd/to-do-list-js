const toDoList = document.querySelector(".to-do-list-lista");
const btnAdd = document.querySelector("input[type=button]");
const inputText = document.querySelector("input[type=text]");
let text = "";
const itens = new Array();


function createListItem(listText) {
    /* Criando os itens */
    const listItem = document.createElement("div");
    const listItemText = document.createElement("div");
    const text = document.createElement("p");
    const listItemActions = document.createElement("div");
    const listItemAction = document.createElement("div");
    const listItemBtnRemove = document.createElement("button");
    

    /* Adicionando as classes */
    listItem.classList.add("to-do-list-item");
    listItemText.classList.add("to-do-list-item-text");
    listItemActions.classList.add("to-do-list-actions");
    listItemAction.classList.add("to-do-list-action");


    /* Adicionando os ids */
    listItemBtnRemove.id = "btn-remover";

    /* Adicionando os textos dos botões e do paragrafo */
    listItemBtnRemove.textContent = "Remover";
    text.textContent = listText;


    /* Adicionando os filhos ás divs */
    listItemText.appendChild(text);
    listItemAction.appendChild(listItemBtnRemove);
    listItemActions.appendChild(listItemAction);
    listItem.appendChild(listItemText);
    listItem.appendChild(listItemActions);

    return listItem;
}


inputText.addEventListener("input", (e) => {
    text = e.target.value;
})


function validateInput() {
    if (text.length != 0) {
        return true;
    }
    else {
        return false;
    }
}

function adicionarItem() {
    if (validateInput()) {
        const item = createListItem(text);
        toDoList.appendChild(item);
        const itens = toDoList.querySelectorAll
        (".to-do-list-item");

        itens.forEach(item => {
            const btnRemover = item.querySelector
            ("#btn-remover");

            btnRemover.addEventListener("click", () => {
                toDoList.removeChild(item);
            })
        })
        inputText.value = "";
            
    }
    else {
        alert("Error: Preencha o campo");
    }
}


btnAdd.addEventListener("click", adicionarItem);

window.addEventListener("keypress", ({key}) => {
    if (key == "Enter") {
        adicionarItem();
    }
})


