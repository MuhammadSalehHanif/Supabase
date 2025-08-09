
const supabaseUrl = 'https://pjtrphqvnorecjxtneqc.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdHJwaHF2bm9yZWNqeHRuZXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MDA5NDgsImV4cCI6MjA2OTQ3Njk0OH0.NsHbm2v_ZbykkTPOorh07dEshGCXoTg2pqn_naGbShY"
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)
  
let sbtn=document.getElementById("sbtn")
if(sbtn){sbtn.addEventListener("click",async()=>{
    let email=document.getElementById("semail").value
    let password=document.getElementById("spass").value
    const { data, error } = await supabase.auth.signUp({
   email,
   password,

})
if(error){
    console.log("error => ", error);
    
}
else{
    console.log("data =>",data)
}
})}


// Login functionality

let lbtn=document.getElementById("lbtn")

if(lbtn){
lbtn.addEventListener("click",async()=>{
    let email=document.getElementById("lemail").value
    let password=document.getElementById("lpass").value
    const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password,
})
if(error){
    console.log("error => ", error);
    alert("Login failed: " + error.message)
    
}
else{
    console.log("data =>",data)
    alert("Login successful")
}})}
