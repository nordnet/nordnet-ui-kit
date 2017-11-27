    const divSize = 150;

    <div style={{display: 'flex'}}>
      <div style={{width: divSize, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <InstrumentBadge
          qualified
          subText="Qualified"
          size="sm"
        />
      </div>
      <div style={{width: divSize, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <InstrumentBadge
          subText="No chance lance"
          subTextPlacement="right"
          subTextFontSize={12}
        />
      </div>
      <div style={{width: divSize, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <InstrumentBadge
          tooltipContent={<span>Tjena</span>}
          qualified
          showBackgroundCircle
          size="md"
        />
      </div>
      <div style={{width: divSize, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <InstrumentBadge
          subText="Any text OK"
          subTextFontSize={12}
          size="md"
        />
      </div>
      <div style={{width: divSize, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <InstrumentBadge
          subText="Unqualified"
          subTextPlacement="right"
          size="md"
        />
      </div>
    </div>
