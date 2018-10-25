Simple, few pages (default):

    <div>
      <Pagination selected={1} total={50} changeHandler={() => {}} />
    </div>

Advanced:

    <div>
      <Pagination selected={2} total={100} changeHandler={() => {}} />
    </div>

Advanced with 1 sibling around selected item:

    <div>
      <Pagination selected={3} total={100} selectedSiblings={1} changeHandler={() => {}} />
    </div>

Advanced with 2 anchors:

    <div>
      <Pagination selected={1} total={200} anchors={2} changeHandler={() => {}} />
    </div>

Advanced with external props change

    const React = require('react');
    class PaginationExample extends React.PureComponent {
      constructor(props) {
        super(props);
        this.state = { selected: 1 };
      }

      render() {
        return (
          <div>
            <Pagination selected={this.state.selected} total={100} changeHandler={(pageNumber) => this.setState({ selected: pageNumber }) } />
          </div>);
        }
    }

    <PaginationExample />
