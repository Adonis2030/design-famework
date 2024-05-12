config = {
  boardType: "grid",
  mouseType: "select",
  isMouseDown: false,
  editableTD: "",
  colorPicker: "",
  themeStyle: "light",
  theme: {
    light: {
      board: "#FFFFFF",
      text: "#000000",
      border: "#273da8",
    },
    dark: {
      board: "#373737",
      text: "#FFFFFF",
      border: "#FFFFFF",
    },
  },
};

basicColorData = ["Background", "Text"];

const colorPalette = {
  light: [
    {
      name: "primary",
      shades: [
        "#f5f6fc",
        "#cdd3f1",
        "#a5b0e6",
        "#7d8edc",
        "#566bd1",
        "#2e48c6",
        "#273da8",
        "#20328b",
        "#19286d",
        "#121d4f",
      ],
    },
    {
      name: "secondary",
      shades: [
        "#f2f9f8",
        "#c2e1dd",
        "#91c9c2",
        "#61b2a8",
        "#309a8d",
        "#008272",
        "#006f61",
        "#005b50",
        "#00483f",
        "#00342e",
      ],
    },
    {
      name: "tertiary",
      shades: [
        "#f8f9fb",
        "#dee4ed",
        "#c4cfe0",
        "#a9bad2",
        "#8fa4c4",
        "#758fb6",
        "#637a9b",
        "#52647f",
        "#404f64",
        "#2f3949",
      ],
    },
    {
      name: "red",
      shades: [
        "#fdf5f5",
        "#f4cecf",
        "#eba8a9",
        "#e28184",
        "#da5b5e",
        "#d13438",
        "#b22c30",
        "#922427",
        "#731d1f",
        "#541516",
      ],
    },
    {
      name: "orange",
      shades: [
        "#fdf7f2",
        "#f5d8c2",
        "#edb991",
        "#e49a61",
        "#dc7b30",
        "#d45c00",
        "#b44e00",
        "#944000",
        "#753300",
        "#552500",
      ],
    },
    {
      name: "green",
      shades: [
        "#f7fbf3",
        "#d9eac4",
        "#bbda96",
        "#9cca67",
        "#7eb939",
        "#60a90a",
        "#529009",
        "#437607",
        "#355d06",
        "#264404",
      ],
    },
    {
      name: "blue",
      shades: [
        "#f3f8fc",
        "#c6dcef",
        "#98c1e3",
        "#6ba5d7",
        "#3d8aca",
        "#106ebe",
        "#0e5ea2",
        "#0b4d85",
        "#093d69",
        "#062c4c",
      ],
    },
    {
      name: "black",
      shades: [
        "#ffffff",
        "#F5F5F5",
        "#EEEEEE",
        "#E0E0E0",
        "#BDBDBD",
        "#9E9E9E",
        "#757575",
        "#616161",
        "#424242",
        "#000000",
      ],
    },
  ],
  dark: [
    {
      name: "primary",
      shades: [
        "#f5f6fc",
        "#cdd3f1",
        "#a5b0e6",
        "#7d8edc",
        "#566bd1",
        "#2e48c6",
        "#273da8",
        "#20328b",
        "#19286d",
        "#121d4f",
      ],
    },
    {
      name: "secondary",
      shades: [
        "#f2f9f8",
        "#c2e1dd",
        "#91c9c2",
        "#61b2a8",
        "#309a8d",
        "#008272",
        "#006f61",
        "#005b50",
        "#00483f",
        "#00342e",
      ],
    },
    {
      name: "tertiary",
      shades: [
        "#f8f9fb",
        "#dee4ed",
        "#c4cfe0",
        "#a9bad2",
        "#8fa4c4",
        "#758fb6",
        "#637a9b",
        "#52647f",
        "#404f64",
        "#2f3949",
      ],
    },
    {
      name: "accent",
      shades: [
        "#ff4d4d",
        "#ff6666",
        "#ff8080",
        "#ff9999",
        "#ffb3b3",
        "#ffcccc",
        "#ffe6e6",
        "#fff2f2",
        "#ffffff",
        "#ffd9d9",
      ],
    },
    {
      name: "purple",
      shades: [
        "#2e1a47",
        "#3c275c",
        "#4a3471",
        "#583f86",
        "#674c9b",
        "#7558b0",
        "#8365c5",
        "#9271da",
        "#a07eeb",
        "#ae8bf1",
      ],
    },
    {
      name: "teal",
      shades: [
        "#004d4d",
        "#006666",
        "#008080",
        "#009999",
        "#00b3b3",
        "#00cccc",
        "#00e6e6",
        "#00f2f2",
        "#00ffff",
        "#00d9d9",
      ],
    },
    {
      name: "gold",
      shades: [
        "#b38600",
        "#cc9900",
        "#e6b800",
        "#ffcc00",
        "#ffd633",
        "#ffdd66",
        "#ffe699",
        "#fff0cc",
        "#fff5e6",
        "#fffaf2",
      ],
    },
    {
      name: "black",
      shades: [
        "#ffffff",
        "#F5F5F5",
        "#EEEEEE",
        "#E0E0E0",
        "#BDBDBD",
        "#9E9E9E",
        "#757575",
        "#616161",
        "#424242",
        "#000000",
      ],
    },
  ],
};

