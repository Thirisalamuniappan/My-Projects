
//popup open
function openPopup() {
    const popup = new bootstrap.Modal(document.getElementById('popup'));
    popup.show();
}

//popup close
function closePopup() {
    const popup = bootstrap.Modal.getInstance(document.getElementById('popup'));
    popup.hide();
}

// Function to set a birthday reminder 
function setReminder() {
    const name = document.getElementById('name').value;
    const relationship = document.getElementById('relationship').value;
    const birthdate = document.getElementById('birthdate').value;
    const notes=document.getElementById("notes").value;

    if (!name || !relationship || !birthdate) {
        alert("Please fill in all fields.");
        return;
    }

    const birthDateObj = new Date(birthdate);
    const contactId = `${name}-${birthdate}`;

    // Add contact 
    const contactList = document.getElementById('contact-list');
    const contactItem = document.createElement('li');
    contactItem.className = "list-group-item d-flex justify-content-between align-items-center";
    contactItem.setAttribute('id', contactId);
    contactItem.innerHTML = `<span><strong>${name}</strong> (${relationship}) - Birthday: ${birthDateObj.toDateString()}</span> "Notes" : (${notes})`;
    //delete button 
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.onclick = function() { deleteContact(contactId); };

    contactItem.appendChild(deleteBtn);
    contactList.appendChild(contactItem);

    // Check if the birthday is today 
    const today = new Date();
    if (birthDateObj.getMonth() === today.getMonth() && birthDateObj.getDate() === today.getDate()) {
        const birthdayReminders = document.getElementById('birthday-reminders');
        const reminderItem = document.createElement('li');
        reminderItem.className = "list-group-item list-group-item-success";
        reminderItem.setAttribute('id', `reminder-${contactId}`);
        reminderItem.innerHTML = `<strong>${name}</strong> (${relationship}) has a birthday today!  "Note": (${notes}) 🎉`;
        birthdayReminders.appendChild(reminderItem);
    }

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('relationship').value = '';
    document.getElementById('birthdate').value = '';
    document.getElementById('notes').value='';
    // Close the popup
    closePopup();
}

// Function to delete a contact
function deleteContact(contactId) {
    // Remove from the contact list
    const contactItem = document.getElementById(contactId);
    if (contactItem) contactItem.remove();

    // Remove from the birthday reminders if it exists
    const reminderItem = document.getElementById(`reminder-${contactId}`);
    if (reminderItem) reminderItem.remove();
}
