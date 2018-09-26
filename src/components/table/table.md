Table is a normal "display: table" for breakpoints md and lg and "display: flex" for xs and sm to create a separate mobile mode.

Table with Sticky header and mobile mode using flex-basis, lots of rows to test performance

    // This is a sample component to illustrate how to use the Table List for Mobile works
    // component. This was needed to have a toggle button with state.
    const React = require('react');
    const { Table, Thead, Tbody, Tfoot, Th, Tr, Td, Icon } = require('../../'); // nordnet-ui-kit
    const {data} = require('./data.js');
    const center = {justifyContent: 'center'};

    let tableData = [];
    const multiplyTableWith = 5;

    for(let i = 0; i < multiplyTableWith; i++) {
      tableData = tableData.concat(data);
    }

    class MobileTableSample extends React.PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = {};
        this.toggleCollapsed = (id) => () => { this.setState({ [id]: !this.state[id] }); }
      }

      render() {
        return (
          <Table minWidth={700} tableLayoutFixed>
            <Thead hiddenOnMobile size="sm" sticky stickyBorder>
              <Tr borderBottom>
                <Th width={30}>Instrument</Th>
                <Th>Today</Th>
                <Th>Latest</Th>
                <Th>GAV</Th>
                <Th>Shares</Th>
                <Th>Value SEK</Th>
                <Th width={10}>Performance</Th>
                <Th align="right">Return</Th>
              </Tr>
            </Thead>
            <Tbody colorAlternateRows={false} size="sm">
              <Tr>
                <Td hiddenOnDesktop flexBasisMobile={100} alignMobile="center" style={{fontWeight: 600, backgroundColor: '#F6F6F6' }}>
                  <span>Stocks</span>
                </Td>
              </Tr>
              { tableData.map((instrument, index) => (
                <Tr key={`${instrument[0]}_${index}`}>
                  <Td borderBottom flexOrder={-2} flexBasisMobile={50} width={30} style={{fontWeight: 600}}>
                    { instrument[0] }
                  </Td>

                  <Td borderBottom title="Today" flexBasisMobile={20} alignMobile="right" align="left" onClick={this.toggleCollapsed(`${instrument[0]}_${index}`)} style={{cursor: 'pointer'}}>
                    { instrument[4] }%
                  </Td>

                  <Td borderBottom title="Latest" flexOrder={-1} flexBasisMobile={20} alignMobile="left" onClick={this.toggleCollapsed(`${instrument[0]}_${index}`)} style={{cursor: 'pointer'}}>
                  { instrument[3] }
                  </Td>

                  <Td hiddenOnDesktop borderBottom={!this.state[`${instrument[0]}_${index}`]} flexBasisMobile={10} onClick={this.toggleCollapsed(`${instrument[0]}_${index}`)} style={{cursor: 'pointer'}}>
                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                      { !this.state[`${instrument[0]}_${index}`] ? <Icon.ChevronDown /> : <Icon.ChevronUp />}
                    </div>
                  </Td>

                  <Td hiddenOnDesktop borderBottom flexBasisMobile={40} alignMobile="left" align="left" collapsed={!this.state[`${instrument[0]}_${index}`]}>
                  </Td>

                  <Td borderBottom title="GAV" flexBasisMobile={25} alignMobile="left" align="left" collapsed={!this.state[`${instrument[0]}_${index}`]}>
                    { instrument[3] }
                  </Td>

                  <Td borderBottom title="Shares" flexBasisMobile={25} alignMobile="right" align="left" collapsed={!this.state[`${instrument[0]}_${index}`]}>
                    { instrument[2] }
                  </Td>

                  <Td hiddenOnDesktop flexBasisMobile={10} collapsed={!this.state[`${instrument[0]}_${index}`]}>
                  </Td>

                  <Td borderBottom title="Value SEK" flexBasisMobile={40} alignMobile="left" align="left" collapsed={!this.state[`${instrument[0]}_${index}`]}>
                    { instrument[2] }
                  </Td>

                  <Td borderBottom title="Performance" width={10} flexBasisMobile={25} align="left" style={center} collapsed={!this.state[`${instrument[0]}_${index}`]}>{ instrument[3] }%</Td>

                  <Td borderBottom title="Return" flexBasisMobile={25} alignMobile="right" align="right" collapsed={!this.state[`${instrument[0]}_${index}`]}>
                    { instrument[2] * instrument[3] }
                  </Td>

                  <Td hiddenOnDesktop borderBottom flexBasisMobile={10} collapsed={!this.state[`${instrument[0]}_${index}`]}>
                  </Td>
                </Tr>
              )) }
            </Tbody>
            <Tfoot size="md" hiddenOnMobile>
              <Tr>
                <Td width={30}></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td>1000</Td>
                <Td>12345</Td>
                <Td width={10}>32%</Td>
                <Td align="right">0.123</Td>
              </Tr>
            </Tfoot>
          </Table>
        );
      }
    }
    <MobileTableSample />

