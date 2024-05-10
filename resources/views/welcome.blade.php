<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link id="external-style" href="{{ url('assets/styles/style.css') }}" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <link id="theme-style" href="{{ url('assets/styles/light.css') }}" rel="stylesheet" />
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
                        <a class="btn btn-info w-100 import-btn" onclick="importDesign()">
                            Import Design
                        </a>
                        <a class="btn btn-primary w-100 export-btn"
                            href="{{ route('export-design', ['theme' => 'light']) }}">
                            Export Design
                        </a>
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