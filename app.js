
const userText = document.getElementById("user-text");
const button = document.getElementById("mic");
const invisibleBtn = document.querySelector(".invisible");

let start = true;

let username = prompt("What's your name")
username = username === null || username === "" ? "Sir" : username

function speakNow(words) {
     let textSpeak = new SpeechSynthesisUtterance(words);
     textSpeak.lang = "en-US"
     speechSynthesis.speak(textSpeak)
}

button.addEventListener("click", () => {
     userText.innerHTML = "Listening..."
     let reco = new webkitSpeechRecognition()
     reco.lang = "en-GB"
     reco.onresult = function (event) {
          let words = event.results[0][0].transcript;
          userText.innerHTML = words;
          takeCommand(words.toLowerCase())
     }
     reco.start()
})

function takeCommand(msg) {
     if (msg.includes("hello") || msg.includes("heyy") || msg.includes("hello jarvis") || msg.includes("heyy jarvis")) {
          speakNow(`Hello ${username}, How can I Help you`)
          setTimeout(() => {
               userText.innerHTML = "Click to Speak"
          }, 5000);
     }
     else if (msg.includes("jarvis who are you") || msg.includes("who are you")) {
          speakNow("Heyy I am your virtual assistant, created by Vaibhav")
          setTimeout(() => {
               userText.innerHTML = "Click to Speak"
          }, 5000);
     }
     else if (msg.includes("open youtube") || msg.includes("jarvis open youtube") || msg.includes("youtube")) {
          window.open("https://www.youtube.com", "_blank")
          speakNow("Opening youtube")
          setTimeout(() => {
               userText.innerHTML = "Click to Speak"
          }, 5000);
     }
     else if (msg.includes("open instagram") || msg.includes("jarvis open instagram") || msg.includes("instagram")) {
          window.open("https://www.instagram.com/", "_blank")
          speakNow("Opening instagram")
          setTimeout(() => {
               userText.innerHTML = "Click to Speak"
          }, 5000);
     }
     else if (msg.includes("open whatsapp") || msg.includes("jarvis open whatsapp") || msg.includes("whatsapp")) {
          window.open("https://web.whatsapp.com/", "_blank")
          speakNow("Opening whatsapp")
          setTimeout(() => {
               userText.innerHTML = "Click to Speak"
          }, 5000);
     }
     else if (msg.includes("open twitter") || msg.includes("jarvis open twitter") || msg.includes("twitter")) {
          window.open("https://x.com/?lang=en&mx=2", "_blank")
          speakNow("Opening twitter")
          setTimeout(() => {
               userText.innerHTML = "Click to Speak"
          }, 5000);
     }
     else if (msg.includes("open calculator") || msg.includes("jarvis open calculator")) {
          window.open("calculator://")
          speakNow("Opening calculator")
          setTimeout(() => {
               userText.innerHTML = "Click to Speak"
          }, 5000);
     }
     else if (msg.includes('jarvis what is the time now') || msg.includes("time")) {
          let date = new Date().toLocaleTimeString()
          speakNow(date)
          setTimeout(() => {
               userText.innerHTML = "Click to Speak"
          }, 5000);
     }
     else if (msg.includes('jarvis what is the today') || msg.includes("day")) {
          let date = new Date()
          let day = date.getDay()

          switch (day) {
               case 1:
                    speakNow("Today is Sunday")
                    break;
               case 2:
                    speakNow("Today is Monday")
                    break;
               case 3:
                    speakNow("Today is Tuesday")
                    break;
               case 4:
                    speakNow("Today is Wednesday")
                    break;
               case 5:
                    speakNow("Today is Thursday")
                    break;
               case 6:
                    speakNow("Today is Friday")
                    break
               case 7:
                    speakNow("Today is Saturday")
                    break;
          }
          setTimeout(() => {
               userText.innerHTML = "Click to Speak"
          }, 5000);
     }
     else {
          window.open(`https://www.google.com/search?q=${msg}`)
          speakNow(`What i found in internet regarding, ${msg}`)
          setTimeout(() => {
               userText.innerHTML = "Click to Speak"
          }, 5000);
     }
}

function welcome() {
     speakNow("Intializing Jarvis")
}

invisibleBtn.addEventListener("click", welcome)

// document.addEventListener("load",() => {
//      invisibleBtn.click()
// })

if(start){
     invisibleBtn.click()
}