/**
 * Shared Type Definitions for Project Nandinha
 */

export type DeviceTier = 'low' | 'medium' | 'high';

export interface ViewportDimensions {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface MemoryItem {
  id: string;
  title: string;
  date?: string;
  location?: string;
  description: string;
  imageSrc: string;
  altText: string;
  tag?: string;
}

export interface PhotoAsset {
  id: string;
  category: 'fernanda' | 'couple' | 'atmosphere';
  src: string;
  thumbnailSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface ThingILoveItem {
  id: string;
  order: number;
  title: string;
  description: string;
  iconName?: string;
}

export interface SiteMetaContent {
  title: string;
  recipientName: string;
  authorName: string;
  version: string;
}

export interface AnimationTimelineConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  autoplay?: boolean;
}
