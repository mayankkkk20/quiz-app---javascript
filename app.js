const questions = [
    {
        'que': 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'python',
        'c': 'mongodb',
        'd': 'css',
        'correct': 'a'
    },
    {
        'que': 'In which year the javascript is launched?',
        'a': '1996',
        'b': '1995',
        'c': '2000',
        'd': '1985',
        'correct': 'b'
    },
    {
        'que': 'HTML is used for ?',
        'a': 'web dev',
        'b': 'app dev',
        'c': 'backend',
        'd': 'all of the above',
        'correct': 'a',
    }

]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesbox = document.getElementById("quesbox")
const optioninput = document.querySelectorAll('.options')
const loadquestion = () => {
    if(index === total){
       return endquiz()
    }
reset();
    const data = questions[index]
    console.log(data)
    quesbox.innerText = ` ${index + 1}) ${data.que}`;
    optioninput[0].nextElementSibling.innerText = data.a;
    optioninput[1].nextElementSibling.innerText = data.b;
    optioninput[2].nextElementSibling.innerText = data.c;
    optioninput[3].nextElementSibling.innerText = data.d;
}

const submitquiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getAnswer = () => {
    let answer;
    optioninput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
               
            }
        }
    )
    return answer;
}

const reset = () => {
    optioninput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endquiz = () =>{
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> THANK YOU FOR PLAYING THE QUIZ </h3>
    <h2> ${right} / ${total} are correct </h2>
    </div >
    `
}
//initial call
loadquestion();