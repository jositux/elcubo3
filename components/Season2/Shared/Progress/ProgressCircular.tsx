import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import styles from './season2.progressCircular.module.scss';

const ProgressCircular = ({ percentage }) => {
    return (
        <React.Fragment>
            <div style={{ width: "100px" }}>
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    strokeWidth={15}
                    styles={buildStyles({
                        pathColor: "#640D0D",
                        trailColor: "#DEDEDE",
                        strokeLinecap: "butt",
                        strokeWidth: 20,
                        textColor: '#640D0D',
                        textSize: '26px',
                    })}
                />
            </div>
        </React.Fragment>
    )
};

export default ProgressCircular;