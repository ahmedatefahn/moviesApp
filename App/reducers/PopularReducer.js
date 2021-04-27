import { loading, success, fail } from '../utils/actionTypes'
 
 var  initialState={
     loading:false,
     data:[]
 };

 export const PopularReducer=(state=initialState,action)=>{

    switch (action.type){
        case loading:return {...state,loading:true};
        case success:return {data:[...state.data,...action.payload],loading:false};
        case fail:return {...state,loading:false};

        default:return state;
    }
      
 }