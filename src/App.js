// import React from 'react';
// import Result from './Result';
// import { useState, useMemo, useEffect } from 'react';

//   const speechsynth = window.speechSynthesis;

// function App() {
//   // console.log(speechsynth);
//   const speech = useMemo(()=>speechsynth.getVoices(),[])
//   const [clicked, setClicked] = useState(false);

//   // console.log(speech);
//   const [selected, setSelected] = useState("Google US English")
//   const [text,setText] = useState()
//   const startPlay=(text)=>{
//     const utterance = new SpeechSynthesisUtterance(text)
//     speechsynth.speak(utterance)  
//   }
//   const handlePlay =()=>{
//     if(!text.trim()) return
//     if(!speechsynth.speaking){
//       setClicked(true);
//     startPlay(text);
//     setClicked(false);

//     }
//     else{
//       speechsynth.cancel();
//       setClicked(false)
//     }
//   }
    
//   return (
//     <div className=" ">
//       <div className='flex text-center center' >
//         <div>
//         <p className='text-2xl '>English Dictionary</p>
//         <textarea name="" id="" value={text} cols="30" rows="10" className='border'   onChange={e=>setText(e.target.value)} />
//         <select name="" id="" value={selected} onChange={e=>setSelected(e.target.value)}>
//           {/* <option value=""> rfbjfb</option>
//           <option value=""> gwefgywe</option>
//           <option value=""> gtr7</option>
//           <option value=""> qvfh</option>
//           <option value=""> rfbjfb</option> */}
//           {
//             speech.map((voice)=>{
//               // console.log(voice.name)
//               return (
//               <option value={voice.name} key={voice.name}>{voice.name}</option>
//               )
//             })
//           }
//         </select>

//           {/* sond icon */}
//           {/* <svg onClick={handlePlay }   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer ">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
// </svg> */}

// <svg onClick={handlePlay} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor" className={`w-6 h-6 cursor-pointer ${clicked ? 'text-purple-500' : ''}`}>
//   <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
// </svg>


//         </div>
//       </div>
//       <Result/>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Result from './Result';
import { useState, useMemo, useEffect } from 'react';

const speechsynth = window.speechSynthesis;

function App() { 
   const speech = useMemo(() => speechsynth.getVoices(), []);
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState("Google US English");
  const [text, setText] = useState("");
  const [meaning , setMeaning ] = useState()
  const [word, setWord] = useState()
  const [phonetics, setPhonetics] = useState()
  const [error , setError] = useState() 

  const dictionaryApp=(text)=>{
    // console.log(text,"text")
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
    fetch(url).then(res=>  res.json()
      ).then(data=>
        {
          // console.log(data,"bb")
          // console.log(data[0].meanings,"hehe")
          // setMeaning(data[0].meanings)
          // console.log(data[0].word, "is this ");
          // console.log(data[0].phonetics);
          // console.log(data[0].meanings); 
          setMeaning(data[0].meanings);
          setPhonetics(data[0].phonetics);    
          setWord(data[0].word);
          setError("")

        }
      
    ).catch(err=>setError(err))
  }
  useEffect(() => {
    // console.log(text,"ye test ")
    if(!text) return
   const bounce =setTimeout(() => {
        dictionaryApp(text) 
   }, 1000);
   return () => clearTimeout(bounce);
   
  }, [text])


  const startPlay = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    const multipleVoices = speech.find(speech=>speech.name=== selected);
    utterance.voice= multipleVoices;
    speechsynth.speak(utterance);
    utterance.onend = () => {
      setClicked(false); // Revert back to black after speaking
    };
  };

  const handlePlay = () => {
    if (!text.trim()) return;
    if (!speechsynth.speaking) {
      // console.log(text,"test");
      setClicked(true);
      startPlay(text);
    } else {
      speechsynth.cancel();
      setClicked(false);
    }
  };

  return (
    <div className=" ">
      <div className='flex text-center center' >
        <div>
          <p className='text-2xl '>English Dictionary</p>
          <textarea name="" id="" value={text} cols="30" rows="10" className='border' onChange={e => setText(e.target.value)} />
          <select name="" id="" value={selected} onChange={e => setSelected(e.target.value)}>
            {
              speech.map((voice) => {
                return (
                  <option value={voice.name} key={voice.name}>{voice.name}</option>
                )
              })
            }
          </select>

          <svg onClick={handlePlay} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 cursor-pointer ${clicked ? 'text-purple-500' : ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>

        </div>
      </div>
      <Result setText={setText} word={word} phonetics={phonetics} meaning={meaning}    />
    </div>
  );
}

export default App;
