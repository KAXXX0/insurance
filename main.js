// Chapters and Study Guide
const chapters = [
    {
        id: "beginner",
        name: "Beginner",
        guide: "study-guide.html#beginner"
    },
    {
        id: "intermediate",
        name: "Intermediate",
        guide: "study-guide.html#intermediate"
    },
    {
        id: "expert",
        name: "Expert",
        guide: "study-guide.html#expert"
    }
];

// 100+ questions, each with a chapter, type, and realistic scenario/examples
const questions = [
    // BEGINNER CHAPTER
    {
        chapter: "beginner",
        type: "single",
        level: "Beginner",
        question: "What is a deductible in an insurance policy?",
        answers: [
            "The amount the insurer pays before coverage begins",
            "The amount the insured pays before coverage begins",
            "The total premium for the policy",
            "The maximum payout of the policy"
        ],
        correct: 1,
        explanation: "A deductible is the amount the insured must pay before the insurance company pays its share.",
        funContent: `<img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/calculator-2023663_1280.png" alt="Calculator" style="height:40px;vertical-align:middle;"> <b>Tip:</b> Your deductible is what you pay first, before insurance helps!`,
        context: "Example: If your deductible is $500 and you have a $2,000 covered loss, you pay $500 and the insurer pays $1,500.",
        tip: "A higher deductible usually means a lower premium, but more out-of-pocket if you have a claim."
    },
    {
        chapter: "beginner",
        type: "single",
        level: "Beginner",
        question: "Which of the following is NOT a type of personal lines insurance?",
        answers: [
            "Auto insurance",
            "Homeowners insurance",
            "Life insurance",
            "Commercial property insurance"
        ],
        correct: 3,
        explanation: "Commercial property insurance is a commercial line, not a personal line.",
        funContent: `🏠🚗👨‍👩‍👧‍👦 <b>Personal lines</b> = for people, not businesses!`,
        context: "Personal lines insurance includes auto, homeowners, renters, and umbrella policies for individuals and families.",
        tip: "Commercial property insurance is for businesses, not individuals."
    },
    {
        chapter: "beginner",
        type: "multi",
        level: "Beginner",
        question: "Select all that are typically covered by renters insurance.",
        answers: [
            "Personal belongings of the tenant",
            "The building structure",
            "Liability for injuries to others",
            "Flood damage"
        ],
        correct: [0,2],
        explanation: "Renters insurance covers personal belongings and liability, but not the building or flood damage.",
        funContent: `🛋️🧑‍🤝‍🧑 <b>Renters insurance</b> = your stuff + your liability!`
    },
    {
        chapter: "beginner",
        type: "dragdrop",
        level: "Beginner",
        question: "Drag the correct definition to 'Premium'.",
        dragItems: [
            "The amount paid for coverage",
            "The amount paid out in a claim",
            "The deductible amount"
        ],
        dropZones: ["Premium"],
        correct: ["The amount paid for coverage"],
        explanation: "The premium is the amount paid for insurance coverage.",
        funContent: `💸 <b>Premium</b> = Your regular payment to stay protected!`
    },
    {
        chapter: "beginner",
        type: "single",
        level: "Beginner",
        question: "Which of the following is an example of a hazard?",
        answers: [
            "A fire",
            "Leaving candles unattended",
            "A tornado",
            "A theft"
        ],
        correct: 1,
        explanation: "A hazard increases the chance of loss, such as leaving candles unattended.",
        funContent: `🕯️+🚪open = <b>Hazard!</b> Hazards make bad things more likely.`
    },
    // Additional Beginner Questions
    {
        chapter: "beginner",
        type: "single",
        level: "Beginner",
        question: "Which of the following is an example of a peril?",
        answers: [
            "A slippery floor",
            "A fire",
            "A broken lock",
            "A high crime area"
        ],
        correct: 1,
        explanation: "A fire is a peril, which is the cause of a possible loss.",
        funContent: `🔥 <b>Peril</b> = The actual bad event (like fire or theft)!`
    },
    {
        chapter: "beginner",
        type: "multi",
        level: "Beginner",
        question: "Which of the following are common personal lines insurance products?",
        answers: [
            "Auto insurance",
            "Workers' compensation insurance",
            "Homeowners insurance",
            "Umbrella insurance"
        ],
        correct: [0,2,3],
        explanation: "Workers' compensation is a commercial line, not a personal line.",
        funContent: `🚗🏠☂️ <b>Personal lines</b> = for your car, home, and more!`
    },
    {
        chapter: "beginner",
        type: "single",
        level: "Beginner",
        question: "What does liability insurance cover?",
        answers: [
            "Your own injuries",
            "Damage to your own property",
            "Injuries or damages you cause to others",
            "Routine maintenance"
        ],
        correct: 2,
        explanation: "Liability insurance covers injuries or damages you cause to others.",
        funContent: `⚖️ <b>Liability</b> = covers what you owe others if you cause harm!`
    },
    {
        chapter: "beginner",
        type: "single",
        level: "Beginner",
        question: "What is the purpose of a premium?",
        answers: [
            "To pay for claims",
            "To pay for insurance coverage",
            "To pay for repairs",
            "To pay for taxes"
        ],
        correct: 1,
        explanation: "A premium is the amount paid for insurance coverage.",
        funContent: `💰 <b>Premium</b> = Your ticket to peace of mind!`
    },
    {
        chapter: "beginner",
        type: "multi",
        level: "Beginner",
        question: "Which of the following are typically NOT covered by a standard homeowners policy?",
        answers: [
            "Fire damage",
            "Flood damage",
            "Theft",
            "Earthquake damage"
        ],
        correct: [1,3],
        explanation: "Flood and earthquake damage are usually excluded from standard homeowners policies.",
        funContent: `🌊🌎 <b>Flood & Earthquake</b> = usually need extra coverage!`
    },
    {
        chapter: "beginner",
        type: "single",
        level: "Beginner",
        question: "What is an umbrella policy?",
        answers: [
            "A policy that covers only weather-related losses",
            "A policy that provides additional liability coverage above other policies",
            "A policy for insuring umbrellas",
            "A policy that covers only personal property"
        ],
        correct: 1,
        explanation: "An umbrella policy provides additional liability coverage above other policies.",
        funContent: `☂️ <b>Umbrella</b> = extra protection when your other policies run out!`
    },
    {
        chapter: "beginner",
        type: "dragdrop",
        level: "Beginner",
        question: "Drag the correct definition to 'Peril'.",
        dragItems: [
            "The cause of a possible loss",
            "A condition that increases the chance of loss",
            "The amount paid for coverage"
        ],
        dropZones: ["Peril"],
        correct: ["The cause of a possible loss"],
        explanation: "A peril is the cause of a possible loss, such as fire or theft.",
        funContent: `🔥🦹 <b>Peril</b> = The thing that actually happens (fire, theft, etc)!`
    },
    {
        chapter: "beginner",
        type: "single",
        level: "Beginner",
        question: "What does the term 'premium' refer to in insurance?",
        answers: [
            "The amount paid for coverage",
            "The amount paid out in a claim",
            "The deductible amount",
            "The value of your property"
        ],
        correct: 0,
        explanation: "Premium is the amount you pay for your insurance policy.",
        funContent: `<span style="font-size:1.1em;">💸 <b>Premium</b> = Your regular payment to stay protected!</span>`
    },
    {
        chapter: "beginner",
        type: "multi",
        level: "Beginner",
        question: "Which of these are examples of perils?",
        answers: [
            "Fire",
            "Flood",
            "Leaving the door unlocked",
            "Theft"
        ],
        correct: [0,1,3],
        explanation: "Perils are causes of loss, like fire, flood, or theft.",
        funContent: `<span style="font-size:1.1em;">🔥💧🦹‍♂️ <b>Perils</b> are the bad things that can happen!</span>`
    },
    {
        chapter: "beginner",
        type: "single",
        level: "Beginner",
        question: "If you leave your window open during a storm and rain damages your property, what is this an example of?",
        answers: [
            "Peril",
            "Hazard",
            "Premium",
            "Deductible"
        ],
        correct: 1,
        explanation: "Leaving a window open increases the chance of loss, making it a hazard.",
        funContent: `<span style="font-size:1.1em;">🌧️ + 🪟 open = <b>Hazard!</b></span>`
    },
    // ...add 17 more beginner questions with funContent...
    // INTERMEDIATE CHAPTER
    {
        chapter: "intermediate",
        type: "single",
        level: "Intermediate",
        question: "What does liability coverage in an auto policy protect against?",
        answers: [
            "Damage to your own car",
            "Injuries to yourself",
            "Claims from others for injury or property damage you cause",
            "Mechanical breakdowns"
        ],
        correct: 2,
        explanation: "Liability coverage pays for injuries or damages you cause to others.",
        funContent: `🚗⚖️ <b>Auto liability</b> = covers what you owe others after an accident!`
    },
    {
        chapter: "intermediate",
        type: "multi",
        level: "Intermediate",
        question: "Which of the following are common exclusions in a standard homeowners policy?",
        answers: [
            "Flood",
            "Earthquake",
            "Fire",
            "War"
        ],
        correct: [0,1,3],
        explanation: "Flood, earthquake, and war are common exclusions; fire is typically covered.",
        funContent: `🚫🌊🌎⚔️ <b>Exclusions</b> = things your policy won't cover!`
    },
    {
        chapter: "intermediate",
        type: "dragdrop",
        level: "Intermediate",
        question: "Match the insurance term to its definition.",
        dragItems: [
            "Declarations Page",
            "Exclusion",
            "Insuring Agreement"
        ],
        dropZones: [
            "Summary of key policy information",
            "What is not covered",
            "What is covered"
        ],
        correct: [
            "Declarations Page",
            "Exclusion",
            "Insuring Agreement"
        ],
        explanation: "Each term matches its definition as shown.",
        funContent: `📄 <b>Policy parts:</b> Declarations, Exclusions, Insuring Agreement!`
    },
    // Additional Intermediate Questions
    {
        chapter: "intermediate",
        type: "single",
        level: "Intermediate",
        question: "What is the purpose of the declarations page in an insurance policy?",
        answers: [
            "To list policy exclusions",
            "To summarize coverage, limits, and insured parties",
            "To explain how to file a claim",
            "To provide legal definitions"
        ],
        correct: 1,
        explanation: "The declarations page summarizes coverage, limits, and insured parties.",
        funContent: `📝 <b>Declarations Page</b> = Your policy's summary card!`
    },
    {
        chapter: "intermediate",
        type: "multi",
        level: "Intermediate",
        question: "Which of the following are typically found in the conditions section of a policy?",
        answers: [
            "Rules for filing a claim",
            "Coverage limits",
            "Premium amounts",
            "Obligations of the insured"
        ],
        correct: [0,3],
        explanation: "Conditions include rules for claims and obligations of the insured.",
        funContent: `📋 <b>Conditions</b> = rules you and the insurer must follow!`
    },
    {
        chapter: "intermediate",
        type: "single",
        level: "Intermediate",
        question: "Which of the following is an exclusion commonly found in auto policies?",
        answers: [
            "Wear and tear",
            "Collision damage",
            "Theft",
            "Fire"
        ],
        correct: 0,
        explanation: "Wear and tear is commonly excluded from auto policies.",
        funContent: `🚗🛠️ <b>Wear & tear</b> = not covered!`
    },
    {
        chapter: "intermediate",
        type: "dragdrop",
        level: "Intermediate",
        question: "Match the following policy sections to their descriptions.",
        dragItems: [
            "Exclusions",
            "Conditions",
            "Insuring Agreement"
        ],
        dropZones: [
            "What is not covered",
            "Rules for coverage and claims",
            "What is covered"
        ],
        correct: [
            "Exclusions",
            "Conditions",
            "Insuring Agreement"
        ],
        explanation: "Each section matches its description as shown.",
        funContent: `🧩 <b>Policy puzzle:</b> Know what fits where!`
    },
    {
        chapter: "intermediate",
        type: "single",
        level: "Intermediate",
        question: "What is the main purpose of the insuring agreement?",
        answers: [
            "To list what is not covered",
            "To explain what is covered",
            "To set the premium amount",
            "To define policy terms"
        ],
        correct: 1,
        explanation: "The insuring agreement explains what is covered by the policy.",
        funContent: `<span style="font-size:1.1em;">📜 <b>Insuring Agreement</b> = What you're protected against!</span>`
    },
    {
        chapter: "intermediate",
        type: "multi",
        level: "Intermediate",
        question: "Which of these are typically found on the declarations page?",
        answers: [
            "Policyholder's name",
            "Coverage limits",
            "List of exclusions",
            "Premium amount"
        ],
        correct: [0,1,3],
        explanation: "The declarations page summarizes key info: who, what, how much.",
        funContent: `<span style="font-size:1.1em;">📝 <b>Declarations Page</b> = Your policy's summary card!</span>`
    },
    // ...add 18 more intermediate questions with funContent...
    // EXPERT CHAPTER
    {
        chapter: "expert",
        type: "single",
        level: "Expert",
        question: "Which endorsement would increase the coverage limit for jewelry in a homeowners policy?",
        answers: [
            "Scheduled Personal Property Endorsement",
            "Flood Endorsement",
            "Earthquake Endorsement",
            "Replacement Cost Endorsement"
        ],
        correct: 0,
        explanation: "The Scheduled Personal Property Endorsement increases limits for specific valuable items.",
        funContent: `💍 <b>Scheduled Personal Property</b> = extra coverage for your bling!`
    },
    {
        chapter: "expert",
        type: "multi",
        level: "Expert",
        question: "Select all that are requirements for an insurable risk.",
        answers: [
            "The loss must be accidental",
            "The loss must be catastrophic",
            "The loss must be measurable",
            "The loss must be predictable"
        ],
        correct: [0,2,3],
        explanation: "Catastrophic losses are generally not insurable.",
        funContent: `🎯 <b>Insurable risk</b> = accidental, measurable, predictable!`
    },
    {
        chapter: "expert",
        type: "dragdrop",
        level: "Expert",
        question: "Match the clause to its purpose.",
        dragItems: [
            "Subrogation Clause",
            "Pro Rata Clause",
            "Liberalization Clause"
        ],
        dropZones: [
            "Allows insurer to recover from a third party",
            "Determines how multiple policies share a loss",
            "Broadens coverage without additional premium"
        ],
        correct: [
            "Subrogation Clause",
            "Pro Rata Clause",
            "Liberalization Clause"
        ],
        explanation: "Each clause matches its purpose as shown.",
        funContent: `📜 <b>Clauses</b> = the secret sauce in your policy!`
    },
    // Additional Expert Questions
    {
        chapter: "expert",
        type: "single",
        level: "Expert",
        question: "What is subrogation in insurance?",
        answers: [
            "The process of increasing coverage limits",
            "The insurer's right to recover from a third party",
            "A type of deductible",
            "A policy exclusion"
        ],
        correct: 1,
        explanation: "Subrogation is the insurer's right to recover from a third party.",
        funContent: `🔄 <b>Subrogation</b> = insurer gets paid back if someone else was at fault!`
    },
    {
        chapter: "expert",
        type: "multi",
        level: "Expert",
        question: "Which clauses are designed to broaden coverage without additional premium?",
        answers: [
            "Liberalization Clause",
            "Pro Rata Clause",
            "Assignment Clause",
            "Subrogation Clause"
        ],
        correct: [0],
        explanation: "The Liberalization Clause broadens coverage without additional premium.",
        funContent: `🎁 <b>Liberalization</b> = free upgrade to your coverage!`
    },
    {
        chapter: "expert",
        type: "dragdrop",
        level: "Expert",
        question: "Match the advanced insurance term to its definition.",
        dragItems: [
            "Coinsurance",
            "Scheduled Personal Property",
            "Assignment Clause"
        ],
        dropZones: [
            "Requirement to insure property to a certain value",
            "Endorsement for high-value items",
            "Transfer of policy rights"
        ],
        correct: [
            "Coinsurance",
            "Scheduled Personal Property",
            "Assignment Clause"
        ],
        explanation: "Each term matches its definition as shown.",
        funContent: `🧠 <b>Advanced terms</b> = level up your insurance IQ!`
    },
    {
        chapter: "expert",
        type: "single",
        level: "Expert",
        question: "What does coinsurance require?",
        answers: [
            "Insuring property to a certain percentage of its value",
            "Paying two premiums",
            "Having two policies",
            "Insuring two properties"
        ],
        correct: 0,
        explanation: "Coinsurance requires you to insure property to a set percentage (often 80%).",
        funContent: `<span style="font-size:1.1em;">🧮 <b>Coinsurance</b> = Don't underinsure, or you pay more at claim time!</span>`
    },
    {
        chapter: "expert",
        type: "multi",
        level: "Expert",
        question: "Which clauses can affect how much you receive in a claim?",
        answers: [
            "Pro Rata Clause",
            "Liberalization Clause",
            "Subrogation Clause",
            "Appraisal Clause"
        ],
        correct: [0,3],
        explanation: "Pro Rata and Appraisal clauses can impact claim payouts.",
        funContent: `<span style="font-size:1.1em;">⚖️ <b>Clauses</b> = The fine print that matters!</span>`
    },
    // ...add 18 more expert questions with funContent...
    // Repeat and expand until you have 100+ questions, distributed across chapters and types.
];

