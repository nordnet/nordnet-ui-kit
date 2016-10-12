import React, { PropTypes } from 'react';
import Transition from 'react-motion-ui-pack';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import debounce from 'lodash.debounce';
import omit from 'lodash.omit';
import Flag from '../flag';
import Spinner from '../spinner';
import searchIcon from '../../icons/search.svg';
import './search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      results: props.results,
      showResults: false,
    };

    this.onChange = this.onChange.bind(this);
    this.search = debounce(this.search.bind(this), props.searchDebounceWait).bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  componentWillReceiveProps({ results }) {
    this.setState({
      results,
    });
  }

  onChange(event) {
    const { value } = event.target;

    this.setState({
      value,
      results: null,
    });
    if (value.length > 0) {
      this.search();
    }
  }

  onFocus() {
    this.setState({
      showResults: true,
    });
  }

  handleClickOutside() {
    this.setState({
      showResults: false,
    });
  }

  search() {
    this.props.search(this.state.value);
  }

  renderDevelopment(development) {
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
      <div className={ developmentClass }>
        <svg aria-hidden="true" role="presentation" viewBox="0 0 16 16" style={ arrowStyle }>
          <path d={ development > 0 ? positiveArrowPath : negativeArrowPath } />
        </svg>
        { `${development}%` }
      </div>
    );
  }

  renderResult(item) {
    if (this.props.resultRenderer) {
      return this.props.resultRenderer(item);
    }

    const { name, market, countryCode, href, development } = item;
    const Wrapper = href ? 'a' : 'span';

    return (
      <li className="search__result" key={ kebabCase(name + market) }>
        <Wrapper href={ href }>
          <div className="search__result-info">
            <div className="search__result-name">{ name }</div>
            <div className="search__result-market">
              <Flag countryCode={ countryCode } />
              <span>{ market }</span>
            </div>
          </div>
          { this.renderDevelopment(development) }
        </Wrapper>
      </li>
    );
  }

  renderResults() {
    const { isLoading } = this.props;
    const { value, results, showResults } = this.state;
    if ((!results && !isLoading) || !showResults || value.length === 0) {
      return <span />;
    }

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
      <ul key="search__results" className="search__results">
        { results && results.length > 0 ? results.map(this.renderResult) : null }
        { isLoading ? spinner : null }
        { !isLoading && results && results.length === 0 ? noResults : null }
      </ul>
    );
  }

  render() {
    const { className, placeholder, ...rest } = this.props;
    const classes = classNames('search', className);
    return (
      <div className={ classes }>
        <input
          { ...omit(rest, ['search', 'results', 'noResults', 'searchDebounceWait', 'isLoading',
            'disableOnClickOutside', 'enableOnClickOutside', 'showResults', 'resultRenderer']) }
          className="search__input"
          type="search"
          placeholder={ placeholder }
          onChange={ this.onChange }
          onFocus={ this.onFocus }
          onBlur={ this.onBlur }
          value={ this.state.value }
        />
        <span className="search__icon" dangerouslySetInnerHTML={ { __html: searchIcon } } />
        <Transition
          component="div"
          className="search__results-container"
          measure={ false }
          enter={ { opacity: 1 } }
          leave={ { opacity: 0 } }
        >
          { this.renderResults() }
        </Transition>
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
  results: [],
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
  /** The function that gets used to render the content of a result */
  resultRenderer: PropTypes.func,
  isLoading: PropTypes.bool,
  value: PropTypes.string,
};

export default Search;
