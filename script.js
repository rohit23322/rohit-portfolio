// Simple keyword chatbot (runs fully in the browser, no API needed).
// To make it a real AI chatbot, replace reply() with a fetch() to your own backend (e.g. a FastAPI endpoint that calls an LLM API).
const KB=[
[/skill|tech|strong|stack/,"Rohit's strongest skills: Python, FastAPI, Flask, REST APIs, JWT authentication, MySQL/PostgreSQL with SQLAlchemy, plus web scraping (BeautifulSoup, Scrapy) and data work with Pandas. He also knows Java, JavaScript, SQL, Git, Postman, Docker basics, Pytest and Linux."],
[/project|built|build|best/,"Projects: Fast Box Delivery System (FastAPI, JWT roles for customers/agents/admins), Real-Time Chat backend, Job Portal REST API, E-Commerce REST API, House Price Prediction (ML) and a Book Web Scraper that saves to MySQL."],
[/experience|intern|work|cognifyz|job/,"Rohit is a Python Developer Intern at Cognifyz IT Solutions (since 08/2026): web scraping, data cleaning with Pandas, visualisation, automation, MySQL storage and CSV/JSON export, using OOP and Git/GitHub."],
[/educat|study|degree|bca|mca|college|certif/,"Education: BCA from Ajeenkya DY Patil University (2022-2025) and MCA at DIMR (2025-present). Certifications: Python, SQL, AWS Cloud Fundamentals, Machine Learning Fundamentals."],
[/contact|email|phone|reach|hire|linkedin|github/,"Contact Rohit at khomanerohit66@gmail.com or +91 8767360241. GitHub: github.com/rohit23322, LinkedIn: linkedin.com/in/rohit-khomane-3036ba294."],
[/hello|hi\b|hey/,"Hi! Ask me about Rohit's skills, projects, experience, education or contact details."]];
function reply(q){q=q.toLowerCase();for(const [r,a] of KB)if(r.test(q))return a;return "I can answer about Rohit's skills, projects, experience, education or contact details. For anything else, email khomanerohit66@gmail.com."}
const log=document.getElementById('log'),inp=document.getElementById('inp');
function add(t,c){const d=document.createElement('div');d.className='m '+c;d.textContent=t;log.appendChild(d);log.scrollTop=log.scrollHeight}
function ask(q){if(!q.trim())return;inp.value='';add(q,'u');setTimeout(()=>add(reply(q),'b'),400)}
document.getElementById('send').onclick=()=>ask(inp.value);inp.onkeydown=e=>{if(e.key==='Enter')ask(inp.value)};
document.querySelectorAll('.q button').forEach(b=>b.onclick=()=>ask(b.textContent));