//#TIP# Tipagem de função dispatch em set state

const PesquisaPorMarca = (marca: string, setMarca: React.Dispatch<React.SetStateAction<string>>): JSX.Element => (
    <div>
        <label htmlFor="marca" className="block mb-2 text-sm font-medium text-gray-900">Digite uma marca: </label>
        <input type="text" id="marca" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Marca" required
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
        />
    </div>
)

export default PesquisaPorMarca