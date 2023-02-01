// hide button
function hide(x) {
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

// post request

document.getElementById("mybtn").addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const name = document.getElementById("amount").value;
    const des = document.getElementById("des").value;

    const cat = document.getElementById("cat").value;

    const obj = {
      name,
      des,
      cat,
    };
    const postreq = await axios.post(
      "https://crudcrud.com/api/92491aeba97a4f159144a32da38fc97e/newappointment",
      obj
    );
    displayonScreen(postreq.data);
  } catch (err) {
    document.body.innerHTML += "<h4> Something went wrong</h4>";
  }
});

// Get REQUEST

window.addEventListener("DOMContentLoaded", async (e) => {
  e.preventDefault();
  try {
    const getreqaxios = await axios.get(
      "https://crudcrud.com/api/92491aeba97a4f159144a32da38fc97e/newappointment"
    );

    for (var i = 0; i < getreqaxios.data.length; i++) {
      displayonScreen(getreqaxios.data[i]);
    }
  } catch (err) {
    document.body.innerHTML += "<h4> No data Found</h4>";
  }
});

// Put Request

function editDetails(desId, name, cat, id) {
  //hide button
  var x = document.getElementById("up");
  hide(x);
  var y = document.getElementById("mybtn");
  hide(y);

  let a = (document.getElementById("des").value = desId);
  let b = (document.getElementById("amount").value = name);
  let c = (document.getElementById("cat").value = cat);
  var id = id;
  async function update(e) {
    e.preventDefault();
    var x = document.getElementById("up");
    hide(x);
    var y = document.getElementById("mybtn");
    hide(y);

    const name = document.getElementById("amount").value;
    const des = document.getElementById("des").value;

    const cat = document.getElementById("cat").value;
    console.log(id);

    const obj = {
      name,
      des,
      cat,
    };

    await axios.put(
      `https://crudcrud.com/api/92491aeba97a4f159144a32da38fc97e/newappointment/${id}`,
      obj
    );

    //show user
    location.reload();
  }
  document.getElementById("up").addEventListener("click", update);
}


// delete Request

async function DeleteReq(desId, id) {
  
    try {
      const getreq = await axios.get(
        "https://crudcrud.com/api/92491aeba97a4f159144a32da38fc97e/newappointment"
      );
      const delreq = await axios.delete(
        `https://crudcrud.com/api/92491aeba97a4f159144a32da38fc97e/newappointment/${id}`
      );
  
      removeFromScreen(desId);
    } catch (err) {
      document.body.innerHTML += "<h4> Something went wrong</h4>";
    }
  }


// other function 

function removeFromScreen(desId) {
    const parentNode = document.getElementById("listOfUsers");
    const childNodeToBeDeleted = document.getElementById(desId);
    if (childNodeToBeDeleted) {
      parentNode.removeChild(childNodeToBeDeleted);
    }
  }


function displayonScreen(user) {
  document.getElementById("des").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("cat").value = "";



  const parentNode = document.getElementById("listOfUsers");
  const childHTML = `<li id=${user.des}> <strong>Amout: </Strong> ${user.name} <strong>Description: </Strong>  ${user.des}<strong> Category:</Strong> ${user.cat}
                                        <button onclick=DeleteReq('${user.des}','${user._id}')> Delete User </button>
                                        <button onclick=editDetails('${user.des}','${user.name}','${user.cat}','${user._id}')>Edit User </button>
                                     </li>`;

  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}





