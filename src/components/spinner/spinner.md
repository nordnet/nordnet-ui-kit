    const { Spinner } = require('../../');

    const spinnerStyle = {
      marginRight: 32,
    };

    <div>
      <Spinner style={ spinnerStyle } />
      <Spinner style={ spinnerStyle } color="#00BD76" />
      <Spinner style={ spinnerStyle } color="#EF472F" />
      <Spinner style={ spinnerStyle } size={ 32 } strokeWidth={ 2 } />
      <Spinner style={ spinnerStyle } size={ 32 } />
      <Spinner style={ spinnerStyle } size={ 64 } />
    </div>
