import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import kebabCase from 'lodash.kebabcase';
import debounce from 'lodash.debounce';
import isEqual from 'lodash.isequal';
import omit from 'lodash.omit';
import Flag from '../flag';
import Spinner from '../spinner';
import searchIcon from '../../icons/search.svg';
import './search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      results: props.results || null,
      loading: false,
      showResults: false,
    };

    this.onChange = this.onChange.bind(this);
    this.search = debounce(this.search.bind(this), props.searchDebounceWait).bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { value, loading, showResults, results } = this.state;

    if (value !== nextState.value) {
      return true;
    }

    if (loading !== nextState.loading) {
      return true;
    }

    if (showResults !== nextState.showResults) {
      return true;
    }

    if (isEqual(results, nextState.results)) {
      return true;
    }

    return false;
  }

  onChange(event) {
    const { value } = event.target;

    if (value.length > 0) {
      this.setState({
        value,
        loading: true,
      });

      this.search();
    } else {
      this.setState({
        value: '',
        loading: false,
        results: null,
      });
    }
  }

  onFocus() {
    this.setState({
      showResults: true,
    });
  }

  onBlur() {
    this.setState({
      showResults: false,
    });
  }

  search() {
    // Since this function is debounced we must check what the
    // current value in this.state is and wether it has a length
    // otherwise it'll replace empty results with the results of
    // the previous resolve which is undesirable

    this.props.search(this.state.value)
    .then(results => {
      if (this.state.value.length > 0) {
        this.setState({
          results,
          loading: false,
        });
      }
    })
    .catch(() => {
      if (this.state.value.length > 0) {
        this.setState({
          results: [],
          loading: false,
        });
      }
    });
  }

  renderResult({ name, market, countryCode }) {
    return (
      <li className="search__result" key={ kebabCase(name + market) }>
        <div className="search__result-name">{ name }</div>
        <div className="search__result-market">
          <Flag countryCode={ countryCode } />
          <span>{ market }</span>
        </div>
      </li>
    );
  }

  renderResults() {
    const { results, loading } = this.state;

    if ((!results && !loading) || !this.state.showResults) {
      return null;
    }

    const noResults = (
      <li className="search__result search__result--no-results">
        { this.props.noResults }
      </li>
    );

    const spinner = (
      <li className="search__result search__result--loading">
        <Spinner />
      </li>
    );

    return (
      <ul key="search__results" className="search__results">
        { results && results.length > 0 ? results.map(this.renderResult) : null }
        { !results && loading ? spinner : null }
        { results && results.length === 0 ? noResults : null }
      </ul>
    );
  }

  render() {
    const { className, placeholder, ...rest } = this.props;
    const classes = classNames('search', className);

    return (
      <div className={ classes }>
        <input
          { ...omit(rest, ['search', 'results', 'noResults']) }
          className="search__input"
          type="search"
          placeholder={ placeholder }
          onChange={ this.onChange }
          onFocus={ this.onFocus }
          onBlur={ this.onBlur }
          value={ this.state.value }
        />
        <span className="search__icon" dangerouslySetInnerHTML={ { __html: searchIcon } } />
        <ReactCSSTransitionGroup
          transitionName="search__results"
          transitionEnterTimeout={ 200 }
          transitionLeaveTimeout={ 200 }
        >
          { this.renderResults() }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Search.defaultProps = {
  placeholder: 'Search',
  noResults: 'No results :-(',
  searchDebounceWait: 200,
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
};

export default Search;
