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

basicColorData = ["Background", "Text", "Border"];

const defaultColorPalette = [
  {
    name: "red",
    shades: [
      "#c00000",
      "#c00000cc",
      "#c0000099",
      "#c0000066",
      "#c0000033",
      "#c000001a",
      "#c000000d",
      "#c0000008",
      "#c0000004",
      "#c0000000",
    ],
  },
  {
    name: "yellow",
    shades: [
      "#ffc001",
      "#ffc001cc",
      "#ffc00199",
      "#ffc00166",
      "#ffc00133",
      "#ffc0011a",
      "#ffc0010d",
      "#ffc00108",
      "#ffc00104",
      "#ffc00100",
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
];

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
  ],
  dark: [
    {
      name: "orange",
      shades: [
        "#e97132",
        "#e97132cc",
        "#e9713299",
        "#e9713266",
        "#e9713233",
        "#e971321a",
        "#e971320d",
        "#e9713208",
        "#e9713204",
        "#e9713200",
      ],
    },
    {
      name: "teal",
      shades: [
        "#80e4c3",
        "#80e4c3cc",
        "#80e4c399",
        "#80e4c366",
        "#80e4c333",
        "#80e4c31a",
        "#80e4c30d",
        "#80e4c308",
        "#80e4c304",
        "#80e4c300",
      ],
    },
    {
      name: "lavender",
      shades: [
        "#d4bfff",
        "#d4bfffcc",
        "#d4bfff99",
        "#d4bfff66",
        "#d4bfff33",
        "#d4bfff1a",
        "#d4bfff0d",
        "#d4bfff08",
        "#d4bfff04",
        "#d4bfff00",
      ],
    },
  ],
  "arya-blue": [
    {
      name: "lilac",
      shades: [
        "#e6ccff",
        "#e6ccffcc",
        "#e6ccff99",
        "#e6ccff66",
        "#e6ccff33",
        "#e6ccff1a",
        "#e6ccff0d",
        "#e6ccff08",
        "#e6ccff04",
        "#e6ccff00",
      ],
    },
    {
      name: "peach",
      shades: [
        "#ffe0b3",
        "#ffe0b3cc",
        "#ffe0b399",
        "#ffe0b366",
        "#ffe0b333",
        "#ffe0b31a",
        "#ffe0b30d",
        "#ffe0b308",
        "#ffe0b304",
        "#ffe0b300",
      ],
    },
    {
      name: "coral",
      shades: [
        "#ffc4c4",
        "#ffc4c4cc",
        "#ffc4c499",
        "#ffc4c466",
        "#ffc4c433",
        "#ffc4c41a",
        "#ffc4c40d",
        "#ffc4c408",
        "#ffc4c404",
        "#ffc4c400",
      ],
    },
  ],
  "arya-orange": [
    {
      name: "mint",
      shades: [
        "#c3e8e2",
        "#c3e8e2cc",
        "#c3e8e299",
        "#c3e8e266",
        "#c3e8e233",
        "#c3e8e21a",
        "#c3e8e20d",
        "#c3e8e208",
        "#c3e8e204",
        "#c3e8e200",
      ],
    },
    {
      name: "mintgreen",
      shades: [
        "#ccffcc",
        "#ccffcccc",
        "#ccffcc99",
        "#ccffcc66",
        "#ccffcc33",
        "#ccffcc1a",
        "#ccffcc0d",
        "#ccffcc08",
        "#ccffcc04",
        "#ccffcc00",
      ],
    },
    {
      name: "cyan",
      shades: [
        "#e0ffff",
        "#e0ffffcc",
        "#e0ffff99",
        "#e0ffff66",
        "#e0ffff33",
        "#e0ffff1a",
        "#e0ffff0d",
        "#e0ffff08",
        "#e0ffff04",
        "#e0ffff00",
      ],
    },
  ],
  "lara-dark-blue": [
    {
      name: "skyblue",
      shades: [
        "#87ceeb",
        "#87ceebcc",
        "#87ceeb99",
        "#87ceeb66",
        "#87ceeb33",
        "#87ceeb1a",
        "#87ceeb0d",
        "#87ceeb08",
        "#87ceeb04",
        "#87ceeb00",
      ],
    },
    {
      name: "beige",
      shades: [
        "#87ceeb",
        "#87ceebcc",
        "#87ceeb99",
        "#87ceeb66",
        "#87ceeb33",
        "#87ceeb1a",
        "#87ceeb0d",
        "#87ceeb08",
        "#87ceeb04",
        "#87ceeb00",
      ],
    },
    {
      name: "salmon",
      shades: [
        "#FFA07A",
        "#FFA07Acc",
        "#FFA07A99",
        "#FFA07A66",
        "#FFA07A33",
        "#FFA07A1a",
        "#FFA07A0d",
        "#FFA07A08",
        "#FFA07A04",
        "#FFA07A00",
      ],
    },
  ],
  "lara-dark-teal": [
    {
      name: "lavenderblush",
      shades: [
        "#fff0f5",
        "#fff0f5cc",
        "#fff0f599",
        "#fff0f566",
        "#fff0f533",
        "#fff0f51a",
        "#fff0f50d",
        "#fff0f508",
        "#fff0f504",
        "#fff0f500",
      ],
    },
    {
      name: "yellowgreen",
      shades: [
        "#9acd32",
        "#9acd32cc",
        "#9acd3299",
        "#9acd3266",
        "#9acd3233",
        "#9acd321a",
        "#9acd320d",
        "#9acd3208",
        "#9acd3204",
        "#9acd3200",
      ],
    },
    {
      name: "olive",
      shades: [
        "#808000",
        "#808000cc",
        "#80800099",
        "#80800066",
        "#80800033",
        "#8080001a",
        "#8080000d",
        "#80800008",
        "#80800004",
        "#80800000",
      ],
    },
  ],
  "saga-green": [
    {
      name: "maroon",
      shades: [
        "#800000",
        "#800000cc",
        "#80000099",
        "#80000066",
        "#80000033",
        "#8000001a",
        "#8000000d",
        "#80000008",
        "#80000004",
        "#80000000",
      ],
    },
    {
      name: "sienna",
      shades: [
        "#A0522D",
        "#A0522Dcc",
        "#A0522D99",
        "#A0522D66",
        "#A0522D33",
        "#A0522D1a",
        "#A0522D0d",
        "#A0522D08",
        "#A0522D04",
        "#A0522D00",
      ],
    },
    {
      name: "darkgreen",
      shades: [
        "#006400",
        "#006400cc",
        "#00640099",
        "#00640066",
        "#00640033",
        "#0064001a",
        "#0064000d",
        "#00640008",
        "#00640004",
        "#00640000",
      ],
    },
  ],
  "saga-orange": [
    {
      name: "mediumaquamarine",
      shades: [
        "#66CDAA",
        "#66CDAAcc",
        "#66CDAA99",
        "#66CDAA66",
        "#66CDAA33",
        "#66CDAA1a",
        "#66CDAA0d",
        "#66CDAA08",
        "#66CDAA04",
        "#66CDAA00",
      ],
    },
    {
      name: "yellowgreen",
      shades: [
        "#9ACD32",
        "#9ACD32cc",
        "#9ACD3299",
        "#9ACD3266",
        "#9ACD3233",
        "#9ACD321a",
        "#9ACD320d",
        "#9ACD3208",
        "#9ACD3204",
        "#9ACD3200",
      ],
    },
    {
      name: "aqua",
      shades: [
        "#00ffff",
        "#00ffffcc",
        "#00ffff99",
        "#00ffff66",
        "#00ffff33",
        "#00ffff1a",
        "#00ffff0d",
        "#00ffff08",
        "#00ffff04",
        "#00ffff00",
      ],
    },
  ],
};

