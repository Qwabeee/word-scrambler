/*const words = [
    {
        word : 'Number',
        hint : 'Math symbol used for counting'
    },
    {
        word : 'Meeting',
        hint : 'Event in which people come together'
    },{
    word : 'Mondli',
    hint : 'He\'s the guy who will succeed in life'
},
{
    word : 'Money',
    hint : 'Root of all evil'
},
{
    word : 'Food',
    hint : 'what humans eat to survive'
},
{
    word : 'Cellphone',
    hint : 'What we use to make calls and connect to the internet'
},
{
    word : 'Camera',
    hint : 'Used to capture images and videos'
},
{
    word : 'Needle',
    hint : 'A thin and sharp metal pin'
},
{
    word : 'Expert',
    hint : 'A person who has extensive knowledge'
},
{
    word : 'Library',
    hint : 'A place with a collection of books'
},
{
    word : 'Statement',
    hint : 'A declaration of something'
},
{
    word : 'Pocket',
    hint : 'A bag for carrying items'
},
{
    word : 'Second',
    hint : 'One-sixth of a minute'
},
{
    word : 'Exchange',
    hint : 'The act of trading'
},
{
    word : 'Addition',
    hint : 'The process of summing numbers'
},
{
    word : 'Canvas',
    hint : 'Piece of fabric for oil painting'
}]*/

const wordText = document.querySelector(".word");
const hint = document.querySelector('.hint')
const inputText = document.querySelector('input')
const refreshBtn = document.querySelector('.refresh-word')
const checkBtn = document.querySelector('.check-word')
const time = document.querySelector('.time b');

let correctWord,timer;

let initTimer = maxTime => {
    clearInterval(timer)
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            return time.innerText = maxTime;
        } clearInterval(timer);
        alert(`Time is up! ${correctWord.toUpperCase()} is the correct word.`);
        initGame();
    },1000)
   
}


const initGame = function(){
    initTimer(30)
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split('');
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j],wordArray[i]]
        
        
    }
    
    
    wordText.innerText = wordArray.join('');
    hint.innerText = randomObj.hint;
    correctWord = randomObj.word.toLocaleLowerCase();
    inputText.value = '';
}
initGame()

const checkWord = () => {
    let userWord = inputText.value.toLocaleLowerCase();
    if(!userWord) return alert('Please enter a word to check')
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not the correct word`);
    alert(`Congratulations! ${userWord} is the correct word`);
    initGame()
}


refreshBtn.addEventListener('click',console.log('HI') /*initGame*/);
checkBtn.addEventListener('click', checkWord);