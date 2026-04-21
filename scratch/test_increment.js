const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function testDownloadIncrement() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);

  // 1. Get initial count
  const { data: initialData } = await supabase.from('presets').select('downloads').eq('id', '130af635-9b26-4bea-a968-675e3ef4329d').single();
  console.log('Initial downloads:', initialData?.downloads);

  // 2. Increment
  console.log('Incrementing...');
  const { error } = await supabase.rpc('increment_downloads', { preset_id: '130af635-9b26-4bea-a968-675e3ef4329d' });
  if (error) console.error('RPC Error:', error);

  // 3. Get new count
  const { data: newData } = await supabase.from('presets').select('downloads').eq('id', '130af635-9b26-4bea-a968-675e3ef4329d').single();
  console.log('New downloads:', newData?.downloads);
}

testDownloadIncrement();
