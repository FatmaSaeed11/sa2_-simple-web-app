const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const apiPort = 6004;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World! - from nodejs count letters service');
})


app.post("/api/countletters", (req, res) => {
  function countLetters(paragraph) {
    return paragraph.length;
  }

  let result = countLetters(req?.body?.paragraph);
  return res.status(200).json({
    success: true,
    value: `${result}`,
  });

});

app.post("/api/writeCharacters", (req, res) => {
function writeCharacters(paragraph) {
  let res = "";
  let currentChar = "";
  let currentCount = "";
   
  for (let i = 0; i < paragraph.length; i++) {
      const char = paragraph[i];

      if (isNaN(char)) {
          // If character is not a number
          if (currentChar) {
              // If there was a previous character
              res += currentChar.repeat(parseInt(currentCount));
              currentChar = "";
              currentCount = "";
          }
          currentChar = char; // Store the current letter
      } else {
          // If character is a number
          currentCount += char; // Build the number
      }
  }

  if (currentChar) {
      // If there is a character remaining after the loop
      res += currentChar.repeat(parseInt(currentCount));
  }

  return res;
}
  let result = writeCharacters(req?.body?.paragraph);
    return res.status(200).json({
        success: true,
        value: `${result}`,
    });
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));











/*app.post("/api/countletters", (req, res) => {
    function countLetters(paragraph) {
        const message = req.body.message;
        console.log(message);
        res.status(200).json({ messageLength: message.length});
        return paragraph.length;
    }

    let result = countLetters(req?.body?.paragraph);
    return res.status(200).json({
      success: true,
      value: `${result}`,
    });
});*/
/*const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const apiPort = 6004;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World! - from nodejs count letters service');
})



app.post("/api/countletters", (req, res) => {
    function countLetters(paragraph) {
        //
        const message = req.body.message;
        console.log(message);
        res.status(200).json({ messageLength: message.length});
        //
      return paragraph.length;
    }
  
    let result = countLetters(req?.body?.paragraph);
    return res.status(200).json({
      success: true,
      value: `${result}`,
    });
  });



  app.post("/api/writeCharachters", (req, res) => {
    function writeCharachters(paragraph) {
      let result = "";
      let currentChar = "";
      let currentCount = "";
    
      for (let i = 0; i < paragraph.length; i++) {
        const char = paragraph[i];
    
        if (isNaN(char)) {
          // If character is not a number
          if (currentChar) {
            // If there was a previous character
            result += currentChar.repeat(parseInt(currentCount));
            currentChar = "";
            currentCount = "";
          }
          result += char;
        } else {
          // If character is a number
          currentCount += char;
        }
      }
    
      if (currentChar) {
        // If there is a character remaining after the loop
        result += currentChar.repeat(parseInt(currentCount));
      }
    
      return result;
    }
  


    let result = writeCharachters(req?.body?.paragraph);
    return res.status(200).json({
      success: true,
      value: `${result}`,
    });
  });


  

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
*/

/*
 app.post("/api/writeCharachters", (req, res) => {
    function countLetters(paragraph) {
      let s=' ';
        for(let i=0;i<paragraph.length;i++){
          for(let x=0;x<=9;x++){
            if(paragraph[i]==x){

              for(let y=0;y<x;y++){
                s.concat(paragraph[i]);
              //console.log(paragraph[i]);
            }
            }
          }

        }
        const message = req.body.message;
        console.log(message);
        res.status(200).json({ messageLength: message.length});
        
      return s;
    }
  
    let result = countLetters(req?.body?.paragraph);
    return res.status(200).json({
      success: true,
      value: `${result}`,
    });
  });
*/