import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from 'paginas/Inicio';
import SobreMim from 'paginas/SobreMim';
import Post from "paginas/Post";
import NotFoundPage from "paginas/NotFoundPage";
import Menu from 'componentes/Menu';
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
