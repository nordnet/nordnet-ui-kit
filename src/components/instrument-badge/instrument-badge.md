    const divSize = 150;

    <div style={{display: 'flex'}}>
      <div style={{width: divSize, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <InstrumentBadge
          qualified
          instrumentLvl={2}
          subText="Qualified"
          size="sm"
        />
      </div>
      <div style={{width: divSize, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <InstrumentBadge
          instrumentLvl={9}
          subText="No chance lance"
          subTextPlacement="right"
          subTextFontSize={12}
        />
      </div>
      <div style={{width: divSize, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <InstrumentBadge
          tooltipContent={<span>tjena</span>}
          qualified
          showBackgroundCircle
          instrumentLvl={3}
          size="md"
        />
      </div>
      <div style={{width: divSize, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <InstrumentBadge
          instrumentLvl={7}
          subText="Any text ok"
          size="md"
        />
      </div>
      <div style={{width: divSize, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <InstrumentBadge
          qualifyBadgeDisabled
          instrumentLvl={7}
          subText="Unqualified"
          subTextPlacement="right"
          size="md"
        />
      </div>
    </div>
