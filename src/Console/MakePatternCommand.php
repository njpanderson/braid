<?php

namespace njpanderson\Braid\Console;

use Illuminate\Support\Str;
use Illuminate\Console\GeneratorCommand;
use Illuminate\Contracts\Console\PromptsForMissingInput;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class MakePatternCommand extends GeneratorCommand implements PromptsForMissingInput
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'braid:make:pattern
        {name : The pattern’s class namespace, in PascalCase, omitting your pattern root}
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

    /**
     * Prompt for missing input arguments using the returned questions.
     *
     * @return array<string, string>
     */
    protected function promptForMissingArgumentsUsing(): array
    {
        return [
            'name' => 'Where should the pattern be created? E.g. Components/MyComponent',
        ];
    }

    /**
     * Get the destination class path.
     *
     * @param  string  $name
     * @return string
     */
    protected function getPath($name)
    {
        $name = Str::replaceFirst($this->rootNamespace(), '', $name);

        return base_path('tests').str_replace('\\', '/', $name).'.php';
    }

    /**
     * Get the default namespace for the class.
     *
     * @param  string  $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        return $rootNamespace.'\Patterns';
    }

    /**
     * Get the root namespace for the class.
     *
     * @return string
     */
    protected function rootNamespace()
    {
        return 'Tests';
    }

}
