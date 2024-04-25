import { useMousePosition } from "./hooks/useMousePosition";

const TrackMouse = () => {
  const position = useMousePosition({
    throttleTime: 500,
  });

  return (
    <div>
      Last mouse position - x: {position.x}, y: {position.y}
    </div>
  );
};

export default TrackMouse;
