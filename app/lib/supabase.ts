import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rzhxfwfoyybqlyiflmmb.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6aHhmd2ZveXlicWx5aWZsbW1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcyMTk2MzMsImV4cCI6MjAwMjc5NTYzM30.PcUo7iiKNQLmr8MRAIPzfnVTf4aLwUE4eSYpGqNeFR8";
export const supabase = createClient(supabaseUrl, supabaseKey);