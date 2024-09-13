import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gray-100">
      <header className="flex justify-between bg-black p-4 shadow-md">
        <h1 className="text-white text-3xl font-bold">SenaiNews</h1>
        <nav className="flex gap-8">
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Home</a>
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Sobre</a>
          <a className="text-white text-lg hover:text-red-700 transition duration-300" href="#">Contato</a>
        </nav>
      </header>

      <main className="mx-4 flex-1">
        <h1 className="mt-8 text-2xl font-black text-slate-800">Principais Notícias</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src= "https://www.grupovellore.com.br/wp-content/uploads/2017/11/arena-corinthians.jpg" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://cdn.meutimao.com.br/fotos-do-corinthians/w941/2023/01/15/torcida_do_corinthians_na_estreia_do_paulista_lf1n.jpg" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>


          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://s2-oglobo.glbimg.com/rZwXUMmm6UHpyDtGly3HWVt0Y_I=/0x1436:2304x4096/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/z/E/A5zcEsSJ2LgSZJdFNCbw/corinthiansss.jfif" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://classic.exame.com/wp-content/uploads/2021/08/Corinthians-torcida.jpg?quality=70&strip=info&w=1024" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-slate-950">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://cdn.oantagonista.com/uploads/2024/03/Corinthians-fora-da-Copa-do-Brasil-em-2025.jpg" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>


          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src="https://static.gazetaesportiva.com/uploads/imagem/2020/06/23/arena-corinthians.jpeg" alt="Gaviões da Fiel" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-800">Gaviões da Fiel</h3>
              <p className="mt-2 text-gray-600">Lealdade, Humildade e Procedimento</p>
              <a className="mt-4 inline-block bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300" href="#">Ver mais</a>
            </div>
          </div>




          

        </div>
      </main>

      <footer className="bg-black text-white text-center p-4 mt-10">
        <h4 className="text-lg">Todos os direitos reservados - 2024</h4>
      </footer>
    </div>

  );
}

export default App;

