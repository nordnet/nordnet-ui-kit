This is how you should use the Animate component.

```html
<Animate type="height" estimatedHeight={200}>
  { variableToDecideIfShown && (
    <div>Something inside the box in Animate component.</div>
  )}
</Animate>
```

Below is an example of how it behaves when animating.

    // This is a sample component to illustrate how to use the Animate
    // component. This was needed to have a toggle button with state.
    const React = require('react');
    const PropTypes = require('prop-types');
    const red = { backgroundColor: 'tomato', height: 100, color: 'white' };
    const blue = { backgroundColor: '#07B', height: 100, color: 'white' };
    const DemoBox = ({ style, children }) => (
      <div style={style}> <div style={{ padding: 10 }}>{ children }</div></div>
    )

    const randomBoolean = () => !!Math.round(Math.random())

    class AnimateMarkdownSample extends React.PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = { show: true };
        this.toggleShow = () => { this.setState({ show: !this.state.show }); }
      }

      render() {
        return (
          <div>
            <button style={{marginBottom: 10}} onClick={this.toggleShow}>Toggle animation</button>
            <Animate enterTime={200} exitTime={200} estimatedHeight={100}>
              {this.state.show && (
                <DemoBox style={randomBoolean() ? red : blue}>
                  Something inside the box in Animate component
                </DemoBox>
              )}
              {this.state.show && (
                <DemoBox style={randomBoolean() ? red : blue}>
                  Some more content inside what will be animated
                </DemoBox>
              )}
              {this.state.show && (
                <DemoBox style={randomBoolean() ? red : blue}>
                  Even more content inside what will be animated.
                </DemoBox>
              )}
            </Animate>
            <div>Some content after the animated stuff.</div>
          </div>
        );
      }
    }

    <AnimateMarkdownSample />
