import { Container } from '@material-ui/core';
import axios from 'axios';
import { useEffect } from 'react';
import Header from './Components/Header/Header';

function App() {
  //const [word, setWord] = useState('');
  //const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/plane',
      );
      //  setMeanings(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div
      className="App"
      style={{ height: '100vh', backgroundColor: '#1b262c', color: 'white' }}
    >
      <Container
        maxWidth="md"
        stlye={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header />
      </Container>
    </div>
  );
}

export default App;
