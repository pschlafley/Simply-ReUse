// async function editUsername(event) {
//     event.preventDefault();
  
//     const username = document.querySelector('#edit-username').value.trim();
  
//     console.log(username);

//     if (username) {
//       const response = await fetch(`/api/users/${username}`, {
//         method: 'put',
//         body: JSON.stringify({
//           username
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
  
//       if (response.ok) {
//         console.log('success');
//       } else {
//         alert(response.statusText);
//       }
//     }
// };

// async function editEmail(event) {
//     event.preventDefault();
  
//     const email = document.querySelector('#edit-email').value.trim();

//     const getEmail = document.querySelector('#hidden-email');
  
//     if (email) {
//       const response = await fetch(`/api/users/${getEmail}`, {
//         method: 'put',
//         body: JSON.stringify({
//           email
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
// };

async function editPassword(event) {
    event.preventDefault();

    const username = document.querySelector("#hidden-username")
  
    const password = document.querySelector('#edit-password').value.trim();

    console.log(password);

    if (password) {
      const response = await fetch(`/api/users/${username}`, {
        method: 'put',
        body: JSON.stringify({
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        console.log("success");
      } else {
        alert(response.statusText);
      }
    }
};
  
// document.querySelector('.username-form').addEventListener('submit', editUsername);
// document.querySelector('.email-form').addEventListener('submit', editEmail);
document.querySelector('.password-form').addEventListener('submit', editPassword);