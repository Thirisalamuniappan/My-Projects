// script.js

// Sample data to simulate logged-in users
const users = [
    { id: 1, username: 'john_doe', email: 'john@example.com', isLoggedIn: true, isActive: true },
    { id: 2, username: '', email: '', isLoggedIn: false, isActive: true },
    { id: 3, username: '', email: '', isLoggedIn: true, isActive: false }
  ];
  
  // Initialize user list on page load
  document.addEventListener('DOMContentLoaded', displayUsers);
  
  function displayUsers() {
    const userTable = document.getElementById('user-list');
    userTable.innerHTML = ''; // Clear previous list
  
    users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.isLoggedIn ? 'Yes' : 'No'}</td>
        <td>${user.isActive ? 'Active' : 'Inactive'}</td>
        <td>
          <button class="btn ${user.isActive ? 'btn-danger' : 'btn-success'}"
                  onclick="toggleUserStatus(${user.id})">
            ${user.isActive ? 'Deactivate' : 'Activate'}
          </button>
        </td>
      `;
      userTable.appendChild(row);
    });
  }
  
  function toggleUserStatus(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
      user.isActive = !user.isActive;
      displayUsers();
    }
  }
  
  function showProfileEdit() {
    document.getElementById('user-list-section').style.display = 'none';
    document.getElementById('profile-edit-section').style.display = 'block';
  }
  
  function hideProfileEdit() {
    document.getElementById('user-list-section').style.display = 'block';
    document.getElementById('profile-edit-section').style.display = 'none';
  }
  
  function updateProfile(event) {
    event.preventDefault();
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    if (newPassword !== confirmPassword) {
      document.getElementById('message').innerText = 'New passwords do not match!';
      document.getElementById('message').classList.add('text-danger');
      return;
    }
  
    document.getElementById('message').innerText = 'Profile updated successfully!';
    document.getElementById('message').classList.remove('text-danger');
    document.getElementById('message').classList.add('text-success');
  
    hideProfileEdit();
  }
  
  function logout() {
    alert('Logging out...');
    window.location.href = 'login.html';
  }
  