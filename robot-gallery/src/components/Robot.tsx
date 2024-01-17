import React from 'react';

 interface RobotProps {
    id: number,
    name: string,
    email: string
 }


const Robot : React.FC<RobotProps> = ({id, email, name}) => {
    return (
        <li>
            <img alt='' src={`https:robohash.org/${id}`} />
            <h2> {name} </h2>
            <p> {email} </p>
        </li>
    )
};

export default Robot;