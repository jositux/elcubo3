import Typewriter from 'typewriter-effect';
import styles from './season2.typewriter.module.scss';

const TypeWriter = () => {

    return (
        <div className={styles.typewriter}>
            <p className={styles.paragraphLatin}>
                Dicebant
                mihi sodales, si sepulchrum
                amicae visitarme, curas meas
                aliqueantulum fore levatas
            </p>
            <hr />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Decíanme los amigos ')
                        .pauseFor(2500)
                        .typeString('que encontraría algún alivio a mi amor')
                        .pauseFor(300)
                        .deleteChars(10)
                        .typeString(' a mi dolor ')
                        .typeString('visitando <span style="color:orange;">la tumba</span> de mi amada')
                        .pauseFor(1000)
                        .start();
                }}
            />
        </div>
    )
};

export default TypeWriter;
