export default function createItemList(listText) {
    /* Itens do list item */
    const listItem = document.createElement("div");
    const listItemText = document.createElement("div");
    const text = document.createElement("p");
    const listItemActions = document.createElement("div");
    const listItemAction = document.createElement("div");
    const listItemBtnRemove = document.createElement("button");
    const listItemBtnMark = document.createElement("button");

    /* Adicionar as classes */

    listItem.classList.add("to-do-list-item");
    listItemText.classList.add("to-do-list-item-text");
    listItemActions.classList.add("to-do-list-actions");
    listItemAction.classList.add("to-do-list-action");

    /* Adicionando os ids */
    listItemBtnRemove.id = "btn-remover";
    listItemBtnMark.id = "btn-marcar"

    /* Adionando os textos aos botões e ao paragrafo */
    listItemBtnRemove.textContent = "Remover";
    listItemBtnMark.textContent = "Mark";
    text.textContent = listText;

    /* Adicionando os filhos ás divs */
    listItemText.appendChild(text);
    listItemAction.appendChild(listItemBtnRemove);
    listItemAction.appendChild(listItemBtnMark);
    listItemActions.appendChild(listItemAction);
    listItem.appendChild(listItemText);
    listItem.appendChild(listItemActions);
    return listItem;
}

