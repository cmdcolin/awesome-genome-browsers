import React, { useState } from "react";
import { tools } from "./TOOLS.json";
import slugify from "slugify";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const Cards = () => {
  return tools.map((row) => <Card row={row} key={row.name} />);
};

const Card = ({
  row: {
    name,
    url,
    language,
    tags,
    img,
    github,
    category,
    platform,
    publication,
  },
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        margin: 10,
        padding: 10,
      }}
    >
      <div>
        <h3>
          <a href={"#" + slugify(name)}>{name}</a>
        </h3>
        <a href={url}>{url}</a>
        {publication ? (
          <a href={publication.url}>
            {publication.url} ({publication.year})
          </a>
        ) : null}
        {language ? <p>Language: {language.join(", ")}</p> : null}
        {category ? <p>Categories: {category.join(", ")}</p> : null}
        {tags ? <p>tags: {tags.join(", ")}</p> : null}
        {github ? (
          <p>
            Github: <a href={github}>{github}</a>
          </p>
        ) : null}
        {platform ? <p>platform: {platform.join(", ")}</p> : null}
      </div>
      <div style={{ flexGrow: 1 }} />
      <div>
        {img ? (
          <img
            onClick={() => setExpanded((state) => !state)}
            alt={`screenshot of ${name}`}
            loading="lazy"
            style={
              expanded
                ? { maxWidth: 1000, maxHeight: 800, cursor: "pointer" }
                : { maxWidth: 400, maxHeight: 200, cursor: "pointer" }
            }
            src={img}
          />
        ) : (
          <p>No screenshot</p>
        )}
      </div>
    </div>
  );
};

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>awesome-genome-visualization</title>
      <h1>awesome-genome-visualization</h1>
      <Cards />
    </main>
  );
};

export default IndexPage;
