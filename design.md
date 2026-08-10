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

- Desktop content width สูงสุด `1280px` และจัดกึ่งกลาง viewport
- กรอบเนื้อหาหลักมีระยะขอบอย่างน้อย `24px` ทุกขนาดหน้าจอ
- Hero มี inner padding เพิ่มอีก `14–24px` เพื่อให้หัวข้อใหญ่ ตัวเอียง และปุ่มไม่แตะกรอบตกแต่ง
- Section spacing desktop ประมาณ `140px`
- ใช้เส้น 1px และ grid เพื่อจัดระเบียบแทน card เงาจำนวนมาก
- Layout หลักเป็น asymmetric grid เพื่อให้ดู editorial และมีเอกลักษณ์
- Mobile ลด section spacing เหลือประมาณ `95px` และเปลี่ยน grid เป็นหนึ่งคอลัมน์

Breakpoints ปัจจุบัน:

- `960px` — tablet / compact desktop
- `680px` — mobile

## 6. Hero Direction

Hero ด้านขวา **ไม่ใช้รูปโปรไฟล์** ตามการตัดสินใจล่าสุด เพราะไม่มีภาพที่เหมาะสม

เส้นสี่เหลี่ยมจาง ๆ ด้านหลัง Hero คือ **Engineering grid** ขนาด `72px` ใช้เป็นพื้นผิวตกแต่งเพื่อสื่อถึงระบบและงานวิศวกรรม ไม่ใช่ตารางข้อมูล โดยใช้ opacity ต่ำและค่อย ๆ จางไปทางขวา

ใช้ orbital engineering system แทน ประกอบด้วย:

- วงโคจรสองชั้น
- จุด signal สี Cobalt และ Acid Lime
- Core text: `PRODUCT × ENGINEERING`

ไม่มี floating tags รอบวงโคจร เพื่อให้ visual signature สะอาดและรักษา focus ไว้ที่ Core

## 7. Project Image System

แต่ละ featured project รองรับจำนวนรูปไม่เท่ากัน โดย starter ปัจจุบันมีตั้งแต่ 2–6 รูป:

1. Cover — ภาพรวมที่แข็งแรงที่สุด
2. Core interaction — feature หรือ interaction สำคัญ
3. Result / secondary feature — ผลลัพธ์หรือหน้ารอง
4. Flow / detail — ลำดับการใช้งานหรือรายละเอียดระบบ
5. Supporting screens — เพิ่มเท่าที่จำเป็นต่อเรื่องราวของโปรเจกต์

Gallery behavior:

- รูปหลักอัตราส่วน 16:9 บน desktop และ 4:3 บน mobile
- Thumbnail rail อยู่ด้านขวาบน desktop และเรียงแนวนอนบน mobile พร้อม scroll เมื่อจำนวนรูปเกินพื้นที่
- มี Previous / Next controls และตัวนับตามจำนวนจริง เช่น `01 / 06`
- รูปที่เลือกใช้ Acid Lime เป็น active state
- รูปจริง fade in และขยายเล็กน้อยเมื่อ hover
- หากยังไม่มีรูป จะแสดง premium technical placeholder พร้อมชื่อไฟล์ที่ต้องใส่

รูปของแต่ละโปรเจกต์แยกไว้ใน `public/images/projects/<project-name>/` และรายชื่อไฟล์อยู่ใน `public/images/README.md`

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

### 8.4 Language

- เว็บไซต์ใช้ภาษาอังกฤษเท่านั้น
- ค่า `lang` บน `<html>` คงเป็น `en`
- ไม่มี language switch, translation dictionary หรือการจำภาษาผ่าน `localStorage`
- ชื่อบุคคล ชื่อโปรเจกต์ ชื่อบริษัท และเทคโนโลยีคงรูปแบบภาษาอังกฤษเดิม

### 8.5 Ambient motion

- Hero orbit หมุนช้า 24–30 วินาที
- Project underline และลูกศรตอบสนองต่อ hover
- Gallery image zoom ไม่เกินประมาณ 2.5%

### 8.6 Reduced motion

เมื่อ `prefers-reduced-motion: reduce`:

- ปิด smooth scroll
- ลด animation และ transition เหลือเกือบทันที
- Cursor aura ไม่ทำงาน
- เนื้อหาต้องยังแสดงครบและใช้งานได้

### 8.7 Edge safety / ขอบจอ

- Container หลักเว้นขอบอย่างน้อย 24px ทั้ง desktop และ mobile และ Hero มี inner padding เพิ่มอีกชั้น
- Hero ไม่ใช้ `overflow: hidden` เพราะจะตัดส่วน overhang ของตัวอักษร serif/italic
- ใช้ `minmax(0, 1fr)` และ `min-width: 0` กับ Grid child เพื่อให้ข้อความยาวหดและตัดบรรทัดภายใน Container
- `body` ใช้ `overflow-x: clip` ป้องกัน decorative element สร้าง horizontal scrollbar โดยไม่ตัด glyph ที่ขอบ Container
- บน mobile ปุ่ม Resume เหลือไอคอน Download เพื่อไม่ให้ Navigation ชนขอบ

## 9. Content Architecture

หน้าแรกทำหน้าที่เป็น **curated introduction + complete project showcase** โดยแสดงโปรเจกต์หลักครบทั้ง 7 รายการ

### Current structure: Single page

```text
Home
├── Hero / Positioning
├── Selected Work / Full Project Cards 7 ชิ้น
├── Expertise / Journey
└── Contact
```

### Homepage project policy

- ใช้หัวข้อ `SELECTED WORK` และ `Projects with real-world signal.`
- โปรเจกต์ทั้ง 7 รายการมีน้ำหนักเท่ากันในรูปแบบ full-width project card ไม่มีการแบ่ง 3 โปรเจกต์หลัก + 4 โปรเจกต์ย่อย
- ลำดับหลัก: `01 Check PD`, `02 Gen-H: Let’s Move`, `03 NashGUI`, `04 Aurum`, `05 Project-nutrition`, `06 Autocar`, `07 repair-report`
- ทุกการ์ดแสดง gallery หลายรูป, ชื่อ, subtitle, role, period, status, description, impact และ tech stack โดยไม่แสดง metrics grid
- จำนวนรูปของแต่ละโปรเจกต์ยืดหยุ่นได้ ไม่บังคับให้เท่ากัน และ thumbnail rail ต้อง scroll ได้เมื่อรูปมีจำนวนมาก
- Container ของ Selected Work ห้ามใช้ `scroll-reveal` เพราะความสูงหลาย viewport จะทำให้ IntersectionObserver ไม่ถึง threshold; ใช้ reveal เฉพาะการ์ดแต่ละใบ
- ไม่มีหน้า `/projects`; เนื้อหาโปรเจกต์ทั้งหมดอยู่หน้าแรก
- ค่าที่ยังไม่มีข้อมูลจริงใช้ placeholder ที่มองออกชัดเจนและแก้ได้จาก project data ส่วนกลาง
- Hero orbital graphic ไม่มี floating tags รอบวงกลม เพื่อให้ focal point สะอาดและไม่แย่งความสนใจจาก headline

### Complexity budget — ป้องกันเว็บดูแน่นหรือเละ

เวอร์ชันปัจจุบันอยู่ใกล้เพดานของ interaction ที่เหมาะสมแล้ว จึงไม่ควรเพิ่ม visual effect หลักอีกโดยไม่ตัดของเดิม

กติกา:

- หนึ่ง viewport ควรมี signature motion ที่เด่นเพียงหนึ่งอย่าง
- Project cards เป็นส่วนข้อมูลหลักของหน้า จึงไม่เพิ่ม featured case study ซ้ำอีกชั้น
- Cursor aura, scroll reveal และ hero orbit เป็น motion หลักที่เพียงพอแล้ว
- ไม่เพิ่ม particle background, custom cursor รูปทรงซับซ้อน, horizontal scroll หรือ 3D tilt พร้อมกัน
- Placeholder ของ Demo และ Repository ต้องไม่ทำท่าทางเหมือนลิงก์จนกว่าจะมี URL จริง
- หาก section ใดไม่ช่วยให้ recruiter ตัดสินใจเรียกสัมภาษณ์ ควรย้ายไป detail page หรือตัดออก

