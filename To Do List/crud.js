const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

let items = [];
let editIndex = -1;

itemForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const itemName = itemInput.value;
    
    if (editIndex === -1) {
        // Add item
        items.push(itemName);
    } else {
        // Update item
        items[editIndex] = itemName;
        editIndex = -1; // Reset for next add
    }

    itemInput.value = '';
    renderItems();
});

function renderItems() {
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => editItem(index));
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteItem(index));
        
        li.appendChild(editButton);
        li.appendChild(deleteButton);
       itemList.appendChild(li);
    });
}

function editItem(index) {
    itemInput.value = items[index];
    editIndex = index;
}

function deleteItem(index) {
    items.splice(index, 1);
    renderItems();
}
