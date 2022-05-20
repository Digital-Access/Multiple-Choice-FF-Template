const titleScreen = {
    title: "Quick knowledge check!",
    image_on: false,
    image: "",
    image_above_60: "",
    image_above_40: "",
    image_below_40: "",
    end_image_on: false,
    end_image: "",
    end_comment_90: "Incredible!",
    end_comment_70: "Well done!",
    end_comment_60: "Well tried!",
    end_comment_40: "You can do better!",
    end_comment_0: "Please click try again..."
}

const design = {
    btnColour: {
        start_btn: "#25517B",
        question_btn: "#172B49",
        check_result_btn: "#25517B",
        next_btn: "#25517B",
        try_again_btn: "#25517B"
    },
    btnFontColour: {
        start_btn: "#534092",
        question_btn: "#534092",
        check_result_btn: "#534092",
        next_btn: "#534092k",
        try_again_btn: "#534092"
    },
    textFontColour: {
        questionFontColour: "white",
        titleFontColour: "white",
        scoreFontColour: "white",
        endCommentFontColour: "white",
        endScoreColour: "white"
    },
    changeAllFontColour: true,
    allFontColour: "white",
    backgroundColour: "rgba(0, 0, 0, 0.463)",
    backgroundImage: "https://a.storyblok.com/f/117027/3129x2020/51e7d3b0d6/prelogin.png",
    incorrectColour: "white",
    incorrectFontColour: "#172B49",
    correctColour: "#01a101",
    correctFontColour: "white",
    correctBoxShadow: "none", // write "none" for no box-shadow
    incorrectBoxShadow: "red" // write "none" for no box-shadow
}

const allQuestions = [{
    question_string: "Which one of the follwing does not fall into the Plan phase? ",
    correct_text: "✔ Well done! You are correct.",
    incorrect_text: "❌Incorrect! The correct answer is Launch Campaign.",
    choices: {
        all_choices: ["Discovery Phase", "Launch Campaign", "Define Campaign Objectives", "Define Business Case", "Collaborate with Stakeholders", "Identify KPIs and metrics"],
        correct: "Launch Campaign",
    }
}, {
    question_string: "Which of the following elements aren’t introduced in HTML5?",
    correct_text: "✔ Correct! <hgroup> is not included in HTML5.",
    incorrect_text: "❌Incorrect! <hgroup> is the element not introduced in HTML5.",
    choices: {
        all_choices: ["<hgroup>", "<article>", "<footer>", "<input>", "Johnny"],
        correct: "<hgroup>",
    }
}, {
    question_string: "How many wheels are there on a tricycle?",
    correct_text: "✔ Correct! Tri is a combining noun, meaning three; having three.",
    incorrect_text: "❌Incorrect! A tricycle has three wheels.",
    choices: {
        all_choices: ["Four", "One", "Two", "Three"],
        correct: "Three",
    }
}, {
    question_string: 'Who is the main character of Harry Potter?',
    correct_text: "✔ Correct! Harry is the protagonist.",
    incorrect_text: "❌Incorrect! Harry Potter is the main character (hint: It says it in the title).",
    choices: {
        all_choices: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Voldemort"],
        correct: "Harry Potter",
    }
}, {
    question_string: 'Whats 3X4?',
    correct_text: "✔ Correct! 3X4 is 12.",
    incorrect_text: "❌Incorrect! 12 is the correct answer.",
    choices: {
        all_choices: ["7", "11", "22", "12"],
        correct: "12",
    }
}];

const question = document.getElementById('question');
const mainContainer = document.getElementById('mainContainer');
const choice = document.getElementById('choice');
const nextBtn = document.getElementById('next');
const resultCheck = document.getElementById('resultCheck');
const tryAgain = document.getElementById('tryAgain');
const counterContainer = document.getElementById('counterContainer');
const score = document.getElementById('score');
const counter = document.getElementById('counter');
const title = document.getElementById('title');
const titleContainer = document.getElementById('titleContainer');
const header = document.getElementById('header');
const start = document.getElementById('start');
const endComment = document.getElementById('endComment');
const navigation = document.getElementById('navigation');
const image = document.getElementById('image');
const endImage = document.getElementById('endImage');
const container = document.getElementById('choicePageContainer')

