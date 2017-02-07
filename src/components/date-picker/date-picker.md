The UI kit uses [react-date-picker](https://github.com/zippyui/react-date-picker) and applies a custom theme as well as a default set of props.

Note: Don't forget to import react-date-picker and add it to package.json in your project.

    const initialState = {date: Date.now()};
    <DatePicker
      date={ state.date }
      onChange={(date) => setState({date: date})}
    />
