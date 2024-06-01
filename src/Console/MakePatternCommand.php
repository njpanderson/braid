<?php

namespace njpanderson\Braid\Console;

use Exception;
use Illuminate\Contracts\Console\PromptsForMissingInput;
use Illuminate\Foundation\Console\TestMakeCommand;

class MakePatternCommand extends TestMakeCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'braid:make:pattern {name}
        {--type=basic : Pattern type (basic, component, livewire)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new Braid pattern definition';

    public function getStub()
    {
        $type = $this->option('type');

        switch ($type) {
            case 'basic':
            case 'component':
            case 'livewire':
                return dirname(__DIR__, 2) . '/stubs/' . ucfirst($type) . 'Pattern.stub.php';

            default:
                $this->error('The type ' . $type . ' is invalid.');
                exit;
        }
    }

    public function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace . '\\Patterns';
    }
}