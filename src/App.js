// File: App.js
import React, { useState } from 'react';
import './App.css'
import ReactMarkdown from 'react-markdown'


function App() {
  const [textValue, setTextValue] = useState('# This is Heading 1 \n## This is Heading 2 \n[My Profile](https://www.freecodecamp.org/prabesharyal)\n\nThis is inline code : `console.log(Hello World!)` \n\n Here is a python code block : \n ```import this \n print("I know javascript too") \n``` \n Here is a list of countries I\'ve been to : \n- Nepal \n- India \n- Azerbaijan \n> I love travelling but I went to those places for specific purposes. \n\n![My Country Nepal](https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg) \n**That was My country\'s flag.** \n');

  const handleTextareaChange = (event) => {
    // Update the state with the new textarea value
    setTextValue(event.target.value);
  };

  return (
    <div className="App">
        <div class="grid grid-cols-2 gap-4">
      {/* Textarea to input text */}
      <div class="">
        <label for="editor">Type your Markdown Here :</label>
      <textarea
        value={textValue}
        onChange={handleTextareaChange}
        class="bg-black text-green-500 p-5"
        id="editor"
      ></textarea>
      </div>

      {/* Div to display the echoed text */}
      <div class="">
            <label for="preview">Here's the Rendered Markdown</label>
            <div class="fixitbro" id="preview"><ReactMarkdown>{textValue}</ReactMarkdown></div>
        </div>


    </div>
    </div>
  );
}

export default App;
