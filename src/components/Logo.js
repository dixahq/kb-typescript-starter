import React from "react";
import cx from "classnames";
import * as Meta from "@elevio/kb-kit/lib/toolkit/meta";

export const Logo = ({ children, className }) => (
  <Meta.HomeLink className={cx("w-24 block", className)}>
    <svg
      className="inline-block fill-current"
      viewBox="0 1 274 77"
      version="1.1"
      style={{ height: "24px" }} // IE 11 fix
    >
      <g id="logo-text" transform="translate(0.000000, 0.640187)">
        <path
          d=" M15.9115714,21.7755155 C12.6768057,23.0806701 9.89296571,24.9170103 7.56474857,27.2860825 L7.56474857,27.2860825 C5.2334,29.6536082 3.39055429,32.5229381 2.03464571,35.8847938 L2.03464571,35.8847938 C0.677954286,39.2512887 0,42.9927835 0,47.1123711 L0,47.1123711 C0,50.9590206 0.677954286,54.5451031 2.03464571,57.8760309 L2.03464571,57.8760309 C3.39055429,61.2069588 5.30385714,64.0909794 7.77298857,66.5273196 L7.77298857,66.5273196 C10.2405543,68.9652062 13.1809657,70.8889175 16.5895257,72.296134 L16.5895257,72.296134 C19.9973029,73.7018041 23.78868,74.4069588 27.9628743,74.4069588 L27.9628743,74.4069588 C30.0491886,74.4069588 32.01416,74.2167526 33.8570057,73.8409794 L33.8570057,73.8409794 C35.6998514,73.4628866 37.36812,73.0005155 38.8649429,72.4492268 L38.8649429,72.4492268 C40.3609829,71.9018041 41.6996686,71.3010309 42.8825657,70.6469072 L42.8825657,70.6469072 C44.0638971,69.9951031 45.0377714,69.3958763 45.8034057,68.8445876 L45.8034057,68.8445876 C46.7068229,68.2963918 47.2469943,67.6275773 47.4207886,66.8373711 L47.4207886,66.8373711 C47.5930171,66.0479381 47.4027829,65.206701 46.8469543,64.3128866 L46.8469543,64.3128866 L45.9083086,62.7680412 C44.86476,60.9146907 43.2998286,60.5381443 41.2127314,61.6337629 L41.2127314,61.6337629 C40.0290514,62.5275773 38.3607829,63.4376289 36.2047943,64.3654639 L36.2047943,64.3654639 C34.0480229,65.2925258 31.5092171,65.7548969 28.5883771,65.7548969 L28.5883771,65.7548969 C26.2233657,65.7548969 23.9789143,65.3783505 21.8581543,64.6229381 L21.8581543,64.6229381 C19.7358286,63.8675258 17.9376057,62.6242268 16.1722629,61.2231959 L16.1722629,61.2231959 C12.8693886,58.6005155 12.1029714,55.6608247 12.1029714,55.6608247 L12.1029714,55.6608247 L48.1511943,47.1123711 C48.9708457,46.6198454 49.1430743,45.6030928 49.1430743,44.6396907 L49.1430743,44.6396907 C49.1430743,41.0018041 48.6365657,37.6724227 47.6290286,34.65 L47.6290286,34.65 C46.6214914,31.6275773 45.1598971,29.0203608 43.2473771,26.8213918 L43.2473771,26.8213918 C41.3332914,24.6255155 38.95184,22.9082474 36.1006743,21.671134 L36.1006743,21.671134 C33.24716,20.435567 30.01396,19.8177835 26.39716,19.8177835 L26.39716,19.8177835 C22.6410114,19.8177835 19.1455543,20.4719072 15.9115714,21.7755155 L15.9115714,21.7755155  Z M16.1205943,31.3028351 C18.8692057,28.7907216 22.2918571,27.6456186 26.1881371,27.6456186 L26.1881371,27.6456186 C29.6663714,27.6456186 32.6396629,28.8146907 35.1087943,31.1481959 L35.1087943,31.1481959 C37.5779257,33.4832474 38.8821657,36.9510309 39.0222971,41.55 L39.0222971,41.55 L9.93445714,48.0402062 C9.93445714,48.0402062 8.96684571,37.843299 16.1205943,31.3028351 L16.1205943,31.3028351  Z"
          id="word-e"
        />

        <path
          d="M62.3076,0.454639175 C60.0122629,0.454639175 58.8645943,1.58737113 58.8645943,3.85360825 L58.8645943,3.85360825 L58.8645943,58.957732 C58.8645943,62.2530928 59.3335257,64.8626289 60.2729543,66.785567 L60.2729543,66.785567 C61.2123829,68.707732 62.3749257,70.1690722 63.7684114,71.1626289 L63.7684114,71.1626289 C65.1579829,72.1585052 66.6892514,72.8103093 68.3590857,73.1195876 L68.3590857,73.1195876 C70.0281371,73.4280928 71.5562743,73.5835052 72.94976,73.5835052 L72.94976,73.5835052 C74.27044,73.5835052 75.1934286,73.2742268 75.7148114,72.6556701 L75.7148114,72.6556701 C76.2361943,72.0378866 76.4976686,71.1796392 76.4976686,70.0809278 L76.4976686,70.0809278 L76.4976686,67.6097938 C76.4976686,66.6479381 76.2361943,65.9451031 75.7148114,65.4981959 L75.7148114,65.4981959 C75.1934286,65.0512887 74.5483543,64.7613402 73.7842857,64.6221649 L73.7842857,64.6221649 C73.2268914,64.5556701 72.6710629,64.4335052 72.1152343,64.2626289 L72.1152343,64.2626289 C71.5562743,64.0902062 71.0348914,63.7639175 70.54952,63.2829897 L70.54952,63.2829897 C70.0625829,62.8028351 69.6789829,62.1162371 69.4026343,61.2231959 L69.4026343,61.2231959 C69.1239371,60.331701 68.9845886,59.1626289 68.9845886,57.7221649 L68.9845886,57.7221649 L68.9845886,3.85360825 C68.9845886,1.58737113 67.8377029,0.454639175 65.5423657,0.454639175 L65.5423657,0.454639175 L62.3076,0.454639175  Z"
          id="word-el"
        />

        <use href="#word-e" x="82.4" />

        <path
          d="M179.477046,21.0548969 C177.528514,21.0548969 176.24228,21.9804124 175.615994,23.8353093 L175.615994,23.8353093 C166.38376,47.8786082 161.75864,59.9520619 161.739851,60.0548969 L161.739851,60.0548969 C161.72028,59.9520619 157.09516,47.8786082 147.862926,23.8353093 L147.862926,23.8353093 C147.23664,21.9804124 145.949623,21.0548969 144.001874,21.0548969 L144.001874,21.0548969 L140.454749,21.0548969 C139.202177,21.0548969 138.332423,21.4152062 137.846269,22.1350515 L137.846269,22.1350515 C137.358549,22.8572165 137.324886,23.8012887 137.742931,24.9680412 L137.742931,24.9680412 L155.06208,70.4938144 C155.688366,72.2798969 156.9746,73.1706186 158.922349,73.1706186 L158.922349,73.1706186 L164.765594,73.1706186 C166.710994,73.1706186 167.999577,72.2798969 168.625863,70.4938144 L168.625863,70.4938144 L185.736771,24.9680412 C186.222143,23.8012887 186.206486,22.8572165 185.68432,22.1350515 L185.68432,22.1350515 C185.162937,21.4152062 184.276743,21.0548969 183.024171,21.0548969 L183.024171,21.0548969 L179.477046,21.0548969  Z"
          id="word-elev"
        />

        <path
          fill=":primary_color"
          d="M200.654897,21.0548969 C198.361126,21.0548969 197.212674,22.1876289 197.212674,24.4530928 L197.212674,24.4530928 L197.212674,69.7724227 C197.212674,72.0386598 198.361126,73.1706186 200.654897,73.1706186 L200.654897,73.1706186 L203.890446,73.1706186 C206.185783,73.1706186 207.333451,72.0386598 207.333451,69.7724227 L207.333451,69.7724227 L207.333451,24.4530928 C207.333451,22.1876289 206.185783,21.0548969 203.890446,21.0548969 L203.890446,21.0548969 L200.654897,21.0548969  Z"
          id="word-elevi"
        />

        <path
          d="M234.318537,2.69381443 C230.875531,4.03376289 227.885017,5.92268041 225.346211,8.35824742 L225.346211,8.35824742 C222.80584,10.7969072 220.789983,13.681701 219.29316,17.0103093 L219.29316,17.0103093 C217.797903,20.3420103 217.051057,23.9628866 217.051057,27.8768041 L217.051057,27.8768041 C217.051057,31.8595361 217.797903,35.5159794 219.29316,38.8469072 L219.29316,38.8469072 C220.789983,42.1778351 222.80584,45.0618557 225.346211,47.4981959 L225.346211,47.4981959 C227.885017,49.9353093 230.875531,51.8420103 234.318537,53.2152062 L234.318537,53.2152062 C237.76076,54.5876289 241.464457,55.275 245.430411,55.275 L245.430411,55.275 C249.396366,55.275 253.100063,54.5876289 256.541503,53.2152062 L256.541503,53.2152062 C259.985291,51.8420103 262.993029,49.9353093 265.567063,47.4981959 L265.567063,47.4981959 C268.140314,45.0618557 270.174177,42.1778351 271.670217,38.8469072 L271.670217,38.8469072 C273.165474,35.5159794 273.914669,31.8595361 273.914669,27.8768041 L273.914669,27.8768041 C273.914669,23.9628866 273.165474,20.3420103 271.670217,17.0103093 L271.670217,17.0103093 C270.174177,13.681701 268.140314,10.7969072 265.567063,8.35824742 L265.567063,8.35824742 C262.993029,5.92268041 259.985291,4.03376289 256.541503,2.69381443 L256.541503,2.69381443 C253.100063,1.35541237 249.396366,0.686597938 245.430411,0.686597938 L245.430411,0.686597938 C241.464457,0.686597938 237.76076,1.35541237 234.318537,2.69381443 L234.318537,2.69381443  Z M238.387829,45.2335052 C236.195829,44.3048969 234.282526,43.0175258 232.649486,41.3698454 L232.649486,41.3698454 C231.014097,39.7213918 229.71064,37.7489691 228.736766,35.4479381 L228.736766,35.4479381 C227.760543,33.1476804 227.275954,30.6239691 227.275954,27.8768041 L227.275954,27.8768041 C227.275954,25.2 227.760543,22.7265464 228.736766,20.4610825 L228.736766,20.4610825 C229.71064,18.1956186 231.014097,16.2378866 232.649486,14.5909794 L232.649486,14.5909794 C234.282526,12.9417526 236.195829,11.6551546 238.387829,10.728866 L238.387829,10.728866 C240.579046,9.80103093 242.926834,9.3371134 245.430411,9.3371134 L245.430411,9.3371134 C247.933989,9.3371134 250.280994,9.80103093 252.473777,10.728866 L252.473777,10.728866 C254.664994,11.6551546 256.593954,12.9417526 258.263789,14.5909794 L258.263789,14.5909794 C259.932057,16.2378866 261.236297,18.1956186 262.177291,20.4610825 L262.177291,20.4610825 C263.114371,22.7265464 263.584086,25.2 263.584086,27.8768041 L263.584086,27.8768041 C263.584086,30.6239691 263.114371,33.1476804 262.177291,35.4479381 L262.177291,35.4479381 C261.236297,37.7489691 259.932057,39.7213918 258.263789,41.3698454 L258.263789,41.3698454 C256.593954,43.0175258 254.664994,44.3048969 252.473777,45.2335052 L252.473777,45.2335052 C250.280994,46.1590206 247.933989,46.6221649 245.430411,46.6221649 L245.430411,46.6221649 C242.926834,46.6221649 240.579046,46.1590206 238.387829,45.2335052 L238.387829,45.2335052  Z"
          id="word-elevio"
        />
      </g>
      <g id="logo-shoulders" transform="translate(220.000000, 65.640187)">
        <path
          d="M0.1188,3.5616 L0.1188,4.9208 C0.1188,9.4336 12.3274286,12 26.8966286,12 L26.8966286,12 C41.4673714,12 53.6752286,9.4336 53.6752286,4.9208 L53.6752286,4.9208 L53.6752286,3.5616 C53.6752286,1.4104 52.3275429,0.0112 50.7222,0.0112 L50.7222,0.0112 C50.5779429,0.0112 50.4306,0.0224 50.2817143,0.0456 L50.2817143,0.0456 C48.4889143,0.3264 39.3505714,2.6536 26.8966286,2.6536 L26.8966286,2.6536 C14.4442286,2.6536 5.30357143,0.3264 3.51231429,0.0456 L3.51231429,0.0456 C3.3642,0.0224 3.21685714,0.0112 3.07182857,0.0104 L3.07182857,0.0104 C1.46648571,0.0104 0.1188,1.4112 0.1188,3.5616 L0.1188,3.5616  Z "
          id="path-5"
        />
      </g>
    </svg>
  </Meta.HomeLink>
);