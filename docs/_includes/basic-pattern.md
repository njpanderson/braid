```php
// tests/Patterns/Components/Button.php
namespace Tests\Patterns\Components;

use Illuminate\View\View;
use njpanderson\Braid\Base\ComponentPattern;
use njpanderson\Braid\Contracts\PatternContext;

class Button extends ComponentPattern {
    public function contextData(string $context): PatternContext|View
    {
        return $this->makeContext(
            slot: 'Button'
        );
    }
}
```