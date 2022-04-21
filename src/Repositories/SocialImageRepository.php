<?php

namespace Aerni\AdvancedSeo\Repositories;

use Aerni\AdvancedSeo\Content\SocialImage;
use Aerni\AdvancedSeo\Models\SocialImage as SocialImageModel;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Statamic\Contracts\Entries\Entry;
use Statamic\Taxonomies\LocalizedTerm;

class SocialImageRepository
{
    public function all(Entry $entry): Collection
    {
        return $this->types()->map(function ($item, $type) use ($entry) {
            return match ($type) {
                'twitter' => $this->twitter($entry),
                'og' => $this->openGraph($entry),
            };
        });
    }

    public function openGraph(Entry $entry): SocialImage
    {
        return (new SocialImage($entry, $this->specs('og')));
    }

    public function twitter(Entry $entry): SocialImage
    {
        return (new SocialImage($entry, $this->specs('twitter', $entry)));
    }

    public function specs(string $type, Entry|LocalizedTerm $data = null): ?array
    {
        if (! $data) {
            return Arr::get($this->types(), $type);
        }

        return match ($type) {
            'og' => Arr::get($this->types(), $type),
            'twitter' => Arr::get($this->types(), "twitter.{$data->seo_twitter_card}"),
            default => null,
        };
    }

    public function sizeString(string $type): string
    {
        return "{$this->specs($type)['width']} x {$this->specs($type)['height']} pixels";
    }

    public function types(): Collection
    {
        return collect(SocialImageModel::all());
    }

    public function previewTargets(): array
    {
        return [
            [
                'label' => 'Open Graph Image',
                'format' => '/!/advanced-seo/social-images/og/{id}?site={locale}&theme={seo_social_images_theme}',
            ],
            [
                'label' => 'Twitter Image',
                'format' => '/!/advanced-seo/social-images/twitter/{id}?site={locale}&theme={seo_social_images_theme}',
            ],
        ];
    }
}
