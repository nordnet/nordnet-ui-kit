    const data = [[
      'Tobii',
      20,
      2.2,
      273.8,
    ], [
      'Star B',
      15,
      -4.3,
      93.6,
    ], [
      'Fing B',
      12,
      5.12,
      63.7,
    ]];

    <Table>
      <Thead>
        <Tr>
          <Th>Instrument</Th>
          <Th borderLeft>Quantity</Th>
          <Th>Performance 1D</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody size="xs">
        { data.map(instrument => (
          <Tr>
            <Td>{ instrument[0] }</Td>
            <Td mono borderLeft>{ instrument[1] }</Td>
            <Td mono modifier={ instrument[2] > 0 ? 'success' : 'danger' }>{ instrument[2] }</Td>
            <Td mono highlight="warning">{ instrument[3] }</Td>
          </Tr>
        )) }
      </Tbody>
    </Table>
