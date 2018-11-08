With tabpanels for each tab (primary look):

      const React = require('react');
      const {Tab, Tabpanel} = require('../../'); // from nordnet-ui-kit

      class TabsExample extends React.PureComponent {
        constructor(props) {
          super(props);
          this.state = { value: 0 };
        }

        render() {
          return (
            <div>
              <Tabs value={this.state.value} variant="primary" onChange={ (i) => { this.setState({ value:i }); }}>
                <Tab>All News</Tab>
                <Tab>Recommended News</Tab>
                <Tab>My News</Tab>
                <Tabpanel>
                  All News tab panel
                </Tabpanel>
                <Tabpanel>
                  Recommended News panel
                </Tabpanel>
                <Tabpanel>
                  My News tab panel
                </Tabpanel>
              </Tabs>
            </div>
          );
        }
      }

      <TabsExample />

With custom tab links (secondary look):

      const React = require('react');
      const {Tab, Tabpanel} = require('../../'); // from nordnet-ui-kit

      class TabsExample2 extends React.PureComponent {
        constructor(props) {
          super(props);
          this.state = { value: 0 };
        }

        render() {
          return (
            <div>
              <Tabs value={this.state.value} variant="secondary" onChange={ (i) => { this.setState({ value:i }); }}>
                <Tab href="#tab-orders">Orders</Tab>
                <Tab href="#tab-trades">Trades</Tab>
                <Tabpanel id="tab-orders">
                  Orders tab panel
                </Tabpanel>
                <Tabpanel id="tab-trades">
                  Trades tab panel
                </Tabpanel>
              </Tabs>
            </div>
          );
        }
      }

      <TabsExample2 />

With a single tabpanel (tertiary look):

      const React = require('react');
      const {Tab, Tabpanel} = require('../../'); // from nordnet-ui-kit

      class TabsExample3 extends React.PureComponent {
        constructor(props) {
          super(props);
          this.state = { value: 0 };
        }

        render() {
          return (
            <div>
              <Tabs value={this.state.value} variant="tertiary" onChange={ (i) => { this.setState({ value:i }); }} singlePanel>
                <Tab>Prices</Tab>
                <Tab>Historical</Tab>
                <Tab>Key figures</Tab>
                <Tabpanel>
                  Content for panel: {this.state.value}
                </Tabpanel>
              </Tabs>
            </div>
          );
        }
      }

      <TabsExample3 />
