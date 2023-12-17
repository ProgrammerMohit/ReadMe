import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DeleteBooks from "./pages/DeleteBooks";
import ShowBooks from "./pages/ShowBooks";
import CreateBooks from "./pages/CreateBooks";
import EditBooks from "./pages/EditBooks";
import styled from "styled-components";

const CustomFontText = styled.p`
  font-family: "Poppins", sans-serif;
`;
const App = () => {
  return (
    <CustomFontText>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/details/:id" element={<ShowBooks />} />
        <Route path="/books/edit/:id" element={<EditBooks />} />
        <Route path="/books/delete/:id" element={<DeleteBooks />} />
      </Routes>
    </CustomFontText>
  );
};

export default App;
