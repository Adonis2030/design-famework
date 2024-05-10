<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;

class ExportController extends Controller
{
    public function exportDesign($theme) {
        $viewContent = View::make('welcome')->render();

        $tableHtml = $this->extractTable($viewContent);
        // $tableHtml = "<div>Hello World</div>";

        $cssContent = File::get(public_path("assets/styles/{$theme}.css"));

        $htmlContent = "<html><head><meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet' />
        <link id='external-style' href='assets/styles/style.css' rel='stylesheet' />
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'></script>
        <link id='theme-style' href='assets/styles/{$theme}.css' rel='stylesheet' /></head><body>{$tableHtml}</body></html>";

        $fileName = "template.html";

        File::put(public_path($fileName), $htmlContent);

        return response()->download(public_path($fileName))->deleteFileAfterSend(true);
    }

    public function extractTable($viewContent) {
        print_r($viewContent);
        preg_match('/<table>(.*?)<\/table>/s', $viewContent, $matches);

        return $matches[0] ?? '';
    }
}