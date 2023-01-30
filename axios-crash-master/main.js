// GET REQUEST
function getTodos() {
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=23")
  .then(res=>showOutput(res))
  .catch(err=>console.error(err));
}

// POST REQUEST
function addTodo() {
  axios.post("https://jsonplaceholder.typicode.com/todos",{title:"new tode",completed:false})
  .then(res=>showOutput(res))
  .catch(err=>console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.patch("https://jsonplaceholder.typicode.com/todos/1",{title:"updated tode",completed:true})
  .then(res=>showOutput(res))
  .catch(err=>console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  axios.delete("https://jsonplaceholder.typicode.com/todos/1")
  .then(res=>showOutput(res))
  .catch(err=>console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios.all([
    axios.get("https://jsonplaceholder.typicode.com/todos"),
    axios.get("https://jsonplaceholder.typicode.com/posts")
  ])
  .then(axios.spread((todos,posts)=>showOutput(posts)))
  .catch(err=>console.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const h={
    headers:{
      'content-type':'json',
      autherization:'007'
    }
  };
  axios.post("https://jsonplaceholder.typicode.com/todos",{title:"new tode",completed:false},h)
  .then(res=>showOutput(res))
  .catch(err=>console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log('Transform Response');
}

// ERROR HANDLING
function errorHandling() {
  console.log('Error Handling');
}

// CANCEL TOKEN
function cancelToken() {
  console.log('Cancel Token');
}

// INTERCEPTING REQUESTS & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
