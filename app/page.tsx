import Image from "next/image"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-lg mb-8 bg-gray-100 border border-red-500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.311334954558!2d85.31465897492193!3d27.67677082684034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cb8e082079%3A0xcd85a3db7658e221!2sKopila%20clinic!5e0!3m2!1sne!2snp!4v1748337436640!5m2!1sne!2snp"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Embed"
        />
      </div>
      
    </main>
  );
}
