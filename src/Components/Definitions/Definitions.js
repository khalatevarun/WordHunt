import React from 'react';
import './Defintions.css';
const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings">
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
                      Synonyms : <b>{def.synonyms.map((s) => `${s},`)}</b>
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
