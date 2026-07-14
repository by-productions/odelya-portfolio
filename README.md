# Odelya Hassan · Creative Technologist — Portfolio

תיק עבודות חי: אתר סטטי (ללא build) עם 22 פרויקטים, ציר ניסיון, וטופס יצירת קשר מחובר ל-Supabase.

## Stack

- **Frontend:** HTML / CSS / vanilla JS (RTL, Rubik font, canvas point-cloud hero)
- **Hosting:** Vercel (auto-deploy from GitHub `main`)
- **Contact form:** Supabase — טבלת `contact_messages` עם RLS שמאפשר ל-anon רק INSERT

## Structure

```
index.html          — כל ה-markup
css/style.css       — עיצוב
js/app.js           — דאטה (פרויקטים/ניסיון/כישורים), אינטראקציות, מנוע ה-3D, טופס
js/config.js        — SUPABASE_URL + SUPABASE_ANON_KEY (בטוח לחשיפה בצד לקוח)
supabase/schema.sql — סכמת הטבלה ומדיניות ה-RLS
cv/                 — קורות חיים להורדה
```

## Supabase setup

1. צרו פרויקט ב-[supabase.com](https://supabase.com)
2. הריצו את `supabase/schema.sql` ב-SQL Editor
3. העתיקו את ה-Project URL וה-anon key ל-`js/config.js`
4. commit + push — Vercel יפרוס אוטומטית

כל עוד `config.js` ריק, הטופס נופל חזרה ל-mailto ולא נשבר.

## Local dev

זה אתר סטטי — פשוט פתחו את `index.html`, או:

```bash
npx serve .
```
