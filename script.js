const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');

const data = [
   {
      image: './img/drink.jpg',
      text: "I'm thirsty"
   },
   {
      image: './img/food.jpg',
      text: "I'm Hungry"
   },
   {
      image: './img/tired.jpg',
      text: "I'm Tired"
   },
   {
      image: './img/hurt.jpg',
      text: "I'm Hurt"
   },
   {
      image: './img/happy.jpg',
      text: "I'm Happy"
   },
   {
      image: './img/angry.jpg',
      text: "I'm Angry"
   },
   {
      image: './img/sad.jpg',
      text: "I'm Sad"
   },
   {
      image: './img/scared.jpg',
      text: "I'm Scared"
   },
   {
      image: './img/outside.jpg',
      text: 'I Want To Go Outside'
   },
   {
      image: './img/home.jpg',
      text: 'I Want To Go Home'
   },
   {
      image: './img/school.jpg',
      text: 'I Want To Go To School'
   },
   {
      image: './img/grandma.jpg',
      text: 'I Want To Go To Grandmas'
   }
];

data.forEach(createBoxes);

// Create speech boxes
function createBoxes(item) {
   const box = document.createElement('div');
   const { image, text } = item;

   box.classList.add('box');
   box.innerHTML = `
      <img src="${image}" alt="${text}" />
      <p class="info">${text}</p>`;

   box.addEventListener('click', () => {
      setTextMessage(text);
      speakText();

      // Add active effect
      box.classList.add('active');
      setTimeout(() => box.classList.remove('active'), 800);
   });

   main.appendChild(box);
}

// Store voices
let voices = [];

function createVoicesList() {
	voices = speechSynthesis.getVoices();

	voices.forEach(voice => {
		const option = document.createElement('option');

		option.value = voice.name;
		option.innerText = `${voice.name} ${voice.lang}`;
		voicesSelect.appendChild(option);
	});
}

// Set the text for the speech utterance
function setTextMessage(text) {
   message.text = text;
}

// Speak text
function speakText() {
   speechSynthesis.speak(message);
}


// EVENT LISTENERS ////////////////////

// Voices changed
// "voiceschanged" event is not compatible with Safari iOS
speechSynthesis.addEventListener('voiceschanged', createVoicesList);

// Toggle text box
toggleBtn.addEventListener('click', () => document.getElementById('text-box').classList.toggle('show'));

// Text box close button
closeBtn.addEventListener('click', () => document.getElementById('text-box').classList.remove('show'));

// Init voices
createVoicesList();

// Init speech synth
const message = new SpeechSynthesisUtterance();