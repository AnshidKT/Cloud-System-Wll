import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SystemCloud from "./componants/ogfile/SystemCloud";
import Demo from "./componants/ogfile/Demo";
import Against from "./componants/demofile/Against";
import Main from "./componants/reg-file/Main";
import Entry from "./componants/reg-file/Entry";
import Lists from "./componants/reg-file/Lists";

// import { Fetch } from "./componants/Fetch";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<SystemCloud />} />
    //     <Route path="/Demo" element={<Demo />} />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Entry />} />
          <Route path="/Lists" element={<Lists />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div>
    //   {/* <Fetch/> */}
    //   {/* <Against/> */}
    //   <Main/>
    // </div>
  );
}

export default App;
