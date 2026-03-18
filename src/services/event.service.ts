import supabase from '../integration/supabaseAdmin';

export const getAllEvents = async () => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('start_time', { ascending: true });

  if (error) throw new Error(error.message);
  return data;
};

export const createEvent = async (eventData: {
  title: string;
  description?: string;
  start_time: string;
  end_time?: string;
  created_by?: string;
}) => {
  const { data, error } = await supabase
    .from('events')
    .insert([eventData])
    .select();

  if (error) throw new Error(error.message);
  return data;
};

export const updateEvent = async (id: string, updatedData: any) => {
  const { data, error } = await supabase
    .from('events')
    .update(updatedData)
    .eq('id', id)
    .select();

  if (error) throw new Error(error.message);
  return data;
};

export const deleteEvent = async (id: string) => {
  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', id);

  if (error) throw new Error(error.message);
  return { message: 'Event deleted successfully' };
};