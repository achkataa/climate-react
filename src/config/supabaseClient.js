
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mupjnkbasyrzlhwnigbj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11cGpua2Jhc3lyemxod25pZ2JqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2NTg3MjMsImV4cCI6MTk5NzIzNDcyM30.SIvULsQdhV93n21uti8INAY7RDsPXPJ8IYJ0S8QanRI'
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase