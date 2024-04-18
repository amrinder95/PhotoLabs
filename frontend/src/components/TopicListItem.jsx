import React from "react";

import "../styles/TopicListItem.scss";
import topics from "mocks/topics";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      <span className="topic-list__item span">{props.topic.title}</span>
    </div>
  );
};

export default TopicListItem;
