    const items = [];

    for (var i = 0; i < 20; i++) {
      items.push({
        label: 'Item ' + (i + 1),
      });
    }

    <HorizontalNav items={ items } />
