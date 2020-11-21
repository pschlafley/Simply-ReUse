async function getCurrentUsername() {
    const response = await fetch('/api/users/profile', {
        method: 'get',
        // body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        response.json.then(data => {
            console.log(data.id);
            $('#current-username').append(data.username)
        })
    } else {
    alert(response.statusText);
    }
};
getCurrentUsername();


async function editUsername(event) {
    event.preventDefault();
  
    const username = document.querySelector('#edit-username').value.trim();
  
    if (username) {
      const response = await fetch('/api/users/profile/:id', {
        method: 'put',
        body: JSON.stringify({
          username
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
      } else {
        alert(response.statusText);
      }
    }
};

async function editEmail(event) {
    event.preventDefault();
  
    const email = document.querySelector('#edit-email').value.trim();
  
    if (email) {
      const response = await fetch('/api/users/profile/:id', {
        method: 'put',
        body: JSON.stringify({
          email
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
};

async function editPassword(event) {
    event.preventDefault();
  
    const password = document.querySelector('#edit-password').value.trim();
  
    if (password) {
      const response = await fetch('/api/users/profile/:id', {
        method: 'put',
        body: JSON.stringify({
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
};
  
document.querySelector('.username-form').addEventListener('submit', editUsername);
document.querySelector('.email-form').addEventListener('submit', editEmail);
document.querySelector('.password-form').addEventListener('submit', editPassword);