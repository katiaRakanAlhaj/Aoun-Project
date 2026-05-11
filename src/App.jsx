import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useParams,
  useNavigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import Wrapper from "./component/wrapper";
import Home from "./pages/home";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import NotFound from "./component/page_not_found";
import Platform from "./pages/platform";
import Services from "./pages/services";
import Products from "./pages/products";
import Blog from "./pages/blog";
import SingleBlog from "./pages/singleBlog";
import Contact from "./pages/contact";

// 🟨 React Query setup
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      refetchIntervalInBackground: true,
      retry: 2,
      networkMode: "offlineFirst",
    },
  },
});

// Component to handle language sync with URL
function LanguageHandler() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get language from URL param
    const urlLang = lang;

    // Get from localStorage or default to 'ar'
    const storedLang = localStorage.getItem("language");

    // Determine which language to use
    let languageToUse = urlLang || storedLang || "ar";

    // Change i18n language if needed
    if (i18n.language !== languageToUse) {
      i18n.changeLanguage(languageToUse);
    }

    // Set RTL/LTR direction
    const isArabic = languageToUse === "ar";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    
    // Apply font based on language
    if (languageToUse === "en") {
      document.documentElement.style.fontFamily = "Roboto, sans-serif";
    } else {
      // For Arabic, keep your existing Arabic font
      document.documentElement.style.fontFamily = "'Cairo', sans-serif";
    }

    // Only add language to URL if it's completely missing (not even 'en' or 'ar')
    const hasLangParam = lang === "en" || lang === "ar";
    const isRootPath = location.pathname === "/" || location.pathname === "";

    if (!hasLangParam && isRootPath) {
      // Only redirect when on root path without language
      navigate(`/${languageToUse}`, { replace: true });
    }
  }, [lang, i18n, navigate, location.pathname]);

  return <Outlet />;
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<LanguageHandler />}>
        <Route path="/:lang?" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="Platform" element={<Platform />} />
          <Route path="Services" element={<Services />} />
          <Route path="Products" element={<Products />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="Contact" element={<Contact />} />

          {/* Add 404 route - this will catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>,
    ),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;