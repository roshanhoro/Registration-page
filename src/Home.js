import React from "react";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="hello">
        <h1> Hello world welcome</h1>
        <table className="table">
          <tr>
            <th>Heading</th>
            <th>Another Heading</th>
          </tr>
          <tr>
            <td>row 1, cell 1</td>
            <td>row 1, cell 2</td>
          </tr>
          <tr>
            <td>row 2, cell 1</td>
            <td>row 2, cell 2</td>
          </tr>
        </table>
      </div>
    </>
  );
}
export default Home;
