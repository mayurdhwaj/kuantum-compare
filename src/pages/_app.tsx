import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Sidebar } from "~/components/Sidebar";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <main className="h-screen overflow-scroll snap-y snap-mandatory scroll-smooth flex overflow-x-hidden">
      <Sidebar />
      <div className="text-xl flex flex-col h-screen text-center py-12 mx-auto w-full pl-80">
        <Component {...pageProps} />
      </div>
    </main>

  );
};

export default MyApp;
