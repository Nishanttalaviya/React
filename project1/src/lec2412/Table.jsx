import React from "react";

class Table extends React.Component {
  render() {
    return (
      <>
        <table
          border="3"
          cellSpacing="0"
          style={{
            margin: "0 auto",
            width: "100%",
            textAlign: "center",
          }}
        >
          <thead>
            <tr>
              <td
                colSpan="6"
                style={{ fontSize: "xx-large", textAlign: "center" }}
              >
                RK University <br />
                School Of Engineering <br />
                6CE-B/IT
              </td>
            </tr>
            <tr>
              <td colSpan="6" style={{ fontSize: "x-larger" }}>
                <br />
              </td>
            </tr>
            <tr>
              <td colSpan="4">Class Counselor: Neha Chauhan</td>
              <td colSpan="2">W.E.F: 17-12-2024</td>
            </tr>
            <tr style={{ backgroundColor: "lightgray" }}>
              <td></td>
              <td>MONDAY</td>
              <td>TUESDAY</td>
              <td>WEDNESDAY</td>
              <td>THURSDAY</td>
              <td>FRIDAY</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>8:00 to 8:55</td>
              <td>React (NV)</td>
              <td>AI/ML (CP)</td>
              <td>AI/ML (CP)</td>
              <td>React (SMS)</td>
              <td>TOS (AKK)</td>
            </tr>
            <tr>
              <td>8:55 to 9:45</td>
              <td>React (NV)</td>
              <td>TOS (AKK)</td>
              <td>AI/ML (CP)</td>
              <td>React (SMS)</td>
              <td>TOS (AKK)</td>
            </tr>
            <tr>
              <td>Class / Lab location</td>
              <td>LL1</td>
              <td>LL6</td>
              <td>LL1</td>
              <td>LL1</td>
              <td>201</td>
            </tr>
            <tr style={{ backgroundColor: "lightgray" }}>
              <td>9:45 TO 10:00</td>
              <td colSpan="5">TEA BREAK</td>
            </tr>
            <tr>
              <td>10:00 to 10:50</td>
              <td>
                .Net (PJT) <br />
                ADV Java (NC)
              </td>
              <td>
                .Net (BD) <br />
                ADV Java (NC)
              </td>
              <td rowSpan="2">PD(DS)/Dm(Lib)/EC(Lib)</td>
              <td>PD(DS)/Dm(Lib)/EC(Lib)</td>
              <td rowSpan="2">
                .Net (BD) <br />
                ADV Java (Lib)
              </td>
            </tr>
            <tr>
              <td>10:50 to 11:40</td>
              <td>
                .Net (PJT) <br />
                ADV Java (NC)
              </td>
              <td>
                .Net (BD) <br />
                ADV Java (NC)
              </td>
              <td>PD(DS)/Dm(Lib)/EC(Lib)</td>
            </tr>
            <tr>
              <td>Class / Lab location</td>
              <td>LL1/LL5</td>
              <td>LL1/LL5</td>
              <td>118</td>
              <td>118</td>
              <td>LL4</td>
            </tr>
            <tr style={{ backgroundColor: "lightgray" }}>
              <td>11:40 TO 12:30</td>
              <td colSpan="5">LUNCH BREAK</td>
            </tr>
            <tr>
              <td>12:30 to 1:20</td>
              <td rowSpan="2">PD(Lib)/Dm(OD)/EC(RKI)</td>
              <td rowSpan="2">React (NV)</td>
              <td>PD(Lib)/Dm(OD)/EC(RKI)</td>
              <td rowSpan="2">AI/ML (CP)</td>
              <td rowSpan="2">
                ADV Java (MV) <br />
                .Net (Lib)
              </td>
            </tr>
            <tr>
              <td>1:20 to 2:10</td>
              <td>PD(Lib)/Dm(OD)/EC(RKI)</td>
            </tr>
            <tr>
              <td>Class / Lab location</td>
              <td>214/ Elec. Machine Lab</td>
              <td>LL5</td>
              <td>214/ Elec. Machine Lab</td>
              <td>LL5</td>
              <td>LL5</td>
            </tr>
          </tbody>
        </table>
        <br />
        <table border="1" cellSpacing="0" style={{ margin: "0 auto", width: "100%", textAlign: "center" }}>
          <thead>
            <tr style={{ backgroundColor: "lightgray" }}>
              <td>Abbreviation</td>
              <td>Subject Name and Code</td>
              <td>Faculty Abbreviation</td>
              <td>Faculty Name</td>
              <td>TH/TU</td>
              <td>PR</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ToC</td>
              <td>Theory of Computation (CE631)</td>
              <td>AKK</td>
              <td>Prof. Anju Kakkad</td>
              <td>3</td>
              <td>0</td>
            </tr>
            <tr>
              <td>AI/ML</td>
              <td>Artificial Intelligence and Machine Learning (CE626)</td>
              <td>CP, CS</td>
              <td>Prof. Chhaya Patel, Dr. Chetan Shingadiya</td>
              <td>3</td>
              <td>2</td>
            </tr>
            <tr>
              <td>ADV. JAVA</td>
              <td>Advanced JAVA (CE931)</td>
              <td>NC, MV</td>
              <td>Prof. Neha Chauhan, Prof. Madhuri Vaghasana</td>
              <td>4</td>
              <td>2</td>
            </tr>
            <tr>
              <td>.NET</td>
              <td>Web Application Development using ASP.NET (CE927)</td>
              <td>PJT, BD</td>
              <td>Dr. Paresh Tanna, Prof. Bhoomi Dangar</td>
              <td>4</td>
              <td>2</td>
            </tr>
            <tr>
              <td>React</td>
              <td>Full Stack Web Development (CE636)</td>
              <td>NV, SMS</td>
              <td>Prof. Nikunj Vadher, Arzoo Sir</td>
              <td>4</td>
              <td>2</td>
            </tr>
            <tr>
              <td>PD</td>
              <td>Product Design (ME524)</td>
              <td>DS</td>
              <td>Prof. Deep Sanghani</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>DM</td>
              <td>Disaster Management (SEE004)</td>
              <td>OD</td>
              <td>Prof. Omkar Dabhi</td>
              <td>2</td>
              <td>2</td>
            </tr>
            <tr>
              <td>EC</td>
              <td>Energy Conservation and Sustainable Development (SEE005)</td>
              <td>RKI</td>
              <td>Dr. Riaz Israni</td>
              <td>2</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Table;
