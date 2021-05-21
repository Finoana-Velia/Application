

const initialState = { Panier : [] , Commande : [] };

function toggleBag(state = initialState,action){
    let nextState;

    switch(action.type){
        case 'TOGGLE_BAG':
            const Index = state.Panier.findIndex(item => item.id === action.value.id);
            if(Index !== -1){
                nextState = {
                    ...state,
                    Panier : [...state.Panier.filter((item,index)=>index!==Index),action.value]
                }
            }
            else {
                nextState = {
                    ...state,
                    Panier : [...state.Panier,action.value]
                }
            }
            return nextState;
        case 'TOGGLE_COMMANDE' :
            nextState = {
                ...state,
                Commande : [...state.Commande,action.value]
            }
        return nextState;
        

        case 'DELETE_BAG':
            const IndexPanier = state.Panier.findIndex(item => item.id === action.value.id);
            nextState = {
                ...state,
                Panier : state.Panier.filter((item,index) => index !== IndexPanier)
            }
        return nextState || state;
        
        default :
        return state;
    }
}

export default toggleBag;