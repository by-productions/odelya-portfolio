/* =============== CAPABILITY STATES =============== */
const STATES = [
  {eye:"Creative Technologist", title:"אודליה חסן",
   desc:"22 מערכות וחוויות דיגיטליות באוויר — הרשמות לאלף עובדים, חידונים ל-500 משתתפים בו-זמנית, ומה שביניהם. גללו.", hue:200},
  {eye:"01 / 06 — Frontend & Deploy", title:"Frontend & Deploy",
   desc:"HTML · CSS · JavaScript, ופריסה חיה לפרודקשן ב-Vercel ו-GitHub Pages. הכול עולה לאוויר בעצמי.", hue:188},
  {eye:"02 / 06 — Logic & Systems", title:"לוגיקה ומערכות",
   desc:"ניתוב מותנה, אימות משתמשים, ניהול state וקונפליקטים — מערכות אמיתיות, לא רק טפסים.", hue:214},
  {eye:"03 / 06 — Automation", title:"אוטומציה",
   desc:"Google Sheets ו-Apps Script כ-backend: תזכורות, תעודות מעוצבות וזימונים שנשלחים לבד.", hue:250},
  {eye:"04 / 06 — Creative Dev", title:"Creative Dev",
   desc:"Scroll-driven animation, מיקרו-אינטראקציות וחוויות שגורמות לטכנולוגיה להרגיש, לא רק לעבוד.", hue:282},
  {eye:"05 / 06 — Artificial Intelligence", title:"AI",
   desc:"AI הוא המאיץ שלי, לא הקביים: בניתי אוטומציות עוד לפני העידן הזה, ולכן אני יודעת לזהות מתי הוא טועה ואיך לבנות נכון יותר.", hue:318},
  {eye:"06 / 06 — Real-time & UX", title:"Real-time & UX",
   desc:"מערכות שמחזיקות מאות משתמשים בו-זמנית, עם חוויית משתמש שנעים לעבוד בה.", hue:166},
];
const NSTATES = STATES.length;