const boldButton = document.getElementById("bold-button");
const italicButton = document.getElementById("italic-button");
const fontSizeSelect = document.getElementById("font-size-select");
const alignmentSelect = document.getElementById("alignment-select");
const borderStyle = document.getElementById("border-style");

function createBoard() {
  const rows = document.getElementById("rows").value;
  const cols = document.getElementById("cols").value;

  const table = document.createElement("table");
  table.setAttribute("id", "work-table");

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      cell.id = `cell-${i + 1}-${j + 1}`;
      cell.className = "cell";

      cell.style.width = `${100 / cols}%`;
      cell.style.height = `${100 / rows}%`;

      cell.setAttribute("pos", j);
      cell.setAttribute("rowPos", i);
      cell.addEventListener("mousedown", handleMouseDown);
      cell.addEventListener("mouseover", handleMouseOver);
      cell.addEventListener("mouseup", handleMouseUp);

      cell.addEventListener("click", () => {
        if (config.mouseType === "edit") {
          config.editableTD = cell.id;
          makeEditable(cell);
        }
      });
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  const workBoard = document.getElementById("work-board");
  workBoard.innerHTML = "";
  workBoard.appendChild(table);
}

function handleMouseDown(event) {
  if (config.mouseType == "select") {
    const svgBtn = document.getElementById("svg-save-btn");
    config.isMouseDown = true;

    const findCell = (element) => {
      if (element.nodeName === "td" || element.nodeName === "TD") {
        return element;
      }

      return findCell(element.parentNode);
    };

    let cell = event.target;

    if (event.target.nodeName !== "td") {
      cell = findCell(event.target);
    }

    cell.classList.toggle("active");
    toggleMark(cell);
    svgBtn.disabled = true;
    document.getElementById("svg-code").value = "";
  } else {
    makeEditable(event.target);
  }
}

function handleMouseOver(event) {
  if (config.isMouseDown) {
    if (event.target.classList.contains("mark")) {
      return;
    } else {
      event.target.classList.add("active");
      toggleMark(event.target);
    }
  }
}

function handleMouseUp(event) {
  config.isMouseDown = false;
  let selectedCells = 0;
  const selectBox = document.getElementById("select-all-block");
  const cells = document.querySelectorAll("TD");
  cells.forEach((cells) => {
    if (cells.classList.contains("active")) {
      selectedCells++;
    }
  });

  if (selectedCells == 0) {
    selectBox.classList.remove("display-select-box");
  } else {
    selectBox.classList.add("display-select-box");
  }
}

function getColor(value, type) {
  const bgPalette = document.getElementById("Background");
  const textPalette = document.getElementById("Text");
  if (type == "Background") {
    document.querySelectorAll(".active").forEach((cell) => {
      cell.classList.forEach((className) => {
        if (className.startsWith("bg-")) {
          cell.classList.remove(className);
        }
      });
      cell.classList.add(`bg-${value}`);
      bgPalette.classList.forEach((className) => {
        if (className.startsWith("bg-")) {
          bgPalette.classList.remove(className);
        }
      });
      bgPalette.classList.add(`bg-${value}`);
    });
  } else {
    document.querySelectorAll(".active").forEach((cell) => {
      cell.classList.forEach((className) => {
        if (className.startsWith("text-")) {
          cell.classList.remove(className);
        }
      });
      cell.classList.add(`text-${value}`);
      textPalette.classList.forEach((className) => {
        if (className.startsWith("bg-")) {
          textPalette.classList.remove(className);
        }
      });
      textPalette.classList.add(`bg-${value}`);
    });
  }
}

