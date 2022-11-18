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
    const [openDone, setOpenDone] = React.useState(false);
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
    let [descArea, setdescArea] = useState('');


    const handleOpen = (e, i, flag) => {
        console.log(flag);
        if (flag === 1) {
            setOpen(true);
            setTitle(e.task);
            setIndex1(i);
            setId(flag);
            setdescArea(listItems1[i].description);
        }
        if (flag === 2) {
            setOpen(true);
            setTitle(e.task);
            setIndex2(i);
            setId(flag);
            setdescArea(listItems2[i].description);
        }
        if (flag === 3) {
            setOpen(true);
            setTitle(e.task);
            setIndex3(i);
            setId(flag);
            setdescArea(listItems3[i].description);
        }
    };
    const dragStart = (e, index, i) => {
        // e.preventDefault();
        if (i === 1) {
            console.log('dragStart triggered');
            setItem(listItems1[index]);
            setDIndex1(index);
            setFlag(i);
        }
        if (i === 2) {
            console.log('dragStart triggered');
            setItem(listItems2[index]);
            setDIndex1(index);
            setFlag(i);
        }
        if (i === 3) {
            console.log('dragStart triggered');
            setItem(listItems3[index]);
            setDIndex1(index);
            setFlag(i);
        }

    }
    const handleCloseDone = () => {
        setOpenDone(false);
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

    const drop = (e) => {

        setDoneArr(preVal => { return [...preVal, dragItem] });
        if (flag === 1) {
            let dArr = [...listItems1];
            dArr.splice(dragIndex1, 1);
            setArr(dArr);
        }
        if (flag === 2) {
            let dArr = [...listItems2];
            dArr.splice(dragIndex1, 1);
            setArr2(dArr);
        }
        if (flag === 3) {
            let dArr = [...listItems3];
            dArr.splice(dragIndex1, 1);
            setArr3(dArr);
        }
        setIndex1(-1);
        setFlag(0);



    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function onDescSave(e) {
        if (id === 1) {
            let dArr = [...listItems1];
            console.log(index1);
            dArr[index1].description = descArea;
            setArr(dArr);
        }
        if (id === 2) {
            let dArr = [...listItems2];
            console.log(index2);
            dArr[index2].description = descArea;
            setArr(dArr);
        }
        if (id === 3) {
            let dArr = [...listItems3];
            console.log(index3);
            dArr[index3].description = descArea;
            setArr(dArr);
        }
        setOpen(false);
    }

    function deleteDoneItem(i){
        let newArr = [...doneArr];
        newArr.splice(i, 1);
        setDoneArr(newArr);
    }





    return (
        <>
        

            <div className={styles1.containerParent}>
            

                <div className={styles1.listContainer}>
                    <div className={styles1.pHigh}></div>
                    
                    <span>Priority: high</span>
                    
                    {
                        listItems1?.map((e, i) => {
                            return (
                                <div key={i} draggable='true' className={styles.listItem1} onDragStart={(e) => dragStart(e, i, 1)}>
                                    <div>
                                        <div className={styles.detailCard1}>
                                            <div className={styles.taskTitle}>
                                               
                                                    <p onClick={() => (handleOpen(e, i, 1))} className={styles.detailNmae}>
                                                        {e.task}
                                                    </p>
                                      
                                            </div>

                                            <div className={styles.button_outer}>

                                                <EditIcon className={styles.editButton} onClick={() => (handleOpen(e, i, 1))} sx={{
                                                    // color: 'green',
                                                    // fontSize: "1rem",
                                                    // position: "relative",
                                                    // top: "0.08rem",
                                                    // cursor: "pointer",
                                                    // "&:hover": { color: 'green' },
                                                }} ></EditIcon>

                                                <DeleteIcon className={styles.deleteButton} onClick={() => (deleteItem(i, 1))} sx={{
                                                    // color: 'red',
                                                    // fontSize: "1rem",
                                                    // position: "relative",
                                                    // top: "0.08rem",
                                                    // cursor: "pointer",
                                                    // "&:hover": { color: 'red' },
                                                }} ></DeleteIcon>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.stsAndDesc}>
                                        <div className={styles.descriptionCard}>
                                            <h4>
                                                description
                                            </h4>
                                            <p>
                                                {e.description}
                                            </p>
                                        </div>
                                        <div className={styles.stsHigh}>
                                            high
                                        </div>
                                    </div>

                                    

                                </div>

                            )
                        })
                    }
                </div>




                <div className={styles1.listContainer}>
                    <div className={styles1.pMed}></div>
                    <span>Priority: medium</span>
                    {
                        listItems2?.map((e, i) => {
                            return (
                                <div key={i} draggable='true' className={styles.listItem1} onDragStart={(e) => dragStart(e, i, 2)} >
                                    <div >
                                        <div className={styles.detailCard1}>
                                            <div >
                                                {/* <Button onClick={() => (handleOpen(e, i, 2))} > */}
                                                <p className={styles.detailNmae} onClick={() => (handleOpen(e, i, 1))}>
                                                        {e.task}
                                                    </p>
                                                {/* </Button> */}
                                            </div>
                                            <div className={styles.button_outer}>
                                                <EditIcon className={styles.editButton} onClick={() => (handleOpen(e, i, 2))} sx={{
                                                    // color: 'green',
                                                    // fontSize: "1rem",
                                                    // position: "relative",
                                                    // top: "0.08rem",
                                                    // cursor: "pointer",
                                                    // "&:hover": { color: 'green' },
                                                }} ></EditIcon>
                                                <DeleteIcon className={styles.deleteButton} onClick={() => (deleteItem(i, 2))} sx={{
                                                    // color: 'red',
                                                    // fontSize: "1rem",
                                                    // position: "relative",
                                                    // top: "0.08rem",
                                                    // cursor: "pointer",
                                                    // "&:hover": { color: 'red' },
                                                }} ></DeleteIcon>
                                            </div>
                                        </div>
                                    </div>



                                    <div className={styles.stsAndDesc}>
                                        <div className={styles.descriptionCard}>
                                            <h4>
                                                description
                                            </h4>
                                            <p>
                                                {e.description}
                                            </p>
                                        </div>
                                        <div className={styles.sts}>
                                            medium
                                        </div>
                                    </div>
                                    

                                </div>
                            )
                        })
                    }
                </div>




                <div className={styles1.listContainer}>
                    <div className={styles1.pLow}></div>
                    <span>Priority: low</span>
                    {
                        listItems3?.map((e, i) => {
                            return (
                                <div key={i} draggable='true' className={styles.listItem1} onDragStart={(e) => dragStart(e, i, 3)}>

                                    <div>
                                        <div className={styles.detailCard1}>
                                            <div>
                                                <p className={styles.detailNmae} onClick={() => (handleOpen(e, i, 3))} >{e.task}</p>
                                            </div>
                                            <div className={styles.button_outer}>
                                                <EditIcon className={styles.editButton} onClick={() => (handleOpen(e, i, 3))} sx={{
                                                    // color: 'green',
                                                    // fontSize: "1rem",
                                                    // position: "relative",
                                                    // top: "0.08rem",
                                                    // cursor: "pointer",
                                                    // "&:hover": { color: 'green' },
                                                }} ></EditIcon>

                                                <DeleteIcon className={styles.deleteButton} onClick={() => (deleteItem(i, 3))} sx={{
                                                    // color: 'red',
                                                    // fontSize: "1rem",
                                                    // position: "relative",
                                                    // top: "0.08rem",
                                                    // cursor: "pointer",
                                                    // "&:hover": { color: 'red' },
                                                }} ></DeleteIcon>
                                            </div>




                                        </div>
                                    </div>
                                    <div className={styles.stsAndDesc}>
                                        <div className={styles.descriptionCard}>
                                            <h4>
                                                description
                                            </h4>
                                            <p>
                                                {e.description}
                                            </p>
                                        </div>
                                        <div className={styles.stsLow}>
                                            low
                                        </div>

                                    </div>





                                    
                                </div>

                            )
                        })
                    }


                </div>

                <div className={styles1.donePage} onDragOver={(e) => allowDrop(e)} onDrop={(e) => drop(e)}>
                
                    <div className={styles1.complete}></div>
                    <div className={styles.iBtn}>
                                        <div className={styles.tooltip}>i
                                            <span className={styles.tooltiptext}>Drag rop Tasks in Complete</span>
                                        </div>
                                    </div>
                    <h5>Complete</h5>
                    
                    {
                        doneArr?.map((e, i) => {
                            return (

                                <>
                                    <div className={styles1.doneTask} key={i}>
                                        <div className={styles1.taskName}>
                                            <p>

                                                {e.task}
                                            </p>
                                        </div>
                                        <div className={styles1.desname}>
                                            <p>

                                                {e.description}
                                            </p>
                                        </div>
                                        <DeleteIcon className={styles1.deleteButton} onClick={() => (deleteDoneItem(i))} sx={{
                                            // color: 'red',
                                            // fontSize: "1rem",
                                            // position: "relative",
                                            // top: "0.08rem",
                                            // cursor: "pointer",
                                            // "&:hover": { color: 'red' },
                                        }} ></DeleteIcon>
                                    </div>

                                </>

                            )
                        })
                    }
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
                                <EditIcon className={styles.editButton} onClick={() => { setTtle(true) }} sx={{
                                    // color: 'green',
                                    // fontSize: "1rem",
                                    // position: "relative",
                                    // top: "0.08rem",
                                    // cursor: "pointer",
                                    // "&:hover": { color: 'green' },
                                }} ></EditIcon>
                            </p>
                        }

                        {
                            ttleEdit && <><input type='text' onChange={(e) => setTitle(e.target.value)} value={title} /><button className={styles.saveTitle} onClick={saveTitleInput}>save</button></>

                        }

                    </div>
                    <div>Description</div>
                    <div className={styles.description}>
                        <textarea type='text' value={descArea} onChange={(e) => setdescArea(e.target.value)} />
                    </div>
                    <div className={styles.saveDes}>
                        <button onClick={(e) => onDescSave(e)}>Save</button>
                    </div>
                </Box>
            </Modal>
            <Modal
                open={openDone}
                onClose={handleCloseDone}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <span>Task</span>
                        {
                            !ttleEdit &&
                            <p>{title}
                                <EditIcon className={styles.editButton} onClick={() => { setTtle(true) }} sx={{
                                    // color: 'green',
                                    // fontSize: "1rem",
                                    // position: "relative",
                                    // top: "0.08rem",
                                    // cursor: "pointer",
                                    // "&:hover": { color: 'green' },
                                }} ></EditIcon>
                            </p>
                        }

                    </div>
                    <div>Description</div>

                </Box>
            </Modal>
        </>
    )
}

export default Lists;