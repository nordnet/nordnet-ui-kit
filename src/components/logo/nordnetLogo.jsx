import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon/icon';

export default function NordnetLogo({
  fill,
  stroke,
  ...rest // eslint-disable-line comma-dangle
}) {
  return (
    <svg {...rest}>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Artboard-1">
          <g id="nordnet" transform="translate(77.000000, 5.000000)" fill={stroke}>
            <path
              d="M235.356492,37.9973333 C233.504982,39.3301052 231.666948,40.0060351 229.890667,40.0060351
              C227.247018,40.0060351 225.668351,38.2370526 225.668351,35.2734035 L225.668351,19.2032281
              L234.99607,19.2032281 L234.99607,12.3288421 L225.668351,12.3288421 L225.668351,2.30722807
              L217.396632,0.0217543822 L217.396632,12.3288421 L211.677614,12.3288421 L211.677614,19.2032281
              L217.396632,19.2032281 L217.396632,35.7157895 C217.396632,43.8976842 222.707508,46.8130526
              227.677614,46.8130526 C229.252912,46.8130526 230.592421,46.6912281 231.657965,46.450386
              C232.677474,46.2202105 234.376281,45.6762105 235.779228,45.050807 L235.779228,37.9973333
              L235.356492,37.9973333"
              id="Fill-11"
            />
            <path
              d="M192.582035,17.3949474 C194.860211,17.3949474 196.834105,18.1225263 198.444211,19.5541052
              C199.979649,20.885193 200.903719,22.6289123 201.209684,24.7313684 L183.419368,24.7313684
              C184.733052,20.2008421 188.217684,17.3949474 192.582035,17.3949474 L192.582035,17.3949474
              L192.582035,17.3949474 Z M201.010386,13.0362105 C198.396492,11.546807 194.984281,11.2341052
              192.582035,11.2341052 C187.744421,11.2341052 183.597333,12.9278596 180.255299,16.2687719
              C176.936842,19.5866667 175.254877,23.7573333 175.254877,28.6645614 C175.254877,32.0189474
              176.068351,35.0982456 177.673404,37.8176842 C179.316632,40.6 181.53586,42.7866667 184.270456,
              44.3159299 C187.063438,45.8794386 190.157895,46.6727018 193.46793,46.6727018 C198.172492,
              46.6727018 203.000562,45.4050526 207.095438,43.098807 L207.021333,35.2694737 L206.682807,
              35.2694737 C203.143719,38.2746667 198.916351,39.7977544 194.114667,39.7977544 C188.282245,
              39.7977544 184.162105,36.6898245 183.093193,31.4839299 L182.975299,30.9101755 L208.559018,
              30.9101755 C208.65614,30.5183158 208.653333,29.9597193 208.650526,29.528 C208.649965,
              29.3545263 208.649404,29.1917193 208.653333,29.0485614 C208.744281,25.9670175 208.585965,
              21.981614 206.541895,18.4930526 C205.21586,16.2300351 203.303158,14.3425965 201.010386,
              13.0362105 L201.010386,13.0362105 L201.010386,13.0362105 Z"
              id="Fill-10"
            />
            <path
              d="M159.511438,11.3744562 C157.336,11.3744562 155.251508,11.8398596 153.309614,12.7616842
              C151.380632,13.6436492 149.790737,14.8686316 148.583158,16.4012632 L147.730948,17.4836492
              L147.730948,12.3288421 L139.494035,12.3288421 L139.494035,45.8261052 L147.730948,45.8261052
              L147.730948,28.5320701 C147.730948,25.6593684 148.515228,23.3082105 150.063018,21.5448421
              C151.604632,19.7876492 153.603789,18.8967018 156.004912,18.8967018 C160.418105,18.8967018
              163.053333,21.5824562 163.053333,26.0815438 L163.053333,45.8261052 L171.290245,45.8261052
              L171.290245,22.8124912 C171.290245,19.0662456 170.220211,16.1952281 168.109895,14.2808421
              C165.984982,12.3524211 163.092632,11.3744562 159.511438,11.3744562"
              id="Fill-9"
            />
            <path
              d="M114.953965,18.554807 C112.203088,18.554807 109.825544,19.5018948 107.887018,21.3696842
              C105.944562,23.2414035 104.959299,25.6683508 104.959299,28.5837193 C104.959299,31.4985263
              105.944562,33.9254737 107.887018,35.7966316 C109.824982,37.6644211 112.202526,38.6115088
              114.953965,38.6115088 C117.705404,38.6115088 120.083508,37.6644211 122.021474,35.7966316
              C123.985263,33.9389474 124.982316,31.5108772 124.982316,28.5837193 C124.982316,25.6565614
              123.985263,23.2284912 122.018667,21.3668772 C120.082948,19.5018948 117.704842,18.554807
              114.953965,18.554807 L114.953965,18.554807 L114.953965,18.554807 Z M114.953965,46.0349474
              C111.668632,46.0349474 108.612351,45.2658245 105.869333,43.7483508 C103.075789,42.2039299
              100.918877,40.1441404 99.2762107,37.4505263 C97.6324213,34.7209825 96.8329822,31.8196492
              96.8329822,28.5837193 C96.8329822,23.9296842 98.7703858,19.4014035 102.148351,16.1598596
              C105.488701,12.9862456 110.156772,11.165614 114.953965,11.165614 C118.272421,11.165614
              121.535299,12.0329825 124.390035,13.6739649 L125.105263,14.0854737 L125.105263,2.61712281
              L133.341614,0.100912284 L133.341614,45.8261052 L125.105263,45.8261052 L125.105263,43.101614
              L124.230035,43.6164211 C124.15593,43.6613333 124.082386,43.7062456 124.006035,43.7483508
              C121.223719,45.2871579 118.262877,46.0349474 114.953965,46.0349474 L114.953965,46.0349474
              L114.953965,46.0349474 Z"
              id="Fill-7"
            />
            <path
              d="M76.2176844,45.8261052 L76.2176844,12.3282807 L84.4545964,12.3282807 L84.4545964,
              16.6808421 L85.3090524,15.5827368 C87.3587369,12.9475088 90.5272987,11.3744562
              93.7845618,11.3744562 C94.6878596,11.3744562 95.5771227,11.4929123 96.3782453,11.7185965
              L96.3782453,18.328 C95.854456,18.1618245 95.2941751,18.0781755 94.7047013,18.0781755
              C91.6164213,18.0781755 88.3479298,20.3423158 86.6188071,22.4464562 C85.1423156,24.2429474
              84.4545964,26.4167018 84.4545964,29.2877193 L84.4545964,45.8261052 L76.2176844,45.8261052"
              id="Fill-5"
            />
            <path
              d="M54.1651929,19.2425263 C51.4143156,19.2425263 49.0367716,20.189614 47.0982453,22.0574035
              C45.1552284,23.9291228 44.1705262,26.3560701 44.1705262,29.2708772 C44.1705262,32.1862456
              45.1552284,34.613193 47.0982453,36.4843508 C49.0362107,38.3521404 51.4137547,39.2992281
              54.1651929,39.2992281 C56.916632,39.2992281 59.2947369,38.3521404 61.2327013,36.4843508
              C63.1964916,34.6261052 64.193544,32.1980351 64.193544,29.2708772 C64.193544,26.3442807
              63.1964916,23.9156492 61.2293333,22.0545965 C59.2941751,20.189614 56.9160702,19.2425263
              54.1651929,19.2425263 L54.1651929,19.2425263 L54.1651929,19.2425263 Z M54.1651929,46.7221052
              C50.8798596,46.7221052 47.8235787,45.9529825 45.0805618,44.4360701 C42.2870178,42.8910877
              40.1301049,40.8312982 38.4868773,38.1376842 C36.8436489,35.4087018 36.0436489,32.5073684
              36.0436489,29.2708772 C36.0436489,24.6168421 37.9816142,20.0891228 41.3595787,16.8470175
              C44.699368,13.6739649 49.3674382,11.8533333 54.1651929,11.8533333 C58.9747369,11.8533333
              63.630456,13.6734035 66.9376844,16.8470175 C70.337544,20.0773333 72.2867369,24.6050526
              72.2867369,29.2708772 C72.2867369,32.5079299 71.4872987,35.4087018 69.8418249,38.1399299
              C68.2345262,40.7751579 66.0057547,42.8944562 63.2167013,44.4360701 C60.4343858,45.9743158
              57.473544,46.7221052 54.1651929,46.7221052 L54.1651929,46.7221052 L54.1651929,46.7221052 Z"
              id="Fill-8"
            />
            <path
              d="M24.0621751,45.8261052 L24.0621751,26.0815438 C24.0621751,21.5824562 21.4269476,18.8967018
              17.0131929,18.8967018 C14.612632,18.8967018 12.6134738,19.7876492 11.0718596,21.5448421
              C9.52463156,23.3082105 8.73978951,25.6593684 8.73978951,28.5320701 L8.73978951,45.8261052
              L0.502877156,45.8261052 L0.502877156,12.4113684 L8.73978951,12.4113684 L8.73978951,17.4842105
              L9.59256142,16.4012632 C10.7995789,14.8686316 12.3894738,13.6442105 14.318456,12.7616842
              C16.2592284,11.8398596 18.3437191,11.3744562 20.5202809,11.3744562 C24.100912,11.3744562
              26.9938249,12.3524211 29.1181751,14.2808421 C31.2290524,16.1952281 32.299088,19.0662456
              32.299088,22.8124912 L32.299088,45.8261052 L24.0621751,45.8261052"
              id="Fill-6"
            />
          </g>
          <g id="mark" fill={fill}>
            <path
              d="M11.3515789,32.5226667 C13.1458245,29.8812632 14.5897544,27.7367018 15.749614,26.0143158
              L17.0341052,24.1083508 C18.2843508,22.2613333 19.2252632,20.8814035 19.9573333,19.933193
              C20.4014035,19.365614 20.8157193,18.8597895 21.413614,18.3893333 C21.7869474,18.0990877
              22.2181052,17.8661052 22.6329825,17.7291228 C23.1320701,17.5601404 23.6098245,17.5242105
              23.9219649,17.5242105 C24.3469474,17.5247719 24.7073684,17.5797895 25.0565614,17.6926316
              C25.4938948,17.8284912 25.9621052,18.1030175 26.3017544,18.4235789 C26.5032982,18.6099649
              26.6829474,18.8182456 26.8446316,19.0551579 C27.0523508,19.3577544 27.1837193,19.6305965
              27.2741052,19.834386 C27.4088421,20.1392281 27.522807,20.4530526 27.6463158,20.8567018
              C27.7832982,21.3035789 27.9214035,21.8290526 28.0937544,22.5616842 C28.2846316,23.3684211
              28.5075088,24.3980351 28.8398596,26.0025263 C29.181193,27.653614 29.5955088,29.7139649
              30.1204211,32.3216842 L30.3668772,33.5444211 C31.0523508,36.9414737 31.5413333,39.5009123
              31.9461052,41.6331228 L32.1302456,42.5992982 C32.154386,42.6739649 32.2099649,42.6863158
              32.258807,42.6178245 C32.4575438,42.3236492 33.0599299,41.3900351 33.5713684,40.5973333
              C33.5713684,40.5973333 37.5438596,34.4409825 38.5824562,32.8353684 C42.3764211,26.9726316
              46.2450526,21.0717193 49.3541052,16.3301052 C51.1000701,13.6673684 52.6585263,11.2898245
              53.9385263,9.32435084 C48.2127719,3.78161404 40.416,0.364912281 31.8181052,0.364912281
              C14.2450526,0.364912281 0,14.6099649 0,32.1818948 C0,36.8067368 0.994807013,41.1963508
              2.76940351,45.1609825 L11.3515789,32.5226667"
              id="Fill-1"
            />
            <path
              d="M57.7779649,13.797614 C56.7051228,15.4414035 55.1219649,17.8414035 53.2962807,20.608
              C50.2113684,25.282807 46.3719299,31.101193 43.2780351,35.8815438 C42.0036492,37.8509474
              40.9263158,39.5211228 39.9758596,40.994807 L39.7877895,41.2878596 C39.0029474,42.5038596
              38.3202807,43.5632281 37.733614,44.4659649 C36.4171228,46.4943158 35.5750175,47.7658948
              34.8917895,48.6792982 C34.4460351,49.2642807 34.0620351,49.7454035 33.4821052,50.2181052
              C33.1110175,50.5134035 32.6809825,50.749193 32.2649825,50.8861755 C31.874807,51.0203508
              31.4475789,51.0877193 30.9939649,51.0877193 L30.9900351,51.0877193 C30.6655438,51.0877193
              30.1265965,51.0461755 29.5635088,50.7755789 C29.1070877,50.5633684 28.6675088,50.2046316
              28.3581755,49.7914386 C28.2043508,49.5876492 28.0769123,49.3810526 27.9601404,49.1435789
              C27.8231579,48.8645614 27.7333333,48.6124912 27.6637193,48.4025263 C27.5542456,48.0662456
              27.4672281,47.7254737 27.3908772,47.4071579 C27.2836492,46.9484912 27.168,46.4011228
              27.0270877,45.6842105 C26.8816842,44.9487719 26.7177544,44.0847719 26.5100351,42.9911579
              L26.3590175,42.1956492 C25.9800701,40.2065965 25.5079299,37.7555088 24.8825263,34.6537544
              L24.5804912,33.1525614 C24.0735438,30.6324211 23.3459649,27.0613333 23.3459649,27.0613333
              C23.3459649,27.0613333 23.3055438,26.8844912 23.0472982,25.6392982 C23.0158596,25.5090526
              22.9018948,25.4304562 22.786807,25.6022456 C22.3607018,26.24 21.8178245,27.0254035 21.1239299,
              28.0544562 L20.1639299,29.4804211 C19.0506667,31.133193 17.6651228,33.1901755 15.9781052,
              35.6738245 C13.4091228,39.4548772 9.27157893,45.4759299 5.81108772,50.5021755 C11.5716492,
              58.6638596 21.0683508,64 31.8181052,64 C49.3889123,64 63.6350877,49.7538245 63.6350877,
              32.1818948 C63.6350877,25.3305263 61.4618948,18.9905965 57.7779649,13.797614 L57.7779649,
              13.797614 L57.7779649,13.797614 Z M47.842807,50.970386 C45.7931228,50.970386 44.1313684,
              49.309193 44.1313684,47.2595088 C44.1313684,45.2098245 45.7931228,43.5486316 47.842807,
              43.5486316 C49.893614,43.5486316 51.5536842,45.2098245 51.5536842,47.2595088 C51.5536842,
              49.309193 49.893614,50.970386 47.842807,50.970386 L47.842807,50.970386 L47.842807,50.970386 Z"
              id="Fill-3"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

NordnetLogo.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

NordnetLogo.defaultProps = {
  ...Icon.defaultProps,
  width: 130,
  fill: '#00A9EC',
  stroke: '#222222',
  height: '100%',
  viewBox: '0 0 313 64',
};
