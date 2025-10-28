import "./podium.css"


export function Leaderboard() {
  return (
  <div className="podium-main-box">
    <div className="podium-container">
      <Podium/>
    </div>

    <div className="podium-blurb">
      <h1>A Special Thank You ❤️</h1>
      <p>Over the last 6 years thanks to your support we have raised a breath-taking</p>
      <h1 id="total-raised">£5000</h1>
      <p>These are our top 10 supporters over the years, and from all of us, thank you!</p>
      <table id="leaderboard"><tbody>
        <tr><td>1. Name</td><td>£0</td></tr>
        <tr><td>2. Name</td><td>£0</td></tr>
        <tr><td>3. Name</td><td>£0</td></tr>
        <tr><td>4. Name</td><td>£0</td></tr>
        <tr><td>5. Name</td><td>£0</td></tr>
        <tr><td>6. Name</td><td>£0</td></tr>
        <tr><td>7. Name</td><td>£0</td></tr>
        <tr><td>8. Name</td><td>£0</td></tr>
        <tr><td>9. Name</td><td>£0</td></tr>
        <tr><td>10. Name</td><td>£0</td></tr>
      </tbody></table>
    </div>
  </div>
  );
}

export function Leaderboard2025() {
  /* This component is used by the 2025 archive, please edit Leaderboard instead to make changes */
  return (
  <div className="podium-main-box">
    <div className="podium-container">
      <Podium/>
    </div>

    <div className="podium-blurb">
      <h1>A Special Thank You ❤️</h1>
      <p>Over the last 6 years thanks to your support we have raised a breath-taking</p>
      <h1 id="total-raised">£5000</h1>
      <p>These are our top 10 supporters over the years, and from all of us, thank you!</p>
      <table id="leaderboard"><tbody>
        <tr><td>1. Name</td><td>£0</td></tr>
        <tr><td>2. Name</td><td>£0</td></tr>
        <tr><td>3. Name</td><td>£0</td></tr>
        <tr><td>4. Name</td><td>£0</td></tr>
        <tr><td>5. Name</td><td>£0</td></tr>
        <tr><td>6. Name</td><td>£0</td></tr>
        <tr><td>7. Name</td><td>£0</td></tr>
        <tr><td>8. Name</td><td>£0</td></tr>
        <tr><td>9. Name</td><td>£0</td></tr>
        <tr><td>10. Name</td><td>£0</td></tr>
      </tbody></table>
    </div>
  </div>
  );
}

