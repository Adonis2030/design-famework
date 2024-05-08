<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ConvertHtmlToImage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'convert:html-to-image
                                {html : Path to the HTML file}
                                {output : Path to save the output image}
                                {--width= : Width of the output image}
                                {--height= : Height of the output image}
                                {--enable-local-file-access : Enable local file access}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Convert HTML to image using wkhtmltoimage';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $html = $this->argument('html');
        $output = $this->argument('output');
        $width = $this->option('width');
        $height = $this->option('height');
        $enableLocalFileAccess = $this->option('enable-local-file-access') ? '--enable-local-file-access' : '';

        $command = "wkhtmltoimage";

        if (!empty($width)) {
            $command .= " --width $width";
        }

        if (!empty($height)) {
            $command .= " --height $height";
        }

        $command .= " $enableLocalFileAccess $html $output";

        exec($command);

        $this->info("HTML converted to image and saved to $output");
    }
}