title.textContent = titleScreen.title;
score.textContent = 0;
endScore.style.display = 'none';
endComment.style.display = 'none';
endImage.style.display = 'none';

start.style.backgroundColor = design.btnColour.start_btn;
start.style.color = design.btnFontColour.start_btn;
mainContainer.style.background = design.backgroundColour;
mainContainer.style.backgroundImage = `url(${design.backgroundImage})`;
tryAgain.style.backgroundColor = design.btnColour.try_again_btn;
tryAgain.style.color = design.btnFontColour.try_again_btn;
nextBtn.style.backgroundColor = design.btnColour.next_btn;
nextBtn.style.color = design.btnFontColour.next_btn;
resultCheck.style.backgroundColor = design.btnColour.check_result_btn;
resultCheck.style.color = design.btnFontColour.check_result_btn;
question.style.color = design.textFontColour.questionFontColour;
endComment.style.color = design.textFontColour.endCommentFontColour;
endScore.style.color = design.textFontColour.endScoreColour;
counterContainer.style.color = design.textFontColour.scoreFontColour;
title.style.color = design.textFontColour.titleFontColour;

if (design.changeAllFontColour) {
    start.style.color = design.allFontColour;
    tryAgain.style.color = design.allFontColour;
    nextBtn.style.color = design.allFontColour;
    resultCheck.style.color = design.allFontColour;
    question.style.color = design.allFontColour;
    endComment.style.color = design.allFontColour;
    endScore.style.color = design.allFontColour;
    counterContainer.style.color = design.allFontColour;
    title.style.color = design.allFontColour;
}

if (titleScreen.image_on) {
    image.src = titleScreen.image;
} else {
    image.style.display = 'none';
}

let i = 0;
let count = allQuestions.length;

counter.textContent = count;
header.style.display = 'none';

const choicePages = []
const choicePage = document.createElement("div")
allQuestions.forEach(object => {
    console.log(object.choices.all_choices)
    choicePage.className = "choices"
    choicePage.id = "choices"
    choicePages.push(choicePage)
});

const selected = event => {
    resultCheck.style.display = 'flex'

    choiceElements.forEach(element => {
        element.classList.remove('selected')
    });
    if (event.currentTarget.classList.contains('selected')) {
        event.currentTarget.classList.remove('selected')
    } else {
        event.currentTarget.classList.add('selected')
    }
};


const choiceElements = []
j = 0;
allQuestions[0].choices.all_choices.forEach(element => {
    const choiceElement = document.createElement("div")
    choiceElement.className = "choice"
    choiceElement.textContent = allQuestions[0].choices.all_choices[j]
    choiceElements.push(choiceElement)
    choicePages[0].appendChild(choiceElement)
    choiceElement.style.setProperty('background-color', design.btnColour.question_btn)
    choiceElement.style.setProperty('color', design.btnFontColour.question_btn)
    if (design.changeAllFontColour) {
        choiceElement.style.setProperty('color', design.allFontColour)
    }
    choiceElement.addEventListener('click', selected)
    j++
});

const beginQuiz = () => {
    titleContainer.style.display = 'none';
    mainContainer.style.justifyContent = 'top!important';
    header.style.display = 'flex';
    question.textContent = allQuestions[0].question_string
    container.appendChild(choicePages[0])
}
start.addEventListener('click', beginQuiz)

let r = 0;
let s = 0;
const checkResult = () => {
    choicePage.childNodes.forEach(element => {
        if (element.classList.contains('selected') && element.textContent === allQuestions[r].choices.correct) {
            element.textContent = allQuestions[r].correct_text
            element.classList.add('correct')
            element.classList.remove('selected')
            element.style.setProperty('background-color', design.correctColour)
            element.style.setProperty('color', design.correctFontColour)
            element.style.setProperty('box-shadow', `0 0 5px 4px ${design.correctBoxShadow}`)
            container.style.pointerEvents = 'none'
            resultCheck.style.pointerEvents = 'none'
            nextBtn.style.display = 'flex'
            score.textContent = ++s
        } else if (element.classList.contains('selected') && element.textContent != allQuestions[r].choices.correct) {
            element.textContent = allQuestions[r].incorrect_text
            element.classList.add('incorrect')
            element.style.setProperty('background-color', design.incorrectColour)
            element.style.setProperty('color', design.incorrectFontColour)
            element.style.setProperty('box-shadow', `0 0 5px 4px ${design.incorrectBoxShadow}`)
            element.classList.remove('selected')
            container.style.pointerEvents = 'none'
            resultCheck.style.pointerEvents = 'none'
            nextBtn.style.display = 'flex'
        } else if (!element.classList.contains('selected') && element.textContent === allQuestions[r].choices.correct) {
            element.classList.add('correct')
            element.style.setProperty('background-color', design.correctColour)
            element.style.setProperty('color', design.correctFontColour)
            element.style.setProperty('box-shadow', `${design.correctBoxShadow} 0 0 5px 4px `)
        }
    });
    r++
}
resultCheck.addEventListener('click', checkResult)


