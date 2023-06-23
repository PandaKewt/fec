import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rzhxfwfoyybqlyiflmmb.supabase.co';
const supabaseKey = "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6aHhmd2ZveXlicWx5aWZsbW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyMTk2MzMsImV4cCI6MjAwMjc5NTYzM30";
export const supabase = createClient(supabaseUrl, supabaseKey);