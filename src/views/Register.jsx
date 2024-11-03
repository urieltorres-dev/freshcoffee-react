import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <>
            <h1 className="text-4xl font-black">Registrarse</h1>
            <p>Registrate llentando el formulario</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10 ">
                <form action="">
                    <div className="mb-4">
                        <label 
                            htmlFor="name"
                            className="text-slate-800"
                        >
                            Nombre:
                        </label>
                        <input 
                            type="text" 
                            id="name"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="name"
                            placeholder="Nombre"
                        />
                    </div>

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

                    <div className="mb-4">
                        <label 
                            htmlFor="password_confirmation"
                            className="text-slate-800"
                        >
                            Repetir contraseña:
                        </label>
                        <input 
                            type="password_confirmation" 
                            id="password_confirmation"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password_confirmation"
                            placeholder="Repetir contraseña"
                        />
                    </div>

                    <input 
                        type="submit" 
                        value="Registrarse"
                        className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 font-bold cursor-pointer"
                    />
                </form>
            </div>

            <nav
                className="mt-5"
            >
                <Link to="/auth/login">
                    Iniciar sesión
                </Link>
            </nav>
        </>
    )
}
