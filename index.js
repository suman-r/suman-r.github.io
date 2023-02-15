
  $(document).ready(function() {
    $("#submitButton").click(function() {
        $("#myContent").empty();
        const model = $("#models")[0].value
      $.ajax(
        {
            type: "POST",
            url: "https://api.openai.com/v1/completions",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer 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"
            },
            data: JSON.stringify({
              "model": model,
              "prompt": $("#inputBox").val(),
              "max_tokens": 2000,
              "temperature": 0.5
            }),
            success: function(data) {
              let text = data.choices[0].text;
              var delay = 50; // delay between characters in milliseconds
              let i = 0;
              type();
              function type() {
                if (i < text.length) {
                  if(text.charAt(i)==" "){
                    delay = 100
                  }
                  else{
                    delay = 50
                  }
                  document.querySelector("#myContent").innerHTML += text.charAt(i);
                  i++;
                  setTimeout(type, delay);
                }
              }
              
              // $("#myContent").text();
              // console.log(data);
            },
            error: function(xhr, status, error) {
              // Handle failure here
              document.querySelector("#myContent").innerHTML = "Currently this model unavailable";
              console.log("Error: " + error);
            }
          });
    });
  });


//   const select = document.querySelector("#models");
//     // select.addEventListener("click", function() {
//     const modelSelect = $("select");
//     const models = [
//         "text-davinci-002",
//         "text-babbage-001",
//         "text-curie-001",
//         "text-babbage-002",
//         "text-curie-002",
//         "text-davinci-001",
//         "text-curie-003",
//         "text-babbage-003",
//         "text-davinci-003"
//       ];
      
//     models.forEach(model => {
//       var option = $("<option value="+model+">"+model+"</option>");
//       modelSelect.append(option);})

      // Display the selected model
    // const selectedModelDisplay = document.getElementById("models");
    // modelSelect.addEventListener("change", function() {
    // const selectedModel = modelSelect.value;
    // selectedModelDisplay.innerHTML = selectedModel;
    // });

// });
  