const boldButton = document.getElementById("bold-button");
const italicButton = document.getElementById("italic-button");
const fontSizeSelect = document.getElementById("font-size-select");
const alignmentSelect = document.getElementById("alignment-select");
const positionSelect = document.getElementById("position-select");
const directionSelect = document.getElementById("direction-select");
const borderStyle = document.getElementById("border-style");
const borderWidth = document.getElementById("border-width");
const selectPreview = document.getElementById("select-preview");

let cellWidth = 0;
let cellHeight = 0;
let tableConfig = {
  rows: 0,
  cols: 0,
};

function confirmCreateBoard() {
  const content = document.getElementById("work-board").innerHTML;
  if (content !== "") {
    const userResponse = confirm("Do you want to proceed?");
    if (userResponse) {
      createBoard();
    } else {
      return;
    }
  } else {
    createBoard();
  }
}

function createBoard() {
  const rows = document.getElementById("rows").value;
  const cols = document.getElementById("cols").value;

  tableConfig = {
    rows,
    cols,
  };

  const table = document.createElement("table");
  table.setAttribute("id", "work-table");

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    row.id = `row-${i + 1}`;

    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      cell.id = `cell-${i + 1}-${j + 1}`;
      cell.className =
        "cell border-color-default border-width-default border-style-default";

      cell.style.width = `${100 / cols}%`;
      cell.style.height = `${100 / rows}%`;

      cellWidth = cell.style.width;
      cellHeight = cell.style.height;

      cell.setAttribute("pos", j);
      cell.setAttribute("rowPos", i);
      cell.addEventListener("mousedown", handleMouseDown);
      cell.addEventListener("mouseover", handleMouseOver);
      cell.addEventListener("mouseup", handleMouseUp);
      cell.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const contextMenu = document.getElementById("custom-contextmenu");
        contextMenu.style.opacity = 1;
        contextMenu.style.visibility = "visible";
        contextMenu.style.left = e.pageX + "px";
        contextMenu.style.top = e.pageY + "px";

        const id = e.target.id.split("-");
        contextMenu.setAttribute("data-row", id[2]);
        contextMenu.setAttribute("data-col", id[1]);
      });

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

  // $("#work-table").colResizable({
  //   liveDrag:true,
  //   gripInnerHtml:"<div class='grip'></div>",
  //   draggingClass:"dragging",
  //   resizeMode:'fit'
  // });
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
  } else if (event.target.parentElement.className.includes("cell") > -1) {
    // makeEditable(event.target);
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
  const setBorder = document.getElementById("set-border");
  const cells = document.querySelectorAll("TD");
  cells.forEach((cells) => {
    if (cells.classList.contains("active")) {
      selectedCells++;
    }
  });

  if (selectedCells == 0) {
    selectBox.classList.remove("display-select-box");
    setBorder.classList.remove("display-set-border-block");
  } else {
    selectBox.classList.add("display-select-box");
    setBorder.classList.add("display-set-border-block");
  }
}

