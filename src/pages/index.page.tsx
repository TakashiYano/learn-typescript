import type { CustomNextPage } from "next";
import { FluidLayout } from "src/layout";

const IndexPage: CustomNextPage = () => {
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

IndexPage.getLayout = FluidLayout;

export default IndexPage;