/* =============== PROJECT DATA =============== */
const CATS = [
  {id:"all",  label:"הכל",                  en:""},
  {id:"exp",  label:"חוויות אינטראקטיביות",  en:"Interactive"},
  {id:"reg",  label:"מערכות הרשמה",          en:"Registration"},
  {id:"plat", label:"פלטפורמות ניהול",       en:"Platforms"},
  {id:"pres", label:"פרזנטציות",             en:"Presentations"},
  {id:"game", label:"חידונים ומשחקים",       en:"Games"},
  {id:"biz",  label:"אתרים עסקיים",          en:"Brand Sites"},
];
const PROJECTS = [
  {cat:"exp", title:"Raz — אתר תכשיטים", url:"https://raz-mocha.vercel.app/",
   desc:"רציתי שהתכשיט יסתובב וייכנס לקופסה תוך כדי הגלילה. יצרתי סרטון, פירקתי לפריימים וקשרתי אותם לתנועת העמוד — הגלילה עצמה מריצה את הסרטון.",
   tags:["Scroll Animation","Frame Sync","Creative Dev"]},
  {cat:"exp", title:"AbbVie — צלילה לאוקיינוס", url:"https://abbvie-phi.vercel.app/",
   desc:"חוויית גלילה אל מעמקי האוקיינוס: חיות זוהרות, בועות שנוצרות מהעכבר, וג'ינגל מקורי שכתבתי במיוחד לאירוע. הרשמה שהיא חוויה.",
   tags:["Interactive","Custom Audio","Registration"]},
  {cat:"reg", title:"FIREFLY — נופש עובדים", url:"https://firefly-ten-silk.vercel.app/",
   desc:"המערכת המורכבת שלי: אימות מספר עובד מול דאטהבייס של כ-1,010 עובדים, ניתוב אוטומטי לשני מסלולי נופש, ובחירת שותפים לחדר (כולל שלישיות) עם עדכון רשימות בזמן אמת. נבנתה ביומיים — כ-89% השלימו הרשמה.",
   tags:["Auth","Conditional Routing","State"]},
  {cat:"reg", title:"signYAEL40 — הרשמה למסז'ים", url:"https://by-productions.github.io/signYAEL40/",
   desc:"שיבוץ לפי סלוטים פנויים בזמן אמת לכל מטפל/ת, עם תזכורות אוטומטיות למייל וניהול מלא ב-Google Sheets מאחור.",
   tags:["Real-time Slots","Email Automation","Sheets"]},
  {cat:"reg", title:"Celcom — עולים לכיתה א'", url:"https://by-productions.github.io/celcom-grade1-event/",
   desc:"הרשמה לילדים, ואוטומציה שלפי מה שכל אחד מילא מפיקה תעודה מעוצבת ואישית — מוכנה להדפסה באירוע.",
   tags:["Automation","Certificates","Print"]},
  {cat:"reg", title:"Tzamal — אירוע בחו\"ל", url:"https://tzamal-rsvp.vercel.app/",
   desc:"הרשמה עם איסוף פרטי דרכון, מידע על היעד והאולם, ושיבוץ חדרים לפי דאטהבייס העובדים.",
   tags:["Passport Data","Room Assignment"]},
  {cat:"reg", title:"CSL — הרשמה דו-לשונית", url:"https://csl-andembry-event.vercel.app/",
   desc:"אתר הרשמה בצבעי המותג עם כפתור החלפת שפה (עברית/אנגלית), וזימון שנשלח אוטומטית לכל נרשם.",
   tags:["Bilingual","Auto-invite","Brand"]},
  {cat:"reg", title:"Abbott — שיבוץ עיסויים", url:"https://by-productions.github.io/ABBOTTchill-feel/",
   desc:"שיבוץ לעיסויים בסלוטים של 15 דקות על פני 4 עמדות — 48 מקומות שמתנהלים לבד לאורך כל הבוקר.",
   tags:["Slot Scheduling","Registration"]},
  {cat:"reg", title:"Confusion — הרשמה קונספטואלית", url:"https://by-productions.github.io/ConfusionRegistration/",
   desc:"אתר הרשמה שעוצב במלואו לפי הקונספט של האירוע CONFUSION — חוויה, לא טופס.",
   tags:["Concept Design","Registration"]},
  {cat:"plat", title:"מערכת מחסן", url:"https://by-warehouse-app.vercel.app/",
   desc:"מערכת שלמה לצוות תערוכות של 15 איש: קטלוג של כ-160 פריטים עם תמונות, שריון לפי תאריכים, מפת מחסן ויזואלית, לוח אירועים, ניהול משימות ודוחות. החליפה עשרות קבצי Word מנותקים במקור מידע מסונכרן אחד.",
   tags:["Full System","Inventory","Reports"]},
  {cat:"plat", title:"סדנת איקה זהר — מערכת מלאה", url:"https://sadna-ikasohar.vercel.app/",
   desc:"מערכת רב-משתמשית לכ-140 תלמידים, חמישה מורים והנהלה: אתר ציבורי, פאנל ניהול, פלטפורמת מורים ולמידת טקסט בע\"פ. כל שינוי בלו\"ז מתעדכן באתר בזמן אמת.",
   tags:["Multi-role","Full Platform","LMS"]},
  {cat:"plat", title:"tanach — ריווחיות וניהול", url:"https://tanach-app-gilt.vercel.app/",
   desc:"פלטפורמת ניהול למחלקת תוכן: עיבוד דוחות Priority, הצגת הכנסות, הוצאות, התחייבויות ספקים ורווחיות לפי חודש ולקוח. Monday או Asana — אבל תפור בדיוק לצרכים שלנו.",
   tags:["Project Mgmt","Budgeting","Gantt"]},
  {cat:"plat", title:"producersDB — דשבורד מפיק-לקוח", url:"https://by-productions.github.io/producersDB/",
   desc:"גאנט משותף דו-צדדי: צד למפיק וצד ללקוח, לניהול משימות וסבבי אישורים — עם כניסה מוגנת בסיסמה וקישור ייחודי.",
   tags:["Dashboard","Access Control","Portal"]},
  {cat:"plat", title:"ניהול קאסטים בתיאטרון", url:"https://ik-agiborot.vercel.app/",
   desc:"ניהול קאסטים להצגה + תחרות מכירת כרטיסים. חיפוש לפי שם שחקן כדי לראות איפה כל אחד מופיע ובאיזה תפקיד.",
   tags:["Cast Mgmt","Search","Theater"]},
  {cat:"pres", title:"FIREFLY — מצגת קונספט", url:"https://by-productions.github.io/FIREFLY/",
   desc:"מסך מלא גחליליות ותמונות AI: מהדמיית מיתוג במסיבת בריכה ועד מופע רחפנים — אורות בודדים שהופכים לאור אחד גדול.",
   tags:["Concept","AI Imagery","Immersive"]},
  {cat:"pres", title:"ALUG — כניסה לאולם", url:"https://by-productions.github.io/ALOGframingthefuture/",
   desc:"פרזנטציה אינטראקטיבית: לוחצים על תמונה של חוץ האולם ונכנסים פנימה, שכבה אחר שכבה, עם הדמיות מהאירוע.",
   tags:["Interactive","Spatial"]},
  {cat:"pres", title:"Veople — טלפון במרכז", url:"https://veople-by-presentation.vercel.app/",
   desc:"פרזנטציה שבמרכזה טלפון נייד, והתוכן בתוכו מתחלף לפי השקף. מוגנת בסיסמה.",
   tags:["Device Mockup","Presentation"]},
  {cat:"pres", title:"Shlomo — מצגת ממותגת", url:"https://by-productions.github.io/SHLOMO/",
   desc:"אותה שפה חזותית של FIREFLY, מותאמת לחברה אחרת — הדמיות אירוע עם אלמנטים ממותגים.",
   tags:["Concept","Branded"]},
  {cat:"pres", title:"Shlomood — אתר פרזנטציה", url:"https://shlomood.vercel.app/",
   desc:"אתר פרזנטציה מעוצב לפי הקונספט, עם הדמיות תואמות וג'ינגל מוטמע.",
   tags:["Concept","Audio"]},
  {cat:"game", title:"אתר חידון לאירועים", url:"https://quiz-app-self-phi-68.vercel.app/",
   desc:"מערכת חידונים מלאה בזמן אמת: התחברות ב-QR, מסכי מנחה ומשתתפים מסונכרנים, תשובות חיות ודירוג סופי. נבנתה בכ-3 ימי עבודה, שימשה שני אירועים עם 70 משתתפים חיים ותוכננה לעד 500 בו-זמנית.",
   tags:["Real-time","500 users","QR"]},
  {cat:"game", title:"Shot Hunter — משחק לצלמים", url:"https://by-shot-hunter.vercel.app/",
   desc:"הפכתי צ'ק-ליסט למשחק: פלטפורמה שמוודאת שהצלמים באירוע תפסו כל שוט שאנחנו צריכים.",
   tags:["Gamification","Events"]},
  {cat:"biz", title:"Must Create — סדנאות אמנות", url:"https://must-create.vercel.app/",
   desc:"אתר לעסק סדנאות אמנות, עם חוויית UI משחקית ואלמנטים עיצוביים מעולם האמנות.",
   tags:["Brand Site","Playful UI"]},
];