function toggleMark(cell) {
  const existingMark = cell.querySelector("span.mark");

  if (cell.classList.contains("active")) {
    if (!existingMark) {
      const mark = document.createElement("span");
      mark.className = "mark";
      mark.textContent = "✓";
      cell.appendChild(mark);
      const computedStyle = window.getComputedStyle(cell);
      const colorA = computedStyle.getPropertyValue("background-color");
      const colorC = computedStyle.getPropertyValue("color");
      const backgroundColor = rgbOrRgbaToHex(colorA);
      const textColor = rgbOrRgbaToHex(colorC);

      const background = document.getElementById("Background");
      const text = document.getElementById("Text");

      background.classList.forEach((className) => {
        if (className.startsWith("bg-")) {
          background.classList.remove(className);
        }

        cell.classList.forEach((className) => {
          if (className.startsWith("bg-")) {
            background.classList.add(className);
          }
        });
      });

      text.classList.forEach((className) => {
        if (className.startsWith("bg-")) {
          text.classList.remove(className);
        }

        cell.classList.forEach((className) => {
          if (className.startsWith("text-")) {
            const textColor = className.substring(5);
            text.classList.add(`bg-${textColor}`);
          }
        });
      });

      document.getElementById("Background").style.background = backgroundColor;
      document.getElementById("Text").style.background = textColor;
    }
  } else {
    const mark = cell.querySelector(".mark");
    if (mark) {
      mark.remove();
    }
  }
}

function mergeBlock() {
  const activeCells = document.querySelectorAll(".active");
  if (activeCells.length <= 1 || !canMerge(activeCells)) {
    alert("Please choose blocks correctly");
    return;
  }

  let indexArr = new Array();
  let minRow = Infinity,
    maxRow = -Infinity,
    minCol = Infinity,
    maxCol = -Infinity;
  activeCells.forEach((cell) => {
    const colIndex = +cell.getAttribute("pos");
    const rowIndex = +cell.getAttribute("rowPos");
    const virArr = [colIndex, rowIndex];
    indexArr.push(virArr);
    minRow = Math.min(minRow, rowIndex);
    maxRow = Math.max(maxRow, rowIndex + cell.rowSpan - 1);
    minCol = Math.min(minCol, colIndex);
    maxCol = Math.max(maxCol, colIndex + cell.colSpan - 1);
  });

  const numRows = indexArr.reduce(
    (maxRow, currentRow) => Math.max(maxRow, currentRow[0] + 1),
    0
  );
  const numCols = indexArr.reduce(
    (maxCol, currentCol) => Math.max(maxCol, currentCol[1] + 1),
    0
  );

  const rowSpan = maxRow - minRow + 1;
  const colSpan = maxCol - minCol + 1;

  // Calculating the initial width and height of the area to be merged
  const parentTable = document.querySelector("table"); // Adjust selector as needed
  let totalWidth = 0;
  let totalHeight = 0;

  activeCells.forEach((cell) => {
    totalWidth += cell.offsetWidth;
    totalHeight += cell.offsetHeight;
  });

  // Get the total width and height of the table to calculate percentage
  const totalTableWidth = parentTable.offsetWidth;
  const totalTableHeight = parentTable.offsetHeight;

  const widthPercent = ((totalWidth / totalTableWidth) * 100).toFixed(2);
  const heightPercent = ((totalHeight / totalTableHeight) * 100).toFixed(2);
  console.log(widthPercent, heightPercent);
  console.log(
    `Combined initial width of selected cells: ${widthPercent / rowSpan}%`
  );
  console.log(
    `Combined initial height of selected cells: ${heightPercent / colSpan}%`
  );

  const firstCell = document.querySelector(`#cell-${minRow + 1}-${minCol + 1}`);
  firstCell.setAttribute("rowspan", rowSpan);
  firstCell.setAttribute("colspan", colSpan);

  activeCells.forEach((cell) => {
    if (cell !== firstCell) {
      cell.remove();
    }
  });

  activeCells.forEach((cell) => {
    cell.classList.remove("active");
    const mark = cell.querySelector(".mark");
    if (mark) mark.remove();
  });

  firstCell.style.width = `${widthPercent / rowSpan}%`;
  firstCell.style.height = `${heightPercent / colSpan}%`;
}

