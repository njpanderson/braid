---
title: "Braid"
layout: splash
permalink: /
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/moroccan-flower.png
  image: /assets/screens/overall-shot.png
  actions:
    - label: "Find on Github"
      url: "https://github.com/njpanderson/braid/"
excerpt: "A developer friendly pattern library tool for Laravel (+ Livewire) projects."
intro:
  - excerpt: 'Braid enables developers to view components and markup in isolation, allowing for a consistent, clutter-free view of the atomic structure of their layouts.'
---

{% include feature_row id="intro" type="center" %}

## What is Braid?
Braid is a pattern library tool for Laravel (+ Livewire) projects.

It enables developers to view components and markup in isolation, allowing for a consistent, clutter-free view of the atomic structure of their layouts.

## Why not just use another similar tool?
There is a great selection of brilliant packages around online and if you feel one of those work better with your workflow then you should absolutely use it.

If you would however prefer a tool that:

<ul class="checks">
    <li>Is native to Laravel/PHP/Blade</li>
    <li>Is built around your own webserver (and hosted as part of the site)</li>
    <li>Has support for Livewire and Blade Components</li>
</ul>

 Then read on!

## What can Braid do for me?
Braid's purpose revolves around making it easy for developers to create, mock and inspect Laravel and Livewire components in an isolated, clutter free environment.

It does this by providing a terse, simple to understand PHP class-based framework in which Laravel developers will feel right at home.

## Enough nonsense, show me an example! 😤
Alright already — suppose you had the following component nestled deeply in your Laravel app:

{% include basic-component.md %}

Here's how you’d define it with a Braid pattern:

{% include basic-pattern.md %}

And here's what it'd look like in Braid:

{% include screenshot.html src="/assets/screens/demo-basic.png" alt="A basic demo of Braid" %}

And that’s it! 😎

If you're interested in working with Braid, check out the [Quick start 🚀](/braid/docs/quick-start/) page.
