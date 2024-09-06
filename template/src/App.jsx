import { Route, Routes } from "react-router-dom";
import { Contact, Dashboard, User } from "./container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />}>
        <Route path="user" element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
