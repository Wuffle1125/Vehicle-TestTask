import { createClient } from '@supabase/supabase-js'

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL || 'https://bwyoxosonujdbkowwywh.supabase.co',
  process.env.SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3eW94b3NvbnVqZGJrb3d3eXdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzNzU4NTUsImV4cCI6MjAwNTk1MTg1NX0.kMrDHukAt5GhoJ5zGE_4uOrPBYPbD6sP6COFY1TcdFA'
)
