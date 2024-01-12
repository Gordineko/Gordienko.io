import { Route, Routes } from "react-router-dom";
import Landing from "./MainLanding/Landing";
import Prod from "./AllProducts/ProdList";
import Product from "./Product/Product";
import PersonalArea from "./PersonalArea/PersonalArea";
import Orders from "./PersonalArea/components/Orders";
import Desired from "./PersonalArea/components/Desired";
import Stock from "./PersonalArea/components/Stock";
import Sms from "./PersonalArea/components/Sms";
import Profile from "./PersonalArea/components/Profile";
import ProdListSerch from "./AllProducts/ProdListSerch";
import Like from "./ToolsPages/pages/Like";
import Basket from "./ToolsPages/pages/Basket";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/:type" element={<Prod />} />
      <Route path="/:type/:name" element={<Product />} />
      <Route path="/personal" element={<PersonalArea />}>
        <Route index element={<Profile />} />
        <Route path="orders" element={<Orders />} />
        <Route path="desired" element={<Desired />} />
        <Route path="stock" element={<Stock />} />
        <Route path="sms" element={<Sms />} />
      </Route>
      <Route path="/search/:inquiry" element={<ProdListSerch />} />
      <Route path="/like" element={<Like />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
  );
}

export default App;
