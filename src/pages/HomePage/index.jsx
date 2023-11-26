import { DndContext } from "@dnd-kit/core";
import { useDraggable } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";

import "./style.css";

const DropPoint = ({ id, x, y }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  return (
    <>
      <circle cx={x} cy={y} r="20" fill="none" ref={setNodeRef} />
      <circle
        cx={x}
        cy={y}
        r="5"
        fill={isOver ? "red" : "white"}
        stroke="black"
      />
    </>
  );
};

const Draggable = ({ id, ...rest }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <svg
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      viewBox="0 0 100 100"
      width={100}
      height={100}
    >
      <rect {...rest} />
    </svg>
  );
};

export const HomePage = () => {
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) {
      console.log("Nevybrán žádný tvar.")
      return
    }
    console.log(`Tvar ${active.id} přetažen na ${over.id}.`);
  };

  return (
    <div className="container">
      <main>
        <DndContext onDragEnd={handleDragEnd}>
          <svg width="400" height="400" viewBox="0 0 200 200">
            <rect x="10" y="10" width="80" height="80" fill="lime" />
            <rect x="0" y="100" width="90" height="90" fill="pink" />
            <rect x="100" y="0" width="100" height="100" fill="aqua" />
            <rect x="120" y="120" width="60" height="60" fill="orange" />
            <DropPoint id="t1" x="20" y="40" />
            <DropPoint id="t2" x="150" y="140" />
          </svg>
          <Draggable id="s1" x="0" y="0" width="100" height="100" fill="red" />
          <Draggable id="s2" x="0" y="0" width="100" height="100" fill="blue" />
        </DndContext>
      </main>
    </div>
  );
};
