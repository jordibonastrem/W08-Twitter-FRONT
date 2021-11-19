import { screen, render } from "@testing-library/react";
import FormTwit from "./FormTwit";

describe("Given a FormTwit component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a input and a submit button", () => {
      render(<FormTwit />);

      const textArea = screen.getByLabelText("Write twit");
      const button = screen.getByRole("button");

      expect(textArea).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