/* =============== EXPERIENCE DATA =============== */
const EXPERIENCE = [
  {when:"Apr 2022 — Present", org:"B.Y Productions & Creative",
   role:"מפיקת תוכן · Creative Technologist & Digital Solutions Specialist",
   bullets:[
     "אפיון ובנייה עצמאית של פתרונות דיגיטליים לחברה וללקוחותיה: פלטפורמות הרשמה, כלים פנימיים, דשבורדים, מערכות אינטראקטיביות ואתרי פיץ' חווייתיים.",
     "בניית FIREFLY — פלטפורמת הרשמה לנופש חברה — ביומיים, עבור כ-1,010 עובדים: אימות, ניתוב מותנה, שיבוץ חדרים ואישורים אוטומטיים. כ-89% השלימו הרשמה.",
     "פלטפורמת חידונים ממותגת בזמן אמת (QR, מסכים מסונכרנים, דירוג חי) — נבנתה בכ-3 ימים, תוכננה ל-500 משתמשים בו-זמנית.",
     "מערכת תפעול מחסן לצוות של 15: כ-160 פריטי מלאי, שריונים, מפות אחסון, אירועים, משימות ודוחות — במקום עשרות קבצים מנותקים.",
     "פלטפורמת רווחיות וניהול פרויקטים לצוות תוכן: עיבוד דוחות Priority והצגת הכנסות, הוצאות ורווח לפי חודש ולקוח.",
     "פיתוח קונספטים ותוכן לאירועים, פרזנטציות אינטראקטיביות, תסריטים, ימי צילום, הדמיות AI וניהול סדרי עדיפויות מחלקתיים.",
   ]},
  {when:"Jan — Apr 2022", org:"PURPLE & Rezume", role:"מנהלת משרד",
   note:"כספים, רכש, קליטת עובדים, גיוס, חוויית עובד ודוחות תקציב."},
  {when:"2020 — 2021", org:"Octally Integration", role:"מנהלת משרד",
   note:"תפעול, כספים, ספקים, Priority, גבייה ודיגיטציה של תהליכים אדמיניסטרטיביים."},
  {when:"2018 — 2022", org:"Landwer Coffee", role:"אחראית משמרת",
   note:"שיבוץ צוותים, תפעול חי, שירות לקוחות וניהול קופה."},
  {when:"2012 — היום", org:"סדנת התיאטרון של איקה זהר", role:"מנהלת הפקה ורכזת הסדנה",
   note:"לוגיסטיקת הפקות לקאסטים של עד 80 משתתפים, עוזרת במאי, ניהול במה ולו\"ז — במקביל לכל השאר, עד היום."},
];

