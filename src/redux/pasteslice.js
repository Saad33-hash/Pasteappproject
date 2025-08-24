import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
export const pastesSlice = createSlice({
  name: 'paste',
  initialState: {
    pastes:localStorage.getItem("pastes") 
    ?JSON.parse(localStorage.getItem("pastes") )
    :[]

  },
  reducers: {
    addtopaste: (state,action) => {
      //assigning pay load to paste variable
     const paste=action.payload;
     //if paste is already created write something so paste is not created again.

     //pushing the payload to state function
     state.pastes.push(paste);
     //now puhing the payload to localstorage using localstorage.setitem("key","value using json.stringfy")
     localStorage.setItem("pastes",JSON.stringify(state.pastes));
     //now shoing a toaster here
     toast.success("paste successfully created!")
     
    },
    removefrompaste: (state,action) => {
      //beacuse delete occur on specific id
      const pasteId=action.payload;
      const index=state.pastes.findIndex((items)=>
      items._id === pasteId)
      if(index>=0){
     state.pastes.splice(index,1);
     localStorage.setItem("pastes",JSON.stringify(state.pastes));
     toast.success("post removed successfully")
      }
    },
    updatepaste: (state, action) => {
    const paste=action.payload;
    //now finding the index if index exists paste is alreday there we have to update it
    const index=state.pastes.findIndex((items)=>
    items._id===paste._id)
    
    if(index>=0){
      state.pastes[index]=paste;
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast.success("paste updated successfully");
    }
    },
    resetpaste:(paste,action)=>{
     state.pastes=[];
     localStorage.removeItem("pastes");

    }
  },
})

// Action creators are generated for each case reducer function
export const { addtopaste, removefrompaste, updatepaste,resetpaste } = pastesSlice.actions

export default pastesSlice.reducer