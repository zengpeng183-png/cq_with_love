export type MediaType = 'image' | 'video' | 'text';

export interface DiaryEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  mediaType: MediaType;
  mediaSrc: string | string[]; // URL for image or video
  mediaPoster?: string; // Poster for video
}
