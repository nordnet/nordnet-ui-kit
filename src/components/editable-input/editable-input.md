Default
```js
<div>
<span>What is your favorite color?</span>
<EditableInput
        label="My favorite color is"
        value="Blue"
        />
</div>
```

With `emptyDefaultValue`

```js
<div>
<span>Enter a phone-number:</span>
<EditableInput
        label="Phone number"
        value="+46 123 45 67"
        emptyDefaultValue="+"
        />
</div>
```

With `hasError` and `helpText`

```js
<div>
<span>Something is wrong here:</span>
<EditableInput
        label="Is this correct?"
        value="No"
        hasError
        helpText="It never is"
        />
</div>
```
