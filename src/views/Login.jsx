import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <h1 className="text-4xl font-black">Iniciar sesión</h1>
            <p>Inicia sesión para crear un pedido</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10 ">
                <form action="">
                    <div className="mb-4">
                        <label 
                            htmlFor="email"
                            className="text-slate-800"
                        >
                            Correo electrónico:
                        </label>
                        <input 
                            type="email" 
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="email"
                            placeholder="Correo electrónico"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label 
                            htmlFor="password"
                            className="text-slate-800"
                        >
                            Contraseña:
                        </label>
                        <input 
                            type="password" 
                            id="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password"
                            placeholder="Contraseña"
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Iniciar sesión"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 font-bold cursor-pointer"
                    />
                </form>
            </div>

            <nav
                className="mt-5"
            >
                <Link to="/auth/register">
                    Registrarse
                </Link>
            </nav>
        </>
    )
}
