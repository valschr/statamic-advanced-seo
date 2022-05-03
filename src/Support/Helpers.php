<?php

namespace Aerni\AdvancedSeo\Support;

use Illuminate\Support\Str;
use Statamic\Statamic;

class Helpers
{
    public static function parseLocale(string $locale): string
    {
        $parsed = preg_replace('/\.utf8/i', '', $locale);

        return \WhiteCube\Lingua\Service::create($parsed)->toW3C();
    }

    public static function isAddonCpRoute(): bool
    {
        return Str::containsAll(request()->path(), [config('statamic.cp.route', 'cp'), 'advanced-seo']);
    }

    /**
     * Return false if we're on any Statamic frontend route.
     * This excludes any Route::get() and even Route::statamic().
     */
    public static function isCustomRoute(): bool
    {
        return request()->route()->getAction('controller') !== 'Statamic\Http\Controllers\FrontendController@index';
    }

    public static function isFrontendRoute(): bool
    {
        return ! Statamic::isCpRoute();
    }

    public static function isSocialImagesGeneratorActionRoute(): bool
    {
        return Str::containsAll(request()->path(), ['!', 'advanced-seo', 'social-images']);
    }
}
