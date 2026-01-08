export type MediaType = 'image' | 'video';

export interface DiaryEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  mediaType: MediaType;
  mediaSrc: string; // URL for image or video
  mediaPoster?: string; // Poster for video
}
