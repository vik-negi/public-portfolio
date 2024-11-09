import React from "react";
import "./css/template_1.css";

export const Tamplate1 = () => {
  return (
    <div className="temp_1">
      <header>
        <nav>
          <a href="/">
            <h1>
              <span className="logo">KRISH</span>
            </h1>
          </a>
          <ul className="nav-menu">
            <li className="nav-link">
              <a href="#about">About</a>
            </li>
            <li className="nav-link">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-link">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav-link">
              <a href="#contact">Contact</a>
            </li>
            <li className="nav-link">
              <a
                href="https://drive.google.com/file/d/1iSG6rxLIQbSQW_XoMattf0f8wQMnZ-eU/view?usp=sharing"
                target="_black"
                rel="noreferrer"
              >
                Resume
              </a>
            </li>
            <li className="nav-social-links social-links">
              <a
                href="https://github.com/Krish-Depani/"
                target="_black"
                rel="noreferrer"
                className="social github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0,0,256,256"
                  width="50px"
                  height="50px"
                >
                  <g
                    fill="#d0d4d4"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth={1}
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit={10}
                    strokeDasharray=""
                    strokeDashoffset={0}
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(4,4)">
                      <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z" />
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/krish-depani/"
                target="_black"
                rel="noreferrer"
                className="social linkedin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0,0,256,256"
                  width="50px"
                  height="50px"
                >
                  <g
                    fill="#d0d4d4"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth={1}
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit={10}
                    strokeDasharray=""
                    strokeDashoffset={0}
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z" />
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://twitter.com/Krish_Depani/"
                target="_black"
                rel="noreferrer"
                className="social twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0,0,256,256"
                  width="50px"
                  height="50px"
                >
                  <g
                    fill="#d0d4d4"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth={1}
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit={10}
                    strokeDasharray=""
                    strokeDashoffset={0}
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z" />
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="mailto:krishdepani@gmail.com"
                target="_black"
                rel="noreferrer"
                className="social behance"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0,0,256,256"
                  width="50px"
                  height="50px"
                >
                  <g
                    fill="#d0d4d4"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth={1}
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit={10}
                    strokeDasharray=""
                    strokeDashoffset={0}
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M43.75391,6.40234c-1.2177,-0.05335 -2.45911,0.31055 -3.48242,1.06641l-2.74609,2.02734l-12.52539,9.25977l-12.4082,-9.17187c-0.17292,-0.16897 -0.4012,-0.26957 -0.64258,-0.2832h0.25l-2.46484,-1.82422c-1.02397,-0.75773 -2.26723,-1.12367 -3.48633,-1.07031c-1.2191,0.05336 -2.4131,0.52522 -3.33984,1.43945c-1.17726,1.16068 -1.9082,2.78413 -1.9082,4.56445v3.43359c-0.01457,0.09777 -0.01457,0.19715 0,0.29492v23.36133c0,1.92119 1.57881,3.5 3.5,3.5h7.5c0.55226,-0.00006 0.99994,-0.44774 1,-1v-16.62695l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0l11.40625,-8.43164v16.62695c0.00006,0.55226 0.44774,0.99994 1,1h7.5c1.92119,0 3.5,-1.57881 3.5,-3.5v-23.38086c0.01129,-0.08622 0.01129,-0.17355 0,-0.25977v-3.44922c0,-1.75846 -0.70954,-3.37437 -1.87109,-4.53711c-0.03357,-0.03357 -0.04482,-0.04287 -0.03125,-0.0293c-0.00194,-0.00196 -0.0039,-0.00391 -0.00586,-0.00586c-0.92656,-0.91221 -2.12019,-1.3822 -3.33789,-1.43555zM43.64453,8.40039c0.7563,0.02965 1.48952,0.3165 2.04492,0.86328c0.01891,0.01867 0.03272,0.03277 0.02344,0.02344c0.79645,0.79726 1.28711,1.9015 1.28711,3.12305v3.08594l-8,5.91211v-10.4082c0.00042,-0.0339 -0.00088,-0.0678 -0.00391,-0.10156l2.46289,-1.82031c0.00065,0 0.0013,0 0.00195,0c0.64864,-0.47915 1.42729,-0.70739 2.18359,-0.67773zM6.35742,8.40625c0.75715,-0.02964 1.53847,0.19746 2.1875,0.67773l2.45898,1.81836c-0.00289,0.03247 -0.0042,0.06506 -0.00391,0.09766v10.4082l-8,-5.91211v-3.08594c0,-1.23567 0.50176,-2.3413 1.3125,-3.14062c0.55526,-0.54776 1.28777,-0.83364 2.04492,-0.86328zM37,12.37109v10.51563l-12,8.86914l-12,-8.86914v-10.51367l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0zM3,17.98242l8,5.91406v17.10352h-6.5c-0.84081,0 -1.5,-0.65919 -1.5,-1.5zM47,17.98242v21.51758c0,0.84081 -0.65919,1.5 -1.5,1.5h-6.5v-17.10352z" />
                    </g>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
          <button className="hamburger" type="button" name="menu button">
            <div className="menu-bar" />
          </button>
        </nav>
      </header>
      <main>
        <section>
          <span className="salutation">Hi there!</span>
          <h1>
            I am <span className="name-highlight">Krish Depani</span>.
          </h1>
          <p className="declaration">
            I develop efficient and scalable web solutions
          </p>
          <p style={{ textAlign: "justify" }}>
            As a Software Engineer, I specialize in creating unique and
            captivating web solutions and experiences for people and
            organizations who appreciate distinctive craftsmanship.
          </p>
          <div className="cta-box">
            <a href="#contact" className="cta cta1">
              Reach out
            </a>
            <a
              href="https://drive.google.com/file/d/1iSG6rxLIQbSQW_XoMattf0f8wQMnZ-eU/view?usp=sharing"
              target="_black"
              rel="noreferrer"
              className="cta cta2"
            >
              Resume
            </a>
          </div>
        </section>
        <aside className="main-social-links social-links">
          <a
            href="https://github.com/Krish-Depani"
            target="_black"
            rel="noreferrer"
            className="social github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="50px"
              height="50px"
            >
              <g
                fill="#d0d4d4"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(4,4)">
                  <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z" />
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/krish-depani/"
            target="_black"
            rel="noreferrer"
            className="social linkedin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="50px"
              height="50px"
            >
              <g
                fill="#d0d4d4"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z" />
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://twitter.com/Krish_Depani"
            target="_black"
            rel="noreferrer"
            className="social twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="50px"
              height="50px"
            >
              <g
                fill="#d0d4d4"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z" />
                </g>
              </g>
            </svg>
          </a>
          <a
            href="mailto:krishdepani@gmail.com"
            target="_black"
            rel="noreferrer"
            className="social behance"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="50px"
              height="50px"
            >
              <g
                fill="#d0d4d4"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M43.75391,6.40234c-1.2177,-0.05335 -2.45911,0.31055 -3.48242,1.06641l-2.74609,2.02734l-12.52539,9.25977l-12.4082,-9.17187c-0.17292,-0.16897 -0.4012,-0.26957 -0.64258,-0.2832h0.25l-2.46484,-1.82422c-1.02397,-0.75773 -2.26723,-1.12367 -3.48633,-1.07031c-1.2191,0.05336 -2.4131,0.52522 -3.33984,1.43945c-1.17726,1.16068 -1.9082,2.78413 -1.9082,4.56445v3.43359c-0.01457,0.09777 -0.01457,0.19715 0,0.29492v23.36133c0,1.92119 1.57881,3.5 3.5,3.5h7.5c0.55226,-0.00006 0.99994,-0.44774 1,-1v-16.62695l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0l11.40625,-8.43164v16.62695c0.00006,0.55226 0.44774,0.99994 1,1h7.5c1.92119,0 3.5,-1.57881 3.5,-3.5v-23.38086c0.01129,-0.08622 0.01129,-0.17355 0,-0.25977v-3.44922c0,-1.75846 -0.70954,-3.37437 -1.87109,-4.53711c-0.03357,-0.03357 -0.04482,-0.04287 -0.03125,-0.0293c-0.00194,-0.00196 -0.0039,-0.00391 -0.00586,-0.00586c-0.92656,-0.91221 -2.12019,-1.3822 -3.33789,-1.43555zM43.64453,8.40039c0.7563,0.02965 1.48952,0.3165 2.04492,0.86328c0.01891,0.01867 0.03272,0.03277 0.02344,0.02344c0.79645,0.79726 1.28711,1.9015 1.28711,3.12305v3.08594l-8,5.91211v-10.4082c0.00042,-0.0339 -0.00088,-0.0678 -0.00391,-0.10156l2.46289,-1.82031c0.00065,0 0.0013,0 0.00195,0c0.64864,-0.47915 1.42729,-0.70739 2.18359,-0.67773zM6.35742,8.40625c0.75715,-0.02964 1.53847,0.19746 2.1875,0.67773l2.45898,1.81836c-0.00289,0.03247 -0.0042,0.06506 -0.00391,0.09766v10.4082l-8,-5.91211v-3.08594c0,-1.23567 0.50176,-2.3413 1.3125,-3.14062c0.55526,-0.54776 1.28777,-0.83364 2.04492,-0.86328zM37,12.37109v10.51563l-12,8.86914l-12,-8.86914v-10.51367l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0zM3,17.98242l8,5.91406v17.10352h-6.5c-0.84081,0 -1.5,-0.65919 -1.5,-1.5zM47,17.98242v21.51758c0,0.84081 -0.65919,1.5 -1.5,1.5h-6.5v-17.10352z" />
                </g>
              </g>
            </svg>
          </a>
          {/* #D0D4D4 */}
        </aside>
      </main>
      <section id="about">
        <div className="separator">
          <h2>About</h2>
        </div>
        <div>
          <p className="about-text">
            Hello, I'm Krish Depani, based in Bangalore, India. With a deep
            passion for technology, I'm on a quest to craft innovative solutions
            in the realms of Automation and Backend Development. But that's not
            all; I've got a keen interest in the fascinating world of
            Blockchain. As a motivated and enthusiastic newcomer to the
            industry, I bring not just technical skills but also a strong sense
            of self-discipline and a collaborative spirit.
            <br />
            <br />
            I'm excited to apply my skills, my drive, and my love for technology
            to real-world projects, contributing to the growth and success of
            any endeavor I embark on. Let's build remarkable solutions together!
            <br />
            <br />
            Outside my regular developer routine, I enjoy playing cricket,
            watching movies, and listening to music.
          </p>
        </div>
        <div className="img-box">
          <img src="img/profile.jpg" className="profile-img" alt="_myprofile" />
        </div>
      </section>
      <section id="projects" className="mx-auto max-w-[1024px] ">
        <div className="featured-projects-box">
          <div className="separator">
            <h2>Projects</h2>
          </div>
          <div className="project project1">
            <div className="project-details-box">
              <div className="project-main-info">
                <span>Project #1</span>
                <h3>Virtual Voice Assistant</h3>
                <p style={{ textAlign: "justify" }}>
                  Virtual Voice Assistant is a project that utilizes machine
                  learning and natural language processing to enable users to
                  control their devices using voice commands. Technologies used
                  include TensorFlow, Keras, various Python libraries and
                  RESTful APIs.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/Krish-Depani/Virtual-Voice-Assistant"
                    target="_black"
                    rel="noreferrer"
                  >
                    <img
                      src={
                        "http://res.cloudinary.com/dolqf9s3y/image/upload/v1707597444/rcqfaztlprzjhyzshaz8.png"
                      }
                      alt="github repo link icon"
                    />
                  </a>
                </div>
              </div>
              <div className="project-tools">
                <p>Python, TensorFlow, REST APIs</p>
              </div>
            </div>
            <div className="project-image-box">
              <a
                href="https://github.com/Krish-Depani/Virtual-Voice-Assistant"
                target="_black"
                rel="noreferrer"
                className="project-img-link"
              >
                <img
                  src="http://res.cloudinary.com/dolqf9s3y/image/upload/v1707597444/rcqfaztlprzjhyzshaz8.png"
                  alt="Project Preview "
                />
              </a>
            </div>
          </div>
          <div className="project project2">
            <div className="project-details-box">
              <div className="project-main-info">
                <span>Project #2</span>
                <h3>Decentralized Voting System</h3>
                <p style={{ textAlign: "justify" }}>
                  The Decentralized Voting System on Ethereum Blockchain offers
                  a secure and transparent approach to elections. Utilizing
                  Ethereum's blockchain, it guarantees tamper-proof voting
                  records, enabling remote voting while preserving anonymity and
                  preventing fraud.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/Krish-Depani/Decentralized-Voting-System-Using-Ethereum-Blockchain"
                    target="_black"
                    rel="noreferrer"
                  >
                    <img src="img/github.svg" alt="github repo link icon" />
                  </a>
                </div>
              </div>
              <div className="project-tools">
                <p>HTML, CSS, JS, Solidity, Web3.js</p>
              </div>
            </div>
            <div className="project-image-box">
              <a
                href="https://github.com/Krish-Depani/Decentralized-Voting-System-Using-Ethereum-Blockchain"
                target="_black"
                rel="noreferrer"
                className="project-img-link"
              >
                <img
                  src="http://res.cloudinary.com/dolqf9s3y/image/upload/v1707597444/rcqfaztlprzjhyzshaz8.png"
                  alt="_myprofile"
                />
              </a>
            </div>
          </div>
          <div className="project project3">
            <div className="project-details-box">
              <div className="project-main-info">
                <span>Project #3</span>
                <h3>Telegram Bot</h3>
                <p style={{ textAlign: "justify" }}>
                  This bot was created solely for educational purposes. It
                  serves as a versatile Telegram bot, capable of providing
                  wallpapers, movie or TV series information, and much more.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/Krish-Depani/Telegram-Bot"
                    target="_black"
                    rel="noreferrer"
                  >
                    <img src="img/github.svg" alt="github repo link icon" />
                  </a>
                  <a
                    href="https://t.me/wmtv_bot"
                    target="_black"
                    rel="noreferrer"
                  >
                    <img src="img/link.svg" alt="live site demo link icon" />
                  </a>
                </div>
              </div>
              <div className="project-tools">
                <p>Python, REST APIs</p>
              </div>
            </div>
            <div className="project-image-box">
              <a
                href="https://github.com/Krish-Depani/Telegram-Bot"
                target="_black"
                rel="noreferrer"
                className="project-img-link"
              >
                <img src="img/telegram-bot.jpg" alt="_myprofile" />
              </a>
            </div>
          </div>
          <div className="project project4">
            <div className="project-details-box">
              <div className="project-main-info">
                <span>Project #4</span>
                <h3>Portfolio Website</h3>
                <p style={{ textAlign: "justify" }}>
                  Personal Portfolio Website is a project that showcases my
                  skills and projects. It was developed using HTML, CSS and
                  JavaScript. It is a responsive website that is compatible with
                  all devices.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/Krish-Depani/Portfolio-Website"
                    target="_black"
                    rel="noreferrer"
                  >
                    <img src="img/github.svg" alt="github repo link icon" />
                  </a>
                  <a
                    href="https://krish-depani.vercel.app/"
                    target="_black"
                    rel="noreferrer"
                  >
                    <img src="img/link.svg" alt="live site demo link icon" />
                  </a>
                </div>
              </div>
              <div className="project-tools">
                <p>HTML, CSS, JS</p>
              </div>
            </div>
            <div className="project-image-box">
              <a
                href="https://github.com/Krish-Depani/Portfolio-Website"
                target="_black"
                rel="noreferrer"
                className="project-img-link"
              >
                <img src="img/og-img.png" alt="Project Preview " />
              </a>
            </div>
          </div>
        </div>
        <div className="other-projects-box">
          <div className="separator">
            <h2>Other Notable Projects</h2>
          </div>
          <div className="notable-projects-box">
            <div className="side-project">
              <div>
                <a
                  href="https://github.com/Krish-Depani/TODO_list_API/"
                  target="_black"
                  rel="noreferrer"
                >
                  <img src="img/github.svg" alt="github repo link icon" />
                </a>
              </div>
              <h3>TODO_list_API</h3>
              <p style={{ textAlign: "justify" }}>
                The To-Do List API allows users to perform CRUD (Create, Read,
                Update, Delete) operations on a task list using API key
                authentication. The API uses MySQL database to store the task
                list and API keys.
              </p>
              <span>Python, MySQL, FastAPI</span>
            </div>
            <div className="side-project">
              <div>
                <a
                  href="https://github.com/Krish-Depani/Data-Structure-C/"
                  target="_black"
                  rel="noreferrer"
                >
                  <img src="img/github.svg" alt="github repo link icon" />
                </a>
              </div>
              <h3>Data-Structure-C</h3>
              <p style={{ textAlign: "justify" }}>
                It contains some data structures such as Arrays, Strings,
                Stacks, Queue and Tree implemented in C language.
              </p>
              <span>C, DSA</span>
            </div>
            <div className="side-project">
              <div>
                <a
                  href="https://github.com/Krish-Depani/Krish-Depani/"
                  target="_black"
                  rel="noreferrer"
                >
                  <img src="img/github.svg" alt="github repo link icon" />
                </a>
              </div>
              <h3>Github Home Page</h3>
              <p style={{ textAlign: "justify" }}>
                This is my Github home page where I have described my projects,
                skills, interests and contact information.
              </p>
              <span>Markdown files</span>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="skills">
        <div className="separator">
          <h2>Skills</h2>
        </div>
        <div className="tools-box">
          <br />
          <div className="programming-languages">
            <div className="skill-title">
              <h4>Programming Language</h4>
            </div>
            <br />
            <div className="skill">
              <object data="img/java.svg" type="image/svg+xml">
                Java
              </object>
              <br />
              &nbsp;&nbsp;&nbsp;Java&nbsp;&nbsp;&nbsp;
            </div>
            <div className="skill">
              <object data="img/python.svg" type="image/svg+xml">
                Python
              </object>
              &nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <br />
          <div className="web-dev">
            <div className="skill-title">
              <h4>Web Development Technology</h4>
            </div>
            <br />
            <div className="skill">
              <object data="img/html.svg" type="image/svg+xml">
                HTML
              </object>
              &nbsp;&nbsp;&nbsp;HTML&nbsp;&nbsp;&nbsp;
            </div>
            <div className="skill">
              <object data="img/css.svg" type="image/svg+xml">
                CSS3
              </object>
              &nbsp;&nbsp;&nbsp;CSS&nbsp;&nbsp;&nbsp;
            </div>
            <div className="skill">
              <object data="img/javascript.svg" type="image/svg+xml">
                JavaScript
              </object>
              &nbsp;&nbsp;&nbsp;JavaScript&nbsp;&nbsp;&nbsp;
            </div>
            <div className="skill">
              <object data="img/nodejs.svg" type="image/svg+xml">
                Node.js
              </object>
              &nbsp;&nbsp;&nbsp;Node.js&nbsp;&nbsp;&nbsp;
            </div>
            <div className="skill">
              <object data="img/expressjs.svg" type="image/svg+xml">
                Express.js
              </object>
              &nbsp;&nbsp;&nbsp;Express.js&nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <br />
          <div className="database">
            <div className="skill-title">
              <h4>Database</h4>
            </div>
            <br />
            <div className="skill">
              <object data="img/mysql.svg" type="image/svg+xml">
                MySQL
              </object>
              &nbsp;&nbsp;&nbsp;MySQL&nbsp;&nbsp;&nbsp;
            </div>
            <div className="skill">
              <object data="img/mongodb.svg" type="image/svg+xml">
                Mongo DB
              </object>
              &nbsp;&nbsp;&nbsp;Mongo DB&nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <br />
          <div className="version-control">
            <div className="skill-title">
              <h4>Version Control</h4>
            </div>
            <br />
            <div className="skill">
              <object data="img/git.svg" type="image/svg+xml">
                Git
              </object>
              &nbsp;&nbsp;&nbsp;&nbsp;Git&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="skill">
              <object data="img/github.svg" type="image/svg+xml">
                Github
              </object>
              &nbsp;&nbsp;&nbsp;Github&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </section> */}
      <section id="contact">
        <div>
          <span>Next steps?</span>
          <h4>Don't be a Stranger!</h4>
          <p>
            Feel free to drop me an email if you believe we'd make a great team
            and would like to collaborate. Let's make our work together not only
            productive but also enjoyable!
          </p>
          <a href="mailto:krishdepani@gmail.com" className="cta cta2">
            Get in Touch
          </a>
        </div>
        <aside className="contact-social-links social-links">
          <a
            href="https://github.com/Krish-Depani"
            target="_black"
            rel="noreferrer"
            className="social github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="50px"
              height="50px"
            >
              <g
                fill="#d0d4d4"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(4,4)">
                  <path d="M32,6c-14.359,0 -26,11.641 -26,26c0,12.277 8.512,22.56 19.955,25.286c-0.592,-0.141 -1.179,-0.299 -1.755,-0.479v-5.957c0,0 -0.975,0.325 -2.275,0.325c-3.637,0 -5.148,-3.245 -5.525,-4.875c-0.229,-0.993 -0.827,-1.934 -1.469,-2.509c-0.767,-0.684 -1.126,-0.686 -1.131,-0.92c-0.01,-0.491 0.658,-0.471 0.975,-0.471c1.625,0 2.857,1.729 3.429,2.623c1.417,2.207 2.938,2.577 3.721,2.577c0.975,0 1.817,-0.146 2.397,-0.426c0.268,-1.888 1.108,-3.57 2.478,-4.774c-6.097,-1.219 -10.4,-4.716 -10.4,-10.4c0,-2.928 1.175,-5.619 3.133,-7.792c-0.2,-0.567 -0.533,-1.714 -0.533,-3.583c0,-1.235 0.086,-2.751 0.65,-4.225c0,0 3.708,0.026 7.205,3.338c1.614,-0.47 3.341,-0.738 5.145,-0.738c1.804,0 3.531,0.268 5.145,0.738c3.497,-3.312 7.205,-3.338 7.205,-3.338c0.567,1.474 0.65,2.99 0.65,4.225c0,2.015 -0.268,3.19 -0.432,3.697c1.898,2.153 3.032,4.802 3.032,7.678c0,5.684 -4.303,9.181 -10.4,10.4c1.628,1.43 2.6,3.513 2.6,5.85v8.557c-0.576,0.181 -1.162,0.338 -1.755,0.479c11.443,-2.726 19.955,-13.009 19.955,-25.286c0,-14.359 -11.641,-26 -26,-26zM33.813,57.93c-0.599,0.042 -1.203,0.07 -1.813,0.07c0.61,0 1.213,-0.029 1.813,-0.07zM37.786,57.346c-1.164,0.265 -2.357,0.451 -3.575,0.554c1.218,-0.103 2.411,-0.29 3.575,-0.554zM32,58c-0.61,0 -1.214,-0.028 -1.813,-0.07c0.6,0.041 1.203,0.07 1.813,0.07zM29.788,57.9c-1.217,-0.103 -2.411,-0.289 -3.574,-0.554c1.164,0.264 2.357,0.451 3.574,0.554z" />
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/krish-depani/"
            target="_black"
            rel="noreferrer"
            className="social linkedin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="50px"
              height="50px"
            >
              <g
                fill="#d0d4d4"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M9,4c-2.74952,0 -5,2.25048 -5,5v32c0,2.74952 2.25048,5 5,5h32c2.74952,0 5,-2.25048 5,-5v-32c0,-2.74952 -2.25048,-5 -5,-5zM9,6h32c1.66848,0 3,1.33152 3,3v32c0,1.66848 -1.33152,3 -3,3h-32c-1.66848,0 -3,-1.33152 -3,-3v-32c0,-1.66848 1.33152,-3 3,-3zM14,11.01172c-1.09522,0 -2.08078,0.32736 -2.81055,0.94141c-0.72977,0.61405 -1.17773,1.53139 -1.17773,2.51367c0,1.86718 1.61957,3.32281 3.67969,3.4668c0.0013,0.00065 0.0026,0.0013 0.00391,0.00195c0.09817,0.03346 0.20099,0.05126 0.30469,0.05273c2.27301,0 3.98828,-1.5922 3.98828,-3.52148c-0.00018,-0.01759 -0.00083,-0.03518 -0.00195,-0.05274c-0.10175,-1.90023 -1.79589,-3.40234 -3.98633,-3.40234zM14,12.98828c1.39223,0 1.94197,0.62176 2.00195,1.50391c-0.01215,0.85625 -0.54186,1.51953 -2.00195,1.51953c-1.38541,0 -2.01172,-0.70949 -2.01172,-1.54492c0,-0.41771 0.15242,-0.7325 0.47266,-1.00195c0.32023,-0.26945 0.83428,-0.47656 1.53906,-0.47656zM11,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-5.86523v-13.13477c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM20,19c-0.55226,0.00006 -0.99994,0.44774 -1,1v19c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10c0,-0.82967 0.22639,-1.65497 0.625,-2.19531c0.39861,-0.54035 0.90147,-0.86463 1.85742,-0.84766c0.98574,0.01695 1.50758,0.35464 1.90234,0.88477c0.39477,0.53013 0.61523,1.32487 0.61523,2.1582v10c0.00006,0.55226 0.44774,0.99994 1,1h6c0.55226,-0.00006 0.99994,-0.44774 1,-1v-10.73828c0,-2.96154 -0.87721,-5.30739 -2.38086,-6.89453c-1.50365,-1.58714 -3.59497,-2.36719 -5.80664,-2.36719c-2.10202,0 -3.70165,0.70489 -4.8125,1.42383v-0.42383c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM12,21h4v12.13477v4.86523h-4zM21,21h4v1.56055c0.00013,0.43 0.27511,0.81179 0.68291,0.94817c0.40781,0.13638 0.85714,-0.00319 1.11591,-0.34661c0,0 1.57037,-2.16211 5.01367,-2.16211c1.75333,0 3.25687,0.58258 4.35547,1.74219c1.0986,1.15961 1.83203,2.94607 1.83203,5.51953v9.73828h-4v-9c0,-1.16667 -0.27953,-2.37289 -1.00977,-3.35352c-0.73023,-0.98062 -1.9584,-1.66341 -3.47266,-1.68945c-1.52204,-0.02703 -2.77006,0.66996 -3.50195,1.66211c-0.73189,0.99215 -1.01562,2.21053 -1.01562,3.38086v9h-4z" />
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://twitter.com/Krish_Depani"
            target="_black"
            rel="noreferrer"
            className="social twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="50px"
              height="50px"
            >
              <g
                fill="#d0d4d4"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M11,4c-3.85433,0 -7,3.14567 -7,7v28c0,3.85433 3.14567,7 7,7h28c3.85433,0 7,-3.14567 7,-7v-28c0,-3.85433 -3.14567,-7 -7,-7zM11,6h28c2.77367,0 5,2.22633 5,5v28c0,2.77367 -2.22633,5 -5,5h-28c-2.77367,0 -5,-2.22633 -5,-5v-28c0,-2.77367 2.22633,-5 5,-5zM13.08594,13l9.22266,13.10352l-9.30859,10.89648h2.5l7.9375,-9.29297l6.53906,9.29297h7.9375l-10.125,-14.38672l8.21094,-9.61328h-2.5l-6.83984,8.00977l-5.63672,-8.00977zM16.91406,15h3.06445l14.10742,20h-3.06445z" />
                </g>
              </g>
            </svg>
          </a>
          <a
            href="mailto:krishdepani@gmail.com"
            target="_black"
            rel="noreferrer"
            className="social behance"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="50px"
              height="50px"
            >
              <g
                fill="#d0d4d4"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M43.75391,6.40234c-1.2177,-0.05335 -2.45911,0.31055 -3.48242,1.06641l-2.74609,2.02734l-12.52539,9.25977l-12.4082,-9.17187c-0.17292,-0.16897 -0.4012,-0.26957 -0.64258,-0.2832h0.25l-2.46484,-1.82422c-1.02397,-0.75773 -2.26723,-1.12367 -3.48633,-1.07031c-1.2191,0.05336 -2.4131,0.52522 -3.33984,1.43945c-1.17726,1.16068 -1.9082,2.78413 -1.9082,4.56445v3.43359c-0.01457,0.09777 -0.01457,0.19715 0,0.29492v23.36133c0,1.92119 1.57881,3.5 3.5,3.5h7.5c0.55226,-0.00006 0.99994,-0.44774 1,-1v-16.62695l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0l11.40625,-8.43164v16.62695c0.00006,0.55226 0.44774,0.99994 1,1h7.5c1.92119,0 3.5,-1.57881 3.5,-3.5v-23.38086c0.01129,-0.08622 0.01129,-0.17355 0,-0.25977v-3.44922c0,-1.75846 -0.70954,-3.37437 -1.87109,-4.53711c-0.03357,-0.03357 -0.04482,-0.04287 -0.03125,-0.0293c-0.00194,-0.00196 -0.0039,-0.00391 -0.00586,-0.00586c-0.92656,-0.91221 -2.12019,-1.3822 -3.33789,-1.43555zM43.64453,8.40039c0.7563,0.02965 1.48952,0.3165 2.04492,0.86328c0.01891,0.01867 0.03272,0.03277 0.02344,0.02344c0.79645,0.79726 1.28711,1.9015 1.28711,3.12305v3.08594l-8,5.91211v-10.4082c0.00042,-0.0339 -0.00088,-0.0678 -0.00391,-0.10156l2.46289,-1.82031c0.00065,0 0.0013,0 0.00195,0c0.64864,-0.47915 1.42729,-0.70739 2.18359,-0.67773zM6.35742,8.40625c0.75715,-0.02964 1.53847,0.19746 2.1875,0.67773l2.45898,1.81836c-0.00289,0.03247 -0.0042,0.06506 -0.00391,0.09766v10.4082l-8,-5.91211v-3.08594c0,-1.23567 0.50176,-2.3413 1.3125,-3.14062c0.55526,-0.54776 1.28777,-0.83364 2.04492,-0.86328zM37,12.37109v10.51563l-12,8.86914l-12,-8.86914v-10.51367l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0zM3,17.98242l8,5.91406v17.10352h-6.5c-0.84081,0 -1.5,-0.65919 -1.5,-1.5zM47,17.98242v21.51758c0,0.84081 -0.65919,1.5 -1.5,1.5h-6.5v-17.10352z" />
                </g>
              </g>
            </svg>
          </a>
        </aside>
      </section>
      <footer>
        <p>
          Designed and Developed by <span>Krish Depani</span>
        </p>
      </footer>
    </div>
  );
};
