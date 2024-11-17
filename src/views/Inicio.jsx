import useSWR from 'swr'
import Producto from '../components/Producto'
import useCafeteria from '../hooks/useCafeteria'
import clienteAxios from '../config/axios'

export default function Inicio() {

    const { categoriaActual } = useCafeteria()

    const fetcher = () => clienteAxios('/api/productos').then(data => data.data)

    const { data, error, isLoading } = useSWR('/api/productos', fetcher, {
        refreshInterval: 1000
    })

    if (isLoading) return <p>Cargando...</p>

    if (error) return <p>Error al cargar los productos.</p>

    const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id)

    return (
        <>
            <h1 className='text-4xl font-black'>{categoriaActual.nombre}</h1>
            <p className='text-2xl my-10'>
                Personaliza tu pedido.
            </p>    

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {productos.map(producto => (
                    <Producto 
                        key={producto.imagen}
                        producto={producto}
                    />
                ))}
            </div>
        </>
    )
}
