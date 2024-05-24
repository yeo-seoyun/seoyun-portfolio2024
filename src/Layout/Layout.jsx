import { Outlet } from "react-router-dom";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import GoToTop from "../components/GoToTop";

function Layout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Header />
        <ScrollToTop />
        <main>
          <Outlet />
        </main>
        <Footer />
        <GoToTop />
      </Provider>
    </QueryClientProvider>
  );
}

export default Layout;
