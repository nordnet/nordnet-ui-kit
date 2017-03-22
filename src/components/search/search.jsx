import React, { PropTypes } from 'react';
import Transition from 'react-motion-ui-pack';
import classNames from 'classnames';
import { kebabCase, debounce } from 'lodash';
import omit from '../../utilities/omit';
import Flag from '../flag';
import Spinner from '../spinner';
import searchIcon from '../../icons/search.svg';
import './search.scss';

function renderDevelopment(development) {
  if (!development) {
    return null;
  }

  const developmentClass = classNames('search__result-development', {
    'search__result-development--positive': development > 0,
    'search__result-development--negative': development < 0,
  });

  const positiveArrowPath = 'M0,16 L16,16 L8,0';
  const negativeArrowPath = 'M0,0 L16,0 L8,16';
  const arrowStyle = {
    marginRight: '.2em',
    fill: 'currentcolor',
    height: '.6em',
  };

  return (
    <div className={developmentClass}>
      <svg aria-hidden="true" role="presentation" viewBox="0 0 16 16" style={arrowStyle}>
        <path d={development > 0 ? positiveArrowPath : negativeArrowPath} />
      </svg>
      { `${development}%` }
    </div>
  );
}

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      showResults: false,
    };

    this.onChange = this.onChange.bind(this);
    this.search = debounce(this.search.bind(this), props.searchDebounceWait).bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    // This is done in order to handle users entering text in the input-field before
    // server-side rendering is complete.
    if (this.input.value && this.input.value.length) {
      this.setState({ //eslint-disable-line
        value: this.input.value,
        showResults: true,
      });
      this.search();
    }
  }

  componentWillReceiveProps({ results }) {
    this.setState({
      results,
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({
      value,
    });

    this.search();
  }

  onFocus() {
    this.setState({
      showResults: true,
    });
  }

  handleClick({ target } = {}) {
    if (target && this.onOutsideElement && !this.onOutsideElement.contains(target)) {
      this.handleClickOutside();
    }
  }

  handleClickOutside() {
    this.setState({
      showResults: false,
    });
  }

  search() {
    this.props.search(this.state.value);
  }

  renderResult(item) {
    if (this.props.resultRenderer) {
      return this.props.resultRenderer(item);
    }

    const { name, market, countryCode, href, development } = item;
    const Wrapper = href ? 'a' : 'span';

    return (
      <li className="search__result" key={kebabCase(name + market)}>
        <Wrapper href={href}>
          <div className="search__result-info">
            <div className="search__result-name">{ name }</div>
            <div className="search__result-market">
              <Flag countryCode={countryCode} />
              <span>{ market }</span>
            </div>
          </div>
          { renderDevelopment(development) }
        </Wrapper>
      </li>
    );
  }

  renderResults() {
    const { isLoading, results, showNoResults, alignResults } = this.props;
    const { value, showResults } = this.state;
    if ((!results && !isLoading) || !showResults || value.length === 0) {
      return <ul key="search__results" />;
    }

    const searchResultsClass = classNames('search__results', {
      'search__results--left': alignResults === 'left',
      'search__results--right': alignResults === 'right',
    });

    const noResults = (
      <li className="search__result search__result--no-results">
        { this.props.noResults }
      </li>
    );

    const spinner = (
      <li className="search__result search__result--is-loading">
        <Spinner />
      </li>
    );

    return (
      <Transition
        component={false}
        measure={false}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        <ul key="search__results" className={searchResultsClass}>
          { results && results.length > 0 ? results.map(this.renderResult) : null }
          { isLoading ? spinner : null }
          { !isLoading && results && showNoResults && results.length === 0 ? noResults : null }
        </ul>
      </Transition>
    );
  }

  render() {
    const { className, placeholder, isLoading, results, ...rest } = this.props;
    const { value, showResults } = this.state;
    const classes = classNames('search', className);
    const show = (results || isLoading) && showResults && value.length > 0;

    return (
      <div className={classes} ref={(element) => { this.onOutsideElement = element; }}>
        <input
          {...omit(rest, 'search', 'results', 'noResults', 'searchDebounceWait', 'isLoading', 'alignResults',
            'disableOnClickOutside', 'enableOnClickOutside', 'showResults', 'showNoResults', 'resultRenderer')}
          className="search__input"
          type="search"
          placeholder={placeholder}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.state.value}
          ref={(input) => { this.input = input; }}
        />
        <span className="search__icon" dangerouslySetInnerHTML={{ __html: searchIcon }} />
        { show ? this.renderResults() : null }
      </div>
    );
  }
}

Search.defaultProps = {
  placeholder: 'Search',
  noResults: 'No results',
  searchDebounceWait: 300,
  value: '',
  showResults: false,
  showNoResults: true,
  results: null,
  alignResults: 'left',
};

Search.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  /** Message displayed if there are no results */
  noResults: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.shape({
    name: React.PropTypes.string,
    market: React.PropTypes.string,
    /** A valid 2-character country code to be passed to flag component */
    countryCode: React.PropTypes.string,
  })),
  /** A function that returns a promise that resolves the search results, if no results just reject the promise or resolve an empty array */
  search: PropTypes.func,
  /** The number of milliseconds to wait for user input to pause before calling the search function */
  searchDebounceWait: PropTypes.number,
  showResults: PropTypes.bool,
  /** Override showing the NoResult panel */
  showNoResults: PropTypes.bool,
  /** The function that gets used to render the content of a result */
  resultRenderer: PropTypes.func,
  isLoading: PropTypes.bool,
  value: PropTypes.string,
  alignResults: PropTypes.oneOf(['left', 'right']),
};

export default Search;
