The UI kit uses [react-date-picker](https://github.com/zippyui/react-date-picker) and applies a custom theme as well as a default set of props.

    const initialState = {date: Date.now()};
    <DatePicker
      date={ state.date }
      onChange={(date) => setState({date: date})}
    />
