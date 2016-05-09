    const actions = [{
      label: 'Action 1',
      action: () => alert('You pressed action 1'),
    }, {
      label: 'Action 2',
      action: () => alert('You pressed action 2'),
    }];

    <Dropdown toggle="Toggle dropdown" actions={ actions } />
