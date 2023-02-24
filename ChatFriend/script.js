import { Configuration, OpenAIApi } from "https://cdn.skypack.dev/openai";

document.querySelector("#send").addEventListener("click", function () {
    var template = `
        <div class="line">
            <span class="chat_box mine">${document.querySelector("#input").value}</span>
        </div>`;

    document.querySelector(".chat_content").insertAdjacentHTML("beforeend", template);

    var configuration = new Configuration({
      apiKey: "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",
    });

    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: document.querySelector("#input").value,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((result) => {
        var template = `
            <div class="line">
                <span class="chat_box chat_box-friend">${result.data.choices[0].text}</span>
        </div>`;

        document
          .querySelector(".chat_content")
          .insertAdjacentHTML("beforeend", template);
        });
        
    document.querySelector(".chat_input").value = "";
});