import { useState, useTransition } from "react";
import Cover from "./components/use-transition/cover";
import Reviews from "./components/use-transition/reviews";
import Writer from "./components/use-transition/writer";
import { StyledButton } from "./components/use-transition/styled-elements";

function App() {
  const [section, setSection] = useState("Cover");
  const [isPending, startTransition] = useTransition();

  const sectionHandler = (sec: string) => {
    startTransition(() => {
      setSection(sec);
    });
  };

  const renderSection = () => {
    if (section === "Cover") {
      return <Cover />;
    }
    if (section === "Reviews") {
      return <Reviews />;
    }
    return <Writer />;
  };

  return (
    <>
      <Button onClick={() => sectionHandler("Cover")}>Cover</Button>
      <Button onClick={() => sectionHandler("Reviews")}>Book Reviews</Button>
      <Button onClick={() => sectionHandler("Writer")}>Book's Writer</Button>
      {isPending && <p>Loading...</p>}

      {renderSection()}
    </>
  );
}

const Button = ({
  onClick,
  ...props
}: JSX.IntrinsicAttributes & {
  onClick: () => void;
  children?: React.ReactNode;
}) => {
  return <StyledButton onClick={onClick} {...props} />;
};

export default App;
