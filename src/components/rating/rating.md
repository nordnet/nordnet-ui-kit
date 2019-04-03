    import { Icon } from 'nordnet-ui-kit';
    <div>
      <Rating rating={3} />
      <Rating rating={4} maxRating={10} />
      <Rating rating={7} maxRating={10} icon={Icon.Car} />
      <Rating rating={7} maxRating={10} icon={Icon.Globe} size={64} />

      Default for missing rating data: <Rating />
      Default for zero rating: <Rating rating={0} />
      Explicit zero rating: <Rating rating={0} minRating={0} />
    </div>
