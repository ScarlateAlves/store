import { render } from "@testing-library/react";
import { Button } from ".";

it("renders the Button component", () => {
  const { container } = render(<Button>click</Button>);
  expect(container).toMatchSnapshot();
});
