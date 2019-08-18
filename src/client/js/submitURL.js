function handleSubmitArticle(event) {
  event.preventDefault();
  const url = document.getElementById("test-url").value;

  console.log(url);
  fetch("/article", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: url })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("polarity").innerHTML = data.polarity;
      document.getElementById("subjectivity").innerHTML = data.subjectivity;
      document.getElementById("polarity_confidence").innerHTML =
        data.polarity_confidence;
      document.getElementById("subjectivity_confidence").innerHTML =
        data.subjectivity_confidence;
      document.getElementById("excerpt").innerHTML = data.text;
    });
}

export { handleSubmitArticle };
