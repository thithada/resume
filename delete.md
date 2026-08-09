# Removed sections archive

ไฟล์นี้เก็บเนื้อหาที่นำออกจากหน้าเว็บเมื่อวันที่ 8 สิงหาคม 2026 เพื่อให้สามารถนำกลับมาใช้หรือปรับรูปแบบใหม่ได้ภายหลัง โดยเนื้อหาด้านล่างไม่ถูก render บนเว็บไซต์แล้ว

## 1. Profile principles

รายการสั้น 3 ข้อที่เคยอยู่ด้านขวาของส่วน Profile:

```tsx
<div className="principles">
  <span>{t("01 / Think in systems")}</span>
  <span>{t("02 / Design for humans")}</span>
  <span>{t("03 / Ship with intention")}</span>
</div>
```

รูปแบบเดิม:

```css
.principles {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
}

.principles span {
  padding-top: 15px;
  border-top: 1px solid var(--line);
  font: 500 10px var(--font-geist-mono), monospace;
  text-transform: uppercase;
  letter-spacing: .08em;
}
```

## 2. Career brief

ตารางข้อมูล 4 ช่อง: Target roles, Work mode, Availability และ Languages

```tsx
<div className="career-brief" aria-label={t("Career preferences")}>
  <div><Target size={19} /><span>{t("Target roles")}</span><strong>Frontend / Full-stack</strong></div>
  <div><MonitorUp size={19} /><span>{t("Work mode")}</span><strong>{t("Remote / Hybrid")}</strong></div>
  <div><BriefcaseBusiness size={19} /><span>{t("Availability")}</span><strong>{t("Open to discuss")}</strong></div>
  <div><Languages size={19} /><span>{t("Languages")}</span><strong>{t("Thai · English")}</strong></div>
</div>
```

รูปแบบเดิม:

```css
.career-brief {
  margin-top: 90px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.career-brief > div {
  min-height: 150px;
  padding: 24px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px 12px;
  align-content: space-between;
  transition: background .25s ease, color .25s ease;
}

.career-brief > div:hover { background: var(--acid); }
.career-brief svg { color: var(--cobalt); }
.career-brief span {
  align-self: center;
  font: 600 9px var(--font-geist-mono), monospace;
  text-transform: uppercase;
  letter-spacing: .11em;
  color: var(--muted);
}
.career-brief strong {
  grid-column: 1 / -1;
  font-size: 18px;
  letter-spacing: -.035em;
}
```

## 3. Working style

ส่วน Working style ทั้งชุด รวมข้อความ วิธีทำงาน 8 tags และการ์ดภาษา:

```tsx
<div className="working-style">
  <div>
    <span>{t("WORKING STYLE")}</span>
    <h3>{t("How I contribute beyond code.")}</h3>
  </div>
  <div className="working-tags">
    {[
      "Requirement breakdown",
      "User-flow thinking",
      "Figma handoff",
      "Git workflow",
      "API integration",
      "Responsive UI",
      "Frontend testing",
      "AI-assisted development",
    ].map((item) => <span key={item}>{t(item)}</span>)}
  </div>
  <div className="language-card">
    <Languages size={22} />
    <div><strong>{t("Thai")}</strong><span>{t("Native")}</span></div>
    <div><strong>{t("English")}</strong><span>{t("Add proficiency level")}</span></div>
  </div>
</div>
```

รูปแบบเดิม:

```css
.working-style {
  margin-top: 70px;
  display: grid;
  grid-template-columns: .75fr 1.2fr .75fr;
  gap: 40px;
  border-top: 1px solid var(--line);
  padding-top: 42px;
}
.working-style > div:first-child > span {
  font: 650 9px var(--font-geist-mono), monospace;
  letter-spacing: .14em;
  color: var(--cobalt);
}
.working-style h3 { margin: 18px 0 0; font-size: 28px; letter-spacing: -.045em; }
.working-tags { display: flex; flex-wrap: wrap; align-content: flex-start; gap: 9px; }
.working-tags span {
  padding: 10px 13px;
  border: 1px solid var(--line);
  border-radius: 100px;
  font-size: 11px;
}
.language-card {
  background: var(--cobalt);
  color: white;
  padding: 24px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
}
.language-card > div {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid rgba(255,255,255,.25);
  padding-top: 13px;
}
```

## Restoration notes

- หากนำ Career brief หรือ Working style กลับมา ต้องเพิ่ม `Target`, `MonitorUp`, `BriefcaseBusiness` และ `Languages` ใน import จาก `lucide-react`
- Responsive เดิมใช้ Career brief 2 คอลัมน์ที่ tablet และ 1 คอลัมน์ที่ mobile
- Profile ปัจจุบันเปลี่ยนเป็น 2 คอลัมน์หลังนำ Principles ออก จึงต้องปรับ `.about-grid` กลับหากคืนส่วนนี้

## 4. Beyond code

แถบงานอดิเรกที่เคยอยู่ระหว่าง Journey และ Contact ถูกนำออกทั้งชุด:

```tsx
const beyondCode = [
  {
    title: "Photography",
    text: "Finding structure, light, and small details in ordinary scenes.",
  },
  {
    title: "Running",
    text: "A quiet routine for consistency, patience, and a clear reset.",
  },
  {
    title: "Music",
    text: "Space away from the screen to recharge and notice new ideas.",
  },
];

<aside className="beyond-code scroll-reveal" aria-labelledby="beyond-code-title" data-reveal>
  <div className="beyond-code-heading">
    <span>{t("06 / BEYOND CODE")}</span>
    <h2 id="beyond-code-title">{t("A little more")} <em>{t("human.")}</em></h2>
    <small>{t("Editable starter content")}</small>
  </div>
  <div className="beyond-code-list">
    {beyondCode.map((item, index) => (
      <article key={item.title}>
        <span>0{index + 1}</span>
        <h3>{t(item.title)}</h3>
        <p>{t(item.text)}</p>
      </article>
    ))}
  </div>
</aside>
```

รูปแบบหลักเดิม:

```css
.beyond-code {
  width: min(var(--frame-max), calc(100% - 48px));
  margin: 0 auto;
  padding: 46px 0;
  display: grid;
  grid-template-columns: .55fr 1.45fr;
  gap: 80px;
  border-top: 1px solid var(--line);
}
.beyond-code-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-left: 1px solid var(--line);
}
.beyond-code-list article {
  min-height: 150px;
  padding: 12px 24px;
  border-right: 1px solid var(--line);
}
```

## 5. Supporting copy

ข้อความประกอบหัวข้อที่ถูกนำออกเพื่อให้แต่ละ section กระชับและมีพื้นที่ว่างมากขึ้น:

```text
Selected work
From digital health assessments to radio telescope operations—building across interfaces, APIs, and data.

Featured case study
A compact story recruiters can scan quickly. Replace the final outcome with validated product data when it becomes available.

Expertise
Choosing the right tools to make ideas useful, maintainable, and ready to grow.
```
