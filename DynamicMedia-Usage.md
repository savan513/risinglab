# DynamicMedia Component Usage Guide

The `DynamicMedia` component automatically detects whether a URL is an image or video and renders the appropriate element.

## Basic Usage

### Single Image URL
```tsx
<DynamicMedia
  src="https://example.com/image.jpg"
  alt="Product image"
  fill
  className="object-cover"
/>
```

### Single Video URL
```tsx
<DynamicMedia
  src="https://example.com/video.mp4"
  alt="Product video"
  fill
  className="object-cover"
  controls={true}
  autoPlay={false}
  muted={true}
/>
```

### Array of URLs (first valid URL is used)
```tsx
<DynamicMedia
  src={[
    "https://example.com/video.mp4",
    "https://example.com/fallback.jpg",
    "/placeholder.svg"
  ]}
  alt="Product media"
  fill
  className="object-cover"
/>
```

### Static Image Import
```tsx
import productImage from "/public/product.jpg"

<DynamicMedia
  src={productImage}
  alt="Product image"
  fill
  className="object-cover"
/>
```

## Supported File Types

### Images
- `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.avif`, `.bmp`, `.svg`

### Videos
- `.mp4`, `.webm`, `.ogg`, `.avi`, `.mov`, `.wmv`, `.flv`, `.mkv`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string \| string[] \| StaticImageData` | - | Media URL(s) or static import |
| `alt` | `string` | - | Alt text for accessibility |
| `fill` | `boolean` | `false` | Whether to fill parent container |
| `width` | `number` | - | Fixed width (if not using fill) |
| `height` | `number` | - | Fixed height (if not using fill) |
| `className` | `string` | `""` | CSS classes |
| `priority` | `boolean` | `false` | Load with high priority |
| `controls` | `boolean` | `true` | Show video controls |
| `autoPlay` | `boolean` | `false` | Auto-play videos |
| `muted` | `boolean` | `true` | Mute videos by default |
| `loop` | `boolean` | `false` | Loop videos |

## Error Handling

The component automatically falls back to `/placeholder.svg` if:
- The URL is invalid
- The media fails to load
- No valid URLs are provided in an array

## Examples from Your Project

### Product Gallery
```tsx
// Dynamic product images that could be photos or videos
<DynamicMedia
  src={product.images[selectedIndex] || "/placeholder.svg"}
  alt={product.name}
  fill
  className="object-cover transition-transform duration-300"
/>
```

### Hero Banner
```tsx
// Static banner that could be image or video
<DynamicMedia
  src={bannerMedia}
  alt="Hero banner"
  fill
  className="object-cover"
  priority
/>
```

### Multiple Media Sources
```tsx
// Array of URLs with fallbacks
<DynamicMedia
  src={[
    product.featuredVideo,
    product.images[0],
    "/placeholder.svg"
  ]}
  alt="Product showcase"
  fill
  className="object-cover"
  controls={true}
/>
``` 