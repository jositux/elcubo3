import React from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

const CommentsBubble = ({ data }) => {
  const introText = data.field_ec_intro_comments;
  const commentsUrl = data.field_ec_url_comments;

  return (
    <>
      <div className="comments-bullet open-comments">
        <img src="/images/laberinto/comment-bullet.svg" />
        <div className="spinner">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
        <p>
          Clic aquí
          <br />
          para comentar
        </p>
      </div>

      <div className="pane-cover-comments" />

      <div className="pane-comments" data-relation="">
        <a className="close-comments">
          <img src="/images/laberinto/pane-close-black.svg" />
        </a>
        <p className="intro">{introText}</p>
        <div className="pane-iframe">
          <FacebookProvider appId="115441168616341">
            <Comments href={commentsUrl} width="100%" />
          </FacebookProvider>
        </div>
      </div>
    </>
  );
};

export default CommentsBubble;
