//grabs from blogpost handlebar and do fetch request Post based 
//on the blogpost id and comment passed in
const newFormHandler = async (event) => {
    event.preventDefault();
  
    const description = document.querySelector('#comment-desc').value.trim();
  
    if (description) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/blogpost');
      } else {
        alert('Failed to create comment');
      }
    }
  };

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
