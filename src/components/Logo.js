import styled, { keyframes } from 'styled-components';

const dash = keyframes`
  0% {
    stroke-dashoffset: 2000;
  }
  15% {
    stroke-dashoffset: 1820;
  }
  16% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const StyledPath = styled.path`
  stroke-dasharray: 1000;
`;

const StyledSvg = styled.svg`
  display: block;
  cursor: pointer;

  &:hover {
    ${StyledPath}:nth-of-type(1) {
      animation: ${dash} 6s ease forwards;
    }
    ${StyledPath}:nth-of-type(2) {
      animation: ${dash} 5.5s ease forwards;
    }
  }
`;

const Wrapper = styled.div`
  font-size: 0;
`;

const Logo = ({ href }) => (
  <Wrapper
    as={href ? 'a' : null}
    aria-label={href ? 'Navigate to the homepage' : null}
    href={href}
  >
    <StyledSvg
      width="56"
      height="42"
      viewBox="0 0 56 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <StyledPath
        d="M8.01267 13.1915C13.3915 11.869 16.9256 8.70173 16.87 5.76781C16.8478 4.70093 16.3477 2.71165 14.7696 1.72257C13.5582 0.96686 12.2357 1.11133 11.8134 1.1669C5.73444 1.8337 -0.222295 15.592 1.37802 22.4378C1.73365 23.9825 2.42267 24.8938 2.68939 25.2272C4.32305 27.2499 7.0347 28.0056 9.07955 27.8611C13.4026 27.5721 18.2814 23.0601 17.1589 18.5926C16.3365 15.3253 12.5025 12.7692 8.02379 13.1915H8.01267Z"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <StyledPath
        d="M23.6936 13.5471C27.1387 13.5471 30.5728 13.5249 34.0179 13.5249C21.5376 23.4713 18.9149 26.0163 19.2038 26.2497C19.5706 26.5497 22.3489 24.1604 25.9052 24.6382C28.3612 24.9716 29.1502 26.4052 31.8619 26.3052C33.3955 26.2497 34.5847 25.7718 35.1737 25.4828C37.0296 24.5938 38.0854 23.2491 38.5521 22.56C38.6077 21.7154 38.7744 20.6041 39.2078 19.3705C39.7523 17.8258 40.4969 16.67 41.0748 15.9143C38.0631 20.0373 37.8631 24.4048 39.8079 26.3052C41.8528 28.3056 45.7313 27.0387 46.187 26.8831C53.2995 24.4715 56.6557 12.9804 53.9663 10.5465C53.4106 10.0353 52.3104 9.6797 51.3213 10.0909C46.4315 12.0913 51.6658 29.5281 45.4868 36.9407C44.8978 37.6519 42.8974 40.0413 40.1969 40.0857C39.7301 40.0857 38.4076 40.108 37.4297 39.1411C36.4406 38.152 36.4961 36.8073 36.5073 36.585C36.5962 35.0958 37.663 34.1068 38.2298 33.5956C41.3416 30.7394 46.9982 31.8508 47.8651 32.0397"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvg>
  </Wrapper>
);

export default Logo;
