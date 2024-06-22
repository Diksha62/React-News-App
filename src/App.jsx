// import React, { useState } from 'react';
// import Navbar from "./components/Navbar";
// import NewsBoard from "./components/NewsBoard";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   const [category, setCategory] = useState("general");

//   return (
//     <>
//       <Navbar setCategory={setCategory} />
//       <NewsBoard category={category} />
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
}

export default App;
