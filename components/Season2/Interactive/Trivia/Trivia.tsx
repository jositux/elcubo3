import React, { useState } from 'react';
import ButtonTrivia from './ButtonTrivia';
import styles from './season2.trivia.module.scss';
import MessageAfterVideo from 'components/Season2/Shared/MessageAfterVideo/MessageAfterVideo';

const Trivia = ({ question, answers = [], paragraph, onAnswerSelected }) => {

  const [showTrivia, setShowTrivia] = useState(true);
  const [message, setMessage] = useState(null);

  const handleAnswerSelected = (text, score) => {
    if (parseInt(score) === 0) {
      setMessage(text);
    }
    setShowTrivia(false);
    onAnswerSelected(score);
  };

  return (
    <React.Fragment>
      {showTrivia ?
        <div className={`${styles.TriviaCover} ${styles.fadeIn}`}>
          <div className={styles.Trivia}>
            <h1> {question}</h1>
            {answers && answers.map((item, index) => {
              const {
                field_ec_answer,
                field_ec_text_success,
                field_ec_score_success
              } = item;
              return <ButtonTrivia onClick={() => handleAnswerSelected(
                field_ec_text_success,
                field_ec_score_success
              )} key={index} text={field_ec_answer} />
            })}
            <p>
              {paragraph}
            </p>
          </div>
        </div>
        :
        <React.Fragment>
          {message && <MessageAfterVideo message={message} onTimeEnd={() => setMessage(null)} />}
        </React.Fragment>
      }
    </React.Fragment>
  );
};

export default Trivia;

