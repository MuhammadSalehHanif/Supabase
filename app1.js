
const supabaseUrl = 'https://pjtrphqvnorecjxtneqc.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqdHJwaHF2bm9yZWNqeHRuZXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MDA5NDgsImV4cCI6MjA2OTQ3Njk0OH0.NsHbm2v_ZbykkTPOorh07dEshGCXoTg2pqn_naGbShY"
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey)
const addBtn = document.getElementById('submitBtn')
let cards = document.getElementById('cards')

addBtn.addEventListener('click', async() => {
    let name = document.getElementById('name')
    let category = document.getElementById('select')
    let des = document.getElementById('des')
    let price = document.getElementById('price')
    let image = document.getElementById('image')

    const { error } = await supabase
  .from('todos')
  .insert({Name: name.value, Category: category.value, Description: des.value, Price: price.value, Image: image.value})

  if(error){
    console.log('error', error);
  }
  else{
    console.log('data added successfully');
    cards.innerHTML = ""
    name.value = ""
    category.value = ""
    des.value = ""
    price.value = ""
    image.value = ""
    readData()
  }

})

let readData = async() => {
    const { data, error } = await supabase
  .from('todos')
  .select("*")

  if(error){
    console.log(error);
  }
  else{
    cards.innerHTML = ""
    data.map((value) => {
        cards.innerHTML += `<div class="card h-90 shadow-sm col-md-4 mb-4">
      <div class="position-relative">
    <span onclick="deleteData(${value.id})" class="delete-icon bg-primary text-white d-flex align-items-center justify-content-center position-absolute top-0 end-0 m-2" style="width: 40px; height: 40px; cursor: pointer;">
    <i class="fa-solid fa-trash"></i>
  </span>
    <img class="card-img-top" src="${value.Image}" alt="food image">
      </div>
    <div class="card-body">
      <h5 class="card-title">${value.Name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${value.Category}</h6>
      <p class="card-text">${value.Description}</p>
      <p class="card-text fw-bold">${value.Price} PKR</p>
      <a onclick="updateData(${value.id}, '${value.Name}', '${value.Image}', '${value.Category}', '${value.Description}', '${value.Price}')" href="#" class="btn btn-primary">Edit</a>
    </div>
  </div>
`;
    })
  }
}
readData()

let deleteData = async(id) => {
  console.log(id);
  cards.innerHTML = "";

  const response = await supabase
  .from('todos')
  .delete()
  .eq('id', id)
  readData()

};
window.deleteData = deleteData

let updateData = async (id, currentData) => {
   const newName = prompt("Enter new name:", currentData.Name);
  const newCategory = prompt("Enter new category:", currentData.Category);
  const newImage = prompt("Enter new image URL:", currentData.Image);
  const newDescription = prompt("Enter new description:", currentData.Description);
  const newPrice = prompt("Enter new price:", currentData.Price);

  const upadateData = {
    Name: newName || currentData.Name,
    Category: newCategory || currentData.Category,
    Image: newImage || currentData.Image,
    Description: newDescription || currentData.Description,
    Price: newPrice || currentData.Price,
  };

    const { error } = await supabase
      .from("todos")
      .update(upadateData)
      .eq("id", id);

    if (error) {
      console.log("error", error);
    } else {
      console.log("Items Upadated successfully");
      readData();
    }
};

window.updateData = updateData