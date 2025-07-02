import { createClient } from '@/lib/supabase/server';

export const getEvents = async () => {
  const supabase = await createClient();
  const { data: events, error } = await supabase.from('events').select(`
    title,
    details,
    start_time,
    end_time,
    cover_image_url,
    location:location_id (
      name,
      street_address,
      city,
      state,
      postal_code,
      country
    )
  `);

  if (error) throw error;

  return events;
};

export const getEventById = async (id: string) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('events')
    .select('*, location:location_id(*)')
    .eq('id', id)
    .single();

  if (error) throw error;

  return data;
};