async function updateGSheetsData() {
  const spreadsheetId = '10ssx7zLGEJX1V77Whe-iyyw7jK6l791lgqJ8zg-iYNE';
  const apiKey = 'AIzaSyBt9I-HKdyZ1uasiCfzwS_RGwzgOkbPpq8';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Donation List?key=${apiKey}`;
  
  try {
    
    // Fetch data from Google Sheets API
    const response = await fetch(url);
    const data = await response.json();
    
    // Extract rows from the data
    const rows = data.values;

    // Go through rows 1-4 and take columns 10 and 11 to find the top three donors names and quantitites

    const quant1 = rows[1][11]
    const quant2 = rows[2][11]
    const quant3 = rows[3][11]

    document.getElementById("quant1").innerHTML = quant1.slice(1, quant1.length-4)
    document.getElementById("quant2").innerHTML = quant2.slice(1, quant2.length-4)
    document.getElementById("quant3").innerHTML = quant3.slice(1, quant3.length-4)

    document.getElementById("first").innerHTML = rows[1][10]
    document.getElementById("second").innerHTML = rows[2][10]
    document.getElementById("third").innerHTML = rows[3][10]
    
  } catch (error) {
    console.error('Error fetching Google Sheets data:', error);
  }
}

export default function Podium() {
  /**  
   * Be VERY careful editing this component. Changes are reflected on the 2025 archive
   * If you want to make changes that shouldn't be on the archive, create a copy of this
   * first. I haven't done it now because it would unnecessarily duplicate the SVG when
   * right now they are identical, so it would be a waste of memory.
  **/
  
  updateGSheetsData()

  return (
    <svg
        viewBox="30 65 134 90"
        id="podium-svg">

    <defs id="defs1">
        <filter
            style={{colorInterpolation:"sRGB"}}
            inkscape:label="Drop Shadow"
            id="filter11"
            x="-0.036605722"
            y="-0.058439619"
            width="1.0732114"
            height="1.1168792">
        <feFlood
            result="flood"
            in="SourceGraphic"
            floodOpacity="1.000000"
            floodColor="rgb(0,0,0)"
            id="feFlood10" />
        <feGaussianBlur
            result="blur"
            in="SourceGraphic"
            stdDeviation="1.000000"
            id="feGaussianBlur10" />
        <feOffset
            result="offset"
            in="blur"
            dx="0.000000"
            dy="0.000000"
            id="feOffset10" />
        <feComposite
            result="comp1"
            operator="in"
            in="flood"
            in2="offset"
            id="feComposite10" />
        <feComposite
            result="comp2"
            operator="over"
            in="SourceGraphic"
            in2="comp1"
            id="feComposite11" />
        </filter>
        <filter
            style={{colorInterpolation:"sRGB"}}
            inkscape:label="Drop Shadow"
            id="filter13"
            x="-0.039973187"
            y="-0.049281189"
            width="1.0799464"
            height="1.0985624">
        <feFlood
            result="flood"
            in="SourceGraphic"
            floodOpacity="1.000000"
            floodColor="rgb(0,0,0)"
            id="feFlood11" />
        <feGaussianBlur
            result="blur"
            in="SourceGraphic"
            stdDeviation="1.000000"
            id="feGaussianBlur11" />
        <feOffset
            result="offset"
            in="blur"
            dx="0.000000"
            dy="0.000000"
            id="feOffset11" />
        <feComposite
            result="comp1"
            operator="in"
            in="flood"
            in2="offset"
            id="feComposite12" />
        <feComposite
            result="comp2"
            operator="over"
            in="SourceGraphic"
            in2="comp1"
            id="feComposite13" />
        </filter>
        <filter
            style={{colorInterpolation:"sRGB"}}
            inkscape:label="Drop Shadow"
            id="filter15"
            x="-0.054414649"
            y="-0.034148356"
            width="1.1088293"
            height="1.0682967">
        <feFlood
            result="flood"
            in="SourceGraphic"
            floodOpacity="1.000000"
            floodColor="rgb(0,0,0)"
            id="feFlood13" />
        <feGaussianBlur
            result="blur"
            in="SourceGraphic"
            stdDeviation="1.000000"
            id="feGaussianBlur13" />
        <feOffset
            result="offset"
            in="blur"
            dx="0.000000"
            dy="0.000000"
            id="feOffset13" />
        <feComposite
            result="comp1"
            operator="in"
            in="flood"
            in2="offset"
            id="feComposite14" />
        <feComposite
            result="comp2"
            operator="over"
            in="SourceGraphic"
            in2="comp1"
            id="feComposite15" />
        </filter>
    </defs>

    <g
        inkscape:label="Layer 1"
        inkscape:groupmode="layer"
        id="layer1">
        <g
            id="g16"
            inkscape:label="Podium">
        <g
            id="g2"
            transform="matrix(0.96854736,0,0,1,3.0955011,4.2333335)"
            style={{strokeWidth:1.01611, filter:"url(#filter11)"}}
            inkscape:label="3rd">
            <rect
                style={{fill:"#a36a29",fillOpacity:"1",strokeWidth:"0.675818",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"3.4",strokeDasharray:"1.30996, 0.327492"}}
                id="rect1-6-2-3-6"
                width="49.85812"
                height="21.575251"
                x="-21.092527"
                y="161.01085"
                rx="1.9105781"
                ry="0.92737609"
                transform="matrix(1,0,0.73881349,0.67390996,0,0)" />
            <rect
                style={{
                    opacity: 1,
                    fill: "#cda36e",
                    fillOpacity: 1,
                    strokeWidth: "0.554794",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeMiterlimit: "3.4",
                    strokeDasharray: "1.07538, 0.268845"
                  }}
                id="rect1-6"
                width="49.9394"
                height="27.447113"
                x="114.05322"
                y="122.12773"
                rx="1.9105781"
                ry="2.1870413" />
        </g>
<g
  id="g3"
  inkscape:label="2nd"
  style={{ filter: "url(#filter13)" }}
  transform="translate(0,4.2333335)"
>
  <rect
    style={{
      fill: "#828282",
      fillOpacity: 1,
      strokeWidth: "0.618143",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "3.4",
      strokeDasharray: "1.19817, 0.299544"
    }}
    id="rect1-6-2-3"
    width="49.85812"
    height="18.636036"
    x="122.33135"
    y="129.29393"
    rx="1.8504854"
    ry="1.7349193"
    transform="matrix(1,0,-0.62553407,0.78019685,0,0)"
  ></rect>
    <rect
      style={{
        fill: "#d1d1d2",
        fillOpacity: 1,
        strokeWidth: "0.545999",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "3.4",
        strokeDasharray: "1.05833, 0.264583"
      }}
      id="rect1-6-2"
      width="51.173439"
      height="36.490383"
      x="30.482853"
      y="113.08446"
      rx="1.8504856"
      ry="2.1870413"
    ></rect>
</g>

<g
  id="g5"
  inkscape:label="1st"
  style={{ display: "inline", filter: "url(#filter15)" }}
>
  <g
    id="g4"
    transform="matrix(0.53170391,0,0,1,55.974021,0.47596154)"
    style={{ fill: "#a67121", fillOpacity: 1, strokeWidth: "1.3714" }}
    inkscape:label="Trapezium"
  >
    <rect
      style={{
        fill: "#a67121",
        fillOpacity: 1,
        strokeWidth: "0.847724",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: "3.4",
        strokeDasharray: "1.64318, 0.410795"
      }}
      id="rect1-6-2-3-9"
      width="49.85812"
      height="18.636036"
      x="110.70362"
      y="101.02234"
      rx="3.4802933"
      ry="1.7158722"
      transform="matrix(1,0,-0.62553408,0.78019685,0,0)"
    ></rect>
        
    <rect
        style={{
          fill: "#a67121",
          fillOpacity: 1,
          strokeWidth: "0.91213",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "3.4",
          strokeDasharray: "1.768, 0.442005"
          
        }}
        id="rect1-6-2-3-6-4"
        width="49.85812"
        height="21.575251"
        x="-32.607677"
        y="116.95525"
        rx="3.4802933"
        ry="0.9487952"
        transform="matrix(1,0,0.73881348,0.67390997,0,0)"
      ></rect>
    
  </g>
</g>

<rect
  style={{
    opacity: 1,
    fill: "#dcae5d",
    fillOpacity: 1,
    strokeWidth: "0.545999",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "3.4",
    strokeDasharray: "1.05833, 0.264582"
  }}
  id="rect1"
  width="44.10577"
  height="57.775852"
  x="75.184853"
  y="91.798988"
  rx="1.8504856"
  ry="2.1870413"
></rect>

        </g>
        </g>
        <text
  xmlSpace="preserve"
  style={{
    fontSize: "22.5778px",
    lineHeight: "0.9",
    InkscapeFontSpecification: '"Omnes Pro"',
    fill: "#000000",
    fillOpacity: 1,
    strokeWidth: "0.545999",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "3.4",
    strokeDasharray: "1.05833, 0.264583"
  }}
  x="121.91083"
  y="110.72643"
  id="text16-2"
  inkscape:label="Third"
>
  <tspan
    sodipodi:role="line"
    style={{
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      fontStretch: "normal",
      fontSize: "8.46667px",
      InkscapeFontSpecification: '"Omnes Pro, Normal"',
      fontVariantLigatures: "normal",
      fontVariantCaps: "normal",
      fontVariantNumeric: "normal",
      fontVariantEastAsian: "normal",
      strokeWidth: "0.546"
    }}
    x="121.91083"
    y="110.72643"
    id="third"
  >
    Third
  </tspan>
</text>

<>
  <text
    xmlSpace="preserve"
    style={{
      fontSize: "22.5778px",
      lineHeight: "0.9",
      InkscapeFontSpecification: '"Omnes Pro"',
      direction: "rtl",
      fill: "#000000",
      fillOpacity: 1,
      strokeWidth: "0.545999",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "3.4",
      strokeDasharray: "1.05833, 0.264583"
    }}
    x="71.448624"
    y="103.02882"
    id="text16-2-2"
    inkscape:label="Second"
  >
    <tspan
      sodipodi:role="line"
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        fontStretch: "normal",
        fontSize: "9.87778px",
        InkscapeFontSpecification: '"Omnes Pro, Normal"',
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        textAlign: "end",
        direction: "ltr",
        textAnchor: "end",
        strokeWidth: "0.546"
      }}
      x="73.127846"
      y="103.02882"
      id="second"
    >
      Second{" "}
    </tspan>
  </text>
  <text
    xmlSpace="preserve"
    style={{
      fontSize: "22.5778px",
      lineHeight: "0.9",
      InkscapeFontSpecification: '"Omnes Pro"',
      opacity: 1,
      fill: "#000000",
      fillOpacity: 1,
      strokeWidth: "0.545999",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "3.4",
      strokeDasharray: "1.05833, 0.264583"
    }}
    x="95.490791"
    y="75.90612"
    id="text16"
    inkscape:label="First"
  >
    <tspan
      sodipodi:role="line"
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        fontStretch: "normal",
        fontSize: "11.2892px",
        InkscapeFontSpecification: '"Omnes Pro, Normal"',
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        textAlign: "center",
        textAnchor: "middle",
        strokeWidth: "0.546"
      }}
      x="95.490791"
      y="75.90612"
      id="first"
    >
    </tspan>
  </text>
  <text
    xmlSpace="preserve"
    style={{
      fontSize: "22.5778px",
      lineHeight: "0.9",
      InkscapeFontSpecification: '"Omnes Pro"',
      fill: "#fdfdfd",
      fillOpacity: 1,
      strokeWidth: "0.545999",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "3.4",
      strokeDasharray: "1.05833, 0.264583"
    }}
    x="97.147423"
    y="140.57755"
    id="text16-1"
    inkscape:label="1stQuant"
  >
    <tspan
      sodipodi:role="line"
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        fontStretch: "normal",
        fontSize: "11.2892px",
        InkscapeFontSpecification: '"Omnes Pro, Normal"',
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        textAlign: "center",
        textAnchor: "middle",
        strokeWidth: "0.546",
        fill: "#fdfdfd",
        fillOpacity: 1
      }}
      x="97.147423"
      y={148}
      id="quant1"
    >
      QUANT
    </tspan>
  </text>
  <text
    xmlSpace="preserve"
    style={{
      fontSize: "22.5778px",
      lineHeight: "0.9",
      InkscapeFontSpecification: '"Omnes Pro"',
      fill: "#fdfdfd",
      fillOpacity: 1,
      strokeWidth: "0.545999",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "3.4",
      strokeDasharray: "1.05833, 0.264583"
    }}
    x="139.52371"
    y="153.13202"
    id="text16-1-2"
    inkscape:label="3rd Quant"
  >
    <tspan
      sodipodi:role="line"
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        fontStretch: "normal",
        fontSize: "11.2892px",
        InkscapeFontSpecification: '"Omnes Pro, Normal"',
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        textAlign: "center",
        textAnchor: "middle",
        strokeWidth: "0.546",
        fill: "#fdfdfd",
        fillOpacity: 1
      }}
      x="139.52371"
      y={152}
      id="quant3"
    >
      QUANT
    </tspan>
  </text>
  <text
    xmlSpace="preserve"
    style={{
      fontSize: "22.5778px",
      lineHeight: "0.9",
      fill: "#fdfdfd",
      fillOpacity: 1,
      strokeWidth: "0.545999",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "3.4",
      strokeDasharray: "1.05833, 0.264583"
    }}
    x="54.087006"
    y="151.45013"
    id="text16-1-2-7"
    inkscape:label="2nd Quant"
  >
    <tspan
      sodipodi:role="line"
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        fontStretch: "normal",
        fontSize: "11.2892px",
        fontVariantLigatures: "normal",
        fontVariantCaps: "normal",
        fontVariantNumeric: "normal",
        fontVariantEastAsian: "normal",
        textAlign: "center",
        textAnchor: "middle",
        strokeWidth: "0.546",
        fill: "#fdfdfd",
        fillOpacity: 1
      }}
      x="54.087006"
      y="151.45013"
      id="quant2"
    >
      QUANT
    </tspan>
  </text>
</>
    </svg>)
}