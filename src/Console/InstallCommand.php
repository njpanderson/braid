<?php

namespace njpanderson\Braid\Console;

use Illuminate\Console\Command;
use Illuminate\Support\ServiceProvider;
use Symfony\Component\Console\Attribute\AsCommand;

#[AsCommand(name: 'braid:install')]
class InstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'braid:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Installs the Braid assets and resources';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $this->comment('Publishing Braid Service Provider...');
        $this->callSilent('vendor:publish', ['--tag' => 'braid-provider']);

        $this->comment('Publishing Braid Templates...');
        $this->callSilent('vendor:publish', ['--tag' => 'braid-templates']);

        $this->comment('Publishing Braid Assets...');
        $this->callSilent('vendor:publish', ['--tag' => 'braid-assets']);

        $this->comment('Publishing Braid Configuration...');
        $this->callSilent('vendor:publish', ['--tag' => 'braid-config']);

        // $this->comment('Publishing Braid Migrations...');
        // $this->callSilent('vendor:publish', ['--tag' => 'braid-migrations']);

        // Add the published service provider to bootstrap/providers.php
        ServiceProvider::addProviderToBootstrapFile(\App\Providers\BraidServiceProvider::class);

        $this->info('Braid installed successfully.');
    }
}
