function handleSubmit(event) {
  event.preventDefault();
  const text = document.getElementById("test-statement").value;

  console.log(text);
  fetch("/api", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("text_polarity").innerHTML = data.polarity;
      document.getElementById("text_subjectivity").innerHTML =
        data.subjectivity;
      document.getElementById("text_polarity_confidence").innerHTML =
        data.polarity_confidence;
      document.getElementById("text_subjectivity_confidence").innerHTML =
        data.subjectivity_confidence;
    });
}

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

export { handleSubmit, handleSubmitArticle };
