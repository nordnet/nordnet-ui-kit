    const data = [[
      'Tobii',
      20,
      273.8,
    ], [
      'Star B',
      15,
      93.6,
    ], [
      'Fing B',
      12,
      63.7,
    ]];

    <Table>
      <Thead>
        <Tr>
          <Th>Instrument</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody size="xs">
        { data.map(instrument => (
          <Tr>
            <Td>{ instrument[0] }</Td>
            <Td mono>{ instrument[1] }</Td>
            <Td mono>{ instrument[2] }</Td>
          </Tr>
        )) }
      </Tbody>
    </Table>
