import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';

import styles from '../styles.module.css';
import api from '../services/api';


function Home() {

    let newDate;
    let day;
    let month;
    let year;
    let check;

    async function handleProg() {

        let check = moment(newDate, 'YYYY/MM/DD');

        day = check.format('D');
        month = check.format('M');
        year = check.format('Y'); 
        
        // console.log(day);
        // console.log(month);
        // console.log(year);

        api.get(`1337?date=${year}-${month}-${day}`)
            .then(function (response) {
                console.log(response);
            })

    }

    function ontem() {
        newDate = moment().subtract(1, 'days');

        handleProg()
    }

    function hoje() {
        newDate = moment();

        handleProg()
    }

    function amanha() {
        newDate = moment().add(1, 'days');

        handleProg()
    }

    return (
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.div_title}>
                    <h1 className={styles.title}>Programação RPC TV</h1>
                </div>
                
            </div>
            
        
            <div className={styles.content_container}>
                <div className={styles.content}>
                    
                    <div className={styles.div_subtitle}>
                        <h2 className={styles.subtitle}>Escolha o dia:</h2>
                    </div>
                    
                    <div>
                        <button onClick={ontem}>Ontem</button>
                        <button onClick={hoje}>Hoje</button>
                        <button onClick={amanha}>Amanhã</button>
                    </div>            
                    
                    <div className={styles.grade}>

                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default Home