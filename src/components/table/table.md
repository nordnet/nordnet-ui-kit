The UI kit uses [reactable](https://github.com/glittershark/reactable) and applies a custom theme.

    const { Thead, Th, Tr, Td } = require('reactable');
    const { eric, abb } = require('../spark-graph/data.js');
    const columns = ['Instrument', 'Performance', 'Quantity', 'Price'];
    const data = [{
      Instrument: 'Tobii',
      Performance: eric,
      Quantity: 20,
      Price: 273.8,
    }, {
      Instrument: 'Star B',
      Performance: abb,
      Quantity: 15,
      Price: 93.6,
    }, {
      Instrument: 'Fing B',
      Performance: eric,
      Quantity: 12,
      Price: 63.7,
    }];

    function renderRow(data) {
      return (
        <Tr>
          { columns.map(col => renderRowItem(col, data[col])) }
        </Tr>
      );
    }

    function renderRowItem(col, value) {
      if (typeof value === 'number') {
        return <Td className="td--number" column={ col }>{ value }</Td>;
      }

      if (col === 'Performance') {
        return <Td column={col}><SparkGraph height={12} points={value} /></Td>;
      }

      return <Td column={ col }>{ value }</Td>;
    }

    <Table sortable={['Quantity', 'Price']}>
      <Thead className="thead--primary">
        { columns.map(col => (
          <Th className={ col === 'Quantity' || col === 'Price' ? 'th--number' : null }>
            { col }
          </Th>
        )) }
      </Thead>
      { data.map(renderRow) }
    </Table>
