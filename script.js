const chat=document.getElementById('chat');const form=document.getElementById('chat-form');const input=document.getElementById('user-input');
const answers=[
  {keys:['about','who','saumy'],text:"Saumy Shah is a B.Tech Artificial Intelligence & Machine Learning student focused on software engineering, DSA and practical AI systems."},
  {keys:['project','built','work'],text:"Saumy has worked on a Student Management System using Java + MySQL, FleetSync for fleet operations, and this AI-first Smart Portfolio."},
  {keys:['skill','technology','tech','language'],text:"Core skills include Python, Java, C/C++, JavaScript, React.js, HTML/CSS, SQL/MySQL, Git/GitHub, DSA and Machine Learning."},
  {keys:['career','goal','job','future'],text:"His goal is to grow into an AI/ML Engineer and eventually an AI-focused technical leader, while building strong software engineering fundamentals."},
  {keys:['education','college','degree'],text:"He is pursuing a B.Tech in Artificial Intelligence & Machine Learning and is currently building projects alongside coursework in DSA, OOP, DBMS and ML fundamentals."},
  {keys:['contact','email','hire','internship'],text:"For internships, collaborations or projects, use the Get in touch button in the Contact section or connect through GitHub."}
];
function addMessage(text,user=false){const row=document.createElement('div');row.className='message'+(user?' user':'');row.innerHTML=`<div class="avatar">${user?'Y':'S'}</div><div><span class="bubble"></span><div class="time">Just now</div></div>`;row.querySelector('.bubble').textContent=text;chat.appendChild(row);chat.scrollTop=chat.scrollHeight}
function respond(q){const lower=q.toLowerCase();const found=answers.find(a=>a.keys.some(k=>lower.includes(k)));return found?found.text:"I can help with Saumy's about, projects, skills, education, career goals or contact details. Try asking: “What projects has Saumy built?”"}
function ask(q){if(!q.trim())return;addMessage(q,true);setTimeout(()=>addMessage(respond(q)),350)}
form.addEventListener('submit',e=>{e.preventDefault();ask(input.value);input.value=''});document.querySelectorAll('.quick-actions button').forEach(b=>b.addEventListener('click',()=>ask(b.dataset.question)));
