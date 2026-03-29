function generateResponse() {
  var apiKey = "YOUR_GEMINI_API_KEY";

  var prompt = "Explain digital marketing in simple terms";

  var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey;

  var payload = {
    contents: [
      {
        parts: [
          { text: prompt }
        ]
      }
    ]
  };

  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(url, options);
  var result = JSON.parse(response.getContentText());

  var output = result.candidates[0].content.parts[0].text;

  Logger.log(output);
}
