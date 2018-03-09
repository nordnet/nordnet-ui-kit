import { symbols } from './badge';
<div>
  {symbols.map(({ symbol, entity }) => (
    <div data-sketch-symbol={symbol}>{entity}</div>
  ))}
</div>