let resArr = [];

for (let i = 0; i < localStorage.length; i++) {
  let item = localStorage.key(i);
  resArr.push({
    name: localStorage.key(i),
    score: localStorage.getItem(item),
  });
}

resArr.sort(function (a, b) {
  return a.score - b.score;
});

const fillResults = resArr.map((item) => {
  document.getElementById("rec").innerHTML += `<tr><td>${item.name}</td>
<td>${item.score}</td>
</tr>`;
});
