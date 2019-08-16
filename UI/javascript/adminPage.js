const mentorsList = document.querySelector('#mentors-list ul');
const usersList = document.querySelector('#users-list ul');
const forms = document.forms;

// Switch a user to a mentor
usersList.addEventListener('click', (e) => {
  if(e.target.className == 'upgradeUser'){
    const li = e.target.parentElement;
    console.log(li);
   
    li.parentNode.removeChild(li);
    // li.className('class');

    mentorsList.appendChild(li);

  }  
});

// add a Mentor
const addForm = forms['add-mentor'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const mentorName = document.createElement('span');
  
  // add text content
  mentorName.textContent = value;
  
  // add classes
  mentorName.classList.add('name');
  
  // append to DOM
  li.appendChild(mentorName);  
  mentorsList.appendChild(li);
});

// filter a specific mentor
const searchBar = forms['search-mentors'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const mentors = mentorsList.getElementsByTagName('li');
  Array.from(mentors).forEach((mentor) => {
    const title = mentor.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      mentor.style.display = 'block';
    } else {
      mentor.style.display = 'none';
    }
  });
});