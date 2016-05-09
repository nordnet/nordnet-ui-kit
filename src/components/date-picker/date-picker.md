The UI kit uses [react-date-picker](https://github.com/zippyui/react-date-picker) and applies a custom theme as well as a default set of props.

    <DatePicker
      date={ state.date || setState({date: Date.now()}) }
      onChange={(date) => setState({date: date})}
    />
