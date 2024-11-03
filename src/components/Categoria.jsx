import useCafeteria from "../hooks/useCafeteria"

export default function Categoria({categoria}) {

    const {handleClickCategoria, categoriaActual} = useCafeteria()

    const {icono, id, nombre} = categoria

    return (
        <button 
            className={`${categoriaActual.id === id ? "bg-amber-400" : 'bg-white'} flex item-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
            type="button"
            onClick={() => handleClickCategoria(id)}
        >
            
            <img
                className="w-12"
                src={`/img/icono_${icono}.svg`}
                alt="Icono"
            />

            <p className="text-lg font-bold cursor-pointer truncate">
                {nombre}
            </p>
        </button>
    )
}
