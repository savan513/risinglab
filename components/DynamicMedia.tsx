"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

interface DynamicMediaProps {
    src: string | string[] | StaticImageData
    alt: string
    className?: string
    fill?: boolean
    width?: number
    height?: number
    priority?: boolean
    sizes?: string
    quality?: number
    style?: React.CSSProperties
    controls?: boolean
    autoPlay?: boolean
    muted?: boolean
    loop?: boolean
    playsInline?: boolean
    onError?: () => void
    onClick?: () => void
    onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const getMediaType = (url: string): 'image' | 'video' | 'unknown' => {
    if (!url) return 'unknown'

    const cleanUrl = url.split('?')[0].toLowerCase()

    // Known image and video hosting domains
    const imageHosts = [
        'images.unsplash.com',
        'unsplash.com',
        'cdn.pixabay.com',
        'images.pexels.com',
        'i.imgur.com',
        'instagram.com',
        'scontent',
        'fbcdn.net'
    ]

    const videoHosts = [
        'youtube.com',
        'youtu.be',
        'vimeo.com',
        'wistia.com'
    ]

    // Check hostname for known services
    try {
        const urlObj = new URL(url)
        const hostname = urlObj.hostname.toLowerCase()

        for (const imageHost of imageHosts) {
            if (hostname.includes(imageHost)) return 'image'
        }

        for (const videoHost of videoHosts) {
            if (hostname.includes(videoHost)) return 'video'
        }
    } catch {
        // Continue with extension check if URL parsing fails
    }

    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.bmp', '.svg']
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.avi', '.mov', '.wmv', '.flv', '.mkv']

    for (const ext of imageExtensions) {
        if (cleanUrl.endsWith(ext)) return 'image'
    }

    for (const ext of videoExtensions) {
        if (cleanUrl.endsWith(ext)) return 'video'
    }

    // Default to image for unknown extensions or external URLs
    return 'image'
}

const isValidUrl = (url: string): boolean => {
    if (!url) return false

    try {
        // Check if it's a relative path
        if (url.startsWith('/') || url.startsWith('./') || url.startsWith('../')) {
            return true
        }

        // Check if it's a valid URL
        new URL(url)
        return true
    } catch {
        return false
    }
}

export function DynamicMedia({
    src,
    alt,
    className = "",
    fill = false,
    width,
    height,
    priority = false,
    sizes,
    quality = 75,
    style,
    controls = true,
    autoPlay = false,
    muted = true,
    loop = false,
    playsInline = true,
    onError,
    onClick,
    onMouseMove,
    ...props
}: DynamicMediaProps) {
    const [currentUrl, setCurrentUrl] = useState<string>('')
    const [mediaType, setMediaType] = useState<'image' | 'video' | 'unknown'>('image')
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        if (Array.isArray(src)) {
            const validUrls = src.filter(isValidUrl)
            if (validUrls.length > 0) {
                const firstUrl = validUrls[0]
                setCurrentUrl(firstUrl)
                setMediaType(getMediaType(firstUrl))
            }
        } else if (typeof src === 'object' && src.src) {
            // Handle StaticImageData
            setCurrentUrl(src.src)
            setMediaType('image')
        } else if (typeof src === 'string' && isValidUrl(src)) {
            setCurrentUrl(src)
            setMediaType(getMediaType(src))
        } else {
            setCurrentUrl('/placeholder.svg')
            setMediaType('image')
        }
    }, [src])

    const handleError = () => {
        setHasError(true)
        setCurrentUrl('/placeholder.svg')
        setMediaType('image')
        onError?.()
    }

    if (!currentUrl || hasError) {
        return (
            <div className={className} style={style} onClick={onClick} onMouseMove={onMouseMove}>
                <Image
                    src="/placeholder.svg"
                    alt={alt}
                    fill={fill}
                    width={!fill ? width : undefined}
                    height={!fill ? height : undefined}
                    className="object-cover"
                    {...props}
                />
            </div>
        )
    }

    if (mediaType === 'video') {
        return (
            <div className={"group"} style={style} onClick={onClick} onMouseMove={onMouseMove}>
                <video
                    src={currentUrl}
                    className={`w-full h-full object-cover ${className}`}
                    controls={controls}
                    autoPlay={autoPlay}
                    muted={muted}
                    loop={loop}
                    playsInline={playsInline}
                    onError={handleError}
                    style={fill ? { width: '100%', height: '100%' } : { width, height }}
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }

    return (
        <div className={"group"} style={style} onClick={onClick} onMouseMove={onMouseMove}>
            <Image
                src={currentUrl}
                alt={alt}
                fill={fill}
                width={!fill ? width : undefined}
                height={!fill ? height : undefined}
                priority={priority}
                sizes={sizes}
                quality={quality}
                className={`object-cover ${className}`}
                onError={handleError}
                {...props}
            />
        </div>
    )
}

// Helper function to get all URLs from src
export const getMediaUrls = (src: string | string[]): string[] => {
    if (Array.isArray(src)) {
        return src.filter(isValidUrl)
    }
    return isValidUrl(src) ? [src] : []
}

// Helper function to get media type for external usage
export const getUrlMediaType = getMediaType 