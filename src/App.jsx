import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Components/Sidebar.jsx";
import Notes from "./Components/Notes.jsx";
import Edit from "./Components/Edit.jsx";
import NotesContext from "./Context/NotesContext.jsx";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <Routes>
              <Route
                path="/notes"
                element={
                  <NotesContext>
                    <Sidebar />
                    <Notes />
                  </NotesContext>
                }
              />

              <Route
                path="/edit/:id"
                element={
                  <NotesContext>
                    <Sidebar />
                    <Edit />\
                  </NotesContext>
                }
              />

              <Route path="/*" element={<Navigate to="/notes" />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