Table with two sticky (one with stickyOffset).

    const { Table, Thead, Tbody, Tfoot, Th, Tr, Td } = require('../../'); // nordnet-ui-kit
    const {data} = require('./data.js');

    <Table minWidth={700} size="md">
      <Thead sticky stickyBorder>
        <Tr>
          <Th width={60}>Instrument</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th align="right">Performance 1D</Th>
        </Tr>
      </Thead>
      <Tbody colorAlternateRows={false}>
        <Tr sticky stickyOffset={30} style={{fontStyle: 'italic'}} stickyBorder>
          <Td width={60}>Name</Td>
          <Td></Td>
          <Td>SEK</Td>
          <Td></Td>
        </Tr>
        { data.map(instrument => (
          <Tr key={instrument[0]}>
            <Td width={60} ellipsis>{ instrument[1] }</Td>
            <Td mono>{ Math.floor(Math.random() * instrument[2]) }</Td>
            <Td mono>{ instrument[3] }</Td>
            <Td mono modifier={ instrument[4] > 0 ? 'success' : 'danger' } align="right">{ instrument[4] }%</Td>
          </Tr>
        )) }
      </Tbody>
    </Table>

Table with size md and sticky header and borders:

    const { Table, Thead, Tbody, Tfoot, Th, Tr, Td } = require('../../'); // nordnet-ui-kit
    const {data} = require('./data.js');

    <Table minWidth={700} size="md">
      <Thead sticky stickyBorder>
        <Tr border>
          <Th width={60}>Instrument</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th align="right">Performance 1D</Th>
        </Tr>
      </Thead>
      <Tbody colorAlternateRows={false}>
        { data.slice(0,3).map(instrument => (
          <Tr key={instrument[0]} border>
            <Td width={60} ellipsis>{ instrument[1] }</Td>
            <Td mono>{ Math.floor(Math.random() * instrument[2]) }</Td>
            <Td mono>{ instrument[3] }</Td>
            <Td mono modifier={ instrument[4] > 0 ? 'success' : 'danger' } align="right">{ instrument[4] }%</Td>
          </Tr>
        )) }
      </Tbody>
    </Table>

Table with different sizes on Tbody, Thead and TFoot

    const { Table, Thead, Tbody, Tfoot, Th, Tr, Td } = require('../../'); // nordnet-ui-kit
    const {data} = require('./data.js');

    <Table minWidth={700} size="sm">
      <Thead size="md">
        <Tr>
          <Th width={30}>Instrument</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th align="right">Performance 1D</Th>
        </Tr>
      </Thead>
      <Tbody size="xs">
        { data.map(instrument => (
          <Tr key={instrument[0]}>
            <Td width={30} ellipsis>{ instrument[1] }</Td>
            <Td mono>{ Math.floor(Math.random() * instrument[2]) }</Td>
            <Td mono>{ instrument[3] }</Td>
            <Td mono modifier={ instrument[4] > 0 ? 'success' : 'danger' } align="right">{ instrument[4] }%</Td>
          </Tr>
        )) }
      </Tbody>
      <Tfoot size="lg">
        <Tr>
          <Td width={30}></Td>
          <Td>12345</Td>
          <Td width={10}>32%</Td>
          <Td align="right">0.123</Td>
        </Tr>
      </Tfoot>
    </Table>

Table with size on Table level and borderBottom on header

    const { Table, Thead, Tbody, Tfoot, Th, Tr, Td } = require('../../'); // nordnet-ui-kit
    const {data} = require('./data.js');

    <Table minWidth={700} size="xs">
      <Thead borderBottom>
        <Tr>
          <Th width={30}>Instrument</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th align="right">Performance 1D</Th>
        </Tr>
      </Thead>
      <Tbody>
        { data.map(instrument => (
          <Tr key={instrument[0]}>
            <Td width={30} ellipsis>{ instrument[1] }</Td>
            <Td mono>{ Math.floor(Math.random() * instrument[2]) }</Td>
            <Td mono>{ instrument[3] }</Td>
            <Td mono modifier={ instrument[4] > 0 ? 'success' : 'danger' } align="right">{ instrument[4] }%</Td>
          </Tr>
        )) }
      </Tbody>
      <Tfoot>
        <Tr>
          <Td width={30}></Td>
          <Td>12345</Td>
          <Td width={10}>32%</Td>
          <Td align="right">0.123</Td>
        </Tr>
      </Tfoot>
    </Table>

Table with min-width and max-height (scrollable)

    const { Table, Thead, Tbody, Tfoot, Th, Tr, Td } = require('../../'); // nordnet-ui-kit
    const {data} = require('./data.js');

    <Table minWidth={1700} maxHeight={250}>
      <Thead>
        <Tr sticky>
          <Th width={30}>Instrument</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th align="right">Performance 1D</Th>
        </Tr>
      </Thead>
      <Tbody>
        { data.map(instrument => (
          <Tr key={instrument[0]}>
            <Td width={30} ellipsis>{ instrument[1] }</Td>
            <Td mono>{ Math.floor(Math.random() * instrument[2]) }</Td>
            <Td mono>{ instrument[3] }</Td>
            <Td mono modifier={ instrument[4] > 0 ? 'success' : 'danger' } align="right">{ instrument[4] }%</Td>
          </Tr>
        )) }
      </Tbody>
      <Tfoot>
        <Tr>
          <Td width={30}></Td>
          <Td>12345</Td>
          <Td width={10}>32%</Td>
          <Td align="right">0.123</Td>
        </Tr>
      </Tfoot>
    </Table>

Table with equal width columns and no ellipsis bound by a limited width parent

    const { Table, Thead, Tbody, Tfoot, Th, Tr, Td } = require('../../'); // nordnet-ui-kit
    const { quarterlyData } = require('./data.js');

    const tableWrapperStyle = {
      overflow: 'hidden',
      width: 742,
    };

    <div style={tableWrapperStyle}>
      <Table>
        <Thead>
          <Tr sticky>
            <Th ellipsis={false}>Tid</Th>
            <Th ellipsis={false}>Namn</Th>
            <Th ellipsis={false}>Ordertyp</Th>
            <Th ellipsis={false}>Antal</Th>
            <Th ellipsis={false} align="right">Kurs</Th>
            <Th ellipsis={false} align="right">Belopp</Th>
            <Th ellipsis={false}>Symbol</Th>
            <Th ellipsis={false}>Marknadsplats</Th>
          </Tr>
        </Thead>
        <Tbody>
          { quarterlyData.map(instrument => (
            <Tr key={`${instrument[0]}${instrument[1]}`}>
              <Td ellipsis={false}>{ instrument[0] }</Td>
              <Td ellipsis={false}>{ instrument[1] }</Td>
              <Td ellipsis={false}>{ instrument[2] }</Td>
              <Td ellipsis={false}>{ instrument[3] }</Td>
              <Td ellipsis={false} align="right">{ instrument[4] }</Td>
              <Td ellipsis={false} align="right">{ instrument[5] }</Td>
              <Td ellipsis={false}>{ instrument[6] }</Td>
              <Td ellipsis={false}>{ instrument[7] }</Td>
            </Tr>
          )) }
        </Tbody>
      </Table>
    </div>
