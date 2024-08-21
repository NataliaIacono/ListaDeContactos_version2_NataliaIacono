import React from 'react';

const VistaFormulario = (name, address, phone, email) => {
    return (
        <div className="container ">
            <div className="w-50 m-auto p-2">
                <h1>Formulario de contacto</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Nombre
                        </label>
                        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" value={name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">
                            Direccion
                        </label>
                        <input onChange={(e) => setAdress(e.target.value)} type="text" className="form-control" id="direccion" value={address} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                            Telefono
                        </label>
                        <input onChange={(e) => setPhone(e.target.value)} type="number" className="form-control" id="telefono" value={phone} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">
                        Guardar
                    </button>
                </form>
                <Link to="/">
                    <span href="#" role="button">
                        Volver a contactos
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default VistaFormulario;
