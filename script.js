const quotes = [
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        text: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch"
    }
    ,
    {
        text: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss"
    }
    ,
    {
        text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    }
    ,
    {
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    }
    ,
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    }
    ,
    {
        text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        author: "J.K. Rowling, Harry Potter and the Goblet of Fire"
    }
];

let remainingQuotes = [...quotes]; // Copy will be updated later
let usedQuotes = []; // used quotes will be updated later

document.getElementById('new-quote-btn').addEventListener('click', function() {
    if (remainingQuotes.length === 0) {
        remainingQuotes = [...usedQuotes]; // reset
        usedQuotes = []; // reset
    }

    const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
    const quote = remainingQuotes[randomIndex];

    document.getElementById('quote-text').textContent = `"${quote.text}"`;
    document.getElementById('quote-author').textContent = `--${quote.author}`;

    usedQuotes.push(remainingQuotes[randomIndex]); // update used quotes
    remainingQuotes.splice(randomIndex, 1); // remove it from remaining quote
});

