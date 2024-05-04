
import React, { useState } from "react";
import classes from './App.module.css';
import axios from 'axios';
const API_URL = 'http://localhost:6004'; // Update the API URL

function App() {
  const [paragraph, setParagraph] = useState('');
  const [letterCount, setLetterCount] = useState('');

  const handleTextChange = (event) => {
    setParagraph(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/api/countletters`, { paragraph:paragraph }); // Update the API endpoint URL
      setLetterCount(response.data.value);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [paragraph2, setParagraph2] = useState('');
  const [result, setResult] = useState('');

  const handleText2Change = (event) => {
    setParagraph2(event.target.value);
  };

  const handleForm2Submit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/api/writeCharacters`, { paragraph:paragraph2 }); // Update the API endpoint URL
      setResult(response.data.value);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className={classes.container} >
        <section>
          <form onSubmit={handleFormSubmit}>
            <label>
              Enter text:
              <input type="text" value={paragraph} onChange={handleTextChange} />
            </label>
            <button type="submit">Count Letters</button>
          </form>
          <p>Letter count: {letterCount}</p>
        </section>
      </div>

      <div className={classes.container} >
        <section>
          <form onSubmit={handleForm2Submit}>
            <label>
              Enter text:
              <input type="text" value={paragraph2} onChange={handleText2Change} />
            </label>
            <button type="submit">Write Charachters</button>
          </form>
          <p> write Charachters: {result}</p>
        </section>
      </div>
    </>
  )
}

export default App;


/*import React, { useState } from "react";
import classes from './App.module.css';
import axios from 'axios';
const API_URL = 'http://localhost:6004/api/countletters';
function App() {


  const [paragraph, setParagraph] = useState('');
  const [letterCount, setLetterCount] = useState('');

  const handleTextChange = (event) => {
    setParagraph(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(API_URL, { paragraph });
      setLetterCount(response.data.value);
    } catch (error) {
      console.error('Error:', error);
    }
  };





  const [paragraph2, setParagraph2] = useState('');
  const [result, setResult] = useState('');

  const handleText2Change = (event) => {
    setParagraph2(event.target.value);
  };

  const handleForm2Submit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:6004/api/writeCharacters', {paragraph2});
      setResult(response.data.value);
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
      <div className={classes.container} >
        <section>
          <form onSubmit={handleFormSubmit}>
            <label>
              Enter text:
              <input type="text" value={paragraph} onChange={handleTextChange} />
            </label>
            <button type="submit">Count Letters</button>
          </form>
          <p>Letter count: {letterCount}</p>
        </section>
      </div>


      <div className={classes.container} >
        <section>
          <form onSubmit={handleForm2Submit}>
            <label>
              Enter text:
              <input type="text" value={paragraph2} onChange={handleText2Change} />
            </label>
            <button type="submit">Write Charachters</button>
          </form>
          <p>writeCharachters: {result}</p>
        </section>
      </div>
    </>
  )
}

export default App;
*/

/*
import React, { useState } from "react";
import classes from './App.module.css';
//import apis from "./api/index.js";
//onst API_URL = 'http://localhost:6002/api/countletters';
import axios from 'axios';

function App() {


   const [message, setMessage] = useState('');
   const [messageCalculated, setMessageCalculated] = useState({
    messageLength: 0,
    message: ''
  });

   const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };


 const handleSend = () => {
    axios.post('http://localhost:6004/api/countletters', { message })
      .then((response) => {
        setMessage('');
        setMessageCalculated({ messageLength: response.data.messageLength});
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const writehandleSend = () => {
    axios.post('http://localhost:6004/api/writeCharachters', { message })
      .then((response) => {
        setMessage('');
        setMessageCalculated({ messageLength: response.data.messageLength});
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{ textAlign: 'center' }} className={classes.root}>
      <div className={classes.container}>
      <span >paragraph :</span>
      <p></p>
      <textarea
        id="paragraphBox"
        value={message}
        onChange={handleMessageChange}
        rows="10"
        cols="50"
      />
      <p></p>
      <button
          onClick={handleSend}
          style={{ backgroundColor: 'green', fontSize: '12pt',padding: '12pt 28pt',width: '33%' }}
        >
          Count Letters
        </button>
      <p></p>
      <label>Value: {messageCalculated.messageLength}</label>
      </div>



      <div className={classes.container}>
      <span >paragraph :</span>
      <p></p>
      <textarea
        id="paragraphBox"
        value={message}
        onChange={handleMessageChange}
        rows="10"
        cols="50"
      />
      <p></p>
      <button
          onClick={handleSend}
          style={{ backgroundColor: 'green', fontSize: '12pt',padding: '12pt 28pt',width: '33%' }}
        >
          write Charachters
        </button>
      <p></p>
      <label>Value: {messageCalculated.messageLength}</label>
      </div>
    </div>


    



  )
}

export default App;
*/