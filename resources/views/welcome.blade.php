<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link id="external-style" href="./style.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Styles -->
    <style id="custom-style">
    :root {
        --light: #ffffff;
        --dark: #000000;
        --grey: #424242;
        --dark-12: #0000001f;
        --dark-3: #00000033;
        --active: #8b8b8b;
        --lightBorder: #273da8;
        --darkBorder: #ffffff;
        --defaultColor: #d3d4d5;
    }

    .tool-board,
    .work-board {
        min-height: 100vh;
    }

    .tool-board {
        background-color: var(--light);
    }

    /* Work-Board */
    .work-board {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        padding: 3%;
    }

    .create-board {
        border-color: var(--defaultColor);
    }

    input {
        width: 70px;
        height: 40px;
        text-align: center;
        border-radius: 5px;
    }

    table {
        border-collapse: separate;
        width: 100%;
        height: 100%;
    }

    td {
        position: relative;
        border: 1px solid var(--lightBorder);
        font-size: 16px;
        color: var(--dark);
        cursor: pointer;
        user-select: none;
        box-sizing: border-box;
    }

    td:hover,
    td.active {
        background-color: var(--dark-12);
    }

    .mark {
        position: absolute;
        top: 15px;
        right: 15px;
        padding: 2px 7px 3px 7px;
        border-radius: 50%;
        transform: translate(50%, -50%);
        font-size: 1rem;
        color: var(--dark);
    }

    .button-group {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        justify-content: start;
    }

    .group-btn {
        width: 40px;
        height: 40px;
        border-radius: 5px;
    }

    .icon-btn {
        width: 100%;
        height: 100%;
    }

    .icon-btn-active,
    .board-active,
    .mouse-active {
        background-color: var(--active);
    }

    button.btn-active {
        font-weight: bold;
    }

    .edit-toolbar {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        justify-content: start;
    }

    .edit-btn {
        min-width: 40px;
        height: 40px;
        border-radius: 5px;
        font-size: 20px;
    }

    .font-20 {
        font-family: "Times New Roman", Times, serif;
        font-size: 20px;
    }

    /* Color Palette */
    .palette {
        margin-bottom: 20px;
    }

    .palette-label {
        display: block;
        margin-bottom: 5px;
    }

    .color-palette-block {
        width: 100%;
        height: 40px;
        border: 1px solid var(--active);
        cursor: pointer;
        position: relative;
    }

    .color-grid {
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        top: 39px;
        width: 100%;
        padding: 5px 15px;
        background: white;
        border: 1px solid #aaa;
        z-index: 10;
        box-shadow: 0px 8px 16px 0px var(--dark-3);
    }

    .color-button {
        width: 42px;
        height: 42px;
        border: 1px solid var(--light);
        cursor: pointer;
    }

    .color-button:hover {
        border: 1px solid var(--grey);
    }

    /* Theme */
    .theme-select {
        width: 100%;
        height: 40px;
        font-size: 16px;
    }

    /* Paragraph */
    .font-size-paragraph {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.5;
    }

    .font-size-header-1 {
        font-size: 32px;
        font-weight: bold;
    }

    .font-size-header-2 {
        font-size: 24px;
        font-weight: bold;
    }

    .font-size-header-3 {
        font-size: 19px;
        font-weight: bold;
    }

    .font-size-header-4 {
        font-size: 16px;
        font-weight: bold;
    }

    .font-size-header-5 {
        font-size: 13px;
        font-weight: bold;
    }

    .font-size-header-6 {
        font-size: 11px;
        font-weight: bold;
    }

    /* Border Style */
    .border-style-solid-light {
        border: 1px solid var(--lightBorder);
    }

    .border-style-solid-dark {
        border: 1px solid var(--darkBorder);
    }

    .border-style-none {
        border: none;
    }

    /* Select All Checkbox */
    .select-all-block {
        display: none;
        justify-content: end;
        align-items: center;
        gap: 20px;
    }

    .select-all {
        width: 30px;
        height: 30px;
    }

    .display-select-box {
        display: flex !important;
    }

    /* Font */
    .font-weight-bold {
        font-weight: bold;
    }

    .font-weight-normal {
        font-weight: normal;
    }

    .font-style-italic {
        font-style: italic;
    }

    .font-style-normal {
        font-style: normal;
    }

    /* Text Color */
    .dark-theme-text {
        color: var(--light);
    }

    .light-theme-text {
        color: var(--dark);
    }

    /* Template Button Block */
    .template-btn-block {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    /* Svg Codebase */
    .svg-code {
        min-height: 150px;
    }

    .svg-block {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    /* Color classes */
    /* Primary colors */
    .bg-primary-900 {
        background: #121d4f !important;
    }

    .bg-primary-800 {
        background: #19286d !important;
    }

    .bg-primary-700 {
        background: #20328b !important;
    }

    .bg-primary-600 {
        background: #273da8 !important;
    }

    .bg-primary-500 {
        background: #2e48c6 !important;
    }

    .bg-primary-400 {
        background: #566bd1 !important;
    }

    .bg-primary-300 {
        background: #7d8edc !important;
    }

    .bg-primary-200 {
        background: #a5b0e6 !important;
    }

    .bg-primary-100 {
        background: #cdd3f1 !important;
    }

    .bg-primary-0 {
        background: #f5f6fc !important;
    }

    /* Secondary colors */
    .bg-secondary-900 {
        background: #00342e !important;
    }

    .bg-secondary-800 {
        background: #00483f !important;
    }

    .bg-secondary-700 {
        background: #005b50 !important;
    }

    .bg-secondary-600 {
        background: #006f61 !important;
    }

    .bg-secondary-500 {
        background: #008272 !important;
    }

    .bg-secondary-400 {
        background: #309a8d !important;
    }

    .bg-secondary-300 {
        background: #61b2a8 !important;
    }

    .bg-secondary-200 {
        background: #91c9c2 !important;
    }

    .bg-secondary-100 {
        background: #c2e1dd !important;
    }

    .bg-secondary-0 {
        background: #f2f9f8 !important;
    }

    /* Tertiary colors */
    .bg-tertiary-900 {
        background: #2f3949 !important;
    }

    .bg-tertiary-800 {
        background: #404f64 !important;
    }

    .bg-tertiary-700 {
        background: #52647f !important;
    }

    .bg-tertiary-600 {
        background: #637a9b !important;
    }

    .bg-tertiary-500 {
        background: #758fb6 !important;
    }

    .bg-tertiary-400 {
        background: #8fa4c4 !important;
    }

    .bg-tertiary-300 {
        background: #a9bad2 !important;
    }

    .bg-tertiary-200 {
        background: #c4cfe0 !important;
    }

    .bg-tertiary-100 {
        background: #dee4ed !important;
    }

    .bg-tertiary-0 {
        background: #f8f9fb !important;
    }

    /* Red colors */
    .bg-red-900 {
        background: #541516 !important;
    }

    .bg-red-800 {
        background: #731d1f !important;
    }

    .bg-red-700 {
        background: #922427 !important;
    }

    .bg-red-600 {
        background: #b22c30 !important;
    }

    .bg-red-500 {
        background: #d13438 !important;
    }

    .bg-red-400 {
        background: #da5b5e !important;
    }

    .bg-red-300 {
        background: #e28184 !important;
    }

    .bg-red-200 {
        background: #eba8a9 !important;
    }

    .bg-red-100 {
        background: #f4cecf !important;
    }

    .bg-red-0 {
        background: #fdf5f5 !important;
    }

    /* Orange colors */
    .bg-orange-900 {
        background: #552500 !important;
    }

    .bg-orange-800 {
        background: #753300 !important;
    }

    .bg-orange-700 {
        background: #944000 !important;
    }

    .bg-orange-600 {
        background: #b44e00 !important;
    }

    .bg-orange-500 {
        background: #d45c00 !important;
    }

    .bg-orange-400 {
        background: #dc7b30 !important;
    }

    .bg-orange-300 {
        background: #e49a61 !important;
    }

    .bg-orange-200 {
        background: #edb991 !important;
    }

    .bg-orange-100 {
        background: #f5d8c2 !important;
    }

    .bg-orange-0 {
        background: #fdf7f2 !important;
    }

    /* Green colors */
    .bg-green-900 {
        background: #264404 !important;
    }

    .bg-green-800 {
        background: #355d06 !important;
    }

    .bg-green-700 {
        background: #437607 !important;
    }

    .bg-green-600 {
        background: #529009 !important;
    }

    .bg-green-500 {
        background: #60a90a !important;
    }

    .bg-green-400 {
        background: #7eb939 !important;
    }

    .bg-green-300 {
        background: #9cca67 !important;
    }

    .bg-green-200 {
        background: #bbda96 !important;
    }

    .bg-green-100 {
        background: #d9eac4 !important;
    }

    .bg-green-0 {
        background: #f7fbf3 !important;
    }

    /* Blue colors */
    .bg-blue-900 {
        background: #062c4c !important;
    }

    .bg-blue-800 {
        background: #093d69 !important;
    }

    .bg-blue-700 {
        background: #0b4d85 !important;
    }

    .bg-blue-600 {
        background: #0e5ea2 !important;
    }

    .bg-blue-500 {
        background: #106ebe !important;
    }

    .bg-blue-400 {
        background: #3d8aca !important;
    }

    .bg-blue-300 {
        background: #6ba5d7 !important;
    }

    .bg-blue-200 {
        background: #98c1e3 !important;
    }

    .bg-blue-100 {
        background: #c6dcef !important;
    }

    .bg-blue-0 {
        background: #f3f8fc !important;
    }

    /* Black colors */
    .bg-black-900 {
        background: #000000 !important;
    }

    .bg-black-800 {
        background: #424242 !important;
    }

    .bg-black-700 {
        background: #616161 !important;
    }

    .bg-black-600 {
        background: #757575 !important;
    }

    .bg-black-500 {
        background: #9e9e9e !important;
    }

    .bg-black-400 {
        background: #bdbdbd !important;
    }

    .bg-black-300 {
        background: #e0e0e0 !important;
    }

    .bg-black-200 {
        background: #eeeeee !important;
    }

    .bg-black-100 {
        background: #f5f5f5 !important;
    }

    .bg-black-0 {
        background: #ffffff !important;
    }

    /* Text-Colors */
    .text-primary-900 {
        color: #121d4f !important;
    }

    .text-primary-800 {
        color: #19286d !important;
    }

    .text-primary-700 {
        color: #20328b !important;
    }

    .text-primary-600 {
        color: #273da8 !important;
    }

    .text-primary-500 {
        color: #2e48c6 !important;
    }

    .text-primary-400 {
        color: #566bd1 !important;
    }

    .text-primary-300 {
        color: #7d8edc !important;
    }

    .text-primary-200 {
        color: #a5b0e6 !important;
    }

    .text-primary-100 {
        color: #cdd3f1 !important;
    }

    .text-primary-0 {
        color: #f5f6fc !important;
    }

    /* Secondary colors */
    .text-secondary-900 {
        color: #00342e !important;
    }

    .text-secondary-800 {
        color: #00483f !important;
    }

    .text-secondary-700 {
        color: #005b50 !important;
    }

    .text-secondary-600 {
        color: #006f61 !important;
    }

    .text-secondary-500 {
        color: #008272 !important;
    }

    .text-secondary-400 {
        color: #309a8d !important;
    }

    .text-secondary-300 {
        color: #61b2a8 !important;
    }

    .text-secondary-200 {
        color: #91c9c2 !important;
    }

    .text-secondary-100 {
        color: #c2e1dd !important;
    }

    .text-secondary-0 {
        color: #f2f9f8 !important;
    }

    /* Tertiary colors */
    .text-tertiary-900 {
        color: #2f3949 !important;
    }

    .text-tertiary-800 {
        color: #404f64 !important;
    }

    .text-tertiary-700 {
        color: #52647f !important;
    }

    .text-tertiary-600 {
        color: #637a9b !important;
    }

    .text-tertiary-500 {
        color: #758fb6 !important;
    }

    .text-tertiary-400 {
        color: #8fa4c4 !important;
    }

    .text-tertiary-300 {
        color: #a9bad2 !important;
    }

    .text-tertiary-200 {
        color: #c4cfe0 !important;
    }

    .text-tertiary-100 {
        color: #dee4ed !important;
    }

    .text-tertiary-0 {
        color: #f8f9fb !important;
    }

    /* Red colors */
    .text-red-900 {
        color: #541516 !important;
    }

    .text-red-800 {
        color: #731d1f !important;
    }

    .text-red-700 {
        color: #922427 !important;
    }

    .text-red-600 {
        color: #b22c30 !important;
    }

    .text-red-500 {
        color: #d13438 !important;
    }

    .text-red-400 {
        color: #da5b5e !important;
    }

    .text-red-300 {
        color: #e28184 !important;
    }

    .text-red-200 {
        color: #eba8a9 !important;
    }

    .text-red-100 {
        color: #f4cecf !important;
    }

    .text-red-0 {
        color: #fdf5f5 !important;
    }

    /* Orange colors */
    .text-orange-900 {
        color: #552500 !important;
    }

    .text-orange-800 {
        color: #753300 !important;
    }

    .text-orange-700 {
        color: #944000 !important;
    }

    .text-orange-600 {
        color: #b44e00 !important;
    }

    .text-orange-500 {
        color: #d45c00 !important;
    }

    .text-orange-400 {
        color: #dc7b30 !important;
    }

    .text-orange-300 {
        color: #e49a61 !important;
    }

    .text-orange-200 {
        color: #edb991 !important;
    }

    .text-orange-100 {
        color: #f5d8c2 !important;
    }

    .text-orange-0 {
        color: #fdf7f2 !important;
    }

    /* Green colors */
    .text-green-900 {
        color: #264404 !important;
    }

    .text-green-800 {
        color: #355d06 !important;
    }

    .text-green-700 {
        color: #437607 !important;
    }

    .text-green-600 {
        color: #529009 !important;
    }

    .text-green-500 {
        color: #60a90a !important;
    }

    .text-green-400 {
        color: #7eb939 !important;
    }

    .text-green-300 {
        color: #9cca67 !important;
    }

    .text-green-200 {
        color: #bbda96 !important;
    }

    .text-green-100 {
        color: #d9eac4 !important;
    }

    .text-green-0 {
        color: #f7fbf3 !important;
    }

    /* Blue colors */
    .text-blue-900 {
        color: #062c4c !important;
    }

    .text-blue-800 {
        color: #093d69 !important;
    }

    .text-blue-700 {
        color: #0b4d85 !important;
    }

    .text-blue-600 {
        color: #0e5ea2 !important;
    }

    .text-blue-500 {
        color: #106ebe !important;
    }

    .text-blue-400 {
        color: #3d8aca !important;
    }

    .text-blue-300 {
        color: #6ba5d7 !important;
    }

    .text-blue-200 {
        color: #98c1e3 !important;
    }

    .text-blue-100 {
        color: #c6dcef !important;
    }

    .text-blue-0 {
        color: #f3f8fc !important;
    }

    /* Black colors */
    .text-black-900 {
        color: #000000 !important;
    }

    .text-black-800 {
        color: #424242 !important;
    }

    .text-black-700 {
        color: #616161 !important;
    }

    .text-black-600 {
        color: #757575 !important;
    }

    .text-black-500 {
        color: #9e9e9e !important;
    }

    .text-black-400 {
        color: #bdbdbd !important;
    }

    .text-black-300 {
        color: #e0e0e0 !important;
    }

    .text-black-200 {
        color: #eeeeee !important;
    }

    .text-black-100 {
        color: #f5f5f5 !important;
    }

    .text-black-0 {
        color: #ffffff !important;
    }
    </style>

    <style>
    body {
        font-family: 'Nunito', sans-serif;
    }
    </style>
</head>

<body class="antialiased">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-12 overflow-y-scroll height-100vh">
                <div class="tool-board mt-5 px-3">
                    <div class="mb-3 select-all-block" id="select-all-block">
                        <label>Select All</label>
                        <input type="checkbox" class="form-check-input select-all" id="select-check-box"
                            name="select-all" onchange="selectAll(this)" />
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <label for="rows">Rows :</label>
                            <input type="number" class="w-100" id="rows" min="1" max="20" value="6" />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <label for="cols">Cols :</label>
                            <input type="number" class="w-100" id="cols" min="1" max="20" value="6" />
                        </div>
                    </div>
                    <button onclick="createBoard()" class="btn btn-light w-100 mt-3 create-board">
                        Create Board
                    </button>
                    <div class="button-group btn-group mt-5">
                        <button type="button" class="group-btn mouse-select mouse-active"
                            onclick="changeMouseType('select')" id="mouse-select">
                            <img src="{{ url('assets/images/hand-point.svg') }}" class="icon-btn"
                                title="Select elements" />
                        </button>
                        <button type="button" class="group-btn mouse-edit" onclick="changeMouseType('edit')"
                            id="mouse-edit">
                            <img src="{{ url('assets/images/edit-point.svg') }}" class="icon-btn"
                                title="Edit elements" />
                        </button>
                        <button type="button" class="group-btn merge-btn" id="merge-btn" onclick="mergeBlock()">
                            <img src="{{ url('assets/images/merge.svg') }}" width="100%" title="Merge cells (M)" />
                        </button>
                    </div>
                    <div class="edit-toolbar">
                        <button class="edit-btn font-20" id="bold-button" title="Bold">
                            B
                        </button>
                        <button class="edit-btn font-20" id="italic-button" title="Italic">
                            <i>I</i>
                        </button>
                        <select class="edit-btn" id="font-size-select" title="Font">
                            <option value="font-size-paragraph">Paragraph</option>
                            <option value="font-size-header-1">Header 1 (32px)</option>
                            <option value="font-size-header-2">Header 2 (24px)</option>
                            <option value="font-size-header-3">Header 3 (19px)</option>
                            <option value="font-size-header-4">Header 4 (16px)</option>
                            <option value="font-size-header-5">Header 5 (13px)</option>
                            <option value="font-size-header-6">Header 6 (11px)</option>
                        </select>
                        <select class="edit-btn" id="alignment-select" title="Text alignment">
                            <option value="left">Left</option>
                            <option value="center">Center</option>
                            <option value="right">Right</option>
                        </select>
                        <!-- Add more toolbar options as needed -->
                    </div>
                    <div class="svg-import mt-3">
                        <textarea name="svg codebase" id="svg-code" class="svg-code w-100"
                            placeholder="Input svg codebases here..."></textarea>
                        <div class="svg-btn mt-3">
                            <button id="svg-save-btn" class="btn btn-primary w-100" onclick="importSVGToContent()"
                                disabled="true">
                                Save
                            </button>
                        </div>
                    </div>
                    <div class="theme mt-3 mb-4">
                        <label>Theme</label>
                        <select onchange="changeTheme(value)" class="form-select theme-select">
                            <option value="light">Light Theme</option>
                            <option value="dark">Dark Theme</option>
                            <option value="dark">Blue Theme</option>
                            <option value="dark">Red Theme</option>
                            <option value="dark">Green Theme</option>
                            <option value="dark">Gold Theme</option>
                        </select>
                    </div>
                    <div class="border-style mb-4">
                        <label>Border Style</label>
                        <select class="form-select" name="border" id="border-style">
                            <option value="solid">Line</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                    <div class="color-palette" id="colorPaletteContainer"></div>
                    <div class="template-btn-block mb-5">
                        <button class="btn btn-info w-100 import-btn" onclick="importDesign()">
                            Import Design
                        </button>
                        <button class="btn btn-primary w-100 export-btn" onclick="exportDesign()">
                            Export Design
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-12">
                <div class="work-board" id="work-board"></div>
            </div>
        </div>
    </div>
    <script src="{{ url('assets/scripts/script.js') }}"></script>
</body>

</html>