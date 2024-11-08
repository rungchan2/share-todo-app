import React from "react";
import { taskWrapper, title, description } from "./Task.css.ts";
import { Draggable } from "react-beautiful-dnd";

type TTaskProps = {
  taskName: string;
  taskId: string;
  taskDescription: string;
  boardId: string;
  index: number;
};

const Task: React.FC<TTaskProps> = ({
  taskName,
  taskId,
  taskDescription,
  boardId,
  index,
}) => {
  return (
    <Draggable draggableId={taskId} index={index}>
      {(provided) => (
        <div
          className={taskWrapper}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={title}>{taskName}</div>
          <div className={description}>{taskDescription}</div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