function canMerge(selectedCells) {
  if (selectedCells.length <= 1) return false;

  let rows = new Set();
  let cols = new Set();

  selectedCells.forEach((cell) => {
    const [row, col] = [
      +cell.getAttribute("rowPos"),
      +cell.getAttribute("pos"),
    ];
    rows.add(row);
    cols.add(col);
  });

  return selectedCells.length === rows.size * cols.size;
}

function rgbOrRgbaToHex(color) {
  const regex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9\.]+))?\)/;
  const match = color.match(regex);

  if (!match) {
    return null; // If the input format does not match, return null
  }

  // Extract RGB values
  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  // If an alpha value is provided, parse it, otherwise assume full opacity (1)
  const a = match[4] !== undefined ? parseFloat(match[4]) : 1.0;

  // Convert decimal values to hex
  const rHex = r.toString(16).padStart(2, "0");
  const gHex = g.toString(16).padStart(2, "0");
  const bHex = b.toString(16).padStart(2, "0");
  const aHex =
    a === 1
      ? ""
      : Math.round(a * 255)
          .toString(16)
          .padStart(2, "0");

  // Return the hexadecimal color code
  return `#${rHex}${gHex}${bHex}${aHex}`;
}

function changeMouseType(val) {
  if (val === "select") {
    config.editableTD = "";
    document.querySelectorAll(".cell").forEach((cell) => {
      cell.style.userSelect = "none";
    });
    const mouse = document.getElementById("mouse-select");
    if (!mouse.classList.contains("mouse-active")) {
      document.getElementById("mouse-edit").classList.remove("mouse-active");
      mouse.classList.add("mouse-active");
      config.mouseType = "select";
    }
  } else {
    document.querySelectorAll(".cell").forEach((cell) => {
      if (cell.classList.contains("active")) {
        cell.classList.remove("active");
        toggleMark(cell);
      }

      cell.style.userSelect = "all";
    });
    const mouse = document.getElementById("mouse-edit");
    if (!mouse.classList.contains("mouse-active")) {
      document.getElementById("mouse-select").classList.remove("mouse-active");
      mouse.classList.add("mouse-active");
      config.mouseType = "edit";
    }
  }
}

function makeEditable(cell) {
  const svgBtn = document.getElementById("svg-save-btn");
  if (config.mouseType == "select") {
    svgBtn.disabled = true;
    document.getElementById("svg-code").value = "";
  } else {
    svgBtn.disabled = false;
    document.getElementById("svg-code").value = cell.innerHTML;
  }
  const computedStyle = window.getComputedStyle(cell);
  const fontWeight = computedStyle.getPropertyValue("font-weight");
  const fontSize = computedStyle.getPropertyValue("font-size");
  const fontStyle = computedStyle.getPropertyValue("font-style");
  const alignment = computedStyle.getPropertyValue("text-align");

  if (
    fontWeight === "bold" ||
    fontWeight === "700" ||
    fontWeight === "800" ||
    fontWeight === "900" ||
    fontWeight === "bolder"
  ) {
    boldButton.classList.add("btn-active");
  } else {
    if (boldButton.classList.contains("btn-active")) {
      boldButton.classList.remove("btn-active");
    }
  }

  if (fontStyle === "italic") {
    italicButton.classList.add("btn-active");
  } else {
    if (italicButton.classList.contains("btn-active")) {
      italicButton.classList.remove("btn-active");
    }
  }

  if (alignment === "start") {
    alignmentSelect.value = "left";
  } else if (alignment === "end") {
    alignmentSelect.value = "right";
  } else {
    alignmentSelect.value = alignment;
  }

  const fontSelectBox = document.getElementById("font-size-select");
  if (
    fontSize == "16px" &&
    (fontWeight == "bold" ||
      fontWeight == "700" ||
      fontWeight == "800" ||
      fontWeight == "900" ||
      fontWeight == "bolder")
  ) {
    fontSelectBox.value = "font-size-header-4";
  } else {
    switch (fontSize) {
      case "32px":
        fontSelectBox.value = "font-size-header-1";
        break;
      case "24px":
        fontSelectBox.value = "font-size-header-2";
        break;
      case "19px":
        fontSelectBox.value = "font-size-header-3";
        break;
      case "16px":
        fontSelectBox.value = "font-size-paragraph";
        break;
      case "13px":
        fontSelectBox.value = "font-size-header-5";
        break;
      case "11px":
        fontSelectBox.value = "font-size-header-6";
        break;
      default:
        fontSelectBox.value = "";
    }
  }

  cell.contentEditable = true;
  cell.focus();

  cell.addEventListener("blur", () => {
    cell.contentEditable = false;
  });
}

