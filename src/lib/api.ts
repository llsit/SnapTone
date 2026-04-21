import { supabase } from './supabaseClient';
import { Preset } from './types';

// Map Supabase snake_case format to frontend camelCase Preset interface
function mapPreset(data: any): Preset {
  return {
    id: data.id,
    name: data.name,
    category: data.category,
    description: data.description || '',
    beforeImage: data.before_image,
    afterImage: data.after_image,
    fileUrl: data.file_url,
    tags: data.tags || [],
    downloads: data.downloads || 0,
    createdAt: data.created_at,
  };
}

export async function fetchPresets(): Promise<Preset[]> {
  const { data, error } = await supabase
    .from('presets')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching presets:', error);
    return [];
  }

  return (data || []).map(mapPreset);
}

export async function fetchPresetById(id: string): Promise<Preset | null> {
  const { data, error } = await supabase
    .from('presets')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    console.error('Error fetching preset by ID:', error);
    return null;
  }

  return mapPreset(data);
}

export async function incrementDownload(id: string): Promise<void> {
  const { error } = await supabase.rpc('increment_downloads', { preset_id: id });
  
  if (error) {
    console.error('Error incrementing download:', error);
  }
}
