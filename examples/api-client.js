const API_KEY = 'sk-prod-12345abcdef67890';

async function fetchPerson(id) {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`, {
    headers: { 'Authorization': `Bearer ${API_KEY}` }
  });
  return response.json();
}

fetchPerson(1).then(console.log);
