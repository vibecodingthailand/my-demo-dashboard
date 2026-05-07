// Main app — composes all 3 portfolio variations into a Design Canvas.

const App = () => {
  const W = 1280;
  const H = 880;

  return (
    <DesignCanvas>
      <DCSection
        id="editorial"
        title="A · Editorial Paper"
        subtitle="กระดาษอุ่น · serif หัวเรื่อง · เว้นวรรคแบบนิตยสาร · 4 หน้า"
      >
        <DCArtboard id="ed-home" label="Home" width={W} height={H}>
          <EditorialHome />
        </DCArtboard>
        <DCArtboard id="ed-about" label="About" width={W} height={H}>
          <EditorialAbout />
        </DCArtboard>
        <DCArtboard id="ed-work" label="Work" width={W} height={H}>
          <EditorialWork />
        </DCArtboard>
        <DCArtboard id="ed-contact" label="Contact" width={W} height={H}>
          <EditorialContact />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="swiss"
        title="B · Swiss Grid"
        subtitle="ตารางเรียบ · sans เรียบร้อย · จังหวะแน่น · เน้นความน่าเชื่อถือ"
      >
        <DCArtboard id="sw-home" label="Home" width={W} height={H}>
          <SwissHome />
        </DCArtboard>
        <DCArtboard id="sw-about" label="About" width={W} height={H}>
          <SwissAbout />
        </DCArtboard>
        <DCArtboard id="sw-work" label="Work" width={W} height={H}>
          <SwissWork />
        </DCArtboard>
        <DCArtboard id="sw-contact" label="Contact" width={W} height={H}>
          <SwissContact />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="mono"
        title="C · Mono Terminal"
        subtitle="อารมณ์ developer · monospace · พื้นเข้ม · จังหวะเหมือน README"
      >
        <DCArtboard id="mo-home" label="Home" width={W} height={H}>
          <MonoHome />
        </DCArtboard>
        <DCArtboard id="mo-about" label="About" width={W} height={H}>
          <MonoAbout />
        </DCArtboard>
        <DCArtboard id="mo-work" label="Work" width={W} height={H}>
          <MonoWork />
        </DCArtboard>
        <DCArtboard id="mo-contact" label="Contact" width={W} height={H}>
          <MonoContact />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