function getColor(value, type) {
  const bgPalette = document.getElementById("Background");
  const textPalette = document.getElementById("Text");
  const borderPalette = document.getElementById("Border");
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
  } else if (type == "Border") {
    document.querySelectorAll(".active").forEach((cell) => {
      let classList = [];

      cell.classList.forEach((className) => {
        if (className.includes("border-set-")) {
          classList = [...classList, className];
        }
      });

      classList.forEach((className) => {
        const borderSet = className.split("-")[2];

        const tempElement = document.createElement("div");

        tempElement.className = `border-color-${value}`;

        document.body.appendChild(tempElement);

        const computedStyle = window.getComputedStyle(tempElement);

        const color = computedStyle.borderColor;

        cell.style.setProperty(`border-${borderSet}-color`, color, "important");
      });

      cell.classList.forEach((className) => {
        if (className.startsWith("border-set-color-")) {
          cell.classList.remove(className);
        }
      });
      cell.classList.add(`border-set-color-${value}`);
      borderPalette.classList.forEach((className) => {
        if (className.startsWith("bg-")) {
          borderPalette.classList.remove(className);
        }
      });
      borderPalette.classList.add(`bg-${value}`);
    });
  } else {
    document.querySelectorAll(".active").forEach((cell) => {
      const editableContent = findEditableContent(cell);

      if (editableContent) {
        editableContent.classList.forEach((className) => {
          if (className.startsWith("text-")) {
            editableContent.classList.remove(className);
          }
        });
        editableContent.classList.add(`text-${value}`);
        textPalette.classList.forEach((className) => {
          if (className.startsWith("bg-")) {
            textPalette.classList.remove(className);
          }
        });
        textPalette.classList.add(`bg-${value}`);
      }
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
      const border = document.getElementById("Border");

      let defaultBorderWidth = 1;
      cell.classList.forEach((className) => {
        if (
          className.startsWith("border-width-") &&
          className !== "border-width-default"
        ) {
          defaultBorderWidth = className.split("-")[2];
        }
      });
      borderWidth.value = defaultBorderWidth;

      let defaultBorderStyle = "solid";
      cell.classList.forEach((className) => {
        if (
          className.startsWith("border-style-") &&
          className !== "border-style-default"
        ) {
          defaultBorderStyle = className.split("-")[2];
        }
      });
      borderStyle.value = defaultBorderStyle;

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

      border.classList.forEach((className) => {
        if (className.startsWith("bg-")) {
          border.classList.remove(className);
        }

        cell.classList.forEach((className) => {
          if (className.startsWith("border-set-color-")) {
            const textColor = className.substring(17);
            border.classList.add(`bg-${textColor}`);
          }
        });
      });

      text.classList.forEach((className) => {
        if (className.startsWith("bg-")) {
          text.classList.remove(className);
        }

        const editableContent = findEditableContent(cell);

        if (editableContent) {
          editableContent.classList.forEach((className) => {
            if (className.startsWith("text-")) {
              const textColor = className.substring(5);
              text.classList.add(`bg-${textColor}`);
            }
          });
        }
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

  const parentTable = document.querySelector("table");
  let totalWidth = 0;
  let totalHeight = 0;

  activeCells.forEach((cell) => {
    totalWidth += cell.offsetWidth;
    totalHeight += cell.offsetHeight;
  });

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

function unmergeBlock() {
  const activeCells = document.querySelectorAll(".active");

  if (activeCells.length !== 1) return;

  const rowspan = activeCells[0].rowSpan;
  const colspan = activeCells[0].colSpan;
  const classList = activeCells[0].id.split("-");

  const rowNum = Number(classList[1]);
  const colNum = Number(classList[2]);

  let existingElement = activeCells[0];

  existingElement.style.width = cellWidth;
  existingElement.style.height = cellHeight;
  existingElement.rowSpan = 1;
  existingElement.colSpan = 1;

  for (let i = colNum + 1; i < colNum + colspan; i++) {
    const newCell = document.createElement("td");

    newCell.className =
      "cell border-color-default border-width-default border-style-default";
    newCell.id = `cell-${rowNum}-${i}`;
    newCell.style.width = cellWidth;
    newCell.style.height = cellHeight;
    newCell.rowSpan = 1;
    newCell.colSpan = 1;
    newCell.setAttribute("pos", i - 1);
    newCell.setAttribute("rowPos", rowNum - 1);

    newCell.addEventListener("mousedown", handleMouseDown);
    newCell.addEventListener("mouseover", handleMouseOver);
    newCell.addEventListener("mouseup", handleMouseUp);

    newCell.addEventListener("click", () => {
      if (config.mouseType === "edit") {
        config.editableTD = newCell.id;
        makeEditable(newCell);
      }
    });

    existingElement.insertAdjacentElement("afterend", newCell);

    existingElement = newCell;
  }

  if (rowspan > 1) {
    for (let i = rowNum + 1; i < rowNum + rowspan; i++) {
      let nextRowElement = null;
      let parentElement = document.getElementById(`row-${i}`);

      for (let j = 1; j < colNum; j++) {
        if (document.getElementById(`cell-${i}-${j}`)) {
          nextRowElement = document.getElementById(`cell-${i}-${j}`);
        }
      }

      for (let k = colNum; k < colNum + colspan; k++) {
        const newCell = document.createElement("td");

        newCell.className =
          "cell border-color-default border-style-default border-width-default";
        newCell.id = `cell-${i}-${k}`;
        newCell.style.width = cellWidth;
        newCell.style.height = cellHeight;
        newCell.rowSpan = 1;
        newCell.colSpan = 1;
        newCell.setAttribute("pos", k - 1);
        newCell.setAttribute("rowPos", i - 1);

        newCell.addEventListener("mousedown", handleMouseDown);
        newCell.addEventListener("mouseover", handleMouseOver);
        newCell.addEventListener("mouseup", handleMouseUp);

        newCell.addEventListener("click", () => {
          if (config.mouseType === "edit") {
            config.editableTD = newCell.id;
            makeEditable(newCell);
          }
        });

        newCell.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const contextMenu = document.getElementById("custom-contextmenu");
          contextMenu.style.opacity = 1;
          contextMenu.style.visibility = "visible";
          contextMenu.style.left = e.pageX + "px";
          contextMenu.style.top = e.pageY + "px";

          const id = e.target.id.split("-");
          contextMenu.setAttribute("data-row", id[2]);
          contextMenu.setAttribute("data-col", id[1]);
        });

        if (nextRowElement) {
          nextRowElement.insertAdjacentElement("afterend", newCell);
        } else {
          parentElement.prepend(newCell);
        }

        nextRowElement = newCell;
      }
    }
  }

  activeCells.forEach((cell) => {
    cell.classList.remove("active");
    const mark = cell.querySelector(".mark");
    if (mark) mark.remove();
  });
}

function insertRow() {
  const contextMenu = document.getElementById("custom-contextmenu");
  const row = contextMenu.getAttribute("data-row");

  document.querySelectorAll(".cell").forEach((cell) => {
    const ids = cell.id.split("-");
    const column = Number(ids[1]);
    const cellRow = Number(ids[2]);

    if (cellRow > row) {
      cell.id = `cell-${column}-${cellRow + 1}`;
      cell.setAttribute("pos", Number(cell.getAttribute("pos")) + 1);
    }
  });

  for (let i = 1; i <= tableConfig.cols; i++) {
    let flag = false;
    document.getElementById(`row-${i}`).childNodes.forEach((child) => {
      if (flag) {
        const newCell = document.createElement("td");
        newCell.className =
          "cell border-color-default border-width-default border-style-default";
        newCell.id = `cell-${i}-${Number(child.id.split("-")[2]) - 1}`;
        newCell.style.width = `${100 / tableConfig.rows + 1}%`;
        newCell.style.height = cellHeight;
        newCell.rowSpan = 1;
        newCell.colSpan = 1;

        newCell.setAttribute("pos", Number(child.id.split("-")[2]) - 2);
        newCell.setAttribute("rowPos", i - 1);

        newCell.addEventListener("mousedown", handleMouseDown);
        newCell.addEventListener("mouseover", handleMouseOver);
        newCell.addEventListener("mouseup", handleMouseUp);

        newCell.addEventListener("click", () => {
          if (config.mouseType === "edit") {
            config.editableTD = newCell.id;
            makeEditable(newCell);
          }
        });

        newCell.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const contextMenu = document.getElementById("custom-contextmenu");
          contextMenu.style.opacity = 1;
          contextMenu.style.visibility = "visible";
          contextMenu.style.left = e.pageX + "px";
          contextMenu.style.top = e.pageY + "px";

          const id = e.target.id.split("-");
          contextMenu.setAttribute("data-row", id[2]);
          contextMenu.setAttribute("data-col", id[1]);
        });

        child.parentNode.insertBefore(newCell, child);
        flag = false;
      } else if (child.id === `cell-${i}-${row}`) {
        flag = true;
      }
    });
  }

  document.querySelectorAll(".cell").forEach((cell) => {
    const originCellWidth = Number(
      cell.style.width.slice(0, cell.style.width.length - 1)
    );
    const cellWidthNumber = Number(cellWidth.slice(0, cellWidth.length - 1));
    cell.style.width = `${100 / (Number(tableConfig.rows) + 1)}%`;
    // cell.style.width = `${(100 / tableConfig.rows + 1) * (originCellWidth / cellWidthNumber)}%`;
    // cellWidth = `${(100 / tableConfig.rows + 1) * (originCellWidth / cellWidthNumber)}%`;
  });

  cellWidth = `${100 / (Number(tableConfig.rows) + 1)}%`;
  tableConfig = {
    ...tableConfig,
    rows: tableConfig.rows + 1,
  };
}

function insertCol() {
  const contextMenu = document.getElementById("custom-contextmenu");
  const col = Number(contextMenu.getAttribute("data-col"));

  document.querySelectorAll(".cell").forEach((cell) => {
    const ids = cell.id.split("-");
    const column = Number(ids[1]);
    const cellRow = Number(ids[2]);

    if (column > col) {
      cell.id = `cell-${column + 1}-${cellRow}`;
      cell.setAttribute("rowpos", Number(cell.getAttribute("rowpos")) + 1);
    }
  });

  document.querySelectorAll("tr").forEach((tr) => {
    const num = Number(tr.id.split("-")[1]);

    if (num > col) {
      tr.id = `row-${Number(num + 1)}`;
    }
  });

  const newTr = document.createElement("tr");
  newTr.id = `row-${col + 1}`;

  console.log(Number(tableConfig.cols));

  for (let i = 1; i <= Number(tableConfig.cols); i++) {
    const newCell = document.createElement("td");
    newCell.className =
      "cell border-color-default border-width-default border-style-default";
    newCell.id = `cell-${col + 1}-${i}`;
    newCell.style.width = cellWidth;
    newCell.style.height = `${100 / tableConfig.cols + 1}%`;
    newCell.rowSpan = 1;
    newCell.colSpan = 1;

    newCell.setAttribute("pos", i);
    newCell.setAttribute("rowPos", i - 1);

    newCell.addEventListener("mousedown", handleMouseDown);
    newCell.addEventListener("mouseover", handleMouseOver);
    newCell.addEventListener("mouseup", handleMouseUp);

    newCell.addEventListener("click", () => {
      if (config.mouseType === "edit") {
        config.editableTD = newCell.id;
        makeEditable(newCell);
      }
    });

    newTr.append(newCell);
  }

  document
    .getElementById("work-table")
    .insertBefore(newTr, document.getElementById(`row-${col + 2}`));

  document.querySelectorAll(".cell").forEach((cell) => {
    cell.style.height = `${100 / (Number(tableConfig.cols) + 1)}%`;
  });

  cellWidth = `${100 / (Number(tableConfig.cols) + 1)}%`;
  tableConfig = {
    ...tableConfig,
    cols: Number(tableConfig.cols) + 1,
  };
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
    return null;
  }

  const r = parseInt(match[1], 10);
  const g = parseInt(match[2], 10);
  const b = parseInt(match[3], 10);
  const a = match[4] !== undefined ? parseFloat(match[4]) : 1.0;

  const rHex = r.toString(16).padStart(2, "0");
  const gHex = g.toString(16).padStart(2, "0");
  const bHex = b.toString(16).padStart(2, "0");
  const aHex =
    a === 1
      ? ""
      : Math.round(a * 255)
          .toString(16)
          .padStart(2, "0");

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

    // set the svg code
    let svgElement = null;
    const element = document.createElement("div");
    element.innerHTML = cell.innerHTML;

    element.childNodes.forEach((child) => {
      if (child && child.className && child.className.includes("svg-block")) {
        svgElement = child;
      }
    });

    // document.getElementById("svg-code").value = cell.innerHTML;
    document.getElementById("svg-code").value = svgElement
      ? svgElement.innerHTML
      : "";
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

  const svgControlGroup = document.getElementById("svg-control");
  let svgElement = null;

  if (cell.childNodes.length > 0) {
    cell.childNodes.forEach((child) => {
      if (child.className.includes("svg-block")) {
        svgElement = child.children[0];
      }
    });

    if (svgElement) {
      svgControlGroup.classList.replace("d-none", "d-block");
    } else {
      svgControlGroup.classList.replace("d-block", "d-none");
    }
  } else {
    svgControlGroup.classList.replace("d-block", "d-none");
  }

  if (svgElement) {
    svgControlListener(svgElement.parentElement);
  }

  let existingEditableContent = null;

  cell.childNodes.forEach((child) => {
    if (child.className.includes("editable-content")) {
      existingEditableContent = child;
    }
  });

  const newEditableContent = document.createElement("div");
  newEditableContent.className = "editable-content";

  if (!existingEditableContent) {
    newEditableContent.contentEditable = true;
    cell.appendChild(newEditableContent);
    newEditableContent.focus();
    newEditableContent.addEventListener("blur", () => {
      newEditableContent.contentEditable = false;
    });
  } else {
    existingEditableContent.contentEditable = true;
    existingEditableContent.focus();
    existingEditableContent.addEventListener("blur", (e) => {
      e.target.contentEditable = false;
    });
  }

  // cell.contentEditable = true;
  // cell.focus();
}