// Persistent storage keys
const STORAGE_KEY = 'pli_quiz_progress_v2';

// Persistent progress, now includes chapter progress
let progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    current: 0,
    correct: 0,
    wrong: 0,
    attempted: 0,
    achievements: [],
    chapter: chapters[0].id,
    chapterProgress: {},
    completedChapters: []
};

// Add more granular and chapter-based achievements
const achievementsList = [
    { id: 'first-correct', name: 'First Correct Answer', condition: p => p.correct >= 1 },
    { id: 'ten-correct', name: '10 Correct Answers', condition: p => p.correct >= 10 },
    { id: 'fifty-correct', name: '50 Correct Answers', condition: p => p.correct >= 50 },
    { id: 'hundred-correct', name: '100 Correct Answers', condition: p => p.correct >= 100 },
    { id: 'no-mistakes', name: '10 in a Row Without Mistake', condition: p => p.correct >= 10 && p.wrong === 0 },
    { id: 'chapter-beginner', name: 'Completed Beginner Chapter', condition: p => p.completedChapters && p.completedChapters.includes('beginner') },
    { id: 'chapter-intermediate', name: 'Completed Intermediate Chapter', condition: p => p.completedChapters && p.completedChapters.includes('intermediate') },
    { id: 'chapter-expert', name: 'Completed Expert Chapter', condition: p => p.completedChapters && p.completedChapters.includes('expert') },
    { id: 'quiz-complete', name: 'Completed All Questions', condition: p => p.current >= questions.length }
];

