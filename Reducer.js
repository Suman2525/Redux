import* as ActionType from './Action';

const initialState={
    data:0
};


// action = {type:Actiontype.INCREASE_DATA,data:no}

const reducer= (state=initialState,action)=>{
    switch(action.type)
    {
        case ActionType.INCREASE_DATA:
                
            return{
               
               data: action.data+1
               
            };

            case ActionType.DECREASE_DATA:
                
            return{
               ...state,
               data: action.data-1
               
            };
            default:
                return{
                    state
                };
    }
}
export default reducer;