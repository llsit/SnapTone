const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function testConnection() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  console.log('Testing connection to:', supabaseUrl);
  console.log('Using key starting with:', supabaseKey?.substring(0, 15));

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, error } = await supabase.from('presets').select('*').limit(1);

  if (error) {
    console.error('Connection Error:', error);
  } else {
    console.log('Connection Successful! Found data:', data);
  }
}

testConnection();
