export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <html lang="en">
          <body
            className={` antialiased`}
          >
            <h1>Country Data</h1>
            {children}
          </body>
        </html>
      );
}