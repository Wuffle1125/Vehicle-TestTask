import { SUPABASE_ANON_KEY } from '@/config/env'

export const headers = {
  apikey: SUPABASE_ANON_KEY,
  authorization: `Bearer ${SUPABASE_ANON_KEY}`,
}
