import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/plane',
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, []);

  return <div>Hello World!</div>;
}

export default App;