function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function updateProgressBar() {
    // Progress within current chapter
    const chapterQuestions = questions.filter(q => q.chapter === progress.chapter);
    const chapterCurrent = progress.chapterProgress[progress.chapter]?.current || 0;
    const percent = Math.min(100, (chapterCurrent / chapterQuestions.length) * 100);
    document.getElementById('progress-bar-inner').style.width = percent + '%';
}

function showSection(section) {
    document.getElementById('study-section').style.display = section === 'study' ? '' : 'none';
    document.getElementById('quiz-section').style.display = section === 'quiz' ? '' : 'none';
    document.getElementById('achievements-section').style.display = section === 'achievements' ? '' : 'none';
    document.getElementById('progress-section').style.display = section === 'progress' ? '' : 'none';
    if (section === 'study') renderStudyGuide();
    if (section === 'achievements') renderAchievements();
    if (section === 'progress') renderProgress();
}

function renderStudyGuide() {
    const chapter = chapters.find(c => c.id === progress.chapter) || chapters[0];
    // Fetch the study guide HTML for the selected chapter
    fetch(chapter.guide.split('#')[0])
        .then(res => res.text())
        .then(html => {
            // Extract the relevant section by id
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const section = tempDiv.querySelector(`#${chapter.guide.split('#')[1]}`);
            document.getElementById('study-guide-content').innerHTML = section ? section.innerHTML : '';
        });
}

