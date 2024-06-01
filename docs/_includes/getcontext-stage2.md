```php
    public function contextData(string $context): PatternContext|View
    {
        switch ($context) {
        case 'no-image':
            return $this->makeContext(
                attributes: [
                    'title' => 'About us',
                    'link' => '/about-us'
                ],
                slot: '<p>' . fake()->sentence(rand(6, 15)) . '</p>'
            );

        case 'no-link':
            return $this->makeContext(
                attributes: [
                    'image' => 'https://picsum.photos/600/150',
                    'title' => 'About us'
                ],
                slot: '<p>' . fake()->sentence(rand(6, 15)) . '</p>'
            );

        case 'long-description':
            return $this->makeContext(
                attributes: [
                    'image' => 'https://picsum.photos/600/150',
                    'title' => 'About us'
                ],
                slot: '<p>' . fake()->sentence(rand(25, 40)) . '</p>'
            );

        default:
            return $this->makeContext(
                attributes: [
                    'image' => 'https://picsum.photos/600/150',
                    'title' => 'About us',
                    'link' => '/about-us'
                ],
                slot: '<p>' . fake()->sentence(rand(6, 15)) . '</p>'
            );
        }
    }
```