const svgControlListener = (element) => {
  const svgControl = document.getElementById("svg-control-input");

  if (svgControl.inputEventHandler) {
    svgControl.removeEventListener("input", svgControl.inputEventHandler);
  }

  const inputEventHandler = (e) => {
    element.style.height = `${e.target.value}%`;
  };

  svgControl.inputEventHandler = inputEventHandler;
  svgControl.addEventListener("input", inputEventHandler);

  svgControl.value = element.style.height
    ? element.style.height.slice(0, -1)
    : 100;

  const svgElement = document.querySelector(`#${config.editableTD} svg`);
};

function findEditableContent(cell) {
  let editableContent = null;

  if (cell.childNodes) {
    cell.childNodes.forEach((child) => {
      if (child.className && child.className.includes("editable-content")) {
        editableContent = child;
      }
    });
  }

  return editableContent;
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

selectPreview.addEventListener("change", function (e) {
  const checked = e.target.checked;

  document.querySelectorAll(".cell").forEach((cell) => {
    if (checked) {
      cell.classList.add("border-transparent");
    } else {
      cell.classList.remove("border-transparent");
    }

    cell.className.split(" ").forEach((className) => {
      if (className.includes("border-width-default")) {
        if (checked) {
          cell.classList.remove(className);
        }
      } else if (!checked) {
        cell.classList.add("border-width-default");
      }
    });
  });
});

borderWidth.addEventListener("change", function (e) {
  const activeCells = document.querySelectorAll(".active");

  activeCells.forEach((cell) => {
    cell.className.split(" ").forEach((className) => {
      if (className.includes("border-width")) {
        cell.classList.remove(className);
      }
    });

    cell.classList.add(`border-width-${e.target.value}`);
  });
});

borderStyle.addEventListener("change", function (e) {
  const activeCells = document.querySelectorAll(".active");

  activeCells.forEach((cell) => {
    cell.className.split(" ").forEach((className) => {
      if (className.includes("border-style")) {
        cell.classList.remove(className);
      }
    });

    cell.classList.add(`border-style-${e.target.value}`);
  });
});

directionSelect.addEventListener("change", function (e) {
  const editCell = document.getElementById(config.editableTD);

  const direction = e.target.value;

  let editableContent = findEditableContent(editCell);

  const alignmentMap = {
    top: "text-alignment-tb",
    bottom: "text-alignment-bt",
    right: "text-alignment-rl",
  };

  if (editableContent) {
    editableContent.classList.forEach((className) => {
      if (className.includes("text-alignment")) {
        editableContent.classList.remove(className);
      }
    });

    editableContent.classList.add(alignmentMap[direction]);
  }
});

alignmentSelect.addEventListener("change", function (e) {
  const editCell = document.getElementById(config.editableTD);

  editCell.style.textAlign = e.target.value;
});

positionSelect.addEventListener("change", function (e) {
  const editCell = document.getElementById(config.editableTD);

  const editableContent = findEditableContent(editCell);

  const value = e.target.value;

  if (editableContent) {
    const alignmentMap = {
      top: "start",
      bottom: "end",
      center: "center",
    };

    editableContent.style.alignContent = alignmentMap[value] || "center";
  }
});

document.addEventListener("click", function () {
  const contextMenu = document.getElementById("custom-contextmenu");
  contextMenu.style.opacity = 0;
  contextMenu.style.visibility = "hidden";
});

document.addEventListener("DOMContentLoaded", function () {
  reRenderColorPalette();
});

document.addEventListener("keydown", function (event) {
  if (
    event.ctrlKey &&
    event.shiftKey &&
    (event.key === "Z" || event.key === "z")
  ) {
    event.preventDefault();
    mergeBlock();
  }
});

document.addEventListener("keydown", function (event) {
  if (
    event.ctrlKey &&
    event.shiftKey &&
    (event.key === "C" || event.key === "c")
  ) {
    event.preventDefault();
    unmergeBlock();
  }
});

function reRenderColorPalette() {
  const container = document.getElementById("colorPaletteContainer");
  const rows = [...colorPalette[config.themeStyle], ...defaultColorPalette]
    .length;

  let htmlContent = "";

  for (let i = 0; i < 3; i++) {
    htmlContent += `
          <div class="palette">
              <label class="palette-label">Cell ${basicColorData[i]} Colour</label>
              <div class="color-palette-block" id="${basicColorData[i]}"></div>
          </div>
      `;
  }

  container.innerHTML = htmlContent;
  document.querySelectorAll(".color-palette-block").forEach((block, index) => {
    let gridHtml = '<div class="color-grid" style="display: none;">';
    for (let row = 0; row < rows; row++) {
      const colors = [
        ...colorPalette[config.themeStyle],
        ...defaultColorPalette,
      ];
      for (let col = 0; col < colors[row].shades.length; col++) {
        gridHtml += `<button class="color-button bg-${colors[row].name}-${
          (Math.abs(col - colors[row].shades.length) - 1) * 100
        }" data-id='${colors[row].name}-${
          (Math.abs(col - colors[row].shades.length) - 1) * 100
        }' onclick="getColor('${colors[row].name}-${
          (Math.abs(col - colors[row].shades.length) - 1) * 100
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
  document.getElementById("theme-style").href = `assets/styles/${value}.css`;
  document.getElementById("theme-style").setAttribute("data-id", value);
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
    <link id='external-style' href='assets/styles/work-board.css' rel='stylesheet' />
    <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'></script>
    <link id='theme-style' href='assets/styles/${theme}.css' data-id='${theme}' rel='stylesheet' />
    </head>
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

function exportCGSDesign() {
  const tableHtml = document.getElementById("work-table").outerHTML;

  const htmlContent = `<body>${tableHtml}</body>`;

  const htmlBlob = new Blob([htmlContent], { type: "text/html" });
  const htmlLink = document.createElement("a");
  htmlLink.href = URL.createObjectURL(htmlBlob);
  htmlLink.download = "cgs.html";
  htmlLink.click();

  const styleHtml = document.getElementById("work-board-style").innerHTML;

  const styleBlob = new Blob([styleHtml], { type: "text/css" });
  const styleLink = document.createElement("a");
  styleLink.href = URL.createObjectURL(styleBlob);
  styleLink.download = "cgs.css";
  styleLink.click();
}

function importSVGToContent() {
  if (config.editableTD === "") return;
  const svgTextArea = document.getElementById("svg-code");
  const tdBlock = document.getElementById(config.editableTD);

  const svgBlocks = tdBlock.querySelectorAll(".svg-block");
  svgBlocks.forEach((block) => {
    block.parentNode.removeChild(block);
  });

  let svgTextAreaDom = document.createElement("div");

  svgTextAreaDom.innerHTML = svgTextArea.value;

  const updateSvgElement = (element) => {
    for (let i = 0; i < element.length; i++) {
      if (element[i].nodeName && element[i].nodeName === "svg") {
        return element[i];
      }
    }

    return updateSvgElement(element[0].childNodes);
  };

  svgTextAreaDom = updateSvgElement(svgTextAreaDom.childNodes);

  const newSvgBlock = document.createElement("div");
  newSvgBlock.className = "svg-block";
  newSvgBlock.appendChild(svgTextAreaDom);

  const svgControlGroup = document.getElementById("svg-control");
  svgControlGroup.classList.replace("d-none", "d-block");
  svgControlListener(newSvgBlock);

  tdBlock.insertBefore(newSvgBlock, tdBlock.firstChild);
}

function boardStyle(type) {
  if (type == "grid") {
    document.getElementById("work-table").style.borderCollapse = "separate";
  } else {
    document.getElementById("work-table").style.borderCollapse = "collapse";
  }
}

function borderSet(value) {
  if (value == "all" || value == "none") {
    document.querySelectorAll(".active").forEach((cell) => {
      cell.className.split(" ").forEach((className) => {
        if (className.startsWith("border-set")) {
          cell.classList.remove(className);
        }
      });

      if (value === "all") {
        cell.classList.add("border-width-1");
      }

      if (value === "none") {
        cell.className.split(" ").forEach((className) => {
          if (
            className.includes("border-width") ||
            className.includes("border-style")
          ) {
            cell.classList.remove(className);
          }
        });

        cell.classList.add("border-width-default");
        cell.classList.add("border-style-solid");
      }

      cell.classList.add(`border-set-${value}`);
    });
  } else {
    document.querySelectorAll(".active").forEach((cell) => {
      cell.classList.forEach((className) => {
        if (
          className.startsWith("border-set-all") ||
          className.startsWith("border-set-none")
        ) {
          cell.classList.remove(className);
        }
      });
      cell.classList.add("border-width-1");
      cell.classList.add(`border-set-${value}`);
    });
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
