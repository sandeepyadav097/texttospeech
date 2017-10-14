'use strict';

const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
const fs = require('fs');

const textToSpeech = new TextToSpeechV1(
  {
    // if left unspecified here, the SDK will fall back to the TEXT_TO_SPEECH_USERNAME and TEXT_TO_SPEECH_PASSWORD
    // environment properties, and then Bluemix's VCAP_SERVICES environment property
    username: '2fff705f-064f-408f-96af-0ee9eb9fd3a3',
    password: 'NrntiwGWDjVb'
  }
);

// Synthesize speech and then pipe the results to a file
textToSpeech
  .synthesize({
    text: 'mmukesh love monika',
    voice: 'pt-BR_IsabelaVoice', // Optional voice
    voice: 'en-US_LisaVoice', // Optional voice

    accept: 'audio/wav' // default is audio/ogg; codec=opus
  })
  .pipe(fs.createWriteStream('meuaudio1.wav'));

