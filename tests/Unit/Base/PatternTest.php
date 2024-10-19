<?php

namespace njpanderson\Braid\Tests\Unit\Base;

use Illuminate\View\ComponentAttributeBag;
use njpanderson\Braid\Dictionaries\PatternContext;
use njpanderson\Braid\Dictionaries\ScopedSlot;
use njpanderson\Braid\Tests\TestCase;
use njpanderson\Braid\Tests\Patterns\BasicPattern;
use njpanderson\Braid\Tests\Patterns\Subfolder\AnotherBasicPattern;

class PatternTest extends TestCase
{
    public function test_basicpattern_getId(): void
    {
        $pattern = new BasicPattern;

        $this->assertEquals('basic-pattern', $pattern->getId());
    }

    public function test_anotherbasicpattern_getId(): void
    {
        $pattern = new AnotherBasicPattern;

        $this->assertEquals('subfolder:another-basic-pattern', $pattern->getId());
    }

    public function test_basicpattern_getJsMapId(): void
    {
        $pattern = new BasicPattern;

        $this->assertEquals('basic-pattern', $pattern->getJsMapId());
        $this->assertEquals('basic-pattern.context1', $pattern->getJsMapId('context1'));
    }

    public function test_anotherbasicpattern_getJsMapId(): void
    {
        $pattern = new AnotherBasicPattern;

        $this->assertEquals('subfolder:another-basic-pattern', $pattern->getJsMapId());
    }

    public function test_basicpattern_getComponentClass(): void
    {
        $pattern = new BasicPattern;

        $this->assertEquals('\BasicPattern', $pattern->getComponentClass());
    }

    public function test_anotherbasicpattern_getComponentClass(): void
    {
        $pattern = new AnotherBasicPattern;

        $this->assertEquals('\Subfolder\AnotherBasicPattern', $pattern->getComponentClass());
    }

    public function test_basicpattern_getContexts(): void
    {
        $pattern = new BasicPattern;

        $this->assertSame([
            'default',
            'context1',
            'context2' => 'Context Number 2'
        ], $pattern->getContexts());
    }

    public function test_basicpattern_getContextData_default(): void
    {
        $pattern = new BasicPattern;
        $context = $pattern->getContextData('default');
        $attributes = $context->getAttributes();
        $scopedSlots = $context->getScopedSlots();

        $this->assertInstanceOf(PatternContext::class, $context);
        $this->assertObjectHasProperty('attributes', $context);
        $this->assertObjectHasProperty('slot', $context);
        $this->assertObjectHasProperty('scopedSlots', $context);

        $this->assertInstanceOf(ComponentAttributeBag::class, $attributes);
        $this->assertSame([], $attributes->getAttributes());

        $this->assertEquals('Slotdata default', $context->getSlot());

        $this->assertSame([], $scopedSlots);
    }

    public function test_basicpattern_getContextData_context1(): void
    {
        $pattern = new BasicPattern;
        $context = $pattern->getContextData('context1');
        $attributes = $context->getAttributes();
        $scopedSlots = $context->getScopedSlots();

        $this->assertInstanceOf(PatternContext::class, $context);
        $this->assertObjectHasProperty('attributes', $context);
        $this->assertObjectHasProperty('slot', $context);
        $this->assertObjectHasProperty('scopedSlots', $context);

        $this->assertInstanceOf(ComponentAttributeBag::class, $attributes);
        $this->assertSame([
            'attribute1' => 'attribute1_value',
            'attribute2' => 'attribute2_value',
        ], $attributes->getAttributes());

        $this->assertEquals('Slot context 1', $context->getSlot());

        $this->assertArrayHasKey('scoped_slot_1', $scopedSlots);
        $this->assertInstanceOf(ScopedSlot::class, $scopedSlots['scoped_slot_1']);
        $this->assertInstanceOf(ComponentAttributeBag::class, $scopedSlots['scoped_slot_1']->getAttributes());
        $this->assertSame([
            'scoped_attribute1' => 'scoped_attribute1_value'
        ], $scopedSlots['scoped_slot_1']->getAttributes()->getAttributes());
        $this->assertSame('Scoped slot context 1', $scopedSlots['scoped_slot_1']->getSlot());
    }

    public function test_basicpattern_getContextData_context2(): void
    {
        $pattern = new BasicPattern;
        $context = $pattern->getContextData('context2');
        $attributes = $context->getAttributes();
        $scopedSlots = $context->getScopedSlots();

        $this->assertInstanceOf(PatternContext::class, $context);
        $this->assertObjectHasProperty('attributes', $context);
        $this->assertObjectHasProperty('slot', $context);
        $this->assertObjectHasProperty('scopedSlots', $context);

        $this->assertInstanceOf(ComponentAttributeBag::class, $attributes);
        $this->assertSame([
            'attribute1' => 'attribute1_value',
            'attribute2' => 'attribute2_value',
        ], $attributes->getAttributes());

        $this->assertEquals('Slot context 2', $context->getSlot());

        $this->assertArrayHasKey('scoped_slot_1', $scopedSlots);
        $this->assertArrayHasKey('scoped_slot_2', $scopedSlots);

        $this->assertInstanceOf(ScopedSlot::class, $scopedSlots['scoped_slot_1']);
        $this->assertInstanceOf(ComponentAttributeBag::class, $scopedSlots['scoped_slot_1']->getAttributes());
        $this->assertSame([
            'scoped_attribute1' => 'scoped_attribute1_value'
        ], $scopedSlots['scoped_slot_1']->getAttributes()->getAttributes());
        $this->assertSame('Scoped slot context 1', $scopedSlots['scoped_slot_1']->getSlot());

        $this->assertInstanceOf(ScopedSlot::class, $scopedSlots['scoped_slot_2']);
        $this->assertSame('Scoped slot context 2', $scopedSlots['scoped_slot_2']->getSlot());
    }
}
