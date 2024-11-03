import { currencyFormat } from '../helpers'
import useCafeteria from '../hooks/useCafeteria'

export default function Producto({producto}) {

    const { handleClickModal, handleSetProducto } = useCafeteria()
    const {nombre, imagen, precio} = producto

    return (
        <div className="border p-3 shadow bg-white">
            
            <img
                src={`/img/${imagen}.jpg`}
                alt={`imgagen ${nombre}`}
                className="w-full"
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{currencyFormat(precio)}</p>
            </div>

            <button
                type='button'
                className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 font-bold'
                onClick={() =>{
                    handleClickModal()
                    handleSetProducto(producto)
                }}
            >
                Añadir
            </button>

        </div>
    )
}
