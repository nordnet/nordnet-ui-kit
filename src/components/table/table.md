    const data = [
      ['Hennes & Mauritz AB, H & M ser. B', 10, 271, -0.48],,
      ['Ericsson, Telefonab. L M ser. B', 10, 61.4, -0.73],
      ['Boliden AB', 10, 192.1, -0.16],
      ['Fingerprint Cards AB ser. B', 10, 106.8, 0.28],
      ['SKF, AB ser. B', 10, 142, 0.92],
      ['Nordea Bank AB', 10, 78.55, -0.19],
      ['Skandinaviska Enskilda Banken ser. A', 10, 77.4, -0.06],
      ['Swedbank AB ser A', 10, 187.5, -0.21],
      ['Sandvik AB', 10, 94.4, -0.47],
      ['Svenska Cellulosa AB SCA ser. B', 10, 256, 0.23],
      ['Volvo, AB ser. B', 10, 89.8, -0.17],
      ['Telia Company AB', 10, 39.28, -0.58],
    ];

    <Table>
      <Thead>
        <Tr>
          <Th>Instrument</Th>
          <Th borderLeft>Quantity</Th>
          <Th>Price</Th>
          <Th>Performance 1D</Th>
        </Tr>
      </Thead>
      <Tbody size="xs">
        { data.map(instrument => (
          <Tr>
            <Td>{ instrument[0] }</Td>
            <Td mono borderLeft>{ instrument[1] }</Td>
            <Td mono highlight="warning">{ instrument[2] }</Td>
            <Td mono modifier={ instrument[3] > 0 ? 'success' : 'danger' }>{ instrument[3] }%</Td>
          </Tr>
        )) }
      </Tbody>
    </Table>
