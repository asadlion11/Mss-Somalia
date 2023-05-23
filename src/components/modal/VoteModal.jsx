import {useState} from 'react'
import Modal from 'react-modal';
import style from './vote.module.scss'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { handleModal } from '../../feutures/modal/modalSlice';
import { useSelector,useDispatch } from 'react-redux';
import { addVoteToCompetitor, decreaseVote, increaseVote,resetState } from '../../feutures/competitors/competitorSlice';
import { Toaster, toast } from 'react-hot-toast';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
const VoteModal = () => {
const {isOpen} = useSelector((store) => store.modal)
const {currentCompetitor,voteCount} = useSelector((store) => store.competitor)
const dispatch = useDispatch()
function closeModal() {
  dispatch(handleModal())
}



if(!currentCompetitor) return
const backgroundStyle = {
  width: "100%",
  height: "400px",
  background: `linear-gradient(0deg,#128b4871,rgba(0,0,0,0) 60%,rgba(0,0,0,0)),url('${currentCompetitor.Photo}')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderBottomRightRadius: '10px'
};
const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(addVoteToCompetitor(currentCompetitor.Id))
  dispatch(resetState())
  closeModal()
  toast.success('Your Vote Successfully!')
}
  return (
    <div>
        {/* <button onClick={() => dispatch(handleModal())}>Open Modal</button> */}
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={style.modal}
        overlayClassName={style.overlay}>
          <div className ={style.modal_container}>
            <div className={style.competitor_info}>
              <div style={backgroundStyle}></div>
              <div className={style.bio}>
                  <div className={style.divider}>
                    <label htmlFor="">Name: </label>
                    <span>{currentCompetitor.FirstName} {currentCompetitor.MiddleName} {currentCompetitor.LastName}</span>
                  </div>
                  <div className={style.divider}>
                    <label htmlFor="">State: </label>
                    <span>{currentCompetitor.RepresentingState}</span>
                  </div>
                  <div className={style.divider}>
                    <label htmlFor="">Background Study: </label>
                    <span>{currentCompetitor.PersonalBackground}</span>
                  </div>
                  <div className={style.divider}>
                    <label htmlFor="">Employment: </label>
                    <span>{currentCompetitor.EmploymentorSchool}</span>
                  </div>
              </div>
            </div>
            <div className={style.vote_container}>
              <div className={style.vote_count}>
                <span>Purchase Vote</span>
                <div className={style.vote_controls}>
                  <button type='button'>
                      <AiOutlineMinus className={style.icon}
                      onClick={() => dispatch(decreaseVote())}/>
                  </button>
                  <span>{voteCount}</span>
                  <button type='button'>
                      <AiOutlinePlus className={style.icon}
                      onClick={() => dispatch(increaseVote())}/>
                  </button>
                </div>
              </div>
                <form onSubmit={handleSubmit}>
                  <span>Pay with Evc,Zaad and Sahal</span>
                  <input type="number" placeholder='Enter your number' className={style.form_control}/>
                  <button type='submit'>Vote Now</button>
              </form>
            </div>
          </div>   
      </Modal>
    </div>
  )
}
export default VoteModal