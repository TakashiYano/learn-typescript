import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";

const RootPage: CustomNextPage = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <div>
      <h2>Index</h2>
      <button className="p-2" onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

RootPage.getLayout = FluidLayout;

export default RootPage;
