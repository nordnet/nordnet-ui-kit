This is how you should use the Animate component.

```html
<Animate type="height" show={variableToDecideIfShown} enterTime={300} leaveTime={200}>
  Something inside the box in Animate component.
</Animate>
```

Below is an example of how it behaves when animating.

    // This is a sample component to illustrate how to use the Animate
    // component. This was needed to have a toggle button with state.
    const React = require('react');
    const PropTypes = require('prop-types');
    const { createStyleSheet } = require('jss-theme-reactor');
    const Button = require('../button').default;

    class AnimateMarkdownSample extends React.PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = { show: true };
        this.toggleShow = function() { this.setState({ show: !this.state.show }); }.bind(this);
        this.classes = this.context.styleManager.render(createStyleSheet('AnimateMarkdownSample', () => ({
          box: { height: 200, width: 200, padding: 10, color: 'white', backgroundColor: '#07B' }
        })));
      }

      render() {
        return (
          <div>
            <Button style={{marginBottom: 10}} modifier="action" onClick={this.toggleShow}>Toggle animation</Button>
            <Animate show={this.state.show} className={this.classes.box} enterTime={300} leaveTime={200}>
              <div>
                Something inside the box in Animate component.
              </div>
              <br />
              <div>
                Some more content inside what will be animated.
              </div>
            </Animate>
            <div>Some content after the animated stuff.</div>
          </div>
        );
      }
    }

    AnimateMarkdownSample.contextTypes = {
      styleManager: PropTypes.object.isRequired,
    };

    <AnimateMarkdownSample />
