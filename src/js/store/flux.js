const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contactos: [],
        },
        actions: {
            crearAgenda: async () => {
                try {
                    const response = await fetch('https://playground.4geeks.com/contact/agendas/Mardel', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (!response.ok) {
                        console.log('La agenda ya existe');
                    }
                    const data = await response.json();
                    if (response.ok) {
                        console.log('Agenda creada exitosamente');
                    }
                } catch (error) {
                    console.log(error);
                }
            },

            traerContactosDeLaApi: async () => {
                const response = await fetch('https://playground.4geeks.com/contact/agendas/Mardel/contacts');

                if (!response.ok) {
                    console.log('No se pudieron traer los contactos de la Api');
                }
                if (response.ok) console.log('Contactos obtenidos');

                const data = await response.json();
                const store = getStore();
                setStore(...store.contactos, data);
                const contactos = data.contacts;
                console.log(contactos);
            },
        },
    };
};

export default getState;