let n = 0;
const loadNext = () => {
    const max = allQuestions.length - 1
    nextBtn.style.display = 'none'
    let c = 0
    container.style.pointerEvents = 'all'
    resultCheck.style.pointerEvents = 'all'
    if (n < max) {
        n++
        const questions = document.querySelectorAll('.choice')
        questions.forEach(element => {
            choicePage.removeChild(element)
        })
        allQuestions[n].choices.all_choices.forEach(element => {
            const newChoice = document.createElement("div")
            newChoice.style.setProperty('background-color', design.btnColour.question_btn)
            newChoice.style.setProperty('color', design.btnFontColour.question_btn)
            if (design.changeAllFontColour) {
                newChoice.style.setProperty('color', design.allFontColour)
            }
            newChoice.className = 'choice'
            choicePage.appendChild(newChoice)
            newChoice.textContent = allQuestions[n].choices.all_choices[c]
            question.textContent = allQuestions[n].question_string
            newChoice.addEventListener('click', event => {
                document.querySelectorAll('.choice').forEach(element => {
                    element.classList.remove('selected')
                });
                if (event.currentTarget.classList.contains('selected')) {
                    event.currentTarget.classList.remove('selected')

                } else {
                    event.currentTarget.classList.add('selected')
                }
            })
            c++
        });
    } else {
        const choices = document.getElementById('choices')
        const endScore = document.getElementById('endScore');
        choices.style.display = 'none'
        nextBtn.style.display = 'none';
        resultCheck.style.display = 'none';
        endComment.style.display = 'flex';
        tryAgain.style.display = 'flex';
        question.textContent = 'Your Score';
        endScore.style.display = 'flex';
        endScore.textContent = `${score.textContent} / ${counter.textContent}`;
        counterContainer.style.display = 'none';
        navigation.style.justifyContent = 'center';
        let mark = Number(score.textContent) / count * 100;
        if (mark >= 90) {
            endComment.textContent = titleScreen.end_comment_90
            if (titleScreen.end_image_on) {
                endImage.src = titleScreen.image_above_60;
                endImage.style.display = 'flex';
            } else {
                endImage.style.display = 'none';
            }
        } else if (mark >= 70) {
            endComment.textContent = titleScreen.end_comment_70
            if (titleScreen.end_image_on) {
                endImage.src = titleScreen.image_above_60;
                endImage.style.display = 'flex';
            } else {
                endImage.style.display = 'none';
            }
        } else if (mark >= 60) {
            endComment.textContent = titleScreen.end_comment_60
            if (titleScreen.end_image_on) {
                endImage.src = titleScreen.image_above_60;
                endImage.style.display = 'flex';
            } else {
                endImage.style.display = 'none';
            }
        } else if (mark >= 40) {
            endComment.textContent = titleScreen.end_comment_40
            if (titleScreen.end_image_on) {
                endImage.src = titleScreen.image_above_40;
                endImage.style.display = 'flex';
            } else {
                endImage.style.display = 'none';
            }
        } else if (mark >= 0) {
            endComment.textContent = titleScreen.end_comment_0
            if (titleScreen.end_image_on) {
                endImage.src = titleScreen.image_below_40;
                endImage.style.display = 'flex';
            } else {
                endImage.style.display = 'none';
            }
        }
    }

}
nextBtn.addEventListener('click', loadNext)

const reset = () => {
    window.location.reload();
}
tryAgain.addEventListener('click', reset);
