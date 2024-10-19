<?php

namespace njpanderson\Braid\Tests\Providers;

use ReflectionClass;
use Mockery;
use njpanderson\Braid\Services\BraidFileService;
use njpanderson\Braid\BraidServiceProvider;

class TestBraidServiceProvider extends BraidServiceProvider
{
    public function register(): void
    {
        parent::register();

        // Create mocks of services
        $this->app->singleton(BraidFileService::class, function () {
            return $this->createMock(BraidFileService::class);
        });
    }

    private function createMock($class)
    {
        $mock = Mockery::mock($class)->makePartial();
        $this->setRequiredProperties($mock, $class);

        return $mock;
    }

    private function setRequiredProperties($mock, string $class)
    {
        $reflectionClass = new ReflectionClass($class);

        switch ($class) {
            case BraidFileService::class:
                $prop = $reflectionClass->getProperty('rootNamespace');
                $prop->setValue($mock, 'njpanderson\\Braid\\Tests');

                $prop = $reflectionClass->getProperty('patternsNamespace');
                $prop->setValue($mock, 'njpanderson\\Braid\\Tests\\Patterns');

                $prop = $reflectionClass->getProperty('patternsPath');
                $prop->setValue($mock, __DIR__ . '/../Patterns');
                break;

            // ...
        }
    }
}
