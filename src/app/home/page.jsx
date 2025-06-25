export default function Home() {
  return (
    <>
    <header className="bg-gray-800 text-white p-4 shadow-md"> </header>
    <main className="m-10 rounded bg-gray-500 p-6 shadow-xl">
        <div className="text-xl font=bold tracking-wide mb-6">Meu Financeiro</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-700 p-4 rounded-xl shadow">
                <h2 className="text-sm font-semibold uppercase">Tempo Atual</h2>
                <p className="text=2xl font-bold">19.4C</p>
                <p className="text-sm"> Nublado</p> 
            </div>
            <div className="bg-blue-700 p-4 rounded-xl shadow">
                <h2 className="text-sm font-semibold uppercase">Cotação do Dolar</h2>
                <p className="text=2xl font-bold">R$ 5,504</p>
                <p className="text-sm"> USD/BRL</p> 
            </div>
            <div className="bg-blue-700 p-4 rounded-xl shadow">
                <h2 className="text-sm font-semibold uppercase">Taxa Selic</h2>
                <p className="text=2xl font-bold">15%</p>
                <p className="text-sm"> Taxa básica de juros</p> 
            </div>
        </div>
        <div>
            <div>Controle Financeiro</div>
            <div>saldo atual</div>
            <div>entradas</div>
            <div>saidas</div>
            <div>investimentos</div>
            <div>
                <div>Todas as transações</div>
                <textarea name="" id="">digite aqui</textarea>
                <div>transações</div>
            </div>
        </div>
    </main>
    <footer className="bg-gray-800 text-white p-4 shadow-md"></footer>
    </>
  );
}
