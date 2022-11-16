import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState } from 'react'
import Lists from '../components/List';
import styles from '../styles/Home.module.css'

export default function Home() {
  let todoInputRef = useRef();
  let [inputVal, setInput] =  useState();
  let [arr1, setArr1] = useState([]);
  let [arr2, setArr2] = useState([]);
  let [arr3, setArr3] = useState([]);
  const [prior, setPrior] = useState({
    p1: true,
    p2: false,
    p3: false
  })
  const getInputVal = () => {
    // console.log(todoInputRef.current.value);

    if (prior.p1 === true) {
      setArr1((preVal) => [...preVal, inputVal]);
      

    }
    if (prior.p2 === true) {
      setArr2((preVal) => [...preVal, inputVal]);
      
    }
    if (prior.p3 === true) {
      setArr3((preVal) => [...preVal, inputVal]);
      
    }
    // todoInputRef.current.value = '';
    setInput('');

  }
 

  return (
    <>
      <div className={styles.heading}>
        <h2>Todo List</h2>
      </div>
      <div className={styles.mainPage}>
        <div>

          <div className={styles.container_main}>


            <div className={styles.inputDiv}>
              <div className={styles.childInp}>
                <label>Add Task to your Todo</label>
                <input type='text' placeholder='add todo' onChange={(e)=>setInput(e.target.value)}  value={inputVal} />
              </div>

              <div className={`${styles.addBtn} ${styles.childInp}`}>
                <button onClick={getInputVal}>Add</button>
              </div>

              <div className={styles.selectDiv}>
                <label htmlFor="priorities">Priority:</label>
                <select name="priorList" id="prior" onChange={(e) => {
                  let obj = { ...prior };
                  if (e.target.value === 'p1') {
                    console.log(e.target.value);
                    Object.keys(obj).forEach(e => {
                      obj[e] = false;
                    })
                    // prior.p1 = true;
                    setPrior({ ...obj, p1: true })
                  }
                  if (e.target.value === 'p2') {
                    console.log(e.target.value);
                    // prior.p1 = true;

                    Object.keys(obj).forEach(e => {
                      obj[e] = false;
                    })
                    setPrior({ ...obj, p2: true })
                  }
                  if (e.target.value === 'p3') {
                    console.log(e.target.value);
                    // prior.p1 = true;
                    Object.keys(obj).forEach(e => {
                      obj[e] = false;
                    })
                    setPrior({ ...obj, p3: true })
                  }
                }}>
                  {Object.keys(prior).map((e, i) => {
                    return (
                      <option key={i} >{e}</option>
                    )
                  })}
                  {/* <option value="volvo">Volvo</option> */}

                </select>
              </div>

            </div>



          </div>
          {
            // Object.keys(prior).filter(e=>{return prior[e]===true})
          }

          <Lists setArr={setArr1} arr={arr1} setArr2={setArr2} arr2={arr2} setArr3={setArr3} arr3={arr3} />

        </div>
        
      </div>

      {/* <div className={styles.containerParent}>
        <div>
        <h4>p1</h4>
      <div className={styles.listContainer}>
          <List setArr={setArr1} arr={arr1}  prior={'p1'}/>
        </div>
        </div>
        <div>
          <h4>p2</h4>
        <div className={styles.listContainer}>
          <List setArr={setArr2} arr={arr2}  prior={'p2'}/>
        </div>
        </div>

        <div>
          <h4>p3</h4>
        <div className={styles.listContainer}>
          <List setArr={setArr2} arr={arr3}  prior={'p3'}/>
        </div>
        </div>

      </div> */}

    </>
  )
}
