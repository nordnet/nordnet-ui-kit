import React from 'react';
import Icon from '../icon';

export default function Wallet({
  fill,
  strokeWidth,
  viewBox,
  style: styleProp,
  ...rest // eslint-disable-line comma-dangle
}) {
  const style = {
    ...styleProp,
    ...Icon.defaultProps.style,
  };
  return (
    <svg style={style} {...rest}>
      <g stroke="none">
        <g fill={fill}>
          <path d="M14.7368421,7.13312693 L14.3157895,7.13312693 L14.3157895,5.15170279 C14.3157895,4.49624768 13.7490526,3.9628483 13.0526316,3.9628483 L10.9473684,3.9628483 L10.9473684,0.39628483 C10.9473684,0.177535604 10.7587368,0 10.5263158,0 L2.10526316,0 C1.87284211,0 1.68421053,0.177535604 1.68421053,0.39628483 L1.68421053,4.00247678 C0.724210526,4.18635294 0,4.9868483 0,5.94427245 L0,14.6625387 C0,15.3179938 0.566736842,15.8513932 1.26315789,15.8513932 L14.7368421,15.8513932 C15.4332632,15.8513932 16,15.3179938 16,14.6625387 L16,8.32198142 C16,7.66652632 15.4332632,7.13312693 14.7368421,7.13312693 Z M2.52631579,0.792569659 L10.1052632,0.792569659 L10.1052632,5.54798762 L2.52631579,5.54798762 L2.52631579,0.792569659 Z M1.68421053,4.82357895 L1.68421053,5.94427245 C1.68421053,6.16302167 1.87284211,6.34055728 2.10526316,6.34055728 L12.2105263,6.34055728 C12.4429474,6.34055728 12.6315789,6.16302167 12.6315789,5.94427245 C12.6315789,5.72552322 12.4429474,5.54798762 12.2105263,5.54798762 L10.9473684,5.54798762 L10.9473684,4.75541796 L13.0526316,4.75541796 C13.2850526,4.75541796 13.4736842,4.93295356 13.4736842,5.15170279 L13.4736842,7.13312693 L2.10526316,7.13312693 C1.40884211,7.13312693 0.842105263,6.59972755 0.842105263,5.94427245 C0.842105263,5.42751703 1.19410526,4.9868483 1.68421053,4.82357895 Z M15.1578947,14.6625387 C15.1578947,14.8812879 14.9692632,15.0588235 14.7368421,15.0588235 L1.26315789,15.0588235 C1.03073684,15.0588235 0.842105263,14.8812879 0.842105263,14.6625387 L0.842105263,7.5286192 C1.19410526,7.77827864 1.632,7.92569659 2.10526316,7.92569659 L14.7368421,7.92569659 C14.9692632,7.92569659 15.1578947,8.1032322 15.1578947,8.32198142 L15.1578947,14.6625387 Z" />
          <path d="M13.8947368,14.2662539 L10.5263158,14.2662539 C10.2938947,14.2662539 10.1052632,14.0887183 10.1052632,13.869969 C10.1052632,13.6512198 10.2938947,13.4736842 10.5263158,13.4736842 L13.8947368,13.4736842 C14.1271579,13.4736842 14.3157895,13.6512198 14.3157895,13.869969 C14.3157895,14.0887183 14.1271579,14.2662539 13.8947368,14.2662539 Z" />
          <path d="M7.41092093,4.06540416 C7.34287782,3.99296482 7.22538261,3.98596585 7.14841582,4.05000642 C6.91082266,4.24737737 6.60518639,4.35621136 6.28765187,4.35621136 C5.59680979,4.35621136 5.03015569,3.84668635 4.98888364,3.20628059 L5.04093848,3.25527338 C5.07737686,3.28956834 5.12496986,3.30636586 5.17256285,3.30636586 C5.22015585,3.30636586 5.26774885,3.28921839 5.30418723,3.25527338 C5.37669219,3.18703343 5.37669219,3.07609975 5.30418723,3.0078598 L4.93236695,2.6579113 C4.859862,2.58967134 4.74199497,2.58967134 4.66949002,2.6579113 L4.29766974,3.0078598 C4.22516478,3.07609975 4.22516478,3.18703343 4.29766974,3.25527338 C4.37017469,3.32351334 4.48804172,3.32351334 4.56054668,3.25527338 L4.61669154,3.20243116 C4.65610449,4.03810817 5.39082136,4.7065098 6.28802369,4.7065098 C6.69591054,4.7065098 7.08892457,4.5665304 7.39456084,4.31281774 C7.47152764,4.24877717 7.47896404,4.13819344 7.41092093,4.0657541 L7.41092093,4.06540416 Z" />
          <path d="M8.27837764,3.00750985 C8.20587269,2.93926989 8.08800566,2.93926989 8.01550071,3.00750985 L7.95935584,3.06035207 C7.91994289,2.22467506 7.18522602,1.55627343 6.28802369,1.55627343 C5.88013685,1.55627343 5.48712281,1.69590288 5.18148654,1.94996549 C5.10451974,2.01400606 5.09708334,2.12458979 5.16512645,2.19702913 C5.23316956,2.26946847 5.35066477,2.27646744 5.42763157,2.21242686 C5.66522472,2.01505591 5.97086099,1.90622193 6.28839551,1.90622193 C6.97923759,1.90622193 7.54589169,2.41574694 7.58716375,3.05615269 L7.53510891,3.0071599 C7.46260395,2.93891994 7.34473692,2.93891994 7.27223197,3.0071599 C7.19972701,3.07539986 7.19972701,3.18633353 7.27223197,3.25457349 L7.64405225,3.60452198 C7.68049064,3.63881694 7.72808363,3.65561447 7.77567663,3.65561447 C7.82326962,3.65561447 7.87086262,3.63846699 7.90730101,3.60452198 L8.27912128,3.25457349 C8.35162624,3.18633353 8.35162624,3.07539986 8.27912128,3.0071599 L8.27837764,3.00750985 Z" />
        </g>
      </g>
    </svg>
  );
}

Wallet.propTypes = {
  ...Icon.propTypes,
};

Wallet.defaultProps = Icon.defaultProps;
