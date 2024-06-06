```php
    public function contextData(string $context): PatternContext|View
    {
        return $this->makeContext(
            attributes: [
                'image' => 'https://picsum.photos/600/150',
                'title' => 'About us',
                'link' => '/about-us'
            ],
            slot: '<p>' . fake()->sentence(rand(6, 15)) . '</p>'
        );
    }
```
