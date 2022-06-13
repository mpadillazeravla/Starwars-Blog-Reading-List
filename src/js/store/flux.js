const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            personajes: [],
            planetas: [],
            favorites: [],
            classboton: ("btn-outline-warning")

        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },


            loadPlanets: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                	
                */
                fetch('https://www.swapi.tech/api/planets/')
                    .then(res => res.json())
                    .then(data => setStore({
                        planetas: data.results
                    }))



            },
            loadPersonajes: () => {
                /**
                	fetch().then().then(data => setStore({ "foo": data.bar }))
                	
                */
                fetch('https://www.swapi.tech/api/people/')
                    .then(res => res.json())
                    .then(data => setStore({
                        personajes: data.results

                    }))


            },

            //aqui vamos a declarar la funcion para añadir a favoritos los nombres una vez que pulse en el icono corazon//
            addfavoritos: (nombre) => {
                const store = getStore();

                let newListaFavoritos = [...store.favorites, nombre];
                setStore({
                    favorites: newListaFavoritos
                });
                setStore({
                    classboton: "btn-warning"
                })
                console.log(store.favorites)
            },

            deletefavorito: (i) => {
                const store = getStore();

                let newFav = store.favorites.filter((elementfav, index) => {
                    if (i !== index) return elementfav;
                });
                setStore({
                    favorites: newFav
                });
                setStore({
                    classboton: "btn-outline-warning"
                })
            },


            // anuncio: () => {
            //     alert("leche")
            // },


            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });



                //reset the global store
                setStore({
                    demo: demo
                });
            }
        }
    };
};

export default getState;