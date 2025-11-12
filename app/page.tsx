export default function Home() {
  return (
    <div className="container-mojana py-16">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="animate-fade-in">
          Bienvenido a La Mojana Viva
        </h1>
        <p className="text-xl text-mist mb-8 animate-slide-up">
          Un espacio dedicado a preservar la memoria cultural de La Mojana 
          a través de la palabra escrita y el arte.
        </p>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 animate-slide-up">
          <h2 className="text-2xl text-earth mb-4">Con Olor a Rosa</h2>
          <div className="poema-text">
            Con olor a rosa
            viene la mañana,
            trayendo recuerdos
            de mi tierra mojana.

            En cada suspiro
            del viento del río,
            se escucha el cantar
            de mi pueblo, el mío.
          </div>
          <p className="text-sm text-mist mt-6 italic">
            — Ubaldo Munive Rodelo
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <a href="/obras" className="btn-primary">
            Explorar obras
          </a>
          <a href="/autor" className="bg-earth text-white px-6 py-3 rounded-full font-medium hover:bg-earth-dark transition-all">
            Conocer al autor
          </a>
        </div>
      </div>
    </div>
  );
}