// Variation A — Editorial Paper
// Warm paper background, serif-led headlines, magazine-style spacing.
// Pages: Home / About / Work / Contact

const edPalette = {
  paper: '#f4efe6',
  paperDeep: '#ede6d6',
  ink: '#1f1b14',
  inkSoft: '#5b5347',
  rule: 'rgba(31,27,20,0.18)',
  accent: '#7a3d20', // burnt sienna
};

const edStyles = {
  page: {
    width: '100%',
    height: '100%',
    background: edPalette.paper,
    color: edPalette.ink,
    fontFamily: '"Inter", "Sarabun", -apple-system, sans-serif',
    fontSize: 14,
    lineHeight: 1.55,
    overflow: 'hidden',
    position: 'relative',
  },
  serif: {
    fontFamily: '"Fraunces", "Noto Serif Thai", Georgia, serif',
    fontVariationSettings: '"opsz" 144, "SOFT" 30',
  },
  nav: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    padding: '28px 56px',
    borderBottom: `1px solid ${edPalette.rule}`,
  },
  navLink: {
    fontSize: 13,
    letterSpacing: '0.02em',
    color: edPalette.inkSoft,
    cursor: 'pointer',
  },
  navLinkActive: {
    color: edPalette.ink,
    borderBottom: `1px solid ${edPalette.ink}`,
    paddingBottom: 2,
  },
  brand: {
    fontFamily: '"Fraunces", serif',
    fontVariationSettings: '"opsz" 144',
    fontWeight: 500,
    fontSize: 22,
    letterSpacing: '-0.01em',
    fontStyle: 'italic',
  },
  rule: { borderTop: `1px solid ${edPalette.rule}`, height: 1, width: '100%' },
};

const EdNav = ({ active = 'home' }) => {
  const links = [
    ['home', 'Home', 'หน้าแรก'],
    ['about', 'About', 'เกี่ยวกับ'],
    ['work', 'Work', 'ผลงาน'],
    ['contact', 'Contact', 'ติดต่อ'],
  ];
  return (
    <nav style={edStyles.nav}>
      <div style={edStyles.brand}>Krish<span style={{color:edPalette.accent}}>·</span>dev</div>
      <div style={{ display: 'flex', gap: 36 }}>
        {links.map(([k, en]) => (
          <span
            key={k}
            style={{
              ...edStyles.navLink,
              ...(active === k ? edStyles.navLinkActive : {}),
            }}
          >
            {en}
          </span>
        ))}
      </div>
      <div style={{ fontSize: 12, color: edPalette.inkSoft, fontVariantNumeric: 'tabular-nums' }}>
        Bangkok · GMT+7
      </div>
    </nav>
  );
};

