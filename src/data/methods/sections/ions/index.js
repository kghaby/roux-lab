import React from "react";
import { withPrefix } from "gatsby";


const Ions = {
  title: "Common ion parameters for CHARMM",
  content: (
    <div style={{ width: "100%"}}>
      <b>Downloads:</b>
      <ul>
        <li><b><a href={withPrefix("/resources/downloads/ions/ions.dat")} download>ions.dat</a></b></li>
      </ul>
    </div>
  ),
};

export default Ions;