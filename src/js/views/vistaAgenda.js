import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Card from '../component/Card';

const VistaAgenda = (name, address, phone, email) => {
    const { store, actions } = useContext(Context);
    return (
        <div>
            <h1>Mi lista de contatos</h1>
            <h6>Para inicializar la lista, agregue un contacto</h6>
            <button>Agregar Contacto</button>
            {store.contactos.map((item) => {
                return <Card />;
            })}
        </div>
    );
};

export default VistaAgenda;