// ---------- HOME ----------
const EditorialHome = () => (
  <div style={edStyles.page}>
    <EdNav active="home" />
    <div style={{ padding: '64px 56px 40px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:56 }}>
      <div>
        <div style={{ fontSize: 12, letterSpacing:'0.18em', textTransform:'uppercase', color: edPalette.inkSoft, marginBottom: 28 }}>
          Vol. 10 — Independent practice
        </div>
        <h1 style={{
          ...edStyles.serif, fontWeight: 350, fontSize: 96, lineHeight: 0.96,
          letterSpacing: '-0.025em', margin: '0 0 28px', color: edPalette.ink,
        }}>
          A developer<br/>
          <em style={{fontFamily:'"Fraunces", serif', fontVariationSettings:'"opsz" 144, "SOFT" 100', fontWeight:300}}>thinking</em> in<br/>
          systems.
        </h1>
        <p style={{ ...edStyles.serif, fontSize: 19, lineHeight: 1.55, color: edPalette.inkSoft, fontWeight: 300, maxWidth: 460, margin: 0, fontFamily:'"Noto Serif Thai", "Fraunces", serif' }}>
          Krish — วิศวกรซอฟต์แวร์ผู้ทำงานกับเว็บมาสิบปี.
          ชอบเขียนระบบที่อ่านง่าย ออกแบบให้เรียบ และอยู่ทน.
        </p>

        <div style={{ marginTop: 56, display:'flex', gap:32, alignItems:'center' }}>
          <a style={{ fontSize: 14, color: edPalette.ink, borderBottom:`1px solid ${edPalette.ink}`, paddingBottom:3, textDecoration:'none' }}>
            Read about my practice →
          </a>
          <span style={{ fontSize:12, color: edPalette.inkSoft, fontFamily:'"IBM Plex Mono", monospace' }}>
            est. 2015
          </span>
        </div>
      </div>

      <div style={{ position:'relative' }}>
        <div style={{
          width:'100%', aspectRatio:'4/5', background: edPalette.paperDeep,
          backgroundImage: `repeating-linear-gradient(135deg, transparent 0 14px, rgba(31,27,20,0.04) 14px 15px)`,
          border: `1px solid ${edPalette.rule}`,
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'"IBM Plex Mono", monospace', fontSize: 11, color: edPalette.inkSoft,
          letterSpacing:'0.1em',
        }}>
          [ portrait · 4:5 ]
        </div>
        <div style={{
          position:'absolute', top: 16, right: -8,
          background: edPalette.paper, padding: '4px 10px',
          fontFamily:'"IBM Plex Mono", monospace', fontSize: 10,
          color: edPalette.accent, letterSpacing: '0.12em',
        }}>
          FIG. 01
        </div>
      </div>
    </div>

    <div style={{ padding: '0 56px', borderTop: `1px solid ${edPalette.rule}`, display:'grid', gridTemplateColumns:'160px 1fr 1fr 1fr', alignItems:'baseline' }}>
      {[
        ['Now', 'กำลังสร้าง infra สำหรับทีมเล็กๆ ที่ Bangkok-based fintech'],
        ['Writing', '"Boring code is good code" — บทความล่าสุด'],
        ['Open to', 'งานที่ปรึกษา · architecture review · code coaching'],
      ].map(([k, v], i) => (
        <React.Fragment key={k}>
          {i === 0 && <div style={{ padding:'24px 0', fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color: edPalette.inkSoft }}>Status</div>}
          <div style={{ padding:'24px 24px 24px 0', borderRight: i<2 ? `1px solid ${edPalette.rule}`:'none', paddingLeft: i===0?0:24 }}>
            <div style={{ fontSize: 11, letterSpacing:'0.14em', textTransform:'uppercase', color: edPalette.accent, marginBottom: 8 }}>{k}</div>
            <div style={{ ...edStyles.serif, fontSize: 17, lineHeight: 1.4, color: edPalette.ink, fontFamily:'"Noto Serif Thai", "Fraunces", serif', fontWeight:300 }}>{v}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

// ---------- ABOUT ----------
const EditorialAbout = () => (
  <div style={edStyles.page}>
    <EdNav active="about" />
    <div style={{ padding:'56px 56px 40px', display:'grid', gridTemplateColumns:'320px 1fr', gap:64 }}>
      <aside>
        <div style={{
          width:'100%', aspectRatio:'3/4', background: edPalette.paperDeep,
          backgroundImage:`repeating-linear-gradient(135deg, transparent 0 14px, rgba(31,27,20,0.04) 14px 15px)`,
          border:`1px solid ${edPalette.rule}`,
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'"IBM Plex Mono", monospace', fontSize:11, color: edPalette.inkSoft,
        }}>
          [ portrait · 3:4 ]
        </div>
        <div style={{ marginTop: 24, fontFamily:'"IBM Plex Mono", monospace', fontSize: 11, color: edPalette.inkSoft, lineHeight:1.7 }}>
          <div style={{ display:'flex', justifyContent:'space-between' }}><span>BORN</span><span>1992</span></div>
          <div style={{ display:'flex', justifyContent:'space-between' }}><span>BASED</span><span>BANGKOK</span></div>
          <div style={{ display:'flex', justifyContent:'space-between' }}><span>YEARS</span><span>10+</span></div>
          <div style={{ display:'flex', justifyContent:'space-between' }}><span>STACK</span><span>TS · GO · PG</span></div>
        </div>
      </aside>
      <article>
        <div style={{ fontSize: 11, letterSpacing:'0.18em', textTransform:'uppercase', color: edPalette.accent, marginBottom: 18 }}>
          About — เกี่ยวกับฉัน
        </div>
        <h2 style={{ ...edStyles.serif, fontWeight: 350, fontSize: 56, lineHeight: 1.05, letterSpacing:'-0.02em', margin:'0 0 32px' }}>
          ผมเขียนโค้ดเพื่อให้คน<br/>อื่นใช้ชีวิตได้ง่ายขึ้น
        </h2>
        <div style={{ columnCount: 2, columnGap: 40, fontFamily:'"Noto Serif Thai", "Fraunces", serif', fontSize: 15, lineHeight: 1.75, color: edPalette.ink, fontWeight: 300 }}>
          <p style={{ margin: '0 0 14px' }}>
            สิบปีที่แล้วผมเริ่มเขียน PHP ในร้านกาแฟแถวอารีย์
            ทำเว็บให้ร้านอาหารเล็กๆ แลกกับมื้อเย็น.
            วันนี้ผมยังเขียนโค้ดแบบเดียวกัน — เรียบ ตรงไปตรงมา
            และอ่านง่ายในวันที่ผมลืมว่าเขียนอะไรไว้.
          </p>
          <p style={{ margin: '0 0 14px' }}>
            ตอนนี้ทำงานกับทีมขนาด 3–15 คน ส่วนใหญ่เป็น
            startup ที่ต้องตัดสินใจเรื่อง infrastructure
            และอยากได้คนที่เคยทำพลาดมาแล้วหลายรอบ.
          </p>
          <p style={{ margin: 0 }}>
            นอกเวลาทำงาน ผมเขียนบทความเกี่ยวกับ
            "boring technology", ทำสวนเล็กๆ บนระเบียง,
            และพยายามอ่านหนังสือกระดาษให้ได้สัปดาห์ละเล่ม.
          </p>
        </div>

        <div style={{ marginTop: 48, borderTop:`1px solid ${edPalette.rule}`, paddingTop: 28 }}>
          <div style={{ fontSize: 11, letterSpacing:'0.18em', textTransform:'uppercase', color: edPalette.inkSoft, marginBottom: 18 }}>
            A timeline
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'80px 1fr', rowGap:14, fontSize:14 }}>
            {[
              ['2024–', 'Independent · technical advisor for early-stage teams'],
              ['2021', 'Lead engineer · health-tech, Bangkok (Series A)'],
              ['2018', 'Senior · fintech, ย้ายจาก backend ไป platform'],
              ['2015', 'Junior dev · เขียน PHP+jQuery ตอนกลางคืน'],
            ].map(([y,t]) => (
              <React.Fragment key={y}>
                <div style={{ fontFamily:'"IBM Plex Mono", monospace', fontSize:12, color: edPalette.accent, paddingTop:2 }}>{y}</div>
                <div style={{ fontFamily:'"Noto Serif Thai", "Fraunces", serif', fontWeight:300 }}>{t}</div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </article>
    </div>
  </div>
);

// ---------- WORK ----------
const EditorialWork = () => {
  const projects = [
    { n:'01', y:'2024', title:'Settle', sub:'Reconciliation engine for fintech', desc:'ระบบกระทบยอดที่ลด manual ops ลง 70%', tag:'Backend · Go · Postgres' },
    { n:'02', y:'2023', title:'Quietly', sub:'Async-first writing tool', desc:'เครื่องมือเขียนสำหรับทีมที่ไม่อยากประชุม', tag:'Product · TS · React' },
    { n:'03', y:'2022', title:'Field Notes', sub:'CMS for slow journalism', desc:'CMS เล็กๆ ที่ใช้ markdown + git workflow', tag:'Open source' },
    { n:'04', y:'2021', title:'Northwind Health', sub:'Patient intake redesign', desc:'ปรับ intake form ให้คนกรอกได้ใน 4 นาที', tag:'Lead · Health-tech' },
  ];
  return (
    <div style={edStyles.page}>
      <EdNav active="work" />
      <div style={{ padding:'56px 56px 0' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:32 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing:'0.18em', textTransform:'uppercase', color: edPalette.accent, marginBottom: 14 }}>
              Selected work — ผลงานที่เลือก
            </div>
            <h2 style={{ ...edStyles.serif, fontWeight: 350, fontSize: 64, letterSpacing:'-0.02em', margin: 0, lineHeight: 1 }}>
              Twelve projects,<br/><em style={{fontVariationSettings:'"opsz" 144, "SOFT" 100', fontWeight:300}}>four shown.</em>
            </h2>
          </div>
          <div style={{ fontFamily:'"IBM Plex Mono", monospace', fontSize:11, color: edPalette.inkSoft, letterSpacing:'0.1em' }}>
            2021 — 2025
          </div>
        </div>
      </div>

      <div style={{ borderTop:`1px solid ${edPalette.rule}`, marginTop: 24 }}>
        {projects.map((p, i) => (
          <div key={p.n} style={{
            display:'grid',
            gridTemplateColumns:'56px 80px 1fr 1fr 220px',
            alignItems:'baseline',
            padding:'28px 56px',
            borderBottom:`1px solid ${edPalette.rule}`,
            cursor:'pointer',
            transition:'background 0.2s',
          }}
          onMouseEnter={e=>e.currentTarget.style.background=edPalette.paperDeep}
          onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
            <div style={{ fontFamily:'"IBM Plex Mono", monospace', fontSize:11, color:edPalette.inkSoft }}>{p.n}</div>
            <div style={{ fontFamily:'"IBM Plex Mono", monospace', fontSize:12, color:edPalette.accent }}>{p.y}</div>
            <div>
              <div style={{ ...edStyles.serif, fontSize: 28, fontWeight: 400, letterSpacing:'-0.01em' }}>{p.title}</div>
              <div style={{ fontSize: 13, color: edPalette.inkSoft, fontStyle:'italic', marginTop:4, fontFamily:'"Fraunces", serif' }}>{p.sub}</div>
            </div>
            <div style={{ fontFamily:'"Noto Serif Thai", "Fraunces", serif', fontSize:14, color: edPalette.ink, fontWeight: 300 }}>{p.desc}</div>
            <div style={{ fontFamily:'"IBM Plex Mono", monospace', fontSize:11, color:edPalette.inkSoft, textAlign:'right', letterSpacing:'0.05em' }}>{p.tag} →</div>
          </div>
        ))}
      </div>

      <div style={{ padding:'24px 56px', display:'flex', justifyContent:'space-between', fontSize:12, color: edPalette.inkSoft, fontFamily:'"IBM Plex Mono", monospace' }}>
        <span>+ 8 more in archive</span>
        <span>see all →</span>
      </div>
    </div>
  );
};

// ---------- CONTACT ----------
const EditorialContact = () => (
  <div style={edStyles.page}>
    <EdNav active="contact" />
    <div style={{ padding:'120px 56px 56px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 80 }}>
      <div>
        <div style={{ fontSize: 11, letterSpacing:'0.18em', textTransform:'uppercase', color: edPalette.accent, marginBottom: 18 }}>
          Contact — ติดต่อ
        </div>
        <h2 style={{ ...edStyles.serif, fontWeight: 350, fontSize: 80, lineHeight:0.96, letterSpacing:'-0.025em', margin:'0 0 32px' }}>
          Write me<br/><em style={{fontVariationSettings:'"opsz" 144, "SOFT" 100'}}>a letter.</em>
        </h2>
        <p style={{ fontFamily:'"Noto Serif Thai", "Fraunces", serif', fontSize: 17, lineHeight: 1.7, color: edPalette.inkSoft, fontWeight: 300, maxWidth: 420, margin: 0 }}>
          วิธีที่ดีที่สุดในการคุยกับผมคือ email
          เขียนมาเล่าว่ากำลังทำอะไรอยู่ และอยากได้
          ความช่วยเหลือแบบไหน. ผมตอบกลับภายใน
          1–2 วันทำการเสมอ.
        </p>
      </div>

      <div>
        <div style={{ borderTop:`1px solid ${edPalette.ink}`, paddingTop:24 }}>
          <div style={{ fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:edPalette.inkSoft, marginBottom:8 }}>Email</div>
          <a style={{ ...edStyles.serif, fontSize: 36, fontWeight: 400, color: edPalette.ink, textDecoration:'none', letterSpacing:'-0.01em', display:'inline-block', borderBottom:`1px solid ${edPalette.rule}`, paddingBottom:4 }}>
            hello@krish.dev
          </a>
        </div>

        <div style={{ marginTop: 40, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 24 }}>
          <div style={{ borderTop:`1px solid ${edPalette.rule}`, paddingTop:14 }}>
            <div style={{ fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:edPalette.inkSoft, marginBottom:6 }}>Response</div>
            <div style={{ fontFamily:'"Noto Serif Thai", "Fraunces", serif', fontSize:16, fontWeight:300 }}>1–2 วันทำการ</div>
          </div>
          <div style={{ borderTop:`1px solid ${edPalette.rule}`, paddingTop:14 }}>
            <div style={{ fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:edPalette.inkSoft, marginBottom:6 }}>Timezone</div>
            <div style={{ fontFamily:'"Noto Serif Thai", "Fraunces", serif', fontSize:16, fontWeight:300 }}>GMT+7 · Bangkok</div>
          </div>
          <div style={{ borderTop:`1px solid ${edPalette.rule}`, paddingTop:14 }}>
            <div style={{ fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:edPalette.inkSoft, marginBottom:6 }}>Available for</div>
            <div style={{ fontFamily:'"Noto Serif Thai", "Fraunces", serif', fontSize:16, fontWeight:300 }}>ที่ปรึกษา · review · coaching</div>
          </div>
          <div style={{ borderTop:`1px solid ${edPalette.rule}`, paddingTop:14 }}>
            <div style={{ fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:edPalette.inkSoft, marginBottom:6 }}>Not for</div>
            <div style={{ fontFamily:'"Noto Serif Thai", "Fraunces", serif', fontSize:16, fontWeight:300 }}>full-time · งานเร่ง 1 สัปดาห์</div>
          </div>
        </div>

        <div style={{ marginTop: 56, fontFamily:'"IBM Plex Mono", monospace', fontSize: 11, color: edPalette.inkSoft, letterSpacing:'0.08em' }}>
          — signed, k.
        </div>
      </div>
    </div>

    <div style={{ position:'absolute', bottom: 24, left:56, right:56, display:'flex', justifyContent:'space-between', fontSize: 11, fontFamily:'"IBM Plex Mono", monospace', color: edPalette.inkSoft, letterSpacing:'0.1em' }}>
      <span>© 2026 KRISH.DEV</span>
      <span>SET IN FRAUNCES & NOTO SERIF THAI</span>
      <span>BANGKOK / GMT+7</span>
    </div>
  </div>
);
