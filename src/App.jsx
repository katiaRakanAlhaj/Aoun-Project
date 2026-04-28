import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Wrapper from "./component/wrapper";
import Home from "./pages/home";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isArabic = i18n.language === 'ar';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Wrapper />}>
        <Route index element={<Home />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;