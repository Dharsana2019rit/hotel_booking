import React from 'react'

const MainReducer = (state , action) => {
  const {type , payload} = action
  switch(type){
      case 'book':{
          let items =[...state.items]
          let index = items.findIndex(item => item.id === payload.item.id)
          if(index > -1){
              items[index] ={...items[index]}
          }
          else{
              items.push({
                  ...payload.item
              })
          }
          return{
              ...state,
              items:items
          }
      }
      default: return state;
  }
}

export default MainReducer