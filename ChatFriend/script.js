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
        model: "davinci",
        prompt: document.querySelector("#input").value,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((result) => {
        console.log(result.data.choices[0].text);

        var template = `
        <div class="chat_content-friend">
            <div class="chat_avatar">
                <img src="img/spiderman.jpg" alt="Avator image" />
            </div>
            <div class="line">
                <span class="chat_box chat_box-friend">${result.data.choices[0].text}</span>
            </div>
        </div>`;

        document
          .querySelector(".chat_content")
          .insertAdjacentHTML("beforeend", template);
      });
});