const CORE_SKILLS = [
  "אפיון פתרונות ומיפוי תהליכים","כלים פנימיים ומערכות עסקיות","אוטומציות ואינטגרציות",
  "UX/UI","ניהול פרויקטים דיגיטליים","ניתוח רווחיות","פיתוח תוכן וקונספט לאירועים",
];
const TOOL_SKILLS = [
  "Claude Code","ChatGPT","Gemini","Vercel","GitHub","Supabase","Resend",
  "Google Apps Script","Google Sheets","HTML / CSS / JS","Priority","Monday.com",
  "Canva","Gamma","Midjourney",
];

/* =============== RENDER PROJECTS =============== */
const counts={all:PROJECTS.length};
PROJECTS.forEach(p=>counts[p.cat]=(counts[p.cat]||0)+1);
const catEN=id=>(CATS.find(c=>c.id===id)||{}).en||"";
const filters=document.getElementById('filters');
CATS.forEach((c,i)=>{
  const b=document.createElement('button');
  b.className='chip'+(i===0?' active':'');b.dataset.cat=c.id;
  b.innerHTML=c.label+`<span class="c">${counts[c.id]||0}</span>`;
  filters.appendChild(b);
});
const grid=document.getElementById('grid');
PROJECTS.forEach((p,i)=>{
  const el=document.createElement('article');
  el.className='card reveal';el.dataset.cat=p.cat;
  el.innerHTML=`
    <div class="card-top">
      <span class="card-cat">${catEN(p.cat)}</span>
      <span class="card-num">${String(i+1).padStart(2,'0')} / ${PROJECTS.length}</span>
    </div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    <div class="card-actions">
      <button class="btn btn-primary live">תצוגה חיה
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
      </button>
      <a class="btn btn-ghost" href="${p.url}" target="_blank" rel="noopener">לאתר המלא</a>
    </div>`;
  el.querySelector('.live').addEventListener('click',()=>openLB(p));
  grid.appendChild(el);
});
filters.addEventListener('click',e=>{
  const chip=e.target.closest('.chip');if(!chip)return;
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  chip.classList.add('active');const cat=chip.dataset.cat;
  document.querySelectorAll('.card').forEach(c=>c.classList.toggle('hidden',!(cat==='all'||c.dataset.cat===cat)));
});

/* spotlight follows the cursor on each card */
if(matchMedia('(hover:hover)').matches){
  grid.addEventListener('pointermove',e=>{
    const card=e.target.closest('.card');if(!card)return;
    const r=card.getBoundingClientRect();
    card.style.setProperty('--mx',(e.clientX-r.left)+'px');
    card.style.setProperty('--my',(e.clientY-r.top)+'px');
  });
}

