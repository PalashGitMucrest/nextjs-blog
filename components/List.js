import React, { useState } from 'react'
import styles from '../styles/List.module.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles1 from '../styles/Home.module.css'
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';

// import { plannedTasks, doingTasks } from "./data.js";
// import List , { ItemDragging } from "devextreme-react/list";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const Lists = ({ setArr, arr, setArr2, arr2, setArr3, arr3 }) => {
//     const [plannedTasksState, setPlannedTasks] = useState(plannedTasks);
//   const [doingTasksState, setDoingTasks] = useState(doingTasks);
    console.log();
    // let [listItems1, setL1] = useState([...arr]);
    let listItems2 = [...arr2];
    let listItems1 = [...arr];

    let listItems3 = [...arr3];
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = useState(null);
    const [ttleEdit, setTtle] = useState(false);
    const [index1, setIndex1] = useState(-1);
    const [index2, setIndex2] = useState(-1);
    const [index3, setIndex3] = useState(-1);
    const [doneArr, setDoneArr] = useState([]);
    let [dragItem, setItem] = useState();
    let [dragIndex1, setDIndex1] = useState();
    const [id, setId] = useState(1);
    let [flag, setFlag] = useState(0);


    const handleOpen = (e, i, flag) => {
        console.log(flag);
        if (flag === 1) {
            setOpen(true);
            setTitle(e);
            setIndex1(i);
            setId(flag);
        }
        if (flag === 2) {
            setOpen(true);
            setTitle(e);
            setIndex2(i);
            setId(flag);
        }
        if (flag === 3) {
            setOpen(true);
            setTitle(e);
            setIndex3(i);
            setId(flag);
        }
    };
    const dragStart = (e, index, i) => {
        // e.preventDefault();
        if(i===1){
            console.log('dragStart triggered');
        setItem(listItems1[index]);
        setDIndex1(index);
        setFlag(i);
        }
        if(i===2){
            console.log('dragStart triggered');
        setItem(listItems2[index]);
        setDIndex1(index);
        setFlag(i);
        }
        if(i===3){
            console.log('dragStart triggered');
        setItem(listItems3[index]);
        setDIndex1(index);
        setFlag(i);
        }
        
    }
    const handleClose = () => {

        setOpen(false)
        setIndex1(-1);
        setIndex2(-1);
        setIndex3(-1);
    };

    const saveTitleInput = () => {
        if (id === 1) {
            let newArr = [...arr];
            newArr[index1] = title;
            setArr(newArr);
            setTtle(false);
            listItems1 = [...newArr];
            console.log(arr);

        }

        if (id === 2) {
            let newArr = [...arr2];
            newArr[index2] = title;
            setArr2(newArr);
            setTtle(false);
            listItems2 = [...newArr];

        }

        if (id === 3) {
            let newArr = [...arr3];
            newArr[index3] = title;
            setArr3(newArr);
            console.log(newArr);
            setTtle(false);
            listItems3 = [...newArr];
            console.log(arr3);

        }

    }
    const deleteItem = (ind, i) => {

        if (i === 1) {
            let newArr = [...arr];
            newArr.splice(ind, 1);
            setArr(newArr);
        }

        if (i === 2) {
            let newArr = [...arr2];
            newArr.splice(ind, 1);
            setArr2(newArr);
        }
        if (i === 3) {
            let newArr = [...arr3];
            newArr.splice(ind, 1);
            setArr3(newArr);
        }

    }

    const drop = (e)=>{

        setDoneArr(preVal=>{return [...preVal,dragItem]});
        if(flag===1){
            let dArr=[...listItems1];
        dArr.splice(dragIndex1,1);
        setArr(dArr);
        }
        if(flag===2){
            let dArr=[...listItems2];
        dArr.splice(dragIndex1,1);
        setArr2(dArr);
        }
        if(flag===3){
            let dArr=[...listItems3];
        dArr.splice(dragIndex1,1);
        setArr3(dArr);
        }
        setIndex1(-1);
        setFlag(0);

        
    
      }

      function allowDrop(ev) {
        ev.preventDefault();
      }



    

    return (
        <>

            <div className={styles1.parentList}>
                <div>
                <div className={styles1.containerParent}>
                <div className={styles1.container_list}>
   
                    <div className={styles1.listContainer}>
                        <div className={styles1.pHigh}></div>
                    <span>Priority: high</span>
                        {
                            listItems1?.map((e, i) => {
                                return (
                                    <div key={i} draggable='true' className={styles.listItem1} onDragStart={(e) => dragStart(e,i,1)}>
                                        <Button onClick={() => (handleOpen(e, i, 1))} >{e}</Button>

                                        <EditIcon onClick={() => (handleOpen(e, i, 1))} sx={{
                                            color: 'green',
                                            fontSize: "1rem",
                                            position: "relative",
                                            top: "0.08rem",
                                            cursor: "pointer",
                                            "&:hover": { color: 'green' },
                                        }} ></EditIcon>

                                        <DeleteIcon onClick={() => (deleteItem(i, 1))} sx={{
                                            color: 'red',
                                            fontSize: "1rem",
                                            position: "relative",
                                            top: "0.08rem",
                                            cursor: "pointer",
                                            "&:hover": { color: 'red' },
                                        }} ></DeleteIcon>


                                    </div>

                                )
                            })
                        }
                    </div>
                </div>


                <div>
                    <div className={styles1.listContainer}>
                    <div className={styles1.pMed}></div>
                    <span>Priority: medium</span>
                        {
                            listItems2?.map((e, i) => {
                                return (
                                    <div key={i} draggable='true' className={styles.listItem1} onDragStart={(e) => dragStart(e,i,2)} >
                                        <Button onClick={() => (handleOpen(e, i, 2))} >{e}</Button>

                                        <EditIcon onClick={() => (handleOpen(e, i, 2))} sx={{
                                            color: 'green',
                                            fontSize: "1rem",
                                            position: "relative",
                                            top: "0.08rem",
                                            cursor: "pointer",
                                            "&:hover": { color: 'green' },
                                        }} ></EditIcon>

                                        <DeleteIcon onClick={() => (deleteItem(i, 2))} sx={{
                                            color: 'red',
                                            fontSize: "1rem",
                                            position: "relative",
                                            top: "0.08rem",
                                            cursor: "pointer",
                                            "&:hover": { color: 'red' },
                                        }} ></DeleteIcon>


                                    </div>

                                )
                            })
                        }
                    </div>
                </div>


                <div>
                    
                    <div className={styles1.listContainer}>
                    <div className={styles1.pLow}></div>
                    <span>Priority: low</span>
                        {
                            listItems3?.map((e, i) => {
                                return (
                                    <div key={i} draggable='true' className={styles.listItem1}  onDragStart={(e) => dragStart(e,i,3)}>
                                        <Button onClick={() => (handleOpen(e, i, 3))} >{e}</Button>

                                        <EditIcon onClick={() => (handleOpen(e, i, 3))} sx={{
                                            color: 'green',
                                            fontSize: "1rem",
                                            position: "relative",
                                            top: "0.08rem",
                                            cursor: "pointer",
                                            "&:hover": { color: 'green' },
                                        }} ></EditIcon>

                                        <DeleteIcon onClick={() => (deleteItem(i, 3))} sx={{
                                            color: 'red',
                                            fontSize: "1rem",
                                            position: "relative",
                                            top: "0.08rem",
                                            cursor: "pointer",
                                            "&:hover": { color: 'red' },
                                        }} ></DeleteIcon>


                                    </div>

                                )
                            })
                        }

                    </div>
                </div>
            </div>
            
                </div>
                <div>
                <div className={styles1.donePage} onDragOver={(e)=>allowDrop(e)} onDrop={(e)=>drop(e)}>
          <h4>Tasks Done</h4>
          {
            doneArr?.map((e,i)=>{
              return (

<div className={styles1.doneTask} key={i}>
            {e}
          </div>

              )
            })
          }
        </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <span>Task</span>
                        {
                            !ttleEdit &&
                            <p>{title}
                                <EditIcon onClick={() => { setTtle(true) }} sx={{
                                    color: 'green',
                                    fontSize: "1rem",
                                    position: "relative",
                                    top: "0.08rem",
                                    cursor: "pointer",
                                    "&:hover": { color: 'green' },
                                }} ></EditIcon>
                            </p>
                        }

                        {
                            ttleEdit && <><input type='text' onChange={(e) => setTitle(e.target.value)} value={title} /><button className={styles.saveTitle} onClick={saveTitleInput}>save</button></>

                        }

                    </div>
                    <div>Description</div>
                    <div className={styles.description}>
                        <textarea type='text' />
                    </div>
                    <div className={styles.saveDes}>
                        <button>Save</button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default Lists;