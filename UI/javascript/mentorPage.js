const usersList = document.querySelector('#users-list ul');
const forms = document.forms;

// Delete a request
usersList.addEventListener('click', (e) => {
  if(e.target.className == 'decline-request'){
    const li = e.target.parentElement;
    console.log(li);
   
    li.parentNode.removeChild(li);
    
  }  
});
