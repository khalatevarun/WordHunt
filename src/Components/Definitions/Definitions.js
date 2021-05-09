import React from 'react';
import './Defintions.css';
const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === 'en' && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{
            backgroundColor: '#fff',
            borderRadius: 10,
            height: 50,
            width: '100%',
          }}
          controls
        >
          Your browser doesn't support this audio element
        </audio>
      )}
      {word === '' ? (
        <span className="subtitle">Start by typing a word in the search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{ backgroundColor: 'white', color: 'black' }}
              >
                <b>{def.definition}</b>
                {console.log(meanings)}
                <hr style={{ backgroundColor: 'black', width: '100%' }} />
                {def.example && (
                  <span>
                    <b>
                      Example : <b>{def.example}</b>
                    </b>
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>
                      Synonyms :{' '}
                      <b style={{ overflowWrap: 'break-word' }}>
                        {def.synonyms.map((s) => `${s},`)}
                      </b>
                    </b>
                  </span>
                )}
              </div>
            )),
          ),
        )
      )}
    </div>
  );
};

export default Definitions;