/* =============== RENDER EXPERIENCE =============== */
const timeline=document.getElementById('timeline');
EXPERIENCE.forEach(x=>{
  const el=document.createElement('div');
  el.className='titem reveal';
  el.innerHTML=`
    <p class="t-when">${x.when}</p>
    <h3>${x.org}</h3>
    <p class="t-role">${x.role}</p>
    ${x.bullets?`<ul>${x.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`:''}
    ${x.note?`<p class="t-note">${x.note}</p>`:''}`;
  timeline.appendChild(el);
});

/* =============== RENDER SKILLS =============== */
const mkPills=(id,items)=>{
  const box=document.getElementById(id);
  items.forEach(s=>{const p=document.createElement('span');p.className='pill';p.textContent=s;box.appendChild(p);});
};
mkPills('coreSkills',CORE_SKILLS);
mkPills('toolSkills',TOOL_SKILLS);

/* =============== LIGHTBOX =============== */
const lb=document.getElementById('lb'),lbFrame=document.getElementById('lbFrame'),
      lbTitle=document.getElementById('lbTitle'),lbOpen=document.getElementById('lbOpen');
function openLB(p){lbTitle.textContent=p.title;lbOpen.href=p.url;lbFrame.src=p.url;
  lb.classList.add('open');document.body.style.overflow='hidden';}
function closeLB(){lb.classList.remove('open');lbFrame.src='about:blank';document.body.style.overflow='';}
document.getElementById('lbX').addEventListener('click',closeLB);
lb.addEventListener('click',e=>{if(e.target===lb)closeLB();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLB();});

/* =============== REVEAL =============== */
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}}),{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

/* =============== COUNT-UP STATS =============== */
const statsBox=document.getElementById('stats');
if(statsBox){
  const reduceMotion=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const so=new IntersectionObserver(es=>es.forEach(en=>{
    if(!en.isIntersecting)return;so.unobserve(en.target);
    en.target.querySelectorAll('.stat-num').forEach(el=>{
      const target=parseInt(el.dataset.count,10),suffix=el.dataset.suffix||'';
      if(reduceMotion){el.textContent=target.toLocaleString()+suffix;return;}
      const dur=1400,t0=performance.now();
      const tick=now=>{
        const p=Math.min(1,(now-t0)/dur),e=1-Math.pow(1-p,3);
        el.textContent=Math.round(target*e).toLocaleString()+suffix;
        if(p<1)requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }),{threshold:0.4});
  so.observe(statsBox);
}

/* =============== NAV + SCROLL PROGRESS =============== */
const nav=document.getElementById('nav'),progressBar=document.getElementById('progressBar');
const navLinks=[...document.querySelectorAll('.nav-links a[href^="#"]')];
const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
let scrollTick=false;
function onScroll(){
  const doc=document.documentElement;
  const max=doc.scrollHeight-innerHeight;
  progressBar.style.transform=`scaleX(${max>0?scrollY/max:0})`;
  nav.classList.toggle('show',scrollY>innerHeight*0.9);
  let current=null;
  for(const s of sections){if(s.getBoundingClientRect().top<=innerHeight*0.4)current=s;}
  navLinks.forEach(a=>a.classList.toggle('active',current&&a.getAttribute('href')==='#'+current.id));
}
addEventListener('scroll',()=>{
  if(scrollTick)return;scrollTick=true;
  requestAnimationFrame(()=>{onScroll();scrollTick=false;});
},{passive:true});
onScroll();

/* =============== CONTACT FORM =============== */
const cform=document.getElementById('cform');
if(cform){
  const btn=document.getElementById('cformBtn'),status=document.getElementById('cformStatus');
  const cfg=window.SITE_CONFIG||{};
  const configured=cfg.SUPABASE_URL&&cfg.SUPABASE_ANON_KEY;
  cform.addEventListener('submit',async e=>{
    e.preventDefault();
    const F=cform.elements;
    if(F.website.value)return; // honeypot
    const data={
      name:F.name.value.trim(),
      email:F.email.value.trim(),
      company:F.company.value.trim()||null,
      phone:F.phone.value.trim()||null,
      message:F.message.value.trim(),
    };
    if(!data.name||!data.email||!data.message){
      status.className='cform-status err';status.textContent='נא למלא שם, אימייל והודעה.';return;
    }
    if(!configured){
      // graceful fallback until Supabase is wired up
      const body=encodeURIComponent(`${data.message}\n\n— ${data.name}${data.company?' · '+data.company:''}${data.phone?' · '+data.phone:''}\n${data.email}`);
      location.href=`mailto:odelya.hassan@gmail.com?subject=${encodeURIComponent('פנייה מהאתר — '+data.name)}&body=${body}`;
      status.className='cform-status ok';status.textContent='נפתחה טיוטת מייל — שלחו אותה ואחזור אליכם.';
      return;
    }
    btn.disabled=true;status.className='cform-status';status.textContent='שולחת...';
    try{
      const res=await fetch(`${cfg.SUPABASE_URL}/rest/v1/contact_messages`,{
        method:'POST',
        headers:{
          'apikey':cfg.SUPABASE_ANON_KEY,
          'Authorization':`Bearer ${cfg.SUPABASE_ANON_KEY}`,
          'Content-Type':'application/json',
          'Prefer':'return=minimal',
        },
        body:JSON.stringify(data),
      });
      if(!res.ok)throw new Error('HTTP '+res.status);
      cform.reset();
      status.className='cform-status ok';status.textContent='ההודעה נשלחה! אחזור אליכם בהקדם ✦';
    }catch(err){
      status.className='cform-status err';
      status.textContent='משהו השתבש. אפשר לכתוב לי ישירות: odelya.hassan@gmail.com';
    }finally{
      btn.disabled=false;
    }
  });
}

/* =============== RAIL =============== */
const rail=document.getElementById('rail'),stage=document.getElementById('stage');
STATES.forEach((s,i)=>{
  const b=document.createElement('button');b.innerHTML='<span class="tk"></span>';
  b.setAttribute('aria-label',s.title);
  b.addEventListener('click',()=>{
    const top=stage.offsetTop, scrollable=stage.offsetHeight-window.innerHeight;
    window.scrollTo({top:top+scrollable*(i/(NSTATES-1)),behavior:'smooth'});
  });
  rail.appendChild(b);
});
const railBtns=[...rail.children];

/* =============== 3D POINT-CLOUD ENGINE =============== */
(function(){
  const canvas=document.getElementById('obj'),ctx=canvas.getContext('2d');
  const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const isMobile=matchMedia('(max-width:860px)').matches;
  const N = isMobile?520:920;
  let w,h,dpr;

  function rand(){return Math.random();}
  const GA=Math.PI*(3-Math.sqrt(5));

  // ---- shape generators (return N triplets in ~[-1.2,1.2]) ----
  function fib(radiusFn){const a=[];for(let i=0;i<N;i++){const y=1-(i/(N-1))*2;const r=Math.sqrt(Math.max(0,1-y*y));const t=i*GA;const rad=radiusFn?radiusFn(i):1;a.push([Math.cos(t)*r*rad,y*rad,Math.sin(t)*r*rad]);}return a;}
  function sphere(){return fib(()=>1.05);}
  function neural(){return fib(i=>0.8+ (i%9===0?0.35:0) + (Math.sin(i*12.9898)*0.5+0.5)*0.28);}
  function cube(){const a=[];for(let i=0;i<N;i++){const f=i%6;let x=rand()*2-1,y=rand()*2-1,z=rand()*2-1;const v=0.98;if(f===0)x=v;else if(f===1)x=-v;else if(f===2)y=v;else if(f===3)y=-v;else if(f===4)z=v;else z=-v;a.push([x,y,z]);}return a;}
  function torus(){const a=[];const R=0.72,r=0.34;for(let i=0;i<N;i++){const u=(i/N)*Math.PI*2*7%(Math.PI*2);const v=rand()*Math.PI*2;a.push([(R+r*Math.cos(v))*Math.cos(u),r*Math.sin(v),(R+r*Math.cos(v))*Math.sin(u)]);}return a;}
  function helix(){const a=[];const turns=3.2;for(let i=0;i<N;i++){const t=i/N;const strand=i%2;const ang=t*turns*Math.PI*2+strand*Math.PI;const rad=0.5;a.push([Math.cos(ang)*rad,(t-0.5)*2.0,Math.sin(ang)*rad]);}return a;}
  function octa(){const a=[];for(let i=0;i<N;i++){const y=1-(i/(N-1))*2;const r=Math.sqrt(Math.max(0,1-y*y));const t=i*GA;let x=Math.cos(t)*r,z=Math.sin(t)*r,yy=y;const l=Math.abs(x)+Math.abs(yy)+Math.abs(z)||1;a.push([x/l*1.25,yy/l*1.25,z/l*1.25]);}return a;}
  function wave(){const a=[];const g=Math.round(Math.sqrt(N));for(let i=0;i<N;i++){const gx=i%g,gy=Math.floor(i/g);const x=(gx/(g-1)-0.5)*2.1,z=(gy/(g-1)-0.5)*2.1;a.push([x,Math.sin(x*3+z*2.4)*0.22,z]);}return a;}

  // order matches STATES: intro, FE, logic, auto, creative, ai, ux
  const SHAPES=[sphere(),cube(),torus(),helix(),octa(),neural(),wave()];

  function resize(){
    dpr=Math.min(devicePixelRatio||1,isMobile?1.5:2);
    w=canvas.clientWidth;h=canvas.clientHeight;
    canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  resize();addEventListener('resize',()=>{resize();});

  /* pre-rendered glow sprites (quantized hue) — one drawImage per point
     instead of two path fills; far cheaper on weak GPUs */
  const SPRITES=new Map();
  function sprite(q){
    let s=SPRITES.get(q);
    if(s)return s;
    s=document.createElement('canvas');s.width=s.height=64;
    const c=s.getContext('2d');
    const g=c.createRadialGradient(32,32,0,32,32,32);
    g.addColorStop(0,`hsla(${q},95%,88%,1)`);
    g.addColorStop(0.22,`hsla(${q},95%,68%,0.5)`);
    g.addColorStop(1,`hsla(${q},95%,60%,0)`);
    c.fillStyle=g;c.fillRect(0,0,64,64);
    SPRITES.set(q,s);return s;
  }

  let pointer={x:0,y:0};
  let px=-1e4, py=-1e4; // cursor in screen px, for point repulsion
  addEventListener('pointermove',e=>{
    pointer.x=(e.clientX/innerWidth-0.5);pointer.y=(e.clientY/innerHeight-0.5);
    px=e.clientX;py=e.clientY;
  });
  addEventListener('pointerout',e=>{if(!e.relatedTarget){px=-1e4;py=-1e4;}});

  const ease=t=>t*t*(3-2*t);
  const lerp=(a,b,t)=>a+(b-a)*t;
  let ay=0, curState=0, visible=true;
  let pulse=0;              // burst on shape change
  let sv=0, lastSY=scrollY; // smoothed scroll velocity

  const cue=document.getElementById('cue'),
        ovEye=document.getElementById('ovEye'),ovTitle=document.getElementById('ovTitle'),ovDesc=document.getElementById('ovDesc');
  const ovText=document.querySelector('.ov-text');

  function setState(i){
    if(i===curState)return;curState=i;pulse=1;const s=STATES[i];
    ovEye.textContent=s.eye;ovTitle.textContent=s.title;ovDesc.textContent=s.desc;
    ovText.classList.remove('ov-anim');void ovText.offsetWidth;ovText.classList.add('ov-anim');
    railBtns.forEach((b,k)=>b.classList.toggle('on',k===i));
    cue.style.opacity = i===0?'1':'0';
  }
  setState(0);railBtns[0].classList.add('on');

  const vo=new IntersectionObserver(es=>es.forEach(e=>visible=e.isIntersecting),{threshold:0});
  vo.observe(stage);

  function progress(){
    const top=stage.offsetTop, scrollable=stage.offsetHeight-innerHeight;
    return Math.max(0,Math.min(1,(scrollY-top)/scrollable));
  }

  // reusable projection buffers (avoid per-frame allocation)
  const PX=new Float32Array(N),PY=new Float32Array(N),PZ=new Float32Array(N),PP=new Float32Array(N);
  const REP=isMobile?90:130, REP2=REP*REP; // cursor repulsion radius

  function render(p){
    const f=p*(NSTATES-1);
    let i0=Math.floor(f);if(i0>NSTATES-2)i0=NSTATES-2;const tt=ease(f-i0);
    setState(Math.round(f));

    const A=SHAPES[i0],B=SHAPES[i0+1];
    const hue=lerp(STATES[i0].hue,STATES[i0+1].hue,tt);

    // scroll velocity: fast scrolling spins and expands the cloud
    const rawV=scrollY-lastSY;lastSY=scrollY;
    sv+=(rawV-sv)*0.12;
    const speed=Math.min(60,Math.abs(sv));

    if(!reduce)ay+=0.0042+speed*0.00012;
    pulse*=0.93;
    const t=performance.now()*0.001;

    const rotY=ay+pointer.x*0.5;
    const rotX=-0.42+pointer.y*0.4;
    const cy=Math.cos(rotY),sy=Math.sin(rotY),cx=Math.cos(rotX),sx=Math.sin(rotX);

    const CX = isMobile? w*0.5 : w*0.40;
    const CY = isMobile? h*0.40 : h*0.5;
    const scale=Math.min(w,h)*(isMobile?0.30:0.34)*(1+pulse*0.06+speed*0.0012);
    const cam=3.4;

    ctx.clearRect(0,0,w,h);
    ctx.globalCompositeOperation='lighter';

    // pass 1: project all points (+ cursor repulsion in screen space)
    for(let i=0;i<N;i++){
      const x=lerp(A[i][0],B[i][0],tt),
            y=lerp(A[i][1],B[i][1],tt),
            z=lerp(A[i][2],B[i][2],tt);
      // rotate Y then X
      let X=x*cy - z*sy;
      let Z=x*sy + z*cy;
      let Y=y*cx - Z*sx;
      Z=y*sx + Z*cx;
      const persp=cam/(cam-Z);
      let sxp=CX + X*scale*persp;
      let syp=CY - Y*scale*persp;
      const dx=sxp-px,dy=syp-py,d2=dx*dx+dy*dy;
      if(d2<REP2){
        const d=Math.sqrt(d2)||1,push=(1-d/REP)*(isMobile?10:22);
        sxp+=dx/d*push;syp+=dy/d*push;
      }
      PX[i]=sxp;PY[i]=syp;PZ[i]=Z;PP[i]=persp;
    }

    // pass 2: constellation lines between near neighbours (index-adjacent
    // points are spatial neighbours in these shapes; distance filter drops
    // the rest). Three alpha buckets = three strokes total.
    const th=isMobile?26:36, th2=th*th;
    const paths=[new Path2D(),new Path2D(),new Path2D()];
    const maxLink=isMobile?1:2, step=isMobile?2:1;
    for(let link=1;link<=maxLink;link++){
      for(let i=0;i<N-link;i+=step){
        const j=i+link;
        const dx=PX[j]-PX[i],dy=PY[j]-PY[i],d2=dx*dx+dy*dy;
        if(d2<th2){
          const a=1-d2/th2;
          const b=a>0.66?0:a>0.33?1:2;
          paths[b].moveTo(PX[i],PY[i]);paths[b].lineTo(PX[j],PY[j]);
        }
      }
    }
    const lineHue=Math.round(hue/8)*8;
    const lineAlpha=[0.30,0.17,0.08];
    ctx.lineWidth=1;
    for(let b=0;b<3;b++){
      ctx.strokeStyle=`hsla(${lineHue},90%,72%,${Math.min(0.5,lineAlpha[b]*(1+pulse*1.5))})`;
      ctx.stroke(paths[b]);
    }

    // pass 3: glow sprites (with per-point twinkle + state-change pulse)
    for(let i=0;i<N;i++){
      const Z=PZ[i],persp=PP[i];
      const depth=(Z+1.3)/2.6; // 0..1
      const node=(i%97===0);
      const q=Math.round((hue+Z*16)/8)*8;
      let alpha=(0.28+depth*0.60)*(node?1.35:1)*(1+pulse*0.5);
      if(!reduce)alpha*=0.82+0.24*Math.sin(t*2+i*1.7);
      const R=(node?1.9:1.15)*persp*(isMobile?0.9:1)*3.2;
      ctx.globalAlpha=Math.min(1,alpha);
      ctx.drawImage(sprite(q),PX[i]-R,PY[i]-R,R*2,R*2);
    }
    ctx.globalAlpha=1;
    ctx.globalCompositeOperation='source-over';
  }

  function frame(){
    if(!visible){requestAnimationFrame(frame);return;}
    // >1px tolerance: mobile UI-bar transitions jitter clientHeight, and each
    // resize() wipes the canvas — resizing every frame reads as flicker
    if(Math.abs(canvas.clientWidth-w)>1||Math.abs(canvas.clientHeight-h)>1)resize();
    render(progress());
    requestAnimationFrame(frame);
  }
  window.__render=render; // manual single-frame hook for headless testing
  requestAnimationFrame(frame);
})();
