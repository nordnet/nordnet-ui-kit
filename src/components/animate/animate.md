This is how you should use the Animate component.

```html
<Animate type="height" enterTime={300} leaveTime={200} estimatedHeight={200}>
  { variableToDecideIfShown ? (
    <div>Something inside the box in Animate component.</div>
  ) : null }
</Animate>
```

Below is an example of how it behaves when animating.

    // This is a sample component to illustrate how to use the Animate
    // component. This was needed to have a toggle button with state.
    const React = require('react');
    const PropTypes = require('prop-types');
    const { createStyleSheet } = require('@iamstarkov/jss-theme-reactor');

    const divStyle = { height: 50, padding: 10 };
    const outerDivStyle = { backgroundColor: 'tomato', height: 100, padding: 10, color: 'white' };

    class AnimateMarkdownSample extends React.PureComponent {
      constructor(props, context) {
        super(props, context);
        this.state = { show: true, toggleCount: 0 };
        this.toggleShow = function() { this.setState({ show: !this.state.show, toggleCount: this.state.toggleCount += 1 }); }.bind(this);
        this.classes = this.context.styleManager.render(createStyleSheet('AnimateMarkdownSample', () => ({
          box: { color: 'white', backgroundColor: '#07B' }
        })));
      }

      render() {
        return (
          <div>
            <button style={{marginBottom: 10}} onClick={this.toggleShow}>Toggle animation</button>
            <Animate animationName="markdownExampleAnimate" enterTime={300} leaveTime={200} estimatedHeight={210}>
              {this.state.show && this.state.toggleCount % 3 === 2 ? (
                <div style={outerDivStyle}>
                  Even more content inside what will be animated.
                </div>
              ) : null}
              {this.state.show ? (
                <div className={this.classes.box}>
                  <div style={divStyle}>
                    Something inside the box in Animate component.
                  </div>
                  <div style={divStyle}>
                    Some more content inside what will be animated.
                  </div>
                  {this.state.toggleCount % 3 === 1 ? (
                    <div style={divStyle}>
                      Even more content inside what will be animated.
                    </div>
                  ) : null}
                </div>
                ) : null }
                {this.state.show && this.state.toggleCount % 3 === 0 ? (
                  <div style={outerDivStyle}>
                    Even more content inside what will be animated.
                  </div>
                ) : null}
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
