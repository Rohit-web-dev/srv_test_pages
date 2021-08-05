function testApi() {
  // let count =

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {
      // console.log(json);
      drawTable(json);
    });
}

function drawTable(data) {
  $('#myTable thead').empty();
  $('#myTable tbody').empty();
  // console.log(data);
  // thead
  // console.log(data[0]);

  let theadThEl = '';
  for (let k in data[0]) {
    // console.log(k);
    theadThEl += `<th>${k}</th>`;
  }

  // console.log(theadThEl);
  $('#myTable thead').append(`<tr>${theadThEl}</tr>`);

  // tbody

  console.log(data[0]);
  let tbodyTdEl = '';
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    tbodyTdEl = ''
    for (let m in data[i]) {
      tbodyTdEl += `<td>${data[i][m]}</td>`;
    }
    $('#myTable tbody').append(`<tr>${tbodyTdEl}</tr>`);
  }

}
