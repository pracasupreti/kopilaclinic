export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Website</title>
        <meta name="description" content="A simple website built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl font-bold">My Website</h1>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}