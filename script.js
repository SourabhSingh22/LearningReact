const heading1 = React.createElement("h1",{id:"title1"}, "heading 1");
const heading2 = React.createElement("h2",{id:"title2"}, "heading 2");
const heading3= React.createElement("h1",{id:"title3"}, "heading 3");

const ismeSabHeadingkoStoreKrlenge = React.createElement("div",{},[heading1,heading2,heading3]);
const root = document.getElementById("container");

const myRoot = ReactDOM.createRoot(root);
myRoot.render(ismeSabHeadingkoStoreKrlenge);

// myRoot.render([heading1,heading2,heading3]);





