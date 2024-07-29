// const heading = React.createElement("h1",{id: heading,xyz:"abc"},"hello from react");


// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",{id: child},
//     React.createElement("h1",{},"I am an h1_2 tag")
// )
// );


const parent = React.createElement("div", {id : "parent"},
    React.createElement("div", {id : "child"},React.createElement("h1", {}, "i am h1 tag")));

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
