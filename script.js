const quizData = [
    {
        question: 'I prefer to spend time alone or with a small group of close friends rather than large social gatherings.',
        dimension: 'I',
        options: { I: 2, E: 0 }
    },
    {
        question: 'I trust my intuition and imagination to guide my decisions.',
        dimension: 'N',
        options: { N: 2, S: 0 }
    },
    {
        question: 'I tend to base my decisions on logic and reason rather than emotions.',
        dimension: 'T',
        options: { T: 2, F: 0 }
    },
    {
        question: 'I like to have a plan and stick to it rather than being spontaneous and flexible.',
        dimension: 'J',
        options: { J: 2, P: 0 }
    },
    {
        question: 'I find it easy to make new friends and enjoy socializing with people.',
        dimension: 'E',
        options: { E: 2, I: 0 }
    },
    {
        question: 'I prefer to focus on the present moment and practical realities rather than future possibilities.',
        dimension: 'S',
        options: { S: 2, N: 0 }
    },
    {
        question: 'I often consider how my actions affect others and strive to maintain harmony in relationships.',
        dimension: 'F',
        options: { F: 2, T: 0 }
    },
    {
        question: 'I enjoy keeping my options open and exploring new opportunities rather than following a strict plan.',
        dimension: 'P',
        options: { P: 2, J: 0 }
    }
    // Add more questions here
];

function buildQuiz() {
    const quizElement = document.getElementById('quiz');

    quizData.forEach((questionData, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${questionData.question}</p>
            <label><input type="radio" name="question${index}" value="${questionData.options[Object.keys(questionData.options)[0]]}"> ${Object.keys(questionData.options)[0]}</label>
            <label><input type="radio" name="question${index}" value="${questionData.options[Object.keys(questionData.options)[1]]}"> ${Object.keys(questionData.options)[1]}</label>
        `;
        quizElement.appendChild(questionDiv);
    });
}

function submitQuiz() {
    const result = {
        I: 0,
        N: 0,
        T: 0,
        J: 0
    };

    quizData.forEach((questionData, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            const dimension = questionData.dimension;
            result[dimension] += parseInt(selectedOption.value);
        }
    });

    let mbtiType = '';
    mbtiType += (result.I >= result.E) ? 'I' : 'E';
    mbtiType += (result.N >= result.S) ? 'N' : 'S';
    mbtiType += (result.T >= result.F) ? 'T' : 'F';
    mbtiType += (result.J >= result.P) ? 'J' : 'P';

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p class="result-text">Your MBTI type is: ${mbtiType}</p>
    `;
}

buildQuiz();
