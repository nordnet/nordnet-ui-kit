import React from 'react';
import PropTypes from 'prop-types';

function SharevilleLogo({ onlyIcon, height }) {
  const width = onlyIcon ? height * 0.85 : height * 0.9;

  if (onlyIcon) {
    return (
      <svg viewBox="0 0 166.54 203.5" width={width} height={height}>
        <defs>
          <style
            dangerouslySetInnerHTML={{
              __html: '.svLogoGradientClass-1{fill:url(#linear-gradient);}.svLogoGradientClass-2{fill:url(#linear-gradient-2);}.svLogoGradientClass-3{fill:url(#linear-gradient-3);}',
            }}
          />
          <linearGradient
            id="linear-gradient"
            x1="369.57"
            y1="38.34"
            x2="197.13"
            y2="222.06"
            gradientTransform="matrix(1 -.03 -.03 -1 -184.76 221.53)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".34" stopColor="#008c44" />
            <stop offset=".49" stopColor="#3aa34a" />
            <stop offset=".65" stopColor="#6db84e" />
            <stop offset=".79" stopColor="#92c752" />
            <stop offset=".9" stopColor="#a9d054" />
            <stop offset=".97" stopColor="#b1d355" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="354.93"
            y1="65.65"
            x2="238.52"
            y2="182.06"
            gradientTransform="matrix(1 0 0 -1 -196.51 227.12)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".02" stopColor="#008c44" />
            <stop offset=".09" stopColor="#289c48" />
            <stop offset=".17" stopColor="#4dab4b" />
            <stop offset=".26" stopColor="#6cb74e" />
            <stop offset=".35" stopColor="#85c151" />
            <stop offset=".46" stopColor="#99c953" />
            <stop offset=".58" stopColor="#a7cf54" />
            <stop offset=".73" stopColor="#afd255" />
            <stop offset="1" stopColor="#b1d355" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-3"
            x1="385.8"
            y1="177.34"
            x2="318.7"
            y2="221.13"
            gradientTransform="matrix(.98 .2 .2 -.98 -270.31 252.11)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".15" stopColor="#b1d355" />
            <stop offset=".25" stopColor="#b7d662" />
            <stop offset=".46" stopColor="#c7e086" />
            <stop offset=".73" stopColor="#e2eebf" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
        </defs>
        <path
          className="svLogoGradientClass-1"
          d="M88.37 62.66c-.43.22 13.71-17.07 6.24-39.83C90.35 9.94 79.66 0 79.66 0L10.72 69c-32.13 32.73 13 103.61 67.44 71.85.44-.23-13.69 17.06-6.23 39.82 4.26 12.9 15 22.83 15 22.83l68.92-69c32.09-32.72-13.06-103.6-67.48-71.84z"
        />
        <path
          className="svLogoGradientClass-2"
          d="M89.06 98.06c-.25.09 8.77-8.58 6.13-21.74-1.5-7.47-6.78-13.7-6.78-13.7l-40.2 35.5c-20 17.78-1.37 55.52 30 42.76.26-.09-12.91 17.5 6.14 35.92l38.37-37.12c19-18.35-2.61-55.76-33.66-41.62z"
        />
        <path
          className="svLogoGradientClass-3"
          d="M87.07 117.8a14.37 14.37 0 0 0 4.86-11.68 19.52 19.52 0 0 0-2.87-8.06l-24.19 19.21c-10.38 7.12-3.56 28.17 13.29 23.58.16 0-7 10 2.44 19.8l22.32-21.3c10.66-8.74.34-29.67-15.85-21.55z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 232.01 257.26" width={width} height={height}>
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html: '.svLogoGradientWtClass-1{fill:#008c44;}.svLogoGradientWtClass-2{fill:url(#linear-gradient);}.svLogoGradientWtClass-3{fill:url(#linear-gradient-2);}.svLogoGradientWtClass-4{fill:url(#linear-gradient-3);}',
          }}
        />
        <linearGradient
          id="linear-gradient"
          x1="369.57"
          y1="38.34"
          x2="197.13"
          y2="222.06"
          gradientTransform="matrix(1 -.03 -.03 -1 -184.76 221.53)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".34" stopColor="#008c44" />
          <stop offset=".49" stopColor="#3aa34a" />
          <stop offset=".65" stopColor="#6db84e" />
          <stop offset=".79" stopColor="#92c752" />
          <stop offset=".9" stopColor="#a9d054" />
          <stop offset=".97" stopColor="#b1d355" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="354.93"
          y1="65.65"
          x2="238.52"
          y2="182.06"
          gradientTransform="matrix(1 0 0 -1 -196.51 227.12)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".02" stopColor="#008c44" />
          <stop offset=".09" stopColor="#289c48" />
          <stop offset=".17" stopColor="#4dab4b" />
          <stop offset=".26" stopColor="#6cb74e" />
          <stop offset=".35" stopColor="#85c151" />
          <stop offset=".46" stopColor="#99c953" />
          <stop offset=".58" stopColor="#a7cf54" />
          <stop offset=".73" stopColor="#afd255" />
          <stop offset="1" stopColor="#b1d355" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="385.8"
          y1="177.34"
          x2="318.7"
          y2="221.13"
          gradientTransform="matrix(.98 .2 .2 -.98 -270.31 252.11)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".15" stopColor="#b1d355" />
          <stop offset=".25" stopColor="#b7d662" />
          <stop offset=".46" stopColor="#c7e086" />
          <stop offset=".73" stopColor="#e2eebf" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
      </defs>
      <path
        className="svLogoGradientWtClass-1"
        d="M13.32 257.24c-5.54 0-9.74-1.18-13.32-4.81l4.61-4.62c2.3 2.31 5.43 3.08 8.81 3.08 4.2 0 6.45-1.59 6.45-4.51a4 4 0 0 0-1.12-3.07 5.42 5.42 0 0 0-3.26-1.31l-4.41-.61a12.46 12.46 0 0 1-7.07-3 9.67 9.67 0 0 1-2.61-7.18c0-6.5 4.82-11.06 12.71-11.06 5 0 8.66 1.23 11.78 4.25l-4.51 4.46c-2.3-2.21-5.07-2.51-7.48-2.51-3.79 0-5.63 2.09-5.63 4.61a3.51 3.51 0 0 0 1.07 2.61 6.33 6.33 0 0 0 3.38 1.43l4.31.61c3.33.46 5.43 1.38 7 2.82 1.95 1.84 2.82 4.51 2.82 7.73-.01 7.08-5.85 11.08-13.53 11.08zM33 220.38h1c5.53 0 5.75 5.56 5.75 5.56v6.76a8.82 8.82 0 0 1 6.4-2.77c5.84 0 8.92 4.1 8.92 9.74v17.26h-6.71v-16.29c0-3.54-2.26-4.72-4.36-4.72s-4.3 1.24-4.3 4.72v16.29H33zm42.82 36.55v-2.3a8.11 8.11 0 0 1-6.55 2.56c-3 0-5.23-.77-6.82-2.36a8.55 8.55 0 0 1-2.2-6c0-4.25 2.92-7.74 9.12-7.74h6.3v-1.33c0-2.92-1.43-4.2-5-4.2-2.56 0-3.74.61-5.12 2.2l-4.25-4.15c2.61-2.87 5.17-3.69 9.62-3.69 7.49 0 11.38 3.18 11.38 9.43v17.57zm-.15-11.27h-5.24c-2.4 0-3.74 1.13-3.74 3s1.23 3.08 3.84 3.08c1.85 0 3-.16 4.21-1.28.71-.67 1-1.75 1-3.38zm28.33-8.14a4.43 4.43 0 0 0-3.54-1.6c-2 0-4.3 1.54-4.3 4.93v16.08h-6.62v-26.69h6.51v2.56a9 9 0 0 1 6.71-2.87 8.07 8.07 0 0 1 6.3 2.51zm12.45 8.14c0 3.44 2.11 5.94 5.85 5.94a7.37 7.37 0 0 0 6-2.5l4 3.94a12.74 12.74 0 0 1-10.15 4.2c-6.3 0-12.34-2.87-12.34-13.68 0-8.71 4.71-13.63 11.63-13.63 7.43 0 11.63 5.44 11.63 12.76v3zm9.53-7.43a5 5 0 0 0-6.73-2.18 4.94 4.94 0 0 0-2.18 2.18 7.35 7.35 0 0 0-.62 2.89h10.15a7.36 7.36 0 0 0-.63-2.89zm24.34 18.7h-5.23l-9.84-26.69h7l5.43 16.5 5.38-16.5h7zm13.72 0v-26.69h6.66v26.69zm21.62 0c-5.48 0-7.79-3.84-7.79-7.63v-28.84h6.66v28.43c0 1.59.67 2.41 2.36 2.41h2.56v5.63zm16.65 0c-5.48 0-7.79-3.84-7.79-7.63v-28.84h6.66v28.43c0 1.59.67 2.41 2.36 2.41h2.56v5.63zm13-11.27c0 3.44 2.11 5.94 5.84 5.94a7.37 7.37 0 0 0 6.05-2.5l4 3.94a12.71 12.71 0 0 1-10.14 4.2c-6.3 0-12.35-2.87-12.35-13.68 0-8.71 4.72-13.63 11.63-13.63 7.43 0 11.63 5.44 11.63 12.76v3zm9.53-7.43a5 5 0 0 0-6.73-2.18 4.94 4.94 0 0 0-2.18 2.18 7.29 7.29 0 0 0-.62 2.87h10.19a7.43 7.43 0 0 0-.58-2.87zm-57.47-18.91a3.56 3.56 0 1 0 3.55 3.57 3.57 3.57 0 0 0-3.51-3.57z"
      />
      <path
        className="svLogoGradientWtClass-2"
        d="M118.65 62.66c-.43.22 13.71-17.07 6.24-39.83C120.63 9.94 109.94 0 109.94 0L41 69c-32.13 32.73 13 103.61 67.44 71.85.44-.23-13.69 17.06-6.23 39.82 4.26 12.9 15 22.83 15 22.83l68.92-69c32.09-32.72-13.06-103.6-67.48-71.84z"
      />
      <path
        className="svLogoGradientWtClass-3"
        d="M119.34 98.06c-.25.09 8.77-8.58 6.13-21.74-1.5-7.47-6.78-13.7-6.78-13.7l-40.2 35.5c-20 17.78-1.37 55.52 30 42.76.26-.09-12.91 17.5 6.14 35.92L153 139.68c19-18.35-2.61-55.76-33.66-41.62z"
      />
      <path
        className="svLogoGradientWtClass-4"
        d="M117.35 117.8a14.37 14.37 0 0 0 4.86-11.68 19.52 19.52 0 0 0-2.87-8.06l-24.19 19.21c-10.38 7.12-3.56 28.17 13.29 23.58.16 0-7 10 2.44 19.8l22.32-21.3c10.66-8.74.34-29.67-15.85-21.55z"
      />
    </svg>
  );
}

SharevilleLogo.defaultProps = {
  onlyIcon: false,
  height: 27,
};

SharevilleLogo.propTypes = {
  onlyIcon: PropTypes.bool,
  height: PropTypes.number,
};

export default SharevilleLogo;
