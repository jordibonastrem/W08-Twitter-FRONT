const { screen, render } = require("@testing-library/react");
const { Twit } = require("./Twit");

describe("Given a Twit component", () => {
  describe("When it receives a twit object", () => {
    test("Then it should render a twit with text, data and likes", () => {
      const twit = {
        text: "FDf",
        data: 32,
        likes: 2,
      };
      render(<Twit twit={twit}></Twit>);

      const twitText = screen.getByText(twit.text);
      // const likes = screen.getByText(`${twit.likes} likes`);

      expect(twitText).toBeInTheDocument();
    });
  });
});
