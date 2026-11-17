/* =========================================================
   Shared data for "AI Exercises" and "Teacher Zone"
   To add an exercise: copy one block and change the text.
   rubric = optional; if present, the exercise appears in the Teacher Zone.
   All rubrics must add up to 10 points.
   ========================================================= */

const LEVELS = {
  lower:{ tab:"Lower School", sub:"Years 5–7 · A1–A2",
    note:"<b>Teacher-led!</b> In Years 5–7 the teacher operates the AI on the smartboard — students don't need an account. The AI is a 'guest' in the classroom, and the class works with what it produces." },
  middle:{ tab:"Middle School", sub:"Years 8–10 · A2–B1",
    note:"<b>Guided use.</b> Students work with a school-approved tool and a prompt from the teacher. Focus: feedback, fact-checking, speaking practice — and then showing what they can do on their own." },
  upper:{ tab:"Upper School", sub:"Years 11–12 · B2–C1",
    note:"<b>Critical &amp; independent.</b> Students use AI as a sparring partner and analyse its output: arguments, bias, omissions, register. They always hand in their chat log." }
};

const EX = {
  lower:[
    { id:"robot", emo:"🤖", title:"Interview a Robot", time:"45 min", skill:"Speaking · Questions", light:"y", lead:"teacher",
      mission:"Robby the Robot from London is visiting our class! Ask him questions — but be careful: Robby makes a mistake in every answer.",
      steps:["Work with a partner and write 5 questions for Robby (Where…? What…? Do you…?).","Read your questions out loud — your teacher types them in.","Listen carefully: when Robby makes a mistake, shout STOP! and correct it.","Write 3 sentences about Robby."],
      handin:"5 questions, Robby's mistakes with corrections, 3 sentences about Robby",
      who:"teacher",
      prompt:`You are Robby, a friendly robot who lives in London. You are talking to 11-year-old German children who are learning English.
- Use only very simple English (A1), short sentences, simple present.
- Answer every question in 2–3 sentences.
- Put exactly ONE small grammar mistake in every answer (e.g. "he go" instead of "he goes"), so the children can find it.
- Be funny and kind. Never ask for personal information.`,
      rubric:[
        {c:"Questions", d:"5 correct questions (question word, word order, do/does) — 1 point each", max:5, step:1},
        {c:"Robot mistakes", d:"3 of Robby's mistakes found and corrected — 1 point each", max:3, step:1},
        {c:"Mini-text 'Robby is…'", d:"3 correct sentences with information from the interview", max:2, step:0.5}],
      assess:"Collect the worksheets after the lesson. Mistakes count only if they are found AND corrected.",
      tip:"Let a student 'be the AI' afterwards: they answer as Robby — with a planted mistake for the class to find." },

    { id:"story", emo:"🕵️", title:"Fix the Story", time:"30 min", skill:"Grammar · Simple past", light:"y", lead:"teacher",
      mission:"The AI wrote a story about a school trip to the zoo — but it can't do irregular verbs! Become a grammar detective.",
      steps:["Read the story carefully.","Underline every wrong verb form (there are 10!).","Write the correct form above it.","Compare with your partner.","Bonus: write two more sentences for the story — without mistakes!"],
      handin:"The corrected story",
      who:"teacher",
      prompt:`Write a short story (80–100 words) for Year 6 learners of English (A2) about a school trip to the zoo.
- Use the simple past.
- Include exactly 10 mistakes with irregular verbs (e.g. "goed" instead of "went", "eated" instead of "ate").
- Use only simple vocabulary.
After the story, give me a separate answer key with all 10 mistakes and their corrections.`,
      rubric:[
        {c:"Mistakes found", d:"10 wrong verb forms identified — 0.5 points each", max:5, step:0.5},
        {c:"Mistakes corrected", d:"Correct simple past form written — 0.5 points each", max:5, step:0.5}],
      assess:"Works well as a short test: generate a NEW story for the test so nobody can learn the answers by heart.",
      tip:"Always check the AI's answer key — chatbots sometimes miscount their own mistakes. 😉" },

    { id:"monster", emo:"👾", title:"Monster Maker", time:"45 min", skill:"Writing · Describing", light:"y", lead:"teacher",
      mission:"Invent your own monster and describe it so well that the AI artist can draw it exactly!",
      steps:["Write a description of your monster: at least 6 details (body, colours, size, special features).","Use have got / has got and lots of adjectives.","Your teacher gives some descriptions to the AI artist.","Compare: does the picture match the text? What was missing?","Improve your text."],
      handin:"Version 1 and your improved version 2",
      who:"teacher",
      prompt:`Create a colourful, friendly cartoon picture of a monster for children. Draw it EXACTLY as described here — do not add anything that is not in the description:
[paste student description here]`,
      rubric:[
        {c:"Content", d:"At least 6 clear details (body parts, colours, size, special features)", max:4, step:0.5},
        {c:"Language", d:"have got / has got, adjectives, plural forms used correctly", max:4, step:0.5},
        {c:"Improvement", d:"Text revised after comparing it with the picture", max:2, step:0.5}],
      assess:"Assess version 2 — the improvement step is part of the grade.",
      tip:"Great message for kids: 'The AI only knows what you tell it.' Precise language = better results." },

    { id:"riddle", emo:"❓", title:"Riddle Time", time:"30–45 min", skill:"Reading · Writing", light:"y", lead:"teacher",
      mission:"The AI has written riddles about animals. Can you guess them? Then write your own riddle for the class!",
      steps:["Read the AI riddles and guess the animals.","Underline the words that helped you.","Write your own riddle with 5 clues (It has got… It can… It lives…).","Swap riddles with your classmates — can they guess yours?"],
      handin:"Your own riddle",
      who:"teacher",
      prompt:`Write 5 riddles about animals for Year 5 learners of English (A1).
Each riddle has 4 short sentences, for example: "It has got … It can … It lives … It likes …"
Use only simple present and very easy words. Put the answers at the end.`,
      rubric:[
        {c:"Clues", d:"5 clear, logical clues that lead to the animal", max:4, step:0.5},
        {c:"Language", d:"has got / can / lives / likes used correctly, 3rd person -s", max:4, step:0.5},
        {c:"Presentation", d:"Riddle read out clearly to the class", max:2, step:0.5}],
      assess:"Ideal as a short creative task — the presentation can also be assessed during the 'riddle swap'.",
      tip:"Make a class riddle book out of the students' riddles — great for Open Day!" },

    { id:"chain", emo:"⛓️", title:"Story Chain", time:"20 min", skill:"Writing · Creativity", light:"y", lead:"teacher",
      mission:"Write a crazy story together with the AI — one sentence from the class, one sentence from the AI!",
      steps:["The class decides on the first sentence.","The AI writes the next sentence.","A student continues with the next sentence — and so on.","At the end, everyone draws a picture of their favourite part."],
      handin:"Nothing — just have fun! (Optional: your drawing)",
      who:"teacher",
      prompt:`Let's write a story together for 11-year-old learners of English (A1–A2). We take turns: I write one sentence, then you write ONE sentence only.
Use simple past and simple words. Make the story funny and a little bit surprising. Wait for my next sentence every time.
Our first sentence is: "[first sentence from the class]"`,
      tip:"Perfect warm-up or Friday-afternoon activity. Change the setting each time: space, jungle, school…" }
  ],

  middle:[
    { id:"feedback", emo:"🔁", title:"The Feedback Loop", time:"2 lessons", skill:"Writing · Revising", light:"y",
      mission:"Write a blog post, get tips from the AI — and make your text even better. But careful: the AI must not write for you!",
      steps:["Write your first draft (150–200 words) — without AI.","Paste your draft into the AI with the prompt from your teacher.","Decide which tips are useful.","Write version 2 yourself and highlight your changes.","Write 3 sentences: Which tips did you use — and why?"],
      handin:"Version 1, version 2 (changes highlighted), reflection, AI note",
      who:"students",
      prompt:`I am a Year 9 student in Germany (English level B1). Here is my blog post.
Please do NOT rewrite my text and do NOT give me corrected sentences.
Instead give me:
1. Three things I did well.
2. Three concrete tips to improve my text (grammar, vocabulary or structure). Explain each tip in one simple sentence and tell me where in the text the problem is.

My text:
[paste text here]`,
      rubric:[
        {c:"Final text: content", d:"Task fulfilled, ideas developed, suitable for a blog", max:3, step:0.5},
        {c:"Final text: language", d:"Range and accuracy of vocabulary and grammar", max:3, step:0.5},
        {c:"Revision", d:"Clear, meaningful changes between version 1 and 2", max:2, step:0.5},
        {c:"Reflection", d:"Explains which tips were used or rejected — and why", max:2, step:0.5}],
      assess:"Grade the revision process, not the first draft — this takes the pressure off and makes cheating pointless.",
      tip:"Let students write version 1 in class (RED) — then you know it's really theirs." },

    { id:"factcheck", emo:"🔍", title:"Fact-Check the Bot", time:"45–60 min", skill:"Reading · Media literacy", light:"g",
      mission:"The AI wrote a text about Australia — but 3 facts are FALSE! Find them like a real journalist.",
      steps:["Number the 10 facts in the text.","Check each fact with at least 2 reliable sources.","Mark each fact TRUE or FALSE.","Correct the false facts.","Write down your sources."],
      handin:"Fact list with TRUE/FALSE, corrections and sources",
      who:"teacher",
      prompt:`Write an informative text of about 150 words about Australia for Year 8 students (B1).
The text must contain exactly 10 facts: 7 true facts and 3 false facts that sound believable.
Do NOT mark which facts are false.
After the text, give me (the teacher) a separate list of the 3 false facts with the correct information.`,
      rubric:[
        {c:"Claims judged", d:"10 claims correctly marked true/false — 0.5 points each", max:5, step:0.5},
        {c:"Sources", d:"Reliable sources named for each check (not just 'Google')", max:3, step:0.5},
        {c:"Corrections", d:"False facts corrected in correct English", max:2, step:0.5}],
      assess:"Works with any country or topic from your textbook unit.",
      tip:"Discuss afterwards: What makes a source reliable? Students become wonderfully sceptical. 🧐" },

    { id:"roleplay", emo:"🎭", title:"Role-Play Rehearsal", time:"2 lessons", skill:"Speaking", light:"y",
      mission:"Practise a difficult conversation with the AI — then perform it live with a partner. No AI on stage!",
      steps:["Collect useful phrases (I'm afraid…, Would it be possible…?).","Practise the conversation with the AI (chat).","Write down 3 new phrases you learned.","Perform the role-play live with a partner — traffic light RED!"],
      handin:"Your phrase list + live performance",
      who:"students",
      prompt:`Let's do a role-play. You are a receptionist at a hotel in Brighton. I am a guest with a problem with my room.
- Speak B1-level English.
- Ask me questions and be a little bit difficult, but polite.
- Only answer as the receptionist, one turn at a time.
- After 8 turns, stop the role-play and tell me 3 useful phrases I could have used.`,
      rubric:[
        {c:"Task fulfilment", d:"Problem explained clearly, solution negotiated", max:3, step:0.5},
        {c:"Language", d:"Range and accuracy, polite phrases, suitable register", max:3, step:0.5},
        {c:"Fluency & pronunciation", d:"Speaks freely with few long pauses, understandable", max:2, step:0.5},
        {c:"Interaction", d:"Reacts to partner, asks back, keeps the conversation going", max:2, step:0.5}],
      assess:"Only the live performance is graded (RED). The AI practice is YELLOW.",
      tip:"Change the situation: shop, restaurant, lost-property office, doctor's surgery…" },

    { id:"vocab", emo:"🧠", title:"Vocab Coach", time:"15 min", skill:"Vocabulary", light:"g",
      mission:"Your personal vocabulary coach! The AI quizzes you on the words of the unit — as often as you like.",
      steps:["Copy the word list of the unit into the AI with the prompt.","Answer the questions one by one.","Write down the words you didn't know.","Repeat the quiz with only those words."],
      handin:"Your list of 'tricky words'",
      who:"students",
      prompt:`Be my English vocabulary coach. I am in Year 8 (A2–B1).
Here is my word list: [paste words here]
Quiz me on ONE word at a time: give me an English example sentence with a gap OR a German translation, and I answer.
Tell me if I was right, give a short tip if I was wrong, then continue. After 15 words, show me the words I got wrong.`,
      tip:"Great for homework and revision before tests — the AI never gets tired of asking. 😄" },

    { id:"style", emo:"🎩", title:"Style Switch", time:"45 min", skill:"Writing · Register", light:"y",
      mission:"Formal or informal? The AI writes the same message in two styles. Find the differences — then write your own formal email.",
      steps:["Read the two AI messages (to a friend / to a company).","Collect the differences in a table: greeting, words, contractions, ending.","Write your own formal email (e.g. asking for information about a summer camp) — without AI.","Check your email with the table."],
      handin:"Difference table + your formal email",
      who:"teacher",
      prompt:`Write the same message in two versions for Year 9 learners (B1):
Version A: an informal text message to a friend about a summer camp in Canada.
Version B: a formal email to the summer camp, asking for information (dates, prices, activities).
Each version about 80 words. Do not explain the differences.`,
      rubric:[
        {c:"Difference table", d:"At least 5 correct features of formal vs informal language", max:3, step:0.5},
        {c:"Formal email: content & form", d:"Greeting, reason for writing, questions, closing", max:3, step:0.5},
        {c:"Formal email: language", d:"Formal register, no contractions, polite phrases, accuracy", max:4, step:0.5}],
      assess:"The email is written in class (RED); the table can be prepared in pairs.",
      tip:"Follow-up: students write a version C — an email to a teacher. Where does it fit?" }
  ],

  upper:[
    { id:"argue", emo:"🥊", title:"Argue with the Machine", time:"2–3 lessons", skill:"Writing · Argumentation", light:"g",
      mission:"Use the AI as your debate opponent: get its strongest counterarguments — and destroy them with your rebuttals.",
      steps:["Choose your position on the topic.","Get 3 counterarguments from the AI.","Write a rebuttal for each and let the AI evaluate your logic.","Write your comment (approx. 350 words) — without AI.","Attach the complete chat log."],
      handin:"Comment + chat log + AI note",
      who:"students",
      prompt:`Act as my debate opponent. The motion is: "The USA should ban assault weapons."
I argue FOR the motion.
1. Give me your 3 strongest counterarguments, each in 2–3 sentences, in formal English (C1).
2. Then wait for my rebuttal.
3. After my rebuttal, evaluate its logic: Is it convincing? What is weak? Do NOT write a better rebuttal for me.`,
      rubric:[
        {c:"Content & argumentation", d:"Position clear, counterarguments addressed and convincingly refuted, examples", max:4, step:0.5},
        {c:"Language", d:"Range, accuracy, formal register, argumentative phrases", max:4, step:0.5},
        {c:"Structure & coherence", d:"Introduction, logical development, conclusion, linking words", max:2, step:0.5}],
      assess:"The chat log shows the thinking process — and makes copy & paste quite obvious.",
      tip:"Works with any topic: the American Dream, social media, immigration, climate…" },

    { id:"summary", emo:"⚖️", title:"Summary Showdown", time:"1–2 lessons", skill:"Reading · Text analysis", light:"y",
      mission:"Is an AI summary really enough? Compare it with the original text and find out what the AI leaves out.",
      steps:["Read the original text and the AI summary.","Mark omissions, distortions and changes in tone — with line references.","Write your own, better summary.","Discuss: Can AI summaries replace reading?"],
      handin:"Annotated AI summary + your own summary",
      who:"teacher",
      prompt:`Summarise the following text in about 120 words for an English A-level class.

[paste text here]`,
      rubric:[
        {c:"Analysis of the AI summary", d:"Omissions, distortions and shifts in tone identified with evidence from the text", max:4, step:0.5},
        {c:"Own summary", d:"Accurate, concise, focus on main points, own words", max:4, step:0.5},
        {c:"Language", d:"Precise, appropriate analytical vocabulary, accuracy", max:2, step:0.5}],
      assess:"Especially good with literary texts — AI often misses irony, tone and subtext.",
      tip:"Try it with a chapter of your class reading (e.g. The Hate U Give)." },

    { id:"mediation", emo:"🌉", title:"Mediation Lab", time:"2 lessons", skill:"Mediation · German → English", light:"y",
      mission:"Why is 'just translating' not enough? Mediate a German article for an American exchange student — and beat the AI.",
      steps:["Write your own mediation (email to Jake, 17, from the USA) — without AI.","Compare it with an AI translation AND an AI mediation.","Annotate: addressee, purpose, selection of information, cultural explanations, register.","Write a short evaluation (5–6 sentences)."],
      handin:"Your mediation + annotated comparison + evaluation",
      who:"teacher",
      prompt:`Step 1: Translate this German article into English.
Step 2: Now rewrite it as an email (about 200 words) to Jake, a 17-year-old American exchange student who will come to our school next month. Only include information that is relevant for him and explain things he might not know about German schools.

[paste German article here]`,
      rubric:[
        {c:"Own mediation: task & addressee", d:"Relevant information selected, adapted to addressee and purpose, cultural explanations", max:4, step:0.5},
        {c:"Own mediation: language", d:"Range, accuracy, appropriate email register", max:4, step:0.5},
        {c:"Critical comparison", d:"Differences between translation, AI mediation and own text clearly evaluated", max:2, step:0.5}],
      assess:"Perfect preparation for the mediation task in the Abitur.",
      tip:"Show the pure translation first — students quickly see why it misses the task." },

    { id:"speech", emo:"🎤", title:"Speech Lab", time:"2 lessons", skill:"Analysis · Rhetoric", light:"y",
      mission:"The AI wrote a political speech full of rhetorical tricks. Analyse them — then write a speech that is even more convincing.",
      steps:["Read the AI speech and identify at least 6 rhetorical devices.","Explain the effect of each device on the audience.","Write your own short speech (approx. 250 words) on the same topic — without AI.","Present it to the class."],
      handin:"Analysis grid + your own speech",
      who:"teacher",
      prompt:`Write a 300-word speech by a fictional US politician to high school students about the topic "[topic, e.g. voting at 16]".
Use at least 8 different rhetorical devices (e.g. anaphora, rhetorical question, tricolon, alliteration, appeal to emotion, inclusive "we", contrast, metaphor).
Do NOT name or mark the devices. After the speech, give me (the teacher) a list of all devices with quotes.`,
      rubric:[
        {c:"Analysis", d:"At least 6 devices identified correctly with quotes", max:3, step:0.5},
        {c:"Effect", d:"Function and effect on the audience convincingly explained", max:3, step:0.5},
        {c:"Own speech", d:"Convincing, addressee-oriented, devices used purposefully, language accuracy", max:4, step:0.5}],
      assess:"The analysis can be done in pairs; the own speech is written individually (RED).",
      tip:"Compare with a real speech afterwards — what does a human speaker do differently?" },

    { id:"exam", emo:"🎓", title:"Exam Coach", time:"flexible", skill:"Abitur training", light:"g",
      mission:"Train for your exam with your personal AI coach: it creates tasks on a text and gives you feedback on your answers.",
      steps:["Paste a text from class into the AI with the prompt.","Answer the comprehension and analysis questions yourself.","Read the feedback and improve one answer.","Bring your questions to the next lesson."],
      handin:"Nothing — this is your private training! 💪",
      who:"students",
      prompt:`I am preparing for my English Abitur (advanced course, Germany, B2–C1).
Here is a text: [paste text here]
1. Create 3 tasks like in the exam: comprehension (summary), analysis (e.g. stylistic devices), evaluation/comment.
2. Wait for my answer to each task.
3. Give me feedback on content, language and structure — with concrete tips, but do NOT write a model answer unless I ask for one.`,
      tip:"Remind students: the coach is great for practice — in the exam itself the light is always RED." }
  ]
};

const LIGHT = { g:["g","🟢 AI allowed"], y:["y","🟡 AI for some steps"], r:["r","🔴 No AI"] };

function fmt(n){ return (Math.round(n*10)/10).toString().replace(".", ","); }
function copyText(text, btn){
  const done = ()=>{ const o=btn.textContent; btn.textContent="Copied! ✓"; setTimeout(()=>btn.textContent=o,1500); };
  if(navigator.clipboard && window.isSecureContext){ navigator.clipboard.writeText(text).then(done).catch(()=>fb()); } else fb();
  function fb(){ const ta=document.createElement("textarea"); ta.value=text; ta.style.position="fixed"; ta.style.opacity="0";
    document.body.appendChild(ta); ta.select(); try{document.execCommand("copy"); done();}catch(e){} document.body.removeChild(ta); }
}
function renderTabs(el, current, onPick){
  el.innerHTML = "";
  Object.entries(LEVELS).forEach(([k,v])=>{
    const b = document.createElement("button");
    b.className="tab"; b.setAttribute("role","tab"); b.setAttribute("aria-selected", k===current);
    b.innerHTML = `${v.tab}<small>${v.sub}</small>`;
    b.onclick = ()=>onPick(k);
    el.appendChild(b);
  });
}
