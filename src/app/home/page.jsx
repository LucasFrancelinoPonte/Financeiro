export default function Home() {
  return (
    <>
    <header>
        <div className="text-xl font=semibold tracking-wide mb-6">Meu Financeiro</div>
    </header>
    <main>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-700 p-4 rounded-xl shadow">
                <h2 className="text-sm font-semibold uppercase">Tempo Atual</h2>
                <p className="text=2xl font-bold">19.4C</p>
                <p className="text-sm"> Nublado</p> 
            </div>
            <div>selic</div>
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
    <footer>

    </footer>
    </>
  );
}
