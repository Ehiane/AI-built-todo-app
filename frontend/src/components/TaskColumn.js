import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';

const ItemTypes = {
  CARD: 'card',
};

const TaskColumn = ({ columnId, tasks, moveTask, onTaskDeleted, onDropTask, allColumns }) => {
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      // No-op for column hover
    },
    drop(item, monitor) {
      if (item.status !== columnId) {
        // Move to another column
        moveTask(item.status, item.index, columnId, 0);
        onDropTask(item.task, columnId);
      }
    },
  });

  return (
    <div ref={drop} style={{ flex: 1, minHeight: '40px', display: 'flex', flexDirection: 'column' }}>
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskCard
            key={task.id || task._id}
            task={task}
            index={index}
            columnId={columnId}
            moveTask={moveTask}
            onTaskDeleted={onTaskDeleted}
            allColumns={allColumns}
            onDropTask={onDropTask}
          />
        ))
      ) : null}
    </div>
  );
};

export default TaskColumn; 