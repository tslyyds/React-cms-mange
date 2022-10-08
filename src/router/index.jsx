import Edit from "../pages/Edit";
import App1 from "../App1";
import LIstList from "../pages/LIstList";
import ListTable from "../pages/ListTable";
import Login from "../pages/Login";
import Means from "../pages/Means";
import Register from "../pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const baseRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App1></App1>}>
          <Route path="/listTable" element={<ListTable></ListTable>}></Route>
          <Route path="/edit" element={<Edit></Edit>}></Route>
          <Route path="/listlist" element={<LIstList></LIstList>}></Route>
          <Route path="/means" element={<Means></Means>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </Router>
  );
};

export default baseRouter;
