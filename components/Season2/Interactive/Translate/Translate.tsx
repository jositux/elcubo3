import React, { useState } from 'react';
import Typewriter from './Typewriter';
import styles from './season2.translate.module.scss';
import ButtonBig from 'components/Season2/Shared/Button/ButtonBig';
import HtmlParser from 'html-react-parser';

const Translate = ({ onTranslate, item, onClick = () => { } }) => {

    const {
        field_ec_answers_items_json,
        field_ec_text_default,
        field_ec_question
    } = item;
    const answers = JSON.parse(field_ec_answers_items_json);

    const [answer, setAnswer] = useState({
        answered: false,
        score: 0
    });

    const handleAnswerClicked = (score) => {
        const formattedScore = parseInt(score);
        const state = {
            answered: true,
            score: formattedScore
        };
        if (formattedScore > 0) {
            onTranslate(formattedScore);
            setAnswer(state);
        } else {
            setAnswer(state)
        }
    };

    return (
        <div className={`${styles.TranslateCover} ${styles.fadeIn}`}>
            <div className={styles.Translate}>
                {answer.answered ?
                    <>
                        {answer.score && answer.score > 0 ?
                            <div className={`${styles.fadeIn}`}>
                                <Typewriter />
                            </div>
                            :
                            <p className={`${styles.Negative} ${styles.fadeIn}`}>
                                {HtmlParser(field_ec_text_default)}
                            </p>
                        }
                        <div className={styles.fadeIn}><ButtonBig onClick={onClick} type={'btn'} text="Continuar experiencia" /></div>
                    </>
                    :
                    <>
                        <h1 className={styles.Question}> {HtmlParser(field_ec_question)} </h1>
                        <div className={styles.TranslateAnswers}>
                            {answers && answers.map(a => {
                                const { field_ec_answer, field_ec_score_success } = a;
                                return <button key={`translate_answer_${field_ec_answer}`} onClick={() => handleAnswerClicked(field_ec_score_success)} disabled={answer.answered}>
                                    {field_ec_answer}
                                </button>
                            })}
                        </div>
                    </>
                }
            </div>
        </div >
    );
};

export default Translate;

