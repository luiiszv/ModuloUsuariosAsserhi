
import { BrowserRouter, Route, Routes } from "react-router-dom";


//layouts
import LayoutAuth from "./layout/LayoutAuth";
import LayoutAdmin from "./layout/LayoutAdmin";


//pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";



//pages Administrador
import Home from "./pages/admin/Home";
import Error404 from "./pages/Error404";
import Chat from "./pages/admin/chat";


function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/auth" element={<LayoutAuth />}>
          //rutas autenticaion
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />


        </Route>

        <Route path="/" element={<LayoutAdmin />}>
          //rutas admin
          <Route index element={<Home />} />
          <Route path="Chat" element={<Chat />} />


        </Route>


        //* Es para pagina que no existe
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
