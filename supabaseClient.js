import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://waeyeljhdgbxnemtogjf.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhZXllbGpoZGdieG5lbXRvZ2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEwMDI0NzEsImV4cCI6MjA4NjU3ODQ3MX0.sh6my87l_wo6yfLEKitcDKINzr1DJjQl3K1OOxFNJXE"

export const supabase = createClient(supabaseUrl, supabaseKey)
