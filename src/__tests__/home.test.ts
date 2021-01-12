import { render } from "@testing-library/svelte";
import index from "../routes/index.svelte";

test("should render", () => {
  // const results = render(index, { props: { name: "world" } });
  const results = render(index);

  results.getByText(/Hey there!/);
});