boldButton.addEventListener("click", function () {
  const editCell = document.getElementById(config.editableTD);
  if (boldButton.classList.contains("btn-active")) {
    editCell.classList.remove("font-weight-bold");
    editCell.classList.add("font-weight-normal");
    boldButton.classList.remove("btn-active");
  } else {
    editCell.classList.remove("font-weight-normal");
    editCell.classList.add("font-weight-bold");
    boldButton.classList.add("btn-active");
  }
});

italicButton.addEventListener("click", function () {
  const editCell = document.getElementById(config.editableTD);
  if (italicButton.classList.contains("btn-active")) {
    editCell.classList.remove("font-style-italic");
    editCell.classList.add("font-style-normal");
    italicButton.classList.remove("btn-active");
  } else {
    editCell.classList.remove("font-style-normal");
    editCell.classList.add("font-style-italic");
    italicButton.classList.add("btn-active");
  }
});

fontSizeSelect.addEventListener("change", function (e) {
  const editCell = document.getElementById(config.editableTD);
  editCell.classList.forEach((className) => {
    if (className.startsWith("font-size-")) {
      editCell.classList.remove(className);
    }
  });

  editCell.classList.add(e.target.value);
});

borderStyle.addEventListener("change", function (e) {
  const borderTD = document.querySelectorAll(".cell");
  borderTD.forEach((borderTD) => {
    const borderClass = document.getElementById(borderTD.id);
    borderClass.classList.forEach((className) => {
      if (className.startsWith("border-style-")) {
        borderClass.classList.remove(className);
      }

      if (e.target.value == "solid") {
        borderTD.classList.add("border-style-display");
      } else {
        borderTD.classList.add("border-style-none");
      }
    });
  });
});

alignmentSelect.addEventListener("change", function (e) {
  const editCell = document.getElementById(config.editableTD);
  editCell.style.textAlign = e.target.value;
});

document.addEventListener("DOMContentLoaded", function () {
  reRenderColorPalette();
});

function reRenderColorPalette() {
  const container = document.getElementById("colorPaletteContainer");
  const rows = colorPalette[config.themeStyle].length;
  let htmlContent = "";

  for (let i = 0; i < 2; i++) {
    htmlContent += `
          <div class="palette">
              <label class="palette-label">${basicColorData[i]} Color</label>
              <div class="color-palette-block" id="${basicColorData[i]}"></div>
          </div>
      `;
  }

  container.innerHTML = htmlContent;
  document.querySelectorAll(".color-palette-block").forEach((block, index) => {
    let gridHtml = '<div class="color-grid" style="display: none;">';
    for (let row = 0; row < rows; row++) {
      for (
        let col = 0;
        col < colorPalette[config.themeStyle][row].shades.length;
        col++
      ) {
        gridHtml += `<button class="color-button bg-${
          colorPalette[config.themeStyle][row].name
        }-${
          (Math.abs(col - colorPalette[config.themeStyle][row].shades.length) -
            1) *
          100
        }" data-id='${colorPalette[config.themeStyle][row].name}-${
          (Math.abs(col - colorPalette[config.themeStyle][row].shades.length) -
            1) *
          100
        }' onclick="getColor('${colorPalette[config.themeStyle][row].name}-${
          (Math.abs(col - colorPalette[config.themeStyle][row].shades.length) -
            1) *
          100
        }', '${basicColorData[index]}')"></button>`;
      }
    }
    gridHtml += "</div>";
    block.innerHTML = gridHtml;

    block.addEventListener("click", function (event) {
      event.stopPropagation();
      const grid = this.querySelector(".color-grid");
      closeAllColorGridsExcept(grid);
      grid.style.display = grid.style.display === "none" ? "flex" : "none"; // Show the grid when the block is clicked.
    });
  });

  document.addEventListener("click", function () {
    closeAllColorGrids();
  });

  function closeAllColorGrids() {
    document.querySelectorAll(".color-grid").forEach((grid) => {
      grid.style.display = "none";
    });
  }

  function closeAllColorGridsExcept(openGrid) {
    document.querySelectorAll(".color-grid").forEach((grid) => {
      if (grid !== openGrid) {
        grid.style.display = "none";
      }
    });
  }
}