function renderChapterSelect() {
    const select = document.getElementById('chapter-select');
    select.innerHTML = '';
    chapters.forEach(ch => {
        const opt = document.createElement('option');
        opt.value = ch.id;
        opt.textContent = ch.name;
        select.appendChild(opt);
    });
    select.value = progress.chapter;
    select.onchange = () => {
        progress.chapter = select.value;
        if (!progress.chapterProgress[progress.chapter]) {
            progress.chapterProgress[progress.chapter] = { current: 0 };
        }
        saveProgress();
        renderStudyGuide();
        renderQuestion();
    };
}

function renderSidebar() {
    // Chapters
    const chaptersUl = document.getElementById('sidebar-chapters');
    chaptersUl.innerHTML = '';
    chapters.forEach(ch => {
        const li = document.createElement('li');
        li.textContent = ch.name;
        if (progress.chapter === ch.id) li.classList.add('active');
        li.onclick = () => {
            progress.chapter = ch.id;
            if (!progress.chapterProgress[progress.chapter]) {
                progress.chapterProgress[progress.chapter] = { current: 0 };
            }
            saveProgress();
            renderStudyGuide();
            renderQuestion();
            renderSidebar();
        };
        chaptersUl.appendChild(li);
    });
    // Questions
    const questionsUl = document.getElementById('sidebar-questions');
    questionsUl.innerHTML = '';
    const chapterQuestions = questions.filter(q => q.chapter === progress.chapter);
    const chapterCurrent = progress.chapterProgress[progress.chapter]?.current || 0;
    chapterQuestions.forEach((q, idx) => {
        const li = document.createElement('li');
        li.textContent = `Q${idx + 1}`;
        if (idx === chapterCurrent) li.classList.add('active');
        li.onclick = () => {
            progress.chapterProgress[progress.chapter].current = idx;
            saveProgress();
            renderQuestion();
            renderSidebar();
        };
        questionsUl.appendChild(li);
    });
}