## 10. Content Rules

- ทุกโปรเจกต์ควรตอบให้ได้: ปัญหาคืออะไร, เรารับผิดชอบอะไร, ทำอย่างไร, ผลลัพธ์คืออะไร
- ไม่แสดง Metrics ใน project cards; หากจะนำกลับมาต้องเป็นข้อมูลจริงที่ตรวจสอบได้และได้รับการอนุมัติก่อน
- หลีกเลี่ยงคำกว้าง เช่น “improved performance” หากไม่มีหลักฐาน
- Project cover ต้องอธิบายผลิตภัณฑ์ได้โดยไม่ต้องอ่านย่อหน้ายาว
- External link แสดงเมื่อมี URL จริงเท่านั้น ระหว่างรอใช้ placeholder ที่ไม่คลิก
- ภาษาอังกฤษควรกระชับและใช้ active voice

## 11. Component Language

Components หลัก:

- `SectionLabel` — หมายเลขวงกลม + mono label
- `HeroSystem` — orbital signature
- `ProjectGallery` — รูปหลัก ปุ่ม Previous/Next และ thumbnail rail ที่รองรับจำนวนรูปไม่เท่ากัน
- `ProjectCard` — case-study preview เต็มรูปแบบสำหรับโปรเจกต์ทั้ง 7 รายการ
- `SkillGrid` — สี่หมวดทักษะ
- `ContactStatement` — CTA ขนาดใหญ่บน Cobalt

ส่วน `Principles`, `CareerBrief`, `WorkingStyle`, `BeyondCode` และ supporting copy ที่ไม่จำเป็นถูกนำออกจากหน้าเพื่อให้เนื้อหากระชับขึ้น โดยเก็บต้นฉบับและแนวทางคืนค่าไว้ใน `delete.md`

กติกา component:

- ใช้ border และ spacing ก่อนใช้ shadow
- Shadow ใช้เฉพาะ element ที่ลอยจริงและจำเป็นต่อ hierarchy
- Border radius ต่ำสำหรับ panel และใช้ pill เฉพาะ metadata/tag/control
- Interaction ต้องรองรับ keyboard และมี accessible label

## 12. Accessibility

- Contrast ของข้อความหลักต้องผ่าน WCAG AA
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
- `app/project-images.ts` — รายชื่อไฟล์และ label ของรูปทั้งหมด แก้ชื่อหรือจำนวนรูปได้จากจุดเดียว
- `app/globals.css` — design tokens, layout, motion และ responsive rules
- `vite.vercel.config.ts` — Vercel build
- `vercel.json` — production output configuration
- `public/images/projects/` — project gallery assets แยกโฟลเดอร์ตามโปรเจกต์
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
- เพิ่ม case study section ซ้ำกับข้อมูลที่มีอยู่ในการ์ดโปรเจกต์
- นำ metrics grid หรือ floating tags กลับมาโดยไม่มีเหตุผลด้านเนื้อหา
- เพิ่ม animation ที่เล่นซ้ำทุกครั้งเมื่อเลื่อนขึ้นลง

## 15. Next Recommended Phase

1. เปลี่ยนไฟล์รูป placeholder ใน `public/images/` ด้วย screenshot จริงของแต่ละโปรเจกต์
2. แทนค่า draft subtitle, role, period, description, impact และ tech stack ด้วยข้อมูลจริง
3. เติม Demo หรือ Repository link เฉพาะรายการที่มีปลายทางจริง

## 16. Review Checklist

ก่อน push หรือ deploy ทุกครั้ง:

- [ ] หน้าแรกแสดง full project card ครบทั้ง 7 รายการและไม่มี compact archive หลงเหลือ
- [ ] Gallery ของแต่ละโปรเจกต์เปลี่ยนรูปได้ทั้งปุ่ม Previous/Next และ thumbnail
- [ ] External links เปิดปลายทางถูกต้อง
- [ ] ESLint ผ่าน
- [ ] Sites build ผ่าน
- [ ] Vercel build ผ่าน
- [ ] Reduced-motion mode ยังอ่านเนื้อหาได้ครบ
- [ ] Social preview ยังตรงกับ visual identity ปัจจุบัน
