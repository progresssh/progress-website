interface MediaItem {
  id: number;
  type: 'image' | 'video' | 'text';
  title: string;
  description: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}
