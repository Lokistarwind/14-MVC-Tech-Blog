//grabs from dashboard handlebar and do fetch requests POST and Delete
//similiar to miniproject project file
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blogpost-name').value.trim();
    const description = document.querySelector('#blogpost-desc').value.trim();
  
    if (title && description) {
      const response = await fetch(`/api/blogposts`, {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blogpost');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const response = await fetch(`/api/blogposts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blogpost');
      }
    }
  };

  const updateFormHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      const title = document.querySelector('#update-blogpost-name').value.trim();
      const description = document.querySelector('#update-blogpost-desc').value.trim();
    
      if(title && description)
      {
        const response = await fetch(`/api/blogposts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, description }),
            headers: {
            'Content-Type': 'application/json',
          },
        });
      }
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update blogpost');
      }
    }
  };

  //make blogpost creation and update form hidden initial unrtil event listener
  document.getElementById("reveal-blogpost-form").style.visibility = "hidden";
  //document.getElementById("update-blogpost-form").style.visibility = "hidden";
  document.getElementById("newpost").style.visibility = "visible";

  document.querySelector('#newpost').addEventListener('click', reveal);
  function reveal(){
    document.getElementById("reveal-blogpost-form").style.visibility = "visible";
    //document.getElementById("update-blogpost-form").style.visibility = "visible";
    document.getElementById("newpost").style.visibility = "hidden";
  }
  
  document
    .querySelector('.new-blogpost-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blogpost-list')
    .addEventListener('click', delButtonHandler);

    document
    .querySelector('.update-blogpost-form')
    .addEventListener('submit', updateFormHandler);