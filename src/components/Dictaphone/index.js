import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone } from "react-icons/fa";
import axios from "axios";

import "./styles.css";

function Dictaphone() {
  const [message, setMessage] = useState("");

  const commands = [
    {
      command: "*",
      callback: (text) => {
        if (text) {
          console.log("Você disse: " + text);
        }

        return;
      },
    },
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  const micClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <div onClick={micClick} className="microphone">
        <FaMicrophone color={listening ? "green" : "red"} size="3rem" />
      </div>
    </div>
  );
}

export default Dictaphone;