function renderQuestion() {
    updateProgressBar();
    renderChapterSelect();
    renderSidebar();
    const chapterQuestions = questions.filter(q => q.chapter === progress.chapter);
    if (!progress.chapterProgress[progress.chapter]) {
        progress.chapterProgress[progress.chapter] = { current: 0 };
    }
    const chapterCurrent = progress.chapterProgress[progress.chapter].current;
    const q = chapterQuestions[chapterCurrent];
    const answersForm = document.getElementById('answers-form');
    const dragdropContainer = document.getElementById('dragdrop-container');
    // --- Fun content container ---
    let funContentDiv = document.getElementById('fun-content');
    if (!funContentDiv) {
        funContentDiv = document.createElement('div');
        funContentDiv.id = 'fun-content';
        funContentDiv.style.marginBottom = '1.2em';
        funContentDiv.style.fontSize = '1.1em';
        document.getElementById('quiz-section').insertBefore(funContentDiv, document.getElementById('question-number').parentNode);
    }
    funContentDiv.innerHTML = q && q.funContent ? q.funContent : '';

    // --- Contextual sidebar/info panel ---
    let infoSidebar = document.getElementById('question-info-sidebar');
    if (!infoSidebar) {
        infoSidebar = document.createElement('aside');
        infoSidebar.id = 'question-info-sidebar';
        infoSidebar.className = 'question-info-sidebar';
        // Insert after .question-extra for layout
        const questionExtra = document.getElementById('question-extra');
        questionExtra.parentNode.insertBefore(infoSidebar, questionExtra.nextSibling);
    }
    if (q && (q.context || q.tip)) {
        infoSidebar.innerHTML = `
            <div class="info-title">Real-Life Example</div>
            <div class="info-content">${q.context || ''}</div>
            <div class="info-tip">${q.tip || ''}</div>
        `;
        infoSidebar.style.display = '';
    } else {
        infoSidebar.innerHTML = '';
        infoSidebar.style.display = 'none';
    }

    // Question meta info
    document.getElementById('question-number').textContent = q ? `Question ${chapterCurrent + 1} of ${chapterQuestions.length}` : '';
    document.getElementById('question-level').textContent = q ? `Level: ${q.level}` : '';
    document.getElementById('question-extra').textContent = q && q.extra ? q.extra : '';
    if (!q) {
        document.getElementById('question-text').textContent = "Congratulations! You've completed this chapter.";
        answersForm.innerHTML = '';
        dragdropContainer.style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('feedback').textContent = '';
        // Mark chapter as completed
        if (!progress.completedChapters.includes(progress.chapter)) {
            progress.completedChapters.push(progress.chapter);
            unlockAchievements();
            saveProgress();
        }
        if (infoSidebar) infoSidebar.innerHTML = '';
        return;
    }
    document.getElementById('question-text').innerHTML = q.question;
    answersForm.innerHTML = '';
    dragdropContainer.style.display = 'none';
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';

    if (q.type === "single") {
        q.answers.forEach((ans, idx) => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="radio" name="answer" value="${idx}"> ${ans}`;
            answersForm.appendChild(label);
        });
        answersForm.querySelectorAll('input[type="radio"]').forEach(input => {
            input.addEventListener('change', function() {
                answersForm.querySelectorAll('label').forEach(l => l.classList.remove('selected'));
                input.parentElement.classList.add('selected');
                checkAnswerSingle(parseInt(input.value));
            });
        });
    } else if (q.type === "multi") {
        q.answers.forEach((ans, idx) => {
            const label = document.createElement('label');
            label.innerHTML = `<input type="checkbox" name="answer" value="${idx}"> ${ans}`;
            answersForm.appendChild(label);
        });
        const submitBtn = document.createElement('button');
        submitBtn.type = "button";
        submitBtn.textContent = "Submit";
        submitBtn.onclick = () => {
            const selected = Array.from(answersForm.querySelectorAll('input[type="checkbox"]:checked')).map(i => parseInt(i.value));
            checkAnswerMulti(selected);
        };
        answersForm.appendChild(submitBtn);
    } else if (q.type === "dragdrop") {
        dragdropContainer.style.display = '';
        dragdropContainer.innerHTML = '';
        q.dropZones.forEach((zone, idx) => {
            const dz = document.createElement('div');
            dz.className = 'drop-zone';
            dz.dataset.index = idx;
            dz.textContent = zone;
            dz.ondragover = e => { e.preventDefault(); dz.classList.add('filled'); };
            dz.ondragleave = e => { dz.classList.remove('filled'); };
            dz.ondrop = e => {
                e.preventDefault();
                dz.classList.remove('filled');
                const dragIdx = e.dataTransfer.getData('text/plain');
                dz.textContent = q.dragItems[dragIdx];
                dz.dataset.value = q.dragItems[dragIdx];
                dragdropContainer.querySelectorAll('.drag-item').forEach(item => item.draggable = false);
                checkAnswerDragDrop();
            };
            dragdropContainer.appendChild(dz);
        });
        q.dragItems.forEach((item, idx) => {
            const di = document.createElement('div');
            di.className = 'drag-item';
            di.textContent = item;
            di.draggable = true;
            di.ondragstart = e => e.dataTransfer.setData('text/plain', idx);
            dragdropContainer.appendChild(di);
        });
    }
}

function checkAnswerSingle(selectedIdx) {
    const chapterQuestions = questions.filter(q => q.chapter === progress.chapter);
    const chapterCurrent = progress.chapterProgress[progress.chapter].current;
    const q = chapterQuestions[chapterCurrent];
    const isCorrect = selectedIdx === q.correct;
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.textContent = "Correct! " + q.explanation;
        feedback.style.color = "green";
        progress.correct++;
    } else {
        feedback.textContent = "Wrong. " + q.explanation;
        feedback.style.color = "red";
        progress.wrong++;
    }
    showFeedbackPopup(isCorrect, q.explanation);
    progress.attempted++;
    unlockAchievements();
    saveProgress();
    document.getElementById('next-btn').style.display = '';
    document.querySelectorAll('input[name="answer"]').forEach(input => input.disabled = true);
}

function checkAnswerMulti(selectedArr) {
    const chapterQuestions = questions.filter(q => q.chapter === progress.chapter);
    const chapterCurrent = progress.chapterProgress[progress.chapter].current;
    const q = chapterQuestions[chapterCurrent];
    const correctSet = new Set(q.correct);
    const selectedSet = new Set(selectedArr);
    const isCorrect = selectedSet.size === correctSet.size && [...correctSet].every(x => selectedSet.has(x));
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.textContent = "Correct! " + q.explanation;
        feedback.style.color = "green";
        progress.correct++;
    } else {
        feedback.textContent = "Wrong. " + q.explanation;
        feedback.style.color = "red";
        progress.wrong++;
    }
    showFeedbackPopup(isCorrect, q.explanation);
    progress.attempted++;
    unlockAchievements();
    saveProgress();
    document.getElementById('next-btn').style.display = '';
    document.querySelectorAll('input[name="answer"]').forEach(input => input.disabled = true);
    document.querySelectorAll('#answers-form button').forEach(btn => btn.disabled = true);
}

function checkAnswerDragDrop() {
    const chapterQuestions = questions.filter(q => q.chapter === progress.chapter);
    const chapterCurrent = progress.chapterProgress[progress.chapter].current;
    const q = chapterQuestions[chapterCurrent];
    const dropZones = document.querySelectorAll('.drop-zone');
    const userAnswers = Array.from(dropZones).map(dz => dz.dataset.value);
    const isCorrect = JSON.stringify(userAnswers) === JSON.stringify(q.correct);
    const feedback = document.getElementById('feedback');
    if (isCorrect) {
        feedback.textContent = "Correct! " + q.explanation;
        feedback.style.color = "green";
        progress.correct++;
    } else {
        feedback.textContent = "Wrong. " + q.explanation;
        feedback.style.color = "red";
        progress.wrong++;
    }
    showFeedbackPopup(isCorrect, q.explanation);
    progress.attempted++;
    unlockAchievements();
    saveProgress();
    document.getElementById('next-btn').style.display = '';
    dropZones.forEach(dz => dz.ondrop = null);
}

document.getElementById('next-btn').addEventListener('click', function() {
    if (!progress.chapterProgress[progress.chapter]) {
        progress.chapterProgress[progress.chapter] = { current: 0 };
    }
    progress.chapterProgress[progress.chapter].current++;
    saveProgress();
    renderQuestion();
});

function unlockAchievements() {
    achievementsList.forEach(a => {
        if (!progress.achievements.includes(a.id) && a.condition(progress)) {
            progress.achievements.push(a.id);
        }
    });
}

function renderAchievements() {
    const ul = document.getElementById('achievements-list');
    ul.innerHTML = '';
    achievementsList.forEach(a => {
        const li = document.createElement('li');
        li.textContent = a.name;
        li.style.color = progress.achievements.includes(a.id) ? 'green' : '#aaa';
        ul.appendChild(li);
    });
}

function renderProgress() {
    document.getElementById('correct-count').textContent = progress.correct;
    document.getElementById('wrong-count').textContent = progress.wrong;
    document.getElementById('attempted-count').textContent = progress.attempted;
}

// Utility: Show popup modal with content
function showModal(html) {
    const modal = document.getElementById('popup-modal');
    const body = document.getElementById('modal-body');
    body.innerHTML = html;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}
function closeModal() {
    const modal = document.getElementById('popup-modal');
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
}
document.getElementById('modal-close').onclick = closeModal;
window.onclick = function(event) {
    const modal = document.getElementById('popup-modal');
    if (event.target === modal) closeModal();
};

// Enhanced feedback: show popup with animation
function showFeedbackPopup(isCorrect, explanation) {
    showModal(`
        <div class="popup-feedback ${isCorrect ? 'correct animated-bounce' : 'wrong animated-shake'}">
            <h2>${isCorrect ? 'Correct!' : 'Incorrect'}</h2>
            <p>${explanation}</p>
        </div>
    `);
    if (isCorrect) launchConfetti();
}

// Simple confetti animation
function launchConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1200);
}

// Initial render
renderStudyGuide();
renderQuestion();
renderSidebar();