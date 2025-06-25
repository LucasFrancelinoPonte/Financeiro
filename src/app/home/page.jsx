export default function Home() {
return (
    <>
        <header className="bg-gray-800 w-full" style={{ height: '40px' }}></header>
        <main className="m-10 rounded-2xl bg-gray-700 bg-opacity-80 p-6 shadow-2xl shadow-black overflow-hidden sm:overflow-auto">
            <div className="text-xl font-bold tracking-wide mb-6">Meu Financeiro</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-2xl shadow-2xl shadow-black bg-gradient-to-br from-gray-700 via-gray-700 to-orange-800">
                    <h2 className="text-sm font-semibold uppercase text-orange-600">Tempo Atual</h2>
                    <p className="text-2xl font-bold">19.4C</p>
                    <p className="text-sm">Nublado</p>
                </div>
                <div className="p-4 rounded-2xl shadow-2xl shadow-black bg-gradient-to-br from-gray-700 via-gray-700 to-orange-800">
                    <h2 className="text-sm font-semibold uppercase text-orange-600">Cotação do Dolar</h2>
                    <p className="text-2xl font-bold">R$ 5,504</p>
                    <p className="text-sm">USD/BRL</p>
                </div>
                <div className="p-4 rounded-2xl shadow-2xl shadow-black bg-gradient-to-br from-gray-700 via-gray-700 to-orange-800">
                    <h2 className="text-sm font-semibold uppercase text-orange-600">Taxa Selic</h2>
                    <p className="text-2xl font-bold">15%</p>
                    <p className="text-sm">Taxa básica de juros</p>
                </div>
            </div>
            <div className="bg-black/80 rounded-2xl shadow-2xl shadow-black p-6">
                <h2 className="text-xl font-bold tracking-wide mb-6">Controle Financeiro</h2>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mb-6">
                    <div className="bg-blue-700 bg-opacity-80 p-4 rounded-2xl shadow-2xl shadow-black">
                        <h3 className="text-sm font-semibold uppercase">saldo atual</h3>
                        <p className="text-2xl font-bold">R$ 0,00</p>
                    </div>
                    <div className="bg-blue-700 bg-opacity-80 p-4 rounded-2xl shadow-2xl shadow-black">
                        <h3 className="text-sm font-semibold uppercase">entradas</h3>
                        <p className="text-2xl font-bold">R$ 0,00</p>
                        <button className="mt-2 px-3 py-1 bg-green-600 rounded-lg text-white">add</button>
                    </div>
                    <div className="bg-blue-700 bg-opacity-80 p-4 rounded-2xl shadow-2xl shadow-black">
                        <h3 className="text-sm font-semibold uppercase">saidas</h3>
                        <p className="text-2xl font-bold">R$ 0,00</p>
                        <button className="mt-2 px-3 py-1 bg-red-600 rounded-lg text-white">add</button>
                    </div>
                    <div className="bg-blue-700 bg-opacity-80 p-4 rounded-2xl shadow-2xl shadow-black">
                        <h3 className="text-sm font-semibold uppercase">investimentos</h3>
                        <p className="text-2xl font-bold">R$ 0,00</p>
                        <button className="mt-2 px-3 py-1 bg-yellow-600 rounded-lg text-white">add</button>
                    </div>
                </div>
                <div>
                    <h4 className="text-sm font-semibold uppercase">Todas as transações</h4>
                    <textarea className="bg-gray-800 bg-opacity-80 rounded-2xl p-3 text-white w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2 mb-2">digite aqui</textarea>
                    <div className="bg-gray-700 bg-opacity-80 rounded-xl p-3 text-white shadow-lg shadow-black">transações</div>
                </div>
            </div>
        </main>
        <footer className="bg-gray-800 w-full" style={{ height: '40px' }}></footer>
    </>
);
}
