import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import Routes from "./Routes";

export const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
