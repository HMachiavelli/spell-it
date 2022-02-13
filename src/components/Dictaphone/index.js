import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';

const Dictaphone = () => {
  const [message, setMessage] = useState('')

  const apiCompare = async (received) => {
    const res = await axios.get('http://localhost:3000?wanted=everywhere&received=' + received);

    if(res && res.data) {
      setMessage(`Your speaking is ${res.data} correct`)
    }
  }

  const commands = [
    {
      command: '*',
      callback: async (text) => { await apiCompare(text) }
    },
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>We want: everywhere</p>
      <p>You said: {transcript}</p>
      <p>{message}</p>
    </div>
  );
};
export default Dictaphone;