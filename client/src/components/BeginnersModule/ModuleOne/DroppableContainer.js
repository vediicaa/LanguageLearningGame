import React from 'react';
import { useDrop } from 'react-dnd';

const DroppableContainer = ({ accept, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? 'lightgreen' : 'white' }}>
      {children}
    </div>
  );
};

export default DroppableContainer;
