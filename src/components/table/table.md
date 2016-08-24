Sticky header table:

    const data = require('./data.js');

    <Table>
      <Thead>
        <Tr>
          <Th width={40}>Instrument</Th>
          <Th width="80px" align="center">Quantity</Th>
          <Th>Price</Th>
          <Th align="right">Performance 1D</Th>
        </Tr>
      </Thead>
      <Tbody size="xs" colorAlternateRows={false} borderBottom>
        { data.map((instrument, index) => (
          <Tr border={index === 0 ? true : false} sticky={index === 0 ? true : false}>
            <Td width={40}>
              { instrument[0] }
            </Td>
            <Td mono borderLeft width="80px" align="center">
              { Math.round(Math.random() * instrument[1], 10) }
            </Td>
            <Td mono borderLeft borderRight highlight="warning">
              { instrument[2] }
            </Td>
            <Td mono modifier={ instrument[3] > 0 ? 'success' : 'danger' } align="right">
              { instrument[3] }%
            </Td>
          </Tr>
        )) }
      </Tbody>
    </Table>

Scrollable table:

    const data = require('./data.js');

    <Table>
      <Thead>
        <Tr>
          <Th>Instrument</Th>
          <Th borderLeft>Quantity</Th>
          <Th>Price</Th>
          <Th>Performance 1D</Th>
        </Tr>
      </Thead>
      <Tbody size="xs" maxHeight={ 128 }>
        { data.map(instrument => (
          <Tr>
            <Td>{ instrument[0] }</Td>
            <Td mono borderLeft>{ Math.floor(Math.random() * instrument[1]) }</Td>
            <Td mono highlight="warning">{ instrument[2] }</Td>
            <Td mono modifier={ instrument[3] > 0 ? 'success' : 'danger' }>{ instrument[3] }%</Td>
          </Tr>
        )) }
      </Tbody>
    </Table>
