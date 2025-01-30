const editor = document.querySelector("#textarea1");
const preview = document.querySelector(".preview");

function markdownToHTML(markdown) {
  let html = markdown;

  //   headings
  html = html.replace(/(######)\s*(.+)/g, "<h6>$2</h6>");
  html = html.replace(/(#####)\s*(.+)/g, "<h5>$2</h5>");
  html = html.replace(/(####)\s*(.+)/g, "<h4>$2</h4>");
  html = html.replace(/(###)\s*(.+)/g, "<h3>$2</h3>");
  html = html.replace(/(##)\s*(.+)/g, "<h2>$2</h2>");
  html = html.replace(/(#)\s*(.+)/g, "<h1>$2</h1>");

  //   bold

  html = html.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>");

  //   italic
  html = html.replace(/(\*|_)(.*?)\1/g, "<em>$2</em>");

  html = html.replace(/^\s*-\s+(.*)/gm, "<li>$1</li>");
  html = html.replace(
    /\[(.*?)\]\((.*?)\)/g,
    '<a href="$2" target="_blank">$1</a>'
  );

  return html;
}
function renderMarkDown() {
  const markdown = editor.value;
  const html = markdownToHTML(markdown);
  preview.innerHTML = html;
}
editor.addEventListener("input", renderMarkDown);
renderMarkDown();
