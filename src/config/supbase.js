import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_supbaseUrl;
const supabaseKey = import.meta.env.VITE_anonKey;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
