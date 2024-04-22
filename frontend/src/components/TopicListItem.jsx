import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <span className="topic-list__item span" onClick={()=>props.handleTopicSelect(props.topic.id)}>{props.topic.title}</span>
    </div>
  );
};

export default TopicListItem;
