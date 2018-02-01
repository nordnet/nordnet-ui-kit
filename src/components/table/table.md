Sticky flex-basis table with mobile mode

    // This is a sample component to illustrate how to use the Table List for Mobile works
    // component. This was needed to have a toggle button with state.
    const React = require('react');
    const { Table, Thead, Tbody, Tfoot, Th, Tr, Td, Icon } = require('../../'); // nordnet-ui-kit
    const data = require('./data.js');
    const center = {justifyContent: 'center'};

    class MobileTableSample extends React.PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = {};
        this.toggleCollapsed = (id) => () => { this.setState({ [id]: !this.state[id] }); }
      }

      render() {
        return (
          <Table minWidth="auto">
            <Thead hiddenOnMobile addMargin>
              <Tr sticky>
                <Th flexBasisDesktop={20}>Instrument</Th>
                <Th>Latest</Th>
                <Th>Today</Th>
                <Th>GAV</Th>
                <Th>Shares</Th>
                <Th>Value SEK</Th>
                <Th flexBasisDesktop={10}>Performance</Th>
                <Th align="right">Return</Th>
              </Tr>
            </Thead>
            <Tbody colorAlternateRows={false}>
              <Tr>
                <Td mono hiddenOnDesktop flexBasisMobile={100} alignMobile="center" style={{fontWeight: 600, backgroundColor: '#F6F6F6' }}>
                  <span>Stocks</span>
                </Td>
              </Tr>
              { data.map((instrument, index) => (
                <Tr key={instrument[0]}>
                  <Td mono borderBottom flexBasisMobile={50} flexBasisDesktop={20} style={{fontWeight: 600}}>
                    { instrument[0] }
                  </Td>

                  <Td mono borderBottom title="Latest" flexBasisMobile={20} alignMobile="left" onClick={this.toggleCollapsed(instrument[0])}>
                    { Math.round(Math.random() * instrument[3], 10) }
                  </Td>

                  <Td mono borderBottom title="Today" flexBasisMobile={20} alignMobile="right" align="left" onClick={this.toggleCollapsed(instrument[0])}>
                    { instrument[4] }%
                  </Td>

                  <Td hiddenOnDesktop borderBottom={!this.state[instrument[0]]} flexBasisMobile={10} onClick={this.toggleCollapsed(instrument[0])}>
                    <div style={{ display: 'flex', height: '75%', alignItems: 'center', justifyContent: 'center'}}>
                      { !this.state[instrument[0]] ? <Icon.ChevronDown /> : <Icon.ChevronUp />}
                    </div>
                  </Td>

                  <Td hiddenOnDesktop borderBottom flexBasisMobile={40} alignMobile="left" align="left" collapsed={!this.state[instrument[0]]}>
                  </Td>

                  <Td mono borderBottom title="GAV" flexBasisMobile={25} alignMobile="left" align="left" collapsed={!this.state[instrument[0]]}>
                    { instrument[3] }
                  </Td>

                  <Td mono borderBottom title="Shares" flexBasisMobile={25} alignMobile="right" align="left" collapsed={!this.state[instrument[0]]}>
                    { instrument[2] }
                  </Td>

                  <Td hiddenOnDesktop flexBasisMobile={10} collapsed={!this.state[instrument[0]]}>
                  </Td>

                  <Td mono borderBottom title="Value SEK" flexBasisMobile={40} alignMobile="left" align="left" collapsed={!this.state[instrument[0]]}>
                    { instrument[2] }
                  </Td>

                  <Td mono borderBottom title="Performance" flexBasisDesktop={10} flexBasisMobile={25} align="left" style={center} collapsed={!this.state[instrument[0]]}>{ instrument[3] }%</Td>

                  <Td mono borderBottom title="Return" flexBasisMobile={25} alignMobile="right" align="right" collapsed={!this.state[instrument[0]]}>
                    { instrument[2] * instrument[3] }
                  </Td>

                  <Td hiddenOnDesktop borderBottom flexBasisMobile={10} collapsed={!this.state[instrument[0]]}>
                  </Td>
                </Tr>
              )) }
            </Tbody>
          </Table>
        );
      }
    }

    <MobileTableSample />



Scrollable table:

    const { Table, Thead, Tbody, Tfoot, Th, Tr, Td } = require('../../'); // nordnet-ui-kit
    const data = require('./data.js');

    <Table minWidth={900}>
      <Thead>
        <Tr>
          <Th width={30}>Instrument</Th>
          <Th>Quantity</Th>
          <Th>Price</Th>
          <Th align="right">Performance 1D</Th>
        </Tr>
      </Thead>
      <Tbody size="xs" maxHeight={128}>
        { data.map(instrument => (
          <Tr key={instrument[0]}>
            <Td width={30} ellipsis>{ instrument[1] }</Td>
            <Td mono>{ Math.floor(Math.random() * instrument[2]) }</Td>
            <Td mono highlight="warning">{ instrument[3] }</Td>
            <Td mono modifier={ instrument[3] > 0 ? 'success' : 'danger' } align="right">{ instrument[4] }%</Td>
          </Tr>
        )) }
      </Tbody>
    </Table>