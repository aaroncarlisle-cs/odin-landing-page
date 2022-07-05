let quoteText = document.getElementById('quote-text');
let quoteSig = document.getElementById('quote-signature');
let quotes = ['Jasmine, knock it off!', 
    'Bad dog! Get out of the garbage!', 
    'Oh not again! Why are you always causing trouble?', 
    "You ate a whole pizza?!? What am I supposed to eat now?", 
    'Put the bird down! He probably has a family!', 
    "You're filthy! You need a bath!", 
    'Leave it! You come back here right now!',
    "Ow! That really hurt! Don't nip at me when I give you treats!",
    'I love you Jasmine. Oof, nevermind!',
    'Jasmine! Wanna go for a ...walk?',
    'Woah dog, your breath is RANCID! What did you eat?'
    ];
let sigs = ['-James', '-Mark', '-Benjamin', '-Sally', '-Alisha', '-Jen', '-Ron', '-Brad', '-Natasha']
function newQuote () {
    let rangeText = quotes.length;
    let rangeSig = sigs.length;
    let quoteNum = Math.floor(Math.random() * rangeText);
    let sigNum = Math.floor(Math.random() * rangeSig);
    quoteText.innerHTML = quotes[quoteNum];
    quoteSig.innerHTML = sigs[sigNum];
}

function toggleMenu () {
    let menu = document.querySelector('.compact-items');
    menu.classList.toggle('hidden');
}