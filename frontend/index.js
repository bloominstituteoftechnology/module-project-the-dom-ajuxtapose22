function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
    const widgets = document.querySelectorAll("div");
      widgets.forEach(widget => {
      widget.classList.add("widget"); 
    })
    
  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
// Random Quote
const getRandom = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[getRandom];
// New Element 
const newDivQuote = document.createElement("div");
newDivQuote.textContent = randomQuote.quote;
const quoteOfTheDayDiv = document.querySelector("div.quoteoftheday");
quoteOfTheDayDiv.appendChild(newDivQuote);
//Author & Date
const authorDate = document.createElement('div');
const {author, date} = randomQuote;
authorDate.textContent = `${author} in ${date || "an unknown date"}`;
const authorDateDiv = document.querySelector("div.quoteoftheday");
authorDateDiv.appendChild(authorDate);


// 👉 TASK 3 - Build a "Corporate Speak" widget
//  ✨ add your code here
// Random Adverb1
  const randomAdverb = Math.floor(Math.random() * adverbs.length);
  const adverb1 = adverbs[randomAdverb];
// Random Noun1
  const randomNoun = Math.floor(Math.random() * nouns.length);
  const noun1 = nouns[randomNoun];
// Random Verb1
  const randomVerb = Math.floor(Math.random() * verbs.length);
  const verb1 = verbs[randomVerb];

// Random Adverb2
  const randomAdverb2 = Math.floor(Math.random() * adverbs.length);
  const adverb2 = adverbs[randomAdverb2];
// Random Noun2
  const randomNoun2 = Math.floor(Math.random() * nouns.length);
  const noun2 = nouns[randomNoun2];
// Random Verb2
  const randomVerb2 = Math.floor(Math.random() * verbs.length);
  const verb2 = verbs[randomVerb2];
// new element
const paragraph = document.createElement("p");
const mumboJumbo = `We need to ${verb1} our ${noun1} ${adverb1} 
in order to ${verb2} our ${noun2} ${adverb2}.`
paragraph.textContent = mumboJumbo;

const sentence = document.querySelector(".corporatespeak")
sentence.appendChild(paragraph)


  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
const countdownWidget = document.querySelector('.countdown');
let count = 5;
const countdown = document.createElement('p');
countdown.textContent = `T-minus ${count}...`;
countdownWidget.appendChild(countdown);


setInterval(() => {
  if (count === 1){
    countdown.textContent = `Liftoff! 🚀`;
  } else {
  count--
  countdown.textContent = `T-minus ${count}...`;
  }
}, 1000)

clearInterval()

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
