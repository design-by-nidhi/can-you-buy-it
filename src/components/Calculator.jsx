import React from "react";

export default function Calculator({
  badgeLabel = "PRICE TAG",
  formula = "",
  value = "₹0",
  isNegative = false,
}) {
  // Dynamically size font to prevent overflow on the calculator screen
  let displayFontSize = 46;
  if (value.length > 10) displayFontSize = 36;
  if (value.length > 14) displayFontSize = 28;
  if (value.length > 18) displayFontSize = 22;

  return (
    <div className="calculator-container" style={{ width: "100%", maxWidth: "380px", margin: "0 auto" }}>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 579 997"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible", display: "block" }}
      >
        <g filter="url(#filter0_d_851_11721)">
          <g clipPath="url(#clip0_851_11721)">
            {/* Calculator Outer body */}
            <rect x="26.9231" y="13.4614" width="525" height="942.308" rx="48.4615" fill="#FFF7E8" />
            
            {/* Header Badge */}
            <rect x="59.2308" y="36.5381" width="173.308" height="41.5385" rx="20.7692" fill="#3C521E" />
            <text
              x={59.2308 + 173.308 / 2}
              y={36.5381 + 41.5385 / 2 + 5}
              fill="white"
              textAnchor="middle"
              fontWeight="800"
              fontSize="12"
              fontFamily="'DM Sans', sans-serif"
              letterSpacing="0.08em"
            >
              {badgeLabel}
            </text>

            {/* Screen background & border */}
            <rect x="61.2308" y="107" width="456.385" height="171" rx="30.3077" fill="#C2D8CC" />
            <rect x="61.2308" y="107" width="456.385" height="171" rx="30.3077" stroke="#63AC86" strokeWidth="4" />

            {/* Dynamic Formula Display */}
            {formula && (
              <text
                x="485"
                y="152"
                fill="#3C521E"
                fillOpacity="0.45"
                textAnchor="end"
                fontSize="15"
                fontFamily="'Orbitron', sans-serif"
                fontWeight="500"
              >
                {formula}
              </text>
            )}

            {/* Dynamic Big Value Display */}
            <text
              x="485"
              y="238"
              fill={isNegative ? "#B23A2E" : "#3C521E"}
              textAnchor="end"
              fontSize={displayFontSize}
              fontFamily="'Orbitron', sans-serif"
              fontWeight="700"
            >
              {value}
            </text>

            {/* Glossy screen glare reflection */}
            <ellipse cx="86.3623" cy="124.533" rx="19" ry="7.53442" transform="rotate(-28.8392 86.3623 124.533)" fill="#DEE9E1" />
            <ellipse cx="71.0841" cy="145.641" rx="3.80786" ry="3.51125" transform="rotate(-47.5346 71.0841 145.641)" fill="#DEE9E1" />

            {/* Keypad Buttons (Static outlines and visual shapes from exact SVG) */}
            {/* ROW 1 */}
            <g filter="url(#filter1_d_851_11721)">
              <rect x="59.2308" y="306.923" width="99.6154" height="99.6154" rx="26.9231" fill="#F7F3EA" />
              <rect x="59.9039" y="307.596" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M91.2312 368.23H86.6879L94.9599 344.734H100.214L108.498 368.23H103.955L97.679 349.553H97.4954L91.2312 368.23ZM91.3803 359.018H103.771V362.437H91.3803V359.018ZM130.6 352.662H126.31C126.187 351.958 125.962 351.335 125.633 350.792C125.304 350.241 124.895 349.774 124.405 349.392C123.916 349.01 123.357 348.723 122.73 348.531C122.111 348.333 121.441 348.233 120.722 348.233C119.445 348.233 118.313 348.554 117.326 349.197C116.34 349.832 115.567 350.765 115.009 351.996C114.45 353.22 114.171 354.715 114.171 356.482C114.171 358.28 114.45 359.794 115.009 361.025C115.575 362.249 116.347 363.175 117.326 363.802C118.313 364.421 119.441 364.731 120.711 364.731C121.414 364.731 122.072 364.639 122.684 364.456C123.304 364.265 123.858 363.985 124.348 363.618C124.845 363.251 125.262 362.8 125.598 362.265C125.942 361.729 126.18 361.117 126.31 360.429L130.6 360.452C130.44 361.569 130.092 362.616 129.556 363.595C129.029 364.574 128.336 365.439 127.48 366.188C126.623 366.93 125.621 367.512 124.474 367.932C123.327 368.345 122.053 368.552 120.653 368.552C118.588 368.552 116.745 368.074 115.124 367.118C113.502 366.162 112.225 364.781 111.292 362.976C110.358 361.171 109.892 359.006 109.892 356.482C109.892 353.951 110.362 351.786 111.303 349.989C112.244 348.183 113.525 346.803 115.146 345.847C116.768 344.891 118.604 344.413 120.653 344.413C121.961 344.413 123.177 344.596 124.302 344.963C125.426 345.331 126.428 345.87 127.308 346.581C128.187 347.285 128.91 348.149 129.476 349.174C130.05 350.191 130.425 351.354 130.6 352.662Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter2_d_851_11721)">
              <rect x="175" y="306.923" width="99.6154" height="99.6154" rx="26.9231" fill="#F7F3EA" />
              <rect x="175.673" y="307.596" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M209.357 366.842V350.964H212.959V366.842H209.357ZM203.219 360.704V357.102H219.097V360.704H203.219ZM233.757 343.633L226.185 371.764H222.548L230.12 343.633H233.757ZM247.088 356.735V360.154H236.51V356.735H247.088Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter3_d_851_11721)">
              <rect x="290.769" y="306.923" width="99.6154" height="99.6154" rx="26.9231" fill="#F7F3EA" />
              <rect x="291.442" y="307.596" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M341.598 363.825V362.586C341.598 361.676 341.789 360.838 342.172 360.073C342.562 359.308 343.128 358.693 343.87 358.226C344.612 357.76 345.51 357.526 346.566 357.526C347.652 357.526 348.562 357.76 349.296 358.226C350.031 358.685 350.585 359.297 350.96 360.062C351.342 360.827 351.534 361.668 351.534 362.586V363.825C351.534 364.735 351.342 365.573 350.96 366.337C350.578 367.102 350.015 367.718 349.273 368.185C348.539 368.651 347.637 368.884 346.566 368.884C345.495 368.884 344.589 368.651 343.847 368.185C343.105 367.718 342.543 367.102 342.16 366.337C341.786 365.573 341.598 364.735 341.598 363.825ZM344.593 362.586V363.825C344.593 364.429 344.738 364.984 345.029 365.488C345.319 365.993 345.832 366.246 346.566 366.246C347.308 366.246 347.816 365.997 348.092 365.5C348.375 364.995 348.516 364.437 348.516 363.825V362.586C348.516 361.974 348.382 361.416 348.115 360.911C347.847 360.398 347.331 360.142 346.566 360.142C345.847 360.142 345.338 360.398 345.04 360.911C344.742 361.416 344.593 361.974 344.593 362.586ZM329.655 350.379V349.14C329.655 348.222 329.85 347.38 330.24 346.616C330.63 345.851 331.196 345.239 331.938 344.78C332.68 344.313 333.579 344.08 334.634 344.08C335.713 344.08 336.619 344.313 337.353 344.78C338.095 345.239 338.653 345.851 339.028 346.616C339.403 347.38 339.59 348.222 339.59 349.14V350.379C339.59 351.296 339.399 352.138 339.017 352.903C338.642 353.66 338.084 354.268 337.342 354.727C336.6 355.186 335.697 355.415 334.634 355.415C333.556 355.415 332.645 355.186 331.904 354.727C331.169 354.268 330.611 353.656 330.228 352.891C329.846 352.126 329.655 351.289 329.655 350.379ZM332.672 349.14V350.379C332.672 350.991 332.814 351.549 333.097 352.054C333.387 352.551 333.9 352.799 334.634 352.799C335.368 352.799 335.873 352.551 336.148 352.054C336.431 351.549 336.573 350.991 336.573 350.379V349.14C336.573 348.528 336.439 347.969 336.171 347.465C335.904 346.952 335.391 346.696 334.634 346.696C333.907 346.696 333.399 346.952 333.108 347.465C332.818 347.977 332.672 348.535 332.672 349.14ZM330.963 368.23L347.117 344.734H349.985L333.831 368.23H330.963Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter4_d_851_11721)">
              <rect x="406.539" y="306.923" width="99.6154" height="99.6154" rx="26.9231" fill="#ECD7B1" />
              <rect x="407.212" y="307.596" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M464.143 357.182V360.635H448.54V357.182H464.143ZM456.342 367.657C455.638 367.657 455.038 367.412 454.541 366.923C454.051 366.425 453.806 365.825 453.806 365.121C453.806 364.433 454.051 363.844 454.541 363.354C455.038 362.865 455.638 362.62 456.342 362.62C457.03 362.62 457.619 362.865 458.109 363.354C458.598 363.844 458.843 364.433 458.843 365.121C458.843 365.825 458.598 366.425 458.109 366.923C457.619 367.412 457.03 367.657 456.342 367.657ZM456.342 355.186C455.875 355.186 455.447 355.075 455.057 354.853C454.674 354.624 454.369 354.318 454.139 353.935C453.917 353.545 453.806 353.117 453.806 352.65C453.806 351.962 454.051 351.373 454.541 350.883C455.038 350.394 455.638 350.149 456.342 350.149C457.03 350.149 457.619 350.394 458.109 350.883C458.598 351.373 458.843 351.962 458.843 352.65C458.843 353.346 458.598 353.943 458.109 354.44C457.619 354.937 457.03 355.186 456.342 355.186Z" fill="#DE7128" />
            </g>

            {/* ROW 2 */}
            <g filter="url(#filter5_d_851_11721)">
              <rect x="59.2308" y="422.692" width="99.6154" height="99.6154" rx="26.9231" fill="#F5EFE4" />
              <rect x="59.9039" y="423.365" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M102.506 484L112.499 464.221V464.06H100.9V460.503H116.905V464.14L106.923 484H102.506Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter6_d_851_11721)">
              <rect x="175" y="422.692" width="99.6154" height="99.6154" rx="26.9231" fill="#F5EFE4" />
              <rect x="175.673" y="423.365" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M224.821 484.321C223.115 484.321 221.601 484.034 220.277 483.461C218.962 482.887 217.929 482.103 217.18 481.109C216.438 480.107 216.071 478.971 216.078 477.701C216.071 476.715 216.285 475.808 216.721 474.982C217.157 474.156 217.746 473.468 218.488 472.917C219.237 472.359 220.071 472.003 220.989 471.85V471.69C219.78 471.422 218.801 470.806 218.052 469.842C217.31 468.871 216.943 467.751 216.95 466.481C216.943 465.272 217.279 464.194 217.96 463.246C218.641 462.297 219.574 461.551 220.759 461.008C221.945 460.458 223.299 460.182 224.821 460.182C226.328 460.182 227.67 460.458 228.848 461.008C230.033 461.551 230.966 462.297 231.647 463.246C232.336 464.194 232.68 465.272 232.68 466.481C232.68 467.751 232.301 468.871 231.544 469.842C230.794 470.806 229.827 471.422 228.641 471.69V471.85C229.559 472.003 230.385 472.359 231.119 472.917C231.861 473.468 232.45 474.156 232.886 474.982C233.33 475.808 233.552 476.715 233.552 477.701C233.552 478.971 233.177 480.107 232.427 481.109C231.678 482.103 230.645 482.887 229.33 483.461C228.022 484.034 226.519 484.321 224.821 484.321ZM224.821 481.04C225.7 481.04 226.465 480.891 227.115 480.593C227.765 480.287 228.27 479.858 228.63 479.308C228.989 478.757 229.173 478.122 229.18 477.403C229.173 476.654 228.978 475.992 228.595 475.418C228.221 474.837 227.704 474.382 227.047 474.053C226.396 473.724 225.654 473.56 224.821 473.56C223.979 473.56 223.23 473.724 222.572 474.053C221.914 474.382 221.394 474.837 221.012 475.418C220.637 475.992 220.453 476.654 220.461 477.403C220.453 478.122 220.629 478.757 220.989 479.308C221.348 479.851 221.853 480.275 222.503 480.581C223.161 480.887 223.934 481.04 224.821 481.04ZM224.821 470.336C225.54 470.336 226.175 470.19 226.725 469.9C227.284 469.609 227.723 469.204 228.045 468.684C228.366 468.164 228.53 467.563 228.538 466.882C228.53 466.209 228.37 465.62 228.056 465.116C227.743 464.603 227.307 464.209 226.748 463.934C226.19 463.651 225.547 463.509 224.821 463.509C224.079 463.509 223.425 463.651 222.859 463.934C222.301 464.209 221.865 464.603 221.551 465.116C221.245 465.62 221.096 466.209 221.104 466.882C221.096 467.563 221.249 468.164 221.562 468.684C221.884 469.196 222.324 469.602 222.882 469.9C223.448 470.19 224.094 470.336 224.821 470.336Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter7_d_851_11721)">
              <rect x="290.769" y="422.692" width="99.6154" height="99.6154" rx="26.9231" fill="#F5EFE4" />
              <rect x="291.442" y="423.365" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M340.348 460.182C341.472 460.19 342.566 460.389 343.629 460.779C344.7 461.161 345.663 461.788 346.52 462.66C347.377 463.525 348.057 464.683 348.562 466.137C349.067 467.59 349.319 469.387 349.319 471.529C349.327 473.548 349.113 475.353 348.677 476.944C348.249 478.527 347.633 479.866 346.83 480.96C346.027 482.053 345.059 482.887 343.927 483.461C342.795 484.034 341.522 484.321 340.107 484.321C338.623 484.321 337.307 484.031 336.16 483.449C335.02 482.868 334.099 482.073 333.395 481.063C332.691 480.053 332.259 478.898 332.099 477.598H336.286C336.5 478.531 336.936 479.273 337.594 479.824C338.26 480.367 339.097 480.638 340.107 480.638C341.736 480.638 342.99 479.931 343.87 478.516C344.749 477.101 345.189 475.135 345.189 472.619H345.029C344.654 473.292 344.168 473.873 343.571 474.363C342.975 474.845 342.298 475.216 341.541 475.476C340.791 475.736 339.996 475.866 339.154 475.866C337.778 475.866 336.539 475.537 335.437 474.879C334.343 474.221 333.475 473.319 332.833 472.171C332.198 471.024 331.877 469.712 331.869 468.236C331.869 466.707 332.221 465.334 332.925 464.117C333.636 462.894 334.626 461.93 335.896 461.226C337.166 460.515 338.65 460.167 340.348 460.182ZM340.359 463.624C339.533 463.624 338.787 463.827 338.122 464.232C337.464 464.63 336.944 465.173 336.562 465.861C336.187 466.542 335.999 467.303 335.999 468.144C336.007 468.978 336.194 469.735 336.562 470.416C336.936 471.097 337.445 471.636 338.087 472.034C338.738 472.431 339.479 472.63 340.313 472.63C340.933 472.63 341.51 472.512 342.046 472.275C342.581 472.038 343.048 471.709 343.445 471.288C343.851 470.86 344.164 470.374 344.386 469.288 344.615 469.288 344.726 468.714 344.719 468.11C344.719 467.307 344.528 466.565 344.145 465.884C343.77 465.204 343.254 464.657 342.596 464.244C341.946 463.831 341.2 463.624 340.359 463.624Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter8_d_851_11721)">
              <rect x="406.539" y="422.692" width="99.6154" height="99.6154" rx="26.9231" fill="#ECD7B1" />
              <rect x="407.212" y="423.365" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M461.78 482.692L448.322 469.257L450.915 466.653L464.361 480.111L461.78 482.692ZM450.915 482.692L448.322 480.111L461.78 466.653L464.361 469.257L450.915 482.692Z" fill="#DE7128" />
            </g>

            {/* ROW 3 */}
            <g filter="url(#filter9_d_851_11721)">
              <rect x="59.2308" y="538.461" width="99.6154" height="99.6154" rx="26.9231" fill="#F2EBE1" />
              <rect x="59.9039" y="539.135" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M99.9434 595.409V592.025L109.913 576.273H112.736V581.091H111.015L104.303 591.727V591.91H118.22V595.409H99.9434ZM111.152 599.769V594.377L111.198 592.862V576.273H115.214V599.769H111.152Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter10_d_851_11721)">
              <rect x="175" y="538.461" width="99.6154" height="99.6154" rx="26.9231" fill="#F2EBE1" />
              <rect x="175.673" y="539.135" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M224.842 600.09C223.313 600.09 221.943 599.803 220.735 599.23C219.527 598.649 218.567 597.853 217.855 596.843C217.152 595.834 216.777 594.679 216.731 593.379H220.861C220.938 594.342 221.355 595.13 222.112 595.742C222.869 596.346 223.779 596.648 224.842 596.648C225.676 596.648 226.418 596.457 227.068 596.075C227.718 595.692 228.231 595.161 228.605 594.48C228.98 593.799 229.164 593.023 229.156 592.151C229.164 591.264 228.976 590.476 228.594 589.788C228.211 589.099 227.688 588.56 227.022 588.17C226.357 587.772 225.592 587.573 224.728 587.573C224.024 587.566 223.332 587.696 222.651 587.963C221.97 588.231 221.431 588.583 221.033 589.019L217.19 588.388L218.417 576.273H232.047V579.829H221.94 \nL221.263 586.059H221.4C221.836 585.546 222.452 585.122 223.248 584.785C224.043 584.441 224.915 584.269 225.863 584.269C227.286 584.269 228.556 584.606 229.672 585.279C230.789 585.944 231.669 586.862 232.311 588.032C232.954 589.202 233.275 590.541 233.275 592.048C233.275 593.6 232.915 594.985 232.196 596.201C231.485 597.409 230.495 598.362 229.225 599.058C227.963 599.746 226.502 600.09 224.842 600.09Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter11_d_851_11721)">
              <rect x="290.769" y="538.461" width="99.6154" height="99.6154" rx="26.9231" fill="#F2EBE1" />
              <rect x="291.442" y="539.135" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M340.795 600.09C339.671 600.083 338.573 599.888 337.502 599.505C336.431 599.115 335.468 598.484 334.611 597.612C333.754 596.733 333.074 595.566 332.569 594.113C332.064 592.652 331.816 590.843 331.823 588.686C331.823 586.675 332.037 584.881 332.466 583.305C332.894 581.73 333.51 580.399 334.313 579.313C335.116 578.219 336.083 577.385 337.215 576.812C338.355 576.238 339.629 575.951 341.036 575.951C342.512 575.951 343.82 576.242 344.96 576.823C346.107 577.405 347.032 578.2 347.736 579.21C348.44 580.212 348.876 581.344 349.044 582.606H344.856C344.642 581.703 344.202 580.984 343.537 580.449C342.879 579.906 342.046 579.634 341.036 579.634C339.407 579.634 338.152 580.342 337.273 581.757C336.401 583.172 335.961 585.114 335.953 587.585H336.114C336.489 586.912 336.975 586.334 337.571 585.852C338.168 585.371 338.841 585 339.59 584.74C340.348 584.472 341.147 584.338 341.988 584.338C343.365 584.338 344.6 584.667 345.694 585.325C346.795 585.982 347.667 586.889 348.31 588.044C348.952 589.191 349.27 590.507 349.262 591.99C349.27 593.535 348.918 594.924 348.207 596.155C347.495 597.379 346.505 598.343 345.235 599.046C343.965 599.75 342.485 600.098 340.795 600.09ZM340.772 596.648C341.606 596.648 342.352 596.446 343.009 596.04C343.667 595.635 344.187 595.088 344.57 594.4C344.952 593.711 345.139 592.939 345.132 592.082C345.139 591.241 344.956 590.48 344.581 589.799C344.214 589.118 344.117 589.118 343.055 588.181C342.405 587.784 341.663 587.585 340.829 587.585C340.21 587.585 339.632 587.703 339.097 587.94C338.562 588.178 338.095 588.506 337.697 588.927C337.3 589.34 336.986 589.822 336.757 590.373C336.535 590.916 336.42 591.497 336.412 592.117C336.42 592.935 336.611 593.688 336.986 594.377C337.361 595.065 337.877 595.616 338.535 596.029C339.193 596.442 339.938 596.648 340.772 596.648Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter12_d_851_11721)">
              <rect x="406.539" y="538.461" width="99.6154" height="99.6154" rx="26.9231" fill="#F3E8C5" />
              <rect x="407.212" y="539.135" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M464.143 588.64V592.243H448.54V588.64H464.143Z" fill="#DE7128" />
            </g>

            {/* ROW 4 */}
            <g filter="url(#filter13_d_851_11721)">
              <rect x="59.2308" y="654.23" width="99.6154" height="99.6154" rx="26.9231" fill="#F2EBE1" />
              <rect x="59.9039" y="654.904" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M112.922 692.042V715.538H108.666V696.183H108.528L103.033 699.694V695.793L108.872 692.042H112.922Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter14_d_851_11721)">
              <rect x="175" y="654.23" width="99.6154" height="99.6154" rx="26.9231" fill="#F2EBE1" />
              <rect x="175.673" y="654.904" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M216.863 715.538V712.463L225.02 704.467C225.8 703.679 226.45 702.979 226.971 702.367C227.491 701.755 227.881 701.163 228.141 700.589C228.401 700.015 228.531 699.403 228.531 698.753C228.531 698.011 228.363 697.376 228.026 696.849C227.689 696.313 227.227 695.9 226.638 695.61C226.049 695.319 225.38 695.174 224.63 695.174C223.858 695.174 223.181 695.334 222.599 695.656C222.018 695.969 221.567 696.417 221.246 696.998C220.932 697.579 220.775 698.271 220.775 699.074H216.725C216.725 697.583 217.066 696.287 217.746 695.185C218.427 694.084 219.364 693.231 220.557 692.627C221.758 692.022 223.135 691.72 224.687 691.72C226.263 691.72 227.647 692.015 228.841 692.604C230.034 693.193 230.959 694 231.617 695.025C232.282 696.049 232.615 697.22 232.615 698.535C232.615 699.415 232.447 700.279 232.11 701.128C231.774 701.977 231.181 702.918 230.332 703.95C229.491 704.983 228.309 706.234 226.787 707.702L222.737 711.821V711.981H232.971V715.538H216.863Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter15_d_851_11721)">
              <rect x="290.769" y="654.23" width="99.6154" height="99.6154" rx="26.9231" fill="#F2EBE1" />
              <rect x="291.442" y="654.904" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M340.576 715.859C338.923 715.859 337.455 715.576 336.17 715.01C334.893 714.444 333.883 713.657 333.141 712.647C332.399 711.637 332.005 710.471 331.959 709.148H336.273C336.311 709.783 336.522 710.337 336.904 710.811C337.287 711.278 337.795 711.641 338.43 711.901C339.065 712.161 339.776 712.291 340.564 712.291C341.405 712.291 342.151 712.146 342.801 711.855C343.451 711.557 343.96 711.144 344.327 710.616C344.694 710.088 344.874 709.48 344.866 708.792C344.874 708.081 344.691 707.454 344.316 706.91C343.941 706.367 343.398 705.943 342.687 705.637C341.983 705.331 341.134 705.178 340.14 705.178H338.063V701.897H340.14C340.958 701.897 341.673 701.755 342.285 701.472C342.905 701.189 343.39 700.792 343.742 700.279C344.094 699.759 344.266 699.159 344.258 698.478C344.266 697.812 344.117 697.235 343.811 696.745C343.513 696.248 343.088 695.862 342.537 695.587C341.994 695.311 341.356 695.174 340.621 695.174C339.903 695.174 339.237 695.304 338.625 695.564C338.013 695.824 338.52 696.195 337.145 696.677C336.77 697.151 336.572 697.717 336.549 698.375H332.453C332.483 697.059 332.862 695.904 333.589 694.91C334.323 693.908 335.302 693.128 336.526 692.569C337.749 692.003 339.122 691.72 340.644 691.72C342.212 691.72 343.574 692.015 344.729 692.604C345.891 693.185 346.79 693.969 347.425 694.956C348.06 695.942 348.377 697.032 348.377 698.225C348.385 699.549 347.995 700.658 347.207 701.553C346.427 702.448 345.402 703.033 344.132 703.308V703.492C345.784 703.721 347.05 704.333 347.93 705.327C348.817 706.314 349.257 707.541 349.249 709.01C349.249 710.326 348.874 711.503 348.125 712.544C347.383 713.576 346.358 714.387 345.05 714.976C343.75 715.565 342.258 715.859 340.576 715.859Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter16_d_851_11721)">
              <rect x="406.539" y="654.23" width="99.6154" height="99.6154" rx="26.9231" fill="#F3E8C5" />
              <rect x="407.212" y="654.904" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M454.541 714.15V698.271H458.143V714.15H454.541ZM448.403 708.012V704.409H464.281V708.012H448.403Z" fill="#DE7128" />
            </g>

            {/* ROW 5 */}
            <g filter="url(#filter17_d_851_11721)">
              <rect x="59.2308" y="770" width="215.385" height="99.6154" rx="26.9231" fill="#F2EBE1" />
              <rect x="59.9039" y="770.673" width="214.038" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M166.922 831.755C165.032 831.755 163.411 831.277 162.057 830.321C160.711 829.357 159.675 827.969 158.948 826.156C158.229 824.336 157.87 822.145 157.87 819.582C157.877 817.02 158.24 814.84 158.959 813.043C159.686 811.238 160.722 809.861 162.069 808.913C163.422 807.964 165.04 807.49 166.922 807.49C168.803 807.49 170.421 807.964 171.775 808.913C173.129 809.861 174.165 811.238 174.884 813.043C175.61 814.848 175.974 817.028 175.974 819.582C175.974 822.152 175.61 824.347 174.884 826.168C174.165 827.98 173.129 829.365 171.775 830.321C170.429 831.277 168.811 831.755 166.922 831.755ZM166.922 828.164C168.39 828.164 169.549 827.441 170.398 825.996C171.255 824.542 171.683 822.405 171.683 819.582C171.683 817.716 171.488 816.148 171.098 814.878C170.708 813.609 170.157 812.653 169.446 812.01C168.734 811.36 167.893 811.035 166.922 811.035C165.461 811.035 164.306 811.762 163.457 813.215C162.608 814.66 162.18 816.783 162.172 819.582C162.164 821.456 162.352 823.032 162.734 824.309C163.124 825.586 163.675 826.55 164.386 827.2C165.097 827.843 165.943 828.164 166.922 828.164Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter18_d_851_11721)">
              <rect x="290.769" y="770" width="99.6154" height="99.6154" rx="26.9231" fill="#F2EBE1" />
              <rect x="291.442" y="770.673" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M340.584 831.56C339.888 831.56 339.292 831.315 338.794 830.826C338.297 830.336 338.053 829.74 338.06 829.036C338.053 828.348 338.297 827.759 338.794 827.269C339.292 826.78 339.888 826.535 340.584 826.535C341.257 826.535 341.842 826.78 342.34 827.269C342.844 827.759 343.101 828.348 343.108 829.036C343.101 829.503 342.978 829.927 342.741 830.309C342.512 830.692 342.206 830.998 341.823 831.227C341.448 831.449 341.035 831.56 340.584 831.56Z" fill="#3C521E" />
            </g>
            <g filter="url(#filter19_d_851_11721)">
              <rect x="406.539" y="770" width="99.6154" height="99.6154" rx="26.9231" fill="#2F5D3B" />
              <rect x="407.212" y="770.673" width="98.2692" height="98.2692" rx="26.25" stroke="white" strokeOpacity="0.25098" strokeWidth="1.34615" />
              <path d="M448.712 820.087V816.542H463.983V820.087H448.712ZM448.712 827.43V823.885H463.983V827.43H448.712Z" fill="white" />
            </g>

            {/* Bottom screen line indicator bar */}
            <rect x="199.231" y="906.635" width="180.385" height="6.73077" rx="3.36538" fill="#2B2821" fillOpacity="0.2" />
          </g>
          <rect x="27.9231" y="14.4614" width="523" height="940.308" rx="47.4615" stroke="#ECD7B1" strokeWidth="2" />
        </g>

        <defs>
          <filter id="filter0_d_851_11721" x="0" y="0" width="578.846" height="996.154" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feMorphology radius="10.7692" operator="erode" in="SourceAlpha" result="effect1_dropShadow_851_11721" />
            <feOffset dy="13.4615" />
            <feGaussianBlur stdDeviation="18.8462" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0784314 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter1_d_851_11721" x="51.1539" y="304.231" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter2_d_851_11721" x="166.923" y="304.231" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter3_d_851_11721" x="282.692" y="304.231" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter4_d_851_11721" x="398.462" y="304.231" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter5_d_851_11721" x="51.1539" y="420" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter6_d_851_11721" x="166.923" y="420" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter7_d_851_11721" x="282.692" y="420" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter8_d_851_11721" x="398.462" y="420" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter9_d_851_11721" x="51.1539" y="535.769" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter10_d_851_11721" x="166.923" y="535.769" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter11_d_851_11721" x="282.692" y="535.769" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter12_d_851_11721" x="398.462" y="535.769" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter13_d_851_11721" x="51.1539" y="651.538" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter14_d_851_11721" x="166.923" y="651.538" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter15_d_851_11721" x="282.692" y="651.538" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter16_d_851_11721" x="398.462" y="651.538" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter17_d_851_11721" x="51.1539" y="767.308" width="231.538" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter18_d_851_11721" x="282.692" y="767.308" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <filter id="filter19_d_851_11721" x="398.462" y="767.308" width="115.769" height="115.769" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="5.38462" />
            <feGaussianBlur stdDeviation="4.03846" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0509804 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_851_11721" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_851_11721" result="shape" />
          </filter>
          <clipPath id="clip0_851_11721">
            <rect x="26.9231" y="13.4614" width="525" height="942.308" rx="48.4615" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
