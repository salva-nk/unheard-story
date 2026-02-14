import { supabase } from './supabaseClient.js'

async function testConnection() {
  const { data, error } = await supabase
    .from('users')
    .select('*')

  if (error) {
    console.log("Error:", error)
  } else {
    console.log("Connected! Data:", data)
  }
}

testConnection()
