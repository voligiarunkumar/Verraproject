import React from "react";
// import { Switch, Route, Router } from "react-router-dom";
// import { StylesProvider,createGenerateClassName } from "@material-ui/core/styles";
import Logs from './components/logs';
import Reports from './components/reports';
import Orders from "./components/orders";
// const generateClassName=createGenerateClassName(
//   {
//     productionPrefix:'ma',
//   }
// );
export default ({history}) => {
  return (
    <div>
      {/* <StylesProvider generateClassName={generateClassName}> */}
        {/* <Router history={history}>
          <Switch>
            <Route exact path="/logs" component={Logs} />
            <Route exact path="/reports" component={Reports} />
            <Route exact path="/orders" component={Orders} />
          </Switch>
        </Router> */}
        <Logs></Logs>
        <Orders> </Orders>
        <Reports></Reports>
      {/* </StylesProvider> */}
    </div>
  );
};
