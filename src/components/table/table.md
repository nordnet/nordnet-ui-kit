Sticky header table:

    const data = require('./data.js');
    const iconStyle = {
      backgroundColor: '#454545',
      color: '#fff',
      width: 35,
      height: 35,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
    };

    <Table>
      <Thead>
        <Tr>
          <Th width={"50px"}>&nbsp;</Th>
          <Th width={40}>Instrument</Th>
          <Th width="80px" align="center">Quantity</Th>
          <Th>Price</Th>
          <Th align="right">Performance 1D</Th>
        </Tr>
      </Thead>
      <Tbody colorAlternateRows={true} borderBottom>
        { data.map((instrument, index) => (
          <Tr key={instrument[0]} border={index === 0 ? true : false} sticky={index === 0 ? true : false}>
            <Td width={"50px"}>
              <span style={iconStyle}>{ instrument[0].substring(0, 3) }</span>
            </Td>
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
          <Tr key={instrument[0]}>
            <Td>{ instrument[0] }</Td>
            <Td mono borderLeft>{ Math.floor(Math.random() * instrument[1]) }</Td>
            <Td mono highlight="warning">{ instrument[2] }</Td>
            <Td mono modifier={ instrument[3] > 0 ? 'success' : 'danger' }>{ instrument[3] }%</Td>
          </Tr>
        )) }
      </Tbody>
    </Table>
