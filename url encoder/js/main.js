function copy() {
  var copyText = document.getElementById("output").innerHTML.slice(0, -161);
  navigator.clipboard.writeText(copyText);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

myInput = document.getElementById("input");

function uriencode(field) {
  if (field != "") {
    document.getElementById("output").innerHTML =
      encodeURI(field) +
      ' <span class="tooltip"><button onclick="copy()" onmouseout="outFunc()"><span class="tooltiptext" id="myTooltip">Copy to clipboard</span>Copy text</button></span>';
  } else {
    document.getElementById("output").innerHTML = "";
  }
}
