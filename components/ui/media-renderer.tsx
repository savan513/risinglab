import Image from "next/image";
import { getUrlType } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface MediaRendererProps {
  src: string;
  alt?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  onLoadingComplete?: () => void;
}

export function MediaRenderer({
  src,
  alt = "Media content",
  fill = false,
  width,
  height,
  className = "",
  priority = false,
  sizes,
  style,
  onLoadingComplete,
}: MediaRendererProps) {
  const urlType = getUrlType(src);

  if (urlType === 'invalid') {
    // Return placeholder or fallback image
    return (
      <Image
        src="/placeholder.svg"
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={cn("object-cover", className)}
        priority={priority}
        sizes={sizes}
        style={style}
        onLoadingComplete={onLoadingComplete}
      />
    );
  }

  if (urlType === 'video') {
    // Handle YouTube/Vimeo URLs
    if (src.includes('youtube.com') || src.includes('youtu.be')) {
      const videoId = src.includes('youtube.com') 
        ? src.split('v=')[1]?.split('&')[0]
        : src.split('youtu.be/')[1];
      
      return (
        <div className={cn("relative", fill && "aspect-video", className)} style={style}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={alt}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={cn("absolute inset-0 w-full h-full rounded-lg", className)}
          />
        </div>
      );
    }

    if (src.includes('vimeo.com')) {
      const videoId = src.split('vimeo.com/')[1];
      return (
        <div className={cn("relative", fill && "aspect-video", className)} style={style}>
          <iframe
            src={`https://player.vimeo.com/video/${videoId}`}
            title={alt}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className={cn("absolute inset-0 w-full h-full rounded-lg", className)}
          />
        </div>
      );
    }

    // Handle direct video files
    return (
      <div className={cn("relative", fill && "aspect-video", className)} style={style}>
        <video
          src={src}
          controls
          className={cn("w-full h-full rounded-lg object-cover", className)}
          onLoadedData={onLoadingComplete}
        >
          <source src={src} type={`video/${src.split('.').pop()}`} />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  // Handle images
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={cn("object-cover", className)}
      priority={priority}
      sizes={sizes}
      style={style}
      onLoadingComplete={onLoadingComplete}
    />
  );
} 