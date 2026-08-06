# Thithada Islam Portfolio — Design System & Product Direction

อัปเดตล่าสุด: 6 สิงหาคม 2026

เอกสารนี้เป็น source of truth สำหรับการออกแบบและพัฒนา Web Resume ต่อจากนี้ ทุกหน้าหรือ component ใหม่ควรรักษาบุคลิก กติกาภาพ และ motion language ที่ระบุไว้ด้านล่าง

## 1. Design Thesis

แนวคิดหลักของเว็บคือ **Editorial Product Engineer** — ผสมความแม่นยำของระบบวิศวกรรมเข้ากับความประณีตของงาน editorial ระดับพรีเมียม

เว็บต้องให้ความรู้สึก:

- ฉลาดและเป็นระบบ แต่ไม่แข็งหรือดูเป็น dashboard ทั่วไป
- พรีเมียมจาก typography, spacing และจังหวะ ไม่ใช่จากเอฟเฟกต์จำนวนมาก
- มีความเป็นนักสร้างผลิตภัณฑ์ ไม่ใช่เพียงรายชื่อเครื่องมือทางเทคนิค
- กล้าทางภาพ แต่เนื้อหายังคงอ่านง่ายและเหมาะกับ recruiter
- มี “signal language” เช่น วงโคจร เส้นกริด จุดสถานะ และคลื่นข้อมูล เพื่อสื่อถึง software, sensors และ systems thinking

คำสำคัญ: `precise`, `editorial`, `engineered`, `human`, `signal`, `intentional`

## 2. Brand Personality

บุคลิกของ Thithada ในเว็บ:

- Product-minded engineer
- Frontend-focused full-stack developer
- สนใจ UX และรายละเอียด interaction
- สามารถทำงานกับระบบจริงตั้งแต่ digital health ถึง radio telescope
- เรียนรู้ AI เพื่อประยุกต์ใช้กับ software development อย่างมีเหตุผล

น้ำเสียงข้อความควรสั้น ชัด มั่นใจ และไม่กล่าวอ้างเกินข้อมูลจริง หากยังไม่มีตัวเลขให้ใช้ placeholder ที่เห็นชัด เช่น `XX` พร้อมคำว่า `replace later`

## 3. Color System

| Token | Value | หน้าที่ |
|---|---:|---|
| Paper | `#F1F0E9` | พื้นหลังหลัก โทนอุ่นและพรีเมียมกว่าสีขาวบริสุทธิ์ |
| Soft Paper | `#FAF9F3` | สลับ section เพื่อสร้าง depth |
| Ink | `#11120F` | ตัวอักษรหลักและ dark section |
| Muted | `#66685F` | รายละเอียดรอง metadata และคำอธิบาย |
| Cobalt | `#4058FF` | สีประจำตัว ลิงก์ จุดเน้น และ product energy |
| Acid Lime | `#D6FF4A` | signal, active state และจุดสนใจที่ใช้เท่าที่จำเป็น |
| Hairline | `rgba(17,18,15,.16)` | เส้น grid, divider และกรอบ |

### กติกาการใช้สี

- Cobalt คือสีแบรนด์หลัก ส่วน Acid Lime คือ signal accent
- ไม่ใช้ Acid Lime เป็นพื้นขนาดใหญ่บ่อยเกินไป หนึ่ง section เด่นต่อหนึ่งหน้าเพียงพอ
- Dark section ใช้ Ink กับข้อความขาวอมเทา ไม่ใช้ขาวบริสุทธิ์ทุกระดับ
- ทุกสีใหม่ต้องมีเหตุผลเชิงสถานะหรือ hierarchy หลีกเลี่ยงการเพิ่มสีตกแต่งโดยไม่มีหน้าที่

## 4. Typography

- Sans: Geist / Segoe UI fallback สำหรับเนื้อหาและหัวเรื่องหลัก
- Mono: Geist Mono / Consolas สำหรับ metadata, label, หมายเลข และข้อมูลระบบ
- Editorial Serif: Georgia สำหรับคำ italic ที่ใช้สร้าง contrast เช่น `effortless`, `real-world signal`, `inside the thinking`

