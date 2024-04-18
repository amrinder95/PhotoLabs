import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  const topicListContainer = props.topics.map((topic) => <TopicListItem key={topic.id} topic={topic}/>)
  return (
    <div className="top-nav-bar__topic-list">
      {topicListContainer}
    </div>
  );
};

export default TopicList;
