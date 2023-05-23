import { createSlice } from "@reduxjs/toolkit";
import competitors from '../../assets/competitors.json'
const initialState = {
    competitors : JSON.parse(window.localStorage.getItem('competitors')) || competitors,
    currentCompetitor: null,
    voteCount: 0
}
const competitorSlice = createSlice({
    name: "competitor",
    initialState,
    reducers:{
        setCurrentCompetitor: (state,action) => {
            state.currentCompetitor = action.payload
        },
        increaseVote: (state) => {
            state.voteCount++
        },
        decreaseVote: (state) => {
            state.voteCount == 0? state.voteCount = 0 : state.voteCount--
        },
        addVoteToCompetitor: (state,action) => {
            let competitorIndex = state.competitors.findIndex(competitor => competitor.Id === action.payload)
            state.competitors[competitorIndex].NumberofVotes = 
            Number(state.competitors[competitorIndex].NumberofVotes) + 
            Number(state.voteCount)
            window.localStorage.setItem('competitors', JSON.stringify(state.competitors))
        },
        resetState: (state) => {
            state.currentCompetitor = null
            state.voteCount = 0
        } 
}
})
export default competitorSlice.reducer
export const {setCurrentCompetitor,increaseVote,decreaseVote,addVoteToCompetitor,resetState}  = competitorSlice.actions