### Typographic behavior

- Heading ใช้ tracking ติดลบและ line-height กระชับ
- Mono label ใช้ตัวพิมพ์ใหญ่ ขนาดเล็ก และ letter spacing สูง
- ไม่ใช้ตัวหนาทุกส่วน ให้ hierarchy เกิดจาก scale, spacing และ contrast
- หนึ่ง heading ใหญ่ควรมีคำ serif accent ไม่เกินหนึ่งช่วง

## 5. Layout & Spacing

- Desktop content width สูงสุดประมาณ `1360px`
- ระยะขอบ desktop `24–48px` ขึ้นกับ viewport
- Section spacing desktop ประมาณ `140px`
- ใช้เส้น 1px และ grid เพื่อจัดระเบียบแทน card เงาจำนวนมาก
- Layout หลักเป็น asymmetric grid เพื่อให้ดู editorial และมีเอกลักษณ์
- Mobile ลด section spacing เหลือประมาณ `95px` และเปลี่ยน grid เป็นหนึ่งคอลัมน์

Breakpoints ปัจจุบัน:

- `960px` — tablet / compact desktop
- `680px` — mobile

## 6. Hero Direction

Hero ด้านขวา **ไม่ใช้รูปโปรไฟล์** ตามการตัดสินใจล่าสุด เพราะไม่มีภาพที่เหมาะสม

ใช้ orbital engineering system แทน ประกอบด้วย:

- วงโคจรสองชั้น
- จุด signal สี Cobalt และ Acid Lime
- Core text: `PRODUCT × ENGINEERING`
- Floating tags: `AI curious`, `UX minded`, `03 shipped products`

เหตุผล: ภาพระบบนี้เข้ากับตัวตน software engineer มากกว่า placeholder รูปบุคคล และกลายเป็น visual signature ของเว็บ

## 7. Project Image System

แต่ละ featured project มี gallery จำนวน 4 รูป:

1. Cover — ภาพรวมที่แข็งแรงที่สุด
2. Core interaction — feature หรือ interaction สำคัญ
3. Result / secondary feature — ผลลัพธ์หรือหน้ารอง
4. Flow / detail — ลำดับการใช้งานหรือรายละเอียดระบบ

Gallery behavior:

- รูปหลักอัตราส่วน 16:9 บน desktop และ 4:3 บน mobile
- Thumbnail 4 รูปอยู่ด้านขวาบน desktop และเรียงแนวนอนบน mobile
- มี Previous / Next controls และตัวนับ `01 / 04`
- รูปที่เลือกใช้ Acid Lime เป็น active state
- รูปจริง fade in และขยายเล็กน้อยเมื่อ hover
- หากยังไม่มีรูป จะแสดง premium technical placeholder พร้อมชื่อไฟล์ที่ต้องใส่

ชื่อไฟล์และรายละเอียดอยู่ใน `public/images/README.md`

ข้อกำหนดรูป:

- แนะนำ `1600 × 1000px`, WebP
- ขนาดไม่เกินประมาณ 500 KB ต่อรูปเมื่อทำได้
- รูปในโปรเจกต์เดียวกันควรใช้ crop และ device framing ที่สอดคล้องกัน
- ไม่ใส่ข้อมูลผู้ใช้จริงหรือข้อมูลสุขภาพที่ระบุตัวบุคคลได้
- หลีกเลี่ยง screenshot ที่มีพื้นที่ว่างหรือ browser chrome มากเกินไป

## 8. Motion System

Motion ของเว็บมีหน้าที่อธิบาย hierarchy และสร้างความรู้สึก “ระบบที่มีชีวิต” ไม่ใช่เพื่อโชว์เอฟเฟกต์

### 8.1 Scroll progress

- เส้น Cobalt สูง 3px ด้านบนสุด
- แสดงตำแหน่งการอ่านของหน้าทั้งหมด

### 8.2 Cursor aura

- รัศมีวงกลมประมาณ 260px ตามเมาส์
- ใช้ radial gradient Cobalt + Acid Lime แบบโปร่ง โดยไม่ใช้ `mix-blend-mode: multiply` เพื่อไม่ให้หายบนพื้นสีดำ
- จุดกลางเป็น Acid Lime ขนาดเล็กพร้อมวง Cobalt บาง ๆ ไม่มีวงแหวนหรือ glow เพิ่มเติม
- เคลื่อนแบบ lerp factor `0.12` เพื่อมีความหน่วงเล็กน้อย
- มีจุด signal เล็กตรงกลาง
- แสดงเฉพาะอุปกรณ์ที่เป็น fine pointer
- ไม่ขวางการคลิกเพราะใช้ `pointer-events: none`

### 8.3 Scroll-triggered reveal

ชื่อเอฟเฟกต์ที่ใช้คือ **scroll-triggered reveal animation**

- Section เริ่มที่ `opacity: 0` และ `translateY(52px)`
- เมื่อเข้าหน้าจอประมาณ 12% จะ fade + slide ขึ้น
- ระยะเวลาประมาณ `0.85s`
- ใช้ easing `cubic-bezier(.2,.75,.2,1)`
- แสดงเพียงครั้งแรกเพื่อไม่ให้รบกวนเวลาเลื่อนกลับ

### 8.4 Ambient motion

- Hero orbit หมุนช้า 24–30 วินาที
- Floating tags ขยับขึ้นลงระยะสั้น
- Case-study signal bars เคลื่อนไหวเป็นคลื่น
- Project underline และลูกศรตอบสนองต่อ hover
- Gallery image zoom ไม่เกินประมาณ 2.5%

### 8.5 Reduced motion

เมื่อ `prefers-reduced-motion: reduce`:

- ปิด smooth scroll
- ลด animation และ transition เหลือเกือบทันที
- Cursor aura ไม่ทำงาน
- เนื้อหาต้องยังแสดงครบและใช้งานได้

## 9. Content Architecture

หน้าแรกควรทำหน้าที่เป็น **curated introduction** ไม่ควรนำทุกโปรเจกต์มาใส่จนยาวเกินไป

### Recommendation: แยก Projects ออกเป็นหน้าต่างหาก

เมื่อมีโปรเจกต์รวมประมาณ 7–8 ชิ้น แนวทางที่แนะนำคือ:

```text
Home
├── Hero / Positioning
├── Featured Projects 3 ชิ้น
├── Featured Case Study 1 ชิ้น
├── Expertise / Journey
└── Contact

/projects
├── All Projects
├── Filter: Product / Frontend / Full-stack / Experiment
└── Project cards พร้อมบทสรุปสั้น

/projects/[slug]
├── Overview
├── Problem
├── My Role
├── Process & Constraints
├── Gallery
├── Technical Decisions
├── Result / Metrics
└── Reflection / Next step
```

### Featured project selection

หน้าแรกควรเลือก 3 โปรเจกต์ที่แสดงความกว้างของความสามารถ:

1. Check PD — sensors, health flow, mobile interaction
2. Gen-H — product systems, gamification, full-stack
3. NashGUI — technical domain, API integration, deployment

โปรเจกต์อื่นให้ไปอยู่หน้า `/projects` และเลือก 1–2 ชิ้นที่แข็งแรงที่สุดมาทำ detail case study

### Project data model สำหรับอนาคต

```ts
type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  period: string;
  status: string;
  featured: boolean;
  category: string[];
  description: string;
  problem: string;
  responsibility: string[];
  challenges: string[];
  solution: string[];
  metrics: Array<{ value: string; label: string }>;
  tech: string[];
  images: Array<{ src: string; alt: string; caption?: string }>;
  demoUrl?: string;
  repositoryUrl?: string;
};
```

ยังไม่สร้างหน้า `/projects` ใน commit นี้ เพราะยังไม่มีข้อมูลและรูปของอีก 4–5 โปรเจกต์ การสร้างหลังได้รับข้อมูลจริงจะทำให้โครงสร้างไม่ต้องเดาและไม่เกิดหน้าว่าง

### Complexity budget — ป้องกันเว็บดูแน่นหรือเละ

เวอร์ชันปัจจุบันอยู่ใกล้เพดานของ interaction ที่เหมาะสมแล้ว จึงไม่ควรเพิ่ม visual effect หลักอีกโดยไม่ตัดของเดิม

กติกา:

- หนึ่ง viewport ควรมี signature motion ที่เด่นเพียงหนึ่งอย่าง
- หน้าแรกคงไว้ที่ featured projects 3 ชิ้น และ featured case study 1 ชิ้น
- Cursor aura, scroll reveal และ hero orbit เป็น motion หลักที่เพียงพอแล้ว
- ไม่เพิ่ม particle background, custom cursor รูปทรงซับซ้อน, horizontal scroll หรือ 3D tilt พร้อมกัน
- เมื่อใส่ข้อมูลจริง ต้องลบ placeholder link และ metrics ที่ไม่ใช้ ไม่ปล่อยทุกตัวไว้บน production
- Gallery ใช้ 4 รูปบนหน้าแรก ส่วน detail page อาจใช้ 6–10 รูปได้
- หาก section ใดไม่ช่วยให้ recruiter ตัดสินใจเรียกสัมภาษณ์ ควรย้ายไป detail page หรือตัดออก

### Beyond code / งานอดิเรก

ควรเพิ่มเพื่อให้คนจดจำบุคลิกได้ แต่ไม่ควรทำเป็น section ใหญ่ในตอนนี้

รูปแบบที่แนะนำ:

- ใช้แถบเล็กชื่อ `Beyond code` ใกล้ Journey หรือก่อน Contact
- เลือกงานอดิเรกจริงไม่เกิน 3 อย่าง
- เขียนเป็นคำสั้นพร้อมเหตุผลหนึ่งบรรทัด ไม่ใช้ skill bar
- เลือกสิ่งที่ช่วยเปิดบทสนทนาในการสัมภาษณ์ หรือสะท้อนความอยากรู้อยากเห็น วินัย และวิธีคิด
- ห้ามสมมติงานอดิเรกแทนเจ้าของเว็บ ต้องได้รับข้อมูลจริงก่อนเพิ่ม

ตัวอย่างโครงสร้างข้อความ:

```text
Beyond code
Photography — I enjoy finding structure in ordinary scenes.
Running — A quiet system for consistency and reset.
Music — [personal detail in one sentence].
```

ตัวอย่างข้างต้นเป็นเพียงรูปแบบ ห้ามนำขึ้นเว็บจนกว่าจะยืนยันว่าเป็นงานอดิเรกจริง

## 10. Content Rules

- ทุกโปรเจกต์ควรตอบให้ได้: ปัญหาคืออะไร, เรารับผิดชอบอะไร, ทำอย่างไร, ผลลัพธ์คืออะไร
- Metrics ที่ไม่ยืนยันต้องใช้ `XX`, `XX%`, `XXh` และติดคำว่า `replace later`
- หลีกเลี่ยงคำกว้าง เช่น “improved performance” หากไม่มีหลักฐาน
- Project cover ต้องอธิบายผลิตภัณฑ์ได้โดยไม่ต้องอ่านย่อหน้ายาว
- External link แสดงเมื่อมี URL จริงเท่านั้น ระหว่างรอใช้ placeholder ที่ไม่คลิก
- ภาษาอังกฤษควรกระชับและใช้ active voice

## 11. Component Language

Components หลัก:

- `SectionLabel` — หมายเลขวงกลม + mono label
- `HeroSystem` — orbital signature
- `ProjectGallery` — main image + thumbnails + controls
- `ProjectMetrics` — ตัวเลข impact สามช่อง
- `CaseStudyTabs` — Problem / My role / Challenge / Result
- `SkillGrid` — สี่หมวดทักษะ
- `CareerBrief` — target role, work mode, availability, languages
- `ContactStatement` — CTA ขนาดใหญ่บน Cobalt

กติกา component:

- ใช้ border และ spacing ก่อนใช้ shadow
- Shadow ใช้เฉพาะ element ที่ลอยจริง เช่น floating tag
- Border radius ต่ำสำหรับ panel และใช้ pill เฉพาะ metadata/tag/control
- Interaction ต้องรองรับ keyboard และมี accessible label

## 12. Accessibility

- Contrast ของข้อความหลักต้องผ่าน WCAG AA
- ปุ่ม gallery มี `aria-label` และ `aria-pressed`
- Tabs ใช้ `role="tablist"`, `role="tab"`, `aria-selected`
- รูปจริงต้องมี alt text อธิบายสิ่งที่เห็น ไม่ใช้ชื่อไฟล์เป็น alt
- Decorative signal, grid และ cursor aura ใช้ `aria-hidden`
- Motion ทุกประเภทต้องเคารพ `prefers-reduced-motion`
- Touch target ไม่ควรเล็กกว่า 40px ในส่วนสำคัญ

## 13. Technical Architecture

โปรเจกต์มี build surface สองแบบ:

- Sites / vinext: `npm run build`
- Vercel static React + Vite: `npm run build:vercel`

Quality gate ของ Vercel:

```text
npm run lint → Vite production build → deploy
```

ไฟล์สำคัญ:

- `app/page.tsx` — content, interactions และ page composition
- `app/globals.css` — design tokens, layout, motion และ responsive rules
- `vite.vercel.config.ts` — Vercel build
- `vercel.json` — production output configuration
- `public/images/` — project gallery assets
- `public/og.png` — social preview card

## 14. Do / Don't

### Do

- ใช้พื้นที่ว่างและ scale สร้างความพรีเมียม
- ทำ animation ช้าและมีน้ำหนัก
- ใช้ Acid Lime เป็น signal ที่มีจุดประสงค์
- เล่า process และผลลัพธ์ของโปรเจกต์
- รักษา grid และเส้นบางให้สม่ำเสมอ

### Don't

- เพิ่ม gradient สีรุ้งหรือ glassmorphism หลายชั้น
- ใส่ card โค้งมนและ shadow ทุก section
- ทำ cursor effect ใหญ่หรือสว่างจนรบกวนการอ่าน
- แสดงทุกโปรเจกต์บนหน้าแรก
- ใส่ metrics ที่ไม่สามารถอธิบายในห้องสัมภาษณ์ได้
- เพิ่ม animation ที่เล่นซ้ำทุกครั้งเมื่อเลื่อนขึ้นลง

## 15. Next Recommended Phase

1. รวบรวมชื่อและข้อมูลอีก 4–5 โปรเจกต์
2. เลือก category และกำหนดว่าโปรเจกต์ใด featured
3. เตรียมรูป 3–6 รูปต่อโปรเจกต์
4. สร้าง `/projects` index
5. สร้าง detail page สำหรับ 1–2 case studies ที่แข็งแรงที่สุด
6. เติม demo URL, repository URL และ metrics ที่ยืนยันแล้ว
7. ตรวจ mobile crop และ alt text หลังใส่รูปจริง

## 16. Review Checklist

ก่อน push หรือ deploy ทุกครั้ง:

- [ ] Featured projects บนหน้าแรกไม่เกิน 3 ชิ้น
- [ ] ไม่มี `XX` ที่หลงเหลือโดยไม่ได้ตั้งใจในเวอร์ชันสมัครงานจริง
- [ ] รูปทุกไฟล์โหลดและ crop สวยทั้ง desktop/mobile
- [ ] External links เปิดปลายทางถูกต้อง
- [ ] ESLint ผ่าน
- [ ] Sites build ผ่าน
- [ ] Vercel build ผ่าน
- [ ] Keyboard ใช้ gallery และ tabs ได้
- [ ] Reduced-motion mode ยังอ่านเนื้อหาได้ครบ
- [ ] Social preview ยังตรงกับ visual identity ปัจจุบัน
