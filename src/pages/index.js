import React, {useState} from 'react';
import moment from 'moment';

import styles from '../styles.module.css';
import api from '../services/api';


function Home() {
    const [programs, setPrograms] = useState([])

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
            .then( response => {
            //    console.log(response.data.programme.entries)
                setPrograms(response.data.programme.entries)
            }, [])

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
                        <ul>
                            {programs.map(program => (

                                <li key={program.media_id}>
                                    <div className={ ( (Date.now() / 1000) > program.start_time && (Date.now() / 1000) < program.end_time ) ? styles.divProgramasNow : styles.divProgramas }>
                                        <div className={styles.divImg}>
                                            <img src={program.custom_info.Graficos.ImagemURL ? program.custom_info.Graficos.ImagemURL : program.custom_info.Graficos.LogoURL}/>
                                        </div>

                                        <div className={styles.divDetalhes}>
                                            <strong className={styles.strongNow}>{ ( (Date.now() / 1000) > program.start_time && (Date.now() / 1000) < program.end_time ) ? 'EM EXIBIÇÃO AGORA!': '' }</strong>
                                            { console.log(Date.now() / 1000) }
                                            <h3>{`${(new Date(program.start_time*1000)).getHours()}:${("0" + (new Date(program.start_time*1000)).getMinutes()).substr(-2)}`}</h3>
                                            <h2>{program.title}</h2>
                                            <p>{program.description}</p>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className={styles.divLinha}></div>    
                                </li>
                                
                            ))}
                            
                        </ul>
                    </div>

                </div>
                
            </div>

        </div>
    )
}

export default Home