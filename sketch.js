const questionList = [
    {question: 'Of all the varieties of cats big & small the cheetah is the only one that cannot fully retract these', answer: 'THE CLAWS'},
    {question: 'Mother cats carry their newborn kittens by this part of the neck.', answer: 'The scruff'},
    {question: 'A meep is a type of this, perhaps made by a kitten or a groundhog.', answer: 'A sound'},
    {question: ' In 1996, a cat named this dashed into a burning NYC building five times to pull her kittens out, and frankly we do give a damn.', answer: 'Scarlett'},
    {question: 'Siamese kittens develop their full adult color within a few months, but are born mostly this color.', answer: 'White'},
    {question: 'Kittens have 26 of these, adult cats 30.', answer: 'Teeth'},
    {question: 'According to the Cat Fanciers\' Association, the top breed of pedigreed cat is this feline with a Middle Eastern name.', answer: 'Persian'},
    {question: 'The largest domestic cat, it originated in New England and resembles a raccoon.', answer: 'A Maine Coon'},
    {question: 'This cat breed is named for its propensity to lie limply in its owner\'s arms.', answer: 'The ragdoll'}
]
const randomQuestionIdx = questionList[Math.round(Math.random() * questionList.length -1)];
let userAnswer = prompt(randomQuestionIdx.question, "")
alert('You said "' + userAnswer + '".' + ' The correct answer is ' + randomQuestionIdx.answer +'.')