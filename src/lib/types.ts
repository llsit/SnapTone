export interface Preset {
  id: string;
  name: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  fileUrl: string;
  tags: string[];
  downloads: number;
  createdAt: string;
}

export type Category = 'All' | 'Cafe' | 'Moody' | 'Film' | 'Travel';
