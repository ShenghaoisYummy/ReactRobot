import { useContext } from 'react';
import React from 'react';
import styles from './Robot.module.css';
import {appContext} from '../index';

interface RobotProps {
    id: number,
    name: string,
    email: string
 }


const Robot : React.FC<RobotProps> = ({id, email, name}) => {

    const value = useContext(appContext);
    return (
        <div className={styles.cardContainer}>
            <img alt='' src={`https:robohash.org/${id}`} />
            <h2> {name} </h2>
            <p> {email} </p>
            <p> Author: {value.username}</p>
        </div>
    )
};

export default Robot;