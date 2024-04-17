const BASE_URL = 'https://rickandmortyapi.com/api';



export const fetchData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/character`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return await response.json();
  } catch (error) {
    throw new Error('Error fetching data');
  }
};