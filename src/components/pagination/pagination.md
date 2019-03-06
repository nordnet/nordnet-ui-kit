Simple, few pages (default):
```js
import React from 'react';

class PaginationExample1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.urlGenerator = this.urlGenerator.bind(this);
  }

  urlGenerator(pageNumber) {
    return `?page=${pageNumber}`
  }

  render() {
    return (
      <div>
        <Pagination selected={1} total={50} urlGenerator={this.urlGenerator} />
      </div>
    );
  }
}

<PaginationExample1 />
```

Advanced layout (more than 7 pages):
```js
import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { Button } from 'nordnet-ui-kit';

class PaginationExample2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.urlGenerator = this.urlGenerator.bind(this);
  }

  urlGenerator(pageNumber) {
    return `?page=${pageNumber}`
  }

  nodeGenerator(url, children, rest) {
    return <Button node={Link} to={url} {...rest}>{children}</Button>
  }

  render() {
    return (
      <MemoryRouter>
        <div>
          <Pagination selected={2} total={100} urlGenerator={this.urlGenerator} getNode={this.nodeGenerator} />
        </div>
      </MemoryRouter>
    );
  }
}

<PaginationExample2 />
```
Advanced layout with 1 sibling around selected item (without urlGenerator):
```js
<div>
  <Pagination selected={3} total={100} selectedSiblings={1} />
</div>
```
Advanced layout with 2 anchors (with external selected prop):
```js
import React from 'react';

class PaginationExample4 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { selected: 1 };
  }

  render() {
    return (
      <div>
        <Pagination selected={this.state.selected} total={100} changeHandler={(pageNumber) => this.setState({ selected: pageNumber }) } />
      </div>
    );
  }
}

<PaginationExample4 />
```