    const divSize = 100;
    <div style={{display: 'flex'}}>
      <div style={{width: divSize}}>
        <InstrumentBadge
          qualified
          instrumentLvl={2}
          subText={'Qualified'}
          size="sm"
        />
      </div>
      <div style={{width: divSize}}>
        <InstrumentBadge
          instrumentLvl={9}
          subText={'Unqualified'}
        />
      </div>
      <div style={{width: divSize}}>
        <InstrumentBadge
          qualified
          backgroundCircle
          instrumentLvl={3}
          size="md"
        />
      </div>
      <div style={{width: divSize}}>
        <InstrumentBadge
          instrumentLvl={7}
          subText={'Any text will do here'}
          size="md"
        />
      </div>
    </div>
