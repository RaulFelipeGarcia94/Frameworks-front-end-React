import { CardSection } from "../CardSection";
import { Sidebar } from "../Sidebar";
import "./styles.css";

export function Article() {
  return (
    <article>
      <Sidebar listSidebar={["Dashboard", "Team", "Projects", "Calendar"]} />
      <div className="article-content">
        <CardSection
          title="Título 1"
          content="Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor."
        />
        <CardSection
          title="Título 2"
          content="Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor.Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor."
        />
        <CardSection
          title="Título 3"
          content="Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor.Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor.Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor.Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor. Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor."
        />
        <CardSection
          title="Título 4"
          content="lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolor."
        />
      </div>
    </article>
  );
}
