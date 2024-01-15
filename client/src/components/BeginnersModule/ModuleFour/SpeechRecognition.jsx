import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styles from './SpeechRecognition.module.css';

const sentences = [
  'The quick brown fox jumps over the lazy dog',
  'She sells seashells by the seashore',
  'How can a clam cram in a clean cream can',
  //can add more sentences
];

const SentencePronunciation = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState(''); // New state variable for feedback

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const startExercise = () => {
    SpeechRecognition.startListening({ continuous: true });
    setFeedback(''); 
  };

  const stopExercise = () => {
    SpeechRecognition.stopListening();
    if (transcript.trim().toLowerCase() === sentences[index].toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Try again.');
    }
  };

  const nextSentence = () => {
    setIndex((prevIndex) => prevIndex + 1);
    resetTranscript();
    if (index < sentences.length) {
      startExercise();
    } else {
      console.log('End of sentences.');
    }
  };

  return (
    <div className={styles.sentencePronunciation}>
      <button onClick={startExercise}>Start</button>
      <button onClick={stopExercise}>Stop</button>
      <button onClick={nextSentence}>Next Sentence</button>
      <button onClick={resetTranscript}>Reset</button>
      <h2>{transcript}</h2>
      <h2>Current sentence: {sentences[index]}</h2>
      <p>{feedback}</p>
    </div>
  );
};

export default SentencePronunciation;
