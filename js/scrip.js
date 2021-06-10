var textBody = document.getElementById("textBody")
var bookInfo = document.getElementById("article-list")
var bookHead = document.getElementById("articleHeader")
var bookImg = document.getElementById("articleImg")

//harcoded books!

var book1Head = 'They Both Die at the End'

var book1Info = `
<li>Language:   English</li>
<li>Author:     Adam Silvera</li>
<li>Price       229 SEK</li>
`


var book1Text = `A love story with a difference - an unforgettable tale of life, 
loss and making each day count in the NO. 1 BESTSELLING book of 
TIKTOK fame by Adam Silvera.

<br>
<br>

On September 5th, a little after midnight, Death-Cast calls Mateo Torrez and 
Rufus Emeterio to give them some bad news: they're going to die today. 
Mateo and Rufus are total strangers, but, for different reasons, 
they're both looking to make a new friend on their End Day. 
The good news: there's an app for that. It's called the Last Friend, 
and through it, Rufus and Mateo are about to meet up for one 
last great adventure - to live a lifetime in a single day.`

//----------------------

var book2Head = 'One Last Stop'

var book2Info = `
<li>Language:   English</li>
<li>Author:     Casey Mcquiston</li>
<li>Price       199 SEK</li>
`


var book2Text = `For cynical twenty-three-year-old August, moving to New York City is supposed to
prove her right: that things like magic and cinematic love stories don't exist, 
and the only smart way to go through life is alone. She can't imagine how waiting tables 
at a 24-hour pancake diner and moving in with too many weird roommates could possibly change that. 
And there's certainly no chance of her subway commute being anything more than a daily trudge through 
boredom and electrical failures.

<br>
<br>

But then, there's this gorgeous girl on the train.`

//--------------------------------------------------------------

var book3Head = 'Not My Problem'

var book3Info = `
<li>Language:   English</li>
<li>Author:     Ciara Smyth</li>
<li>Price       199 SEK</li>
`

var book3Text = `When Aideen agrees to help ambitious class swot Maebh Kowalska deal with her crazy workload, 
she doesn't expect to end up reluctantly pushing Maebh down the stairs. With this, 
Aideen becomes the school 'fixer': any problem a student has, Aideen will sort it out, 
from stealing confiscated mobiles to breaking into parties. All she asks for is a favour in return. 
But Aideen's own life is a mess - her mam's drinking again, her BFF Holly is avoiding her and she's skipping school. 
Spending more time with the uptight (but annoyingly cute) Maebh and chatterbox Kavi, Aideen starts to wonder: can every problem be solved?`

//---------------------------------------------------------------

var book4Head = 'Some Girls Do'

var book4Info = `
<li>Language:   English</li>
<li>Author:     Jennifer Dugan</li>
<li>Price       225 SEK</li>
`

var book4Text = `Morgan, an elite track athlete, is forced to transfer high schools late in her senior year after it turns out 
being queer is against her private Catholic school's code of conduct. There, she meets Ruby, who has two hobbies: 
tinkering with her baby blue 1970 Ford Torino and competing in local beauty pageants, 
the latter to live out the dreams of her overbearing mother. The two are drawn to each other and can't deny their growing feelings. 
But while Morgan--out and proud, and determined to have a fresh start--doesn't want to have to keep their budding relationship a secret, Ruby isn't ready to come out yet. 
With each girl on a different path toward living her truth, can they go the distance together? "Beautiful, necessary, and completely irresistible." 
--Becky Albertalli, New York Times bestselling author of Simon vs. the Homo Sapiens Agenda`

//-----------------------------------------------------------------

var book5Head = 'Perfect On Paper'

var book5Info = `
<li>Language:   English</li>
<li>Author:     Sophie Gonzales</li>
<li>Price       149 SEK</li>
`

var book5Text = `A bisexual girl who gives anonymous love advice to her school friends is hired by the hot new kid to help him get his ex back.
Leah on the Offbeat meets To All the Boys I've Loved Before - the new queer YA rom-com from Sophie Gonzales.
<br>
<br>
'Perfectly wonderful' - Becky Albertalli, New York Times bestselling author of Simon vs. the Homo Sapiens Agenda
`
//----------------------------------------------

book1 = document.getElementById("TBDATE")
book1.addEventListener("click", (e,d) => {
    textBody.innerHTML = book1Text
    bookInfo.innerHTML = book1Info
    bookHead.innerHTML = book1Head
    bookImg.src = "images/bk-TheyBothDieInTheEnd.jpg"

})

book2 = document.getElementById("one-last-stop")
book2.addEventListener("click", (e,d) => {
    textBody.innerHTML = book2Text
    bookInfo.innerHTML = book2Info
    bookHead.innerHTML = book2Head
    bookImg.src = "images/bk-OneLastStop.jpg"

})

book3 = document.getElementById("not-my-problem")
book3.addEventListener("click", (e,d) => {
    textBody.innerHTML = book3Text
    bookInfo.innerHTML = book3Info
    bookHead.innerHTML = book3Head
    bookImg.src = "images/bk-NotMyProblem.jpg"

})

book4 = document.getElementById("some-girls-do")
book4.addEventListener("click", (e,d) => {
    textBody.innerHTML = book4Text
    bookInfo.innerHTML = book4Info
    bookHead.innerHTML = book4Head
    bookImg.src = "images/bk-SomeGirlsDo.jpg"

})

book5 = document.getElementById("perfect-on-paper")
book5.addEventListener("click", (e,d) => {
    textBody.innerHTML = book5Text
    bookInfo.innerHTML = book5Info
    bookHead.innerHTML = book5Head
    bookImg.src = "images/bk-PerfectOnPaper.jpg"

})