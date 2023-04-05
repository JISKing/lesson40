import React from "react";

function Article() {
  return (
    <div>
      <div className="article__title">
        <h2>NVIDIA Accelerated AI on Azure</h2>
      </div>
      <ArticleBody />
      <ArticleActions />
      <ArticleAuthor />
    </div>
  );
}

function ArticleBody() {
  return (
    <div className="article__description">
      <h2>Article description:</h2>
      <p>
        NVIDIA on Azure is bringing AI, networking, and high-perfomance
        computing to the enterprise
      </p>
    </div>
  );
}

function ArticleActions() {
  return (
    <div className="buttonCon">
      <button>Read</button>
      <button>Mark as read</button>
      <button>Mark as unread</button>
    </div>
  );
}

function ArticleAuthor() {
  return (
    <div className="authorsCon">
      <div>Author: Mike</div>
      <div>Published: 06.12.2022</div>
      <div>Theme: Video cards</div>
    </div>
  );
}

export default Article;
