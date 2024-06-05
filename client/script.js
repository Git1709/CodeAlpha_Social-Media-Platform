document.querySelector('.create-post').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const content = document.querySelector('#create-post').value;
    const userId = 'some-user-id'; // Replace with actual user ID logic
  
    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, content })
      });
  
      const data = await response.json();
      console.log('Post created:', data);
    } catch (err) {
      console.error('Error:', err);
    }
  });
  