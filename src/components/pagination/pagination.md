    // This is a sample component to enable testing setting value from outside the UI-Kit
    const React = require('react');

    class PaginationExample extends React.PureComponent {
      constructor(props) {
        super(props);
        this.state = { selected: 1 };
      }

      render() {
        return (
          <div>
            <Pagination selected={this.state.selected} total={50} changeHandler={(pageNumber) => this.setState({ selected: pageNumber }) } />
          </div>);
      }
    }

    <PaginationExample />

Simple, few pages (default):

    <div>
      <Pagination total={100} changeHandler={() => {}} />
    </div>

Advanced:

    <div>
      <Pagination selected={1} total={100} changeHandler={() => {}} />
    </div>

Advanced with 1 sibling around selected item:

    <div>
      <Pagination selected={1} total={100} selectedSiblings={1} changeHandler={() => {}} />
    </div>

Advanced with 2 anchors:

    <div>
      <Pagination selected={1} total={200} anchors={2} changeHandler={() => {}} />
    </div>
