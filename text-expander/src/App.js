import { useState } from "react";

function App() {
  return (
    <div>
      <TextExpander>
        Our choice of books reflects our personality and our intellect. Books
        tell us about new things and enrich our knowledge. They open the doors
        to a beautiful world and quicken our imagination. They give us company
        and drive away our boredom. They are friends to the ones who are lonely.
        They also act as companions to the deserted. They brighten our lives by
        giving joy to the ones who are joyless and give happiness and pleasure.
        Books are our true friends because they make us better, wiser and
        happier.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="show text"
        collapseButtonText="collapse text"
        buttonColor="#ff6622"
      >
        The festival that I like the most is Diwali. We celebrate it either in
        October or in November. In Gujarat, it is celebrated for five days.
        Every house is decorated with rangoli and oil lamps. We start preparing
        for Diwali a few weeks in advance by cleaning our houses. Sweets and
        savouries are made and new clothes are bought for everyone. We celebrate
        it with a lot of pomp and festivity. I love Diwali because we enjoy
        bursting crackers, visiting our relatives and having lots of fun with
        our near and dear ones.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Our choice of books reflects our personality and our intellect. Books
        tell us about new things and enrich our knowledge. They open the doors
        to a beautiful world and quicken our imagination. They give us company
        and drive away our boredom. They are friends to the ones who are lonely.
        They also act as companions to the deserted. They brighten our lives by
        giving joy to the ones who are joyless and give happiness and pleasure.
        Books are our true friends because they make us better, wiser and
        happier.
      </TextExpander>
    </div>
  );
}

export default App;

function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor = "#1f09cd",
  expanded = false,
  className,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginleft: "6px",
    color: buttonColor,
  };

  return (
    <div className={className}>
      {" "}
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
