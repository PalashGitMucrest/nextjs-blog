import Head from 'next/head'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import Lists from '../components/List';
import styles from '../styles/Home.module.css'

export default function Home() {
  let todoInputRef = useRef();
  let [inputVal, setInput] = useState('');
  let [arr1, setArr1] = useState([]);
  let [arr2, setArr2] = useState([]);
  let [arr3, setArr3] = useState([]);
  let [description, setDesc] = useState('');
  let [isEmpty, setEmpty] = useState(false);
  const [prior, setPrior] = useState({
    High: true,
    Medium: false,
    Low: false
  });

  const getInputVal = () => {

    if (inputVal === '') {
      setEmpty(true);
      return false;
    }
    if (prior.High === true) {
      let obj = {
        task: inputVal,
        description: description

      }
      setArr1((preVal) => [...preVal, obj]);


    }
    if (prior.Medium === true) {
      let obj = {
        task: inputVal,
        description: description

      }
      setArr2((preVal) => [...preVal, obj]);

    }
    if (prior.Low === true) {
      let obj = {
        task: inputVal,
        description: description

      }
      setArr3((preVal) => [...preVal, obj]);

    }
    // todoInputRef.current.value = '';
    setInput('');
    setDesc('');


  }
  return (
    <>

      <div className={styles.main_outer}>
        <div className={styles.heading}>
          <h2>Todo List</h2>
        </div>
        <div className={styles.mainPage}>
          {/* <div> */}

          <div className={styles.container_main}>


            {/* <div className={styles.inputDiv}> */}
            <div className={styles.childInp}>
              <p className={styles.labels}>Add Task to your Todo</p>
              <input type='text' placeholder='Todo' onChange={(e) => { if (inputVal.length) setEmpty(false); setInput(e.target.value) }} value={inputVal} />
              <div className={styles.errorMsg}>
                {
                  isEmpty ? 'Please Add Task' : null
                }
              </div>
            </div>
            <div className={styles.childInp}>
              <p className={styles.labels}>Description</p>
              <input type='text' placeholder='Add Description' onChange={(e) => setDesc(e.target.value)} value={description} />


            </div>

            <div>

            </div>


            <div className={styles.selectDiv}>
              <p className={styles.labels} htmlFor="priorities">Priority:</p>

              <select name="priorList" id="prior" className={styles.classic} onChange={(e) => {
                let obj = { ...prior };
                if (e.target.value === 'High') {
                  console.log(e.target.value);
                  Object.keys(obj).forEach(e => {
                    obj[e] = false;
                  })
                  // prior.High = true;
                  setPrior({ ...obj, High: true })
                }
                if (e.target.value === 'Medium') {
                  console.log(e.target.value);
                  // prior.High = true;

                  Object.keys(obj).forEach(e => {
                    obj[e] = false;
                  })
                  setPrior({ ...obj, Medium: true })
                }
                if (e.target.value === 'Low') {
                  console.log(e.target.value);
                  // prior.High = true;
                  Object.keys(obj).forEach(e => {
                    obj[e] = false;
                  })
                  setPrior({ ...obj, Low: true })
                }
              }}>
                {/* <option >CSS SELECT arrow ({styles.classic})</option> */}
                {Object.keys(prior).map((e, i) => {
                  return (

                    <option key={i} >{e}</option>
                  )
                })}
                {/* <option value="volvo">Volvo</option> */}

              </select>


            </div>
            <div className={`${styles.addBtn}`}>
              <button onClick={getInputVal}>Add</button>
            </div>
            {/* </div> */}



          </div>
          {
            // Object.keys(prior).filter(e=>{return prior[e]===true})
          }



          {/* </div> */}


        </div>
        <Lists setArr={setArr1} arr={arr1} setArr2={setArr2} arr2={arr2} setArr3={setArr3} arr3={arr3} />

      </div>
    </>
  )
}
