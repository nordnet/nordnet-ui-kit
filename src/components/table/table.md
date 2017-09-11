Sticky header table:

    const { Table, Thead, Tbody, Tfoot, Th, Tr, Td } = require('../../'); // nordnet-ui-kit
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
        <Tr sticky>
          <Th width={"50px"}>&nbsp;</Th>
          <Th width={40}>Instrument</Th>
          <Th width="80px" align="center">Quantity</Th>
          <Th>Price</Th>
          <Th align="right">Performance 1D</Th>
        </Tr>
      </Thead>
      <Tbody colorAlternateRows={false} borderBottom>
        { data.map((instrument, index) => (
          <Tr key={instrument[0]}>
            <Td width={"50px"}>
              <span style={iconStyle}>{ instrument[0].substring(0, 3) }</span>
            </Td>
            <Td width={40}>
              { instrument[0] }
            </Td>
            <Td mono width="80px" align="center">
              { Math.round(Math.random() * instrument[1], 10) }
            </Td>
            <Td mono highlight="warning">
              { instrument[2] }
            </Td>
            <Td mono modifier={ instrument[3] > 0 ? 'success' : 'danger' } align="right">
              { instrument[3] }%
            </Td>
          </Tr>
        )) }
      </Tbody>
      <Tfoot>
        <Tr>
        <Td width={"50px"}></Td>
          <Td width={40}></Td>
          <Td mono width="80px" align="center"></Td>
          <Td mono highlight="warning">
            Total price
          </Td>
          <Td mono align="right">
            Total perf
          </Td>
        </Tr>
      </Tfoot>
    </Table>

Scrollable table:

    const { Table, Thead, Tbody, Tfoot, Th, Tr, Td } = require('../../'); // nordnet-ui-kit
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