function changeTheme(value) {
  if (value === "dark") {
    document.getElementById("theme-style").href = "assets/styles/dark.css";
    document.getElementById("theme-style").setAttribute("data-id", value);
  } else if (value === "light") {
    document.getElementById("theme-style").href = "assets/styles/light.css";
    document.getElementById("theme-style").setAttribute("data-id", value);
  }
  config.themeStyle = value;
  reRenderColorPalette();
}

function selectAll(event) {
  const cells = document.querySelectorAll("TD");
  if (event.checked) {
    cells.forEach((cells) => {
      if (!cells.classList.contains("active")) {
        cells.classList.add("active");
        toggleMark(cells);
      }
    });
  } else {
    cells.forEach((cells) => {
      if (cells.classList.contains("active")) {
        cells.classList.remove("active");
        toggleMark(cells);
      }
    });
  }
}

function exportDesign() {
  const tableHtml = document.getElementById("work-table").outerHTML;

  const styleElement = document.getElementById("theme-style");
  const theme = styleElement.getAttribute("data-id");

  const htmlContent = `
    <html>
    <head><meta charset='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' />
    <link id='external-style' href='assets/styles/style.css' rel='stylesheet' />
    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'></script>
    <link id='theme-style' href='assets/styles/${theme}.css' data-id='${theme}' rel='stylesheet' />
    <head/>
      <body>
        ${tableHtml}
      </body>
    </html>
  `;

  const blob = new Blob([htmlContent], { type: "text/html" });

  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "generated.html";
  downloadLink.click();
}

function importSVGToContent() {
  if (config.editableTD === "") return;
  const svgTextArea = document.getElementById("svg-code");
  const tdBlock = document.getElementById(config.editableTD);

  // Remove existing elements with class "svg-block"
  const svgBlocks = tdBlock.querySelectorAll(".svg-block");
  svgBlocks.forEach((block) => {
    block.parentNode.removeChild(block);
  });

  let svgTextAreaDom = document.createElement("div");
  let isEditableContent = false;

  svgTextAreaDom.innerHTML = svgTextArea.value;

  for (let i = svgTextAreaDom.childNodes.length - 1; i >= 0; i--) {
    if (
      svgTextAreaDom.childNodes[i].className &&
      svgTextAreaDom.childNodes[i].className === "editable-content"
    ) {
      isEditableContent = true;
      svgTextAreaDom.removeChild(svgTextAreaDom.childNodes[i]);
    }
  }

  const updateSvgElement = (element) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i].nodeName && element[i].nodeName === "svg") {
        return element[i];
      }
    }

    return updateSvgElement(element[0].childNodes);
  };

  svgTextAreaDom = updateSvgElement(svgTextAreaDom.childNodes);

  // Add new content
  const newSvgBlock = document.createElement("div");
  newSvgBlock.className = "svg-block";
  newSvgBlock.appendChild(svgTextAreaDom);
  tdBlock.insertBefore(newSvgBlock, tdBlock.firstChild);

  if (!isEditableContent) {
    const newEditableBlock = document.createElement("div");
    newEditableBlock.contentEditable = true;
    newEditableBlock.className = "editable-content";
    tdBlock.insertBefore(newEditableBlock, tdBlock.firstChild);
  }
}

const fileInput = document.getElementById("file-input");

fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];

  if (file && file.type === "text/html") {
    const reader = new FileReader();

    reader.onload = function (e) {
      const htmlContent = e.target.result;
      let tempElement = document.createElement("div");
      tempElement.innerHTML = htmlContent;

      let themeStyleLink = tempElement.querySelector("#theme-style");
      let theme = themeStyleLink.dataset.id;

      const workBoard = document.getElementById("work-board");
      workBoard.innerHTML = "";
      workBoard.appendChild(tempElement.querySelector("table"));

      const cells = workBoard.querySelectorAll("td");

      cells.forEach((cell) => {
        cell.addEventListener("mousedown", handleMouseDown);
        cell.addEventListener("mouseover", handleMouseOver);
        cell.addEventListener("mouseup", handleMouseUp);
        cell.addEventListener("click", () => {
          if (config.mouseType === "edit") {
            config.editableTD = cell.id;
            makeEditable(cell);
          }
        });
      });

      const themeStyle = document.getElementById("theme-style");
      themeStyle.href = `assets/styles/${theme}.css`;
      themeStyle.setAttribute("data-id", theme);
    };
    reader.readAsText(file);
  } else {
    alert("Please upload a valid HTML file.");
  }
});
