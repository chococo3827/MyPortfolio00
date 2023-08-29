const quotes = [{
    quote: "That some achieve great success, is proof to all that others can achieve it as well.",
    author: "Abraham Lincoln"
},
{
    quote: "Many people flounder about in life because they do not have a purpose, an objective toward which to work.",
    author: "George Halas"
},
{
    quote: "The first step toward change is awareness. The second step is acceptance.",
    author: "Nathaniel Branden"
},
{
    quote: "The only thing we know is things don't always go the way we plane.",
    author: "라이온 킹"
},
{
    quote: "Venture outside your comfort zone. The rewards are worth it.",
    author: "라푼젤"
},
{
    quote: "Get out of the place you're used to. The reward for this will definitely be worth it.",
    author: "라푼젤"
},
{
    quote: "You cannot be happy everydat, but there are happy things everyday.",
    author: "곰돌이 푸"
},
{
    quote: "Only I can determine  my own mood. And today, perhaps, I will choose happiness.",
    author: "이상한 나라의 앨리스"
},
{
    quote: "How do you spell LOVE? You don't spell it. you feel it.",
    author: "곰돌이 푸"
},
{
    quote: "If you come at 4 o'clock. I will be happy from 3 o'clock.",
    author: "어린왕자"
},];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;