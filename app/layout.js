import "@styles/globals.css";

export const metadata = {
  title: "TradeFlow",
  description: "Automated Market Maker ",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>

        <main className='app'>
          {children}
        </main>
    </body>
  </html>
);

export default RootLayout;