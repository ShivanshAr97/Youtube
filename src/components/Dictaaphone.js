import React, {useState} from 'react';
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs';
import  SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {

  const [mic, setMic] = useState(<BsMicMuteFill/>)
  const [listen, setListen] = useState(false)
  const [startListen, setStartListen] = useState(SpeechRecognition.stopListening)
  const micFunc=()=>{
    setMic(<BsMicFill/>)
    setStartListen(SpeechRecognition.startListening)
    setListen(true)
    
  }

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const change=()=>{
    console.log("Hello");
  }

  return (
    <div>
      <p>Microphone: {listen ? 'on' : 'off'}</p>
      <button onClick={micFunc}>{mic}</button>
      <br />
      <input type="text" placeholder='Enter text' onChange={change} value={transcript} name="" id="" />
    </div>
  );
};
export default Dictaphone;