import { Container, Switch, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Definitions from './Components/Definitions/Definitions';
import Header from './Components/Header/Header';

function App() {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const [lightMode, setLightMode] = useState(false);

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`,
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: '100vh',
        backgroundColor: lightMode ? '#ffff' : '#1b262c',
        color: lightMode ? 'black' : 'white',
        transition: 'all 0.5s linear',
      }}
    >
      <Container
        maxWidth="md"
        stlye={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-evenly',
        }}
      >
        <div
          style={{ position: 'absolute', top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightMode ? 'Light' : 'Dark'} Mode</span>
          <DarkMode
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
        />
        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            category={category}
            lightMode={lightMode}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
