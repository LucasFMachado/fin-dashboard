import "../../styles/globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Content from "@/components/Content";
import { ContextProvider } from "@/contexts";

export const metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <div className="flex h-screen w-screen">
            <Sidebar />
            <div className="flex flex-col w-full">
              <Header />
              <Content>{children}</Content>
            </div>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
