const supabaseUrl = 'https://jqnztbvyrzneyxdztfdf.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxbnp0YnZ5cnpuZXl4ZHp0ZmRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzODYwNjUsImV4cCI6MjA2OTk2MjA2NX0.8b0UIrlAcQpVfDn1X1heuFVGUDOSUVBHdJVB1m-LqyE"
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)

let sbtn=document.getElementById("sbtn")
if(sbtn){
sbtn.addEventListener("click",async () => {
let email=document.getElementById("semail").value
let password=document.getElementById("spass").value
const { data, error } = await supabase.auth.signUp({
    email,
    password,
})
if(error){
  console.log(error)
}
else{
  console.log(data)
}
})}




let lbtn=document.getElementById("lbtn")
if(lbtn){
    lbtn.addEventListener("click",async () => {
    let email=document.getElementById("lemail").value
    let password=document.getElementById("lpass").value
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
        alert("login")
    }
    })}
    