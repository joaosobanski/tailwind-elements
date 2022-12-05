import React, { useState } from "react";
import { render } from "react-dom";


function App() {

  const [list, setList] = useState(["grid", "grid2", "-cols", "-4", "gap-4"])

  return (
    <div className="flex flex-col w-full text-center">
      {/* <nav className="">

      </nav> */}
      <div className="grid grid-cols-4 gap-4 w-full">
        <div className="box-border p-5 border-2 md:box-content">I</div>
        <div className="box-border p-5 border-2">I</div>
        <div className="box-border p-5 border-2">I</div>
      </div>

    </div>
  );
}

export default App;
