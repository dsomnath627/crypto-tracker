import CryptoTable from "@/components/CryptoTable";

export default function Home() {
  
  return (
    <main className="container">
      <nav className="flex flex-col items-center space-y-4 w-full py-20 bg-blue-100">
        <h1 className="text-3xl font-medium">Crypto App</h1>
        <p className="text-sm text-center">Get latest crypto data here.</p>
      </nav>
      <div className="mt-10 max-w-4xl mx-auto">

      <CryptoTable />
      </div>
    </main>
  );
}
