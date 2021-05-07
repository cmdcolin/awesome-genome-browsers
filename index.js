const fs = require("fs");

const res = JSON.parse(fs.readFileSync("TOOLS.json", "utf8"));
const header = fs.readFileSync("util/HEADER.md", "utf8");
const footer = fs.readFileSync("util/FOOTER.md", "utf8");
const categories = {};

console.log(header);

res.tools.forEach((tool) => {
  const tags = tool["tags"] || [];
  const firsttag = tags[0] || "Uncategorized";
  if (!categories[firsttag]) {
    categories[firsttag] = [];
  }
  categories[firsttag].push(tool);
});

Object.entries(categories).map(([category, tools]) => {
  console.log("## " + category);
  tools.forEach((tool) => {
    console.log(
      "- " +
        "[" +
        tool.name +
        "](" +
        tool.url +
        ")" +
        (tool.note ? " (" + tool.note + ")" : "") +
        (tool.publication ? " [(pub)](" + tool.publication.url + ")" : "")
    );
  });
});

console.log(footer);
