import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <svg className="svg-wrap" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <circle strokeLinecap="round" strokeWidth={2} className="svg-stroke" cy={25} cx={50} r={15} />
          <circle className="circle circle-one" cy={25} cx={35} r={1} />
          <circle className="circle circle-two" cy={25} cx={45} r={1} />
          <circle className="circle circle-three" cy={25} cx={55} r={1} />
        </svg>  
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 500px;
    height: 250px;
  }

  .circle {
    fill: #fff;
  }

  .circle-one {
    opacity: 0;
  }

  .svg-stroke {
    fill: transparent;
    stroke-dasharray: 46.82, 93.64;
    stroke-dashoffset: 46.82;
    stroke: #fff;
    opacity: 1;
  }

  .svg-wrap .svg-stroke {
    animation: stroke-start 1.6s linear, stroke-end 1.6s 0.8s linear infinite;
  }

  .svg-wrap .circle-one {
    animation: dot-one 0s 0.8s, move-dot 1.6s 0.8s linear infinite;
  }

  .svg-wrap .circle-two,
  .svg-wrap .circle-three {
    animation: move-dot 1.6s 0.8s linear infinite;
  }

  @keyframes dot-one {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes stroke-start {
    50% {
      stroke-dashoffset: 46.82;
    }

    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes stroke-end {
    50% {
      stroke-dasharray: 46.82, 93.64;
      stroke-dashoffset: 0;
      transform: translateX(0);
    }

    100% {
      stroke-dasharray: 0, 93.64;
      stroke-dashoffset: -46.82;
      transform: translateX(10px);
    }
  }

  @keyframes move-dot {
    50% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(10px);
    }
  }`;

export default Loader;
