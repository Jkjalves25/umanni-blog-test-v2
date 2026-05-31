import consumer from "channels/consumer"

consumer.subscriptions.create(
  {
    channel: "CommentsChannel",
    post_id: window.location.pathname.split("/").pop()
  },
  {
    connected() {
      console.log("Connected to CommentsChannel")
    },

    disconnected() {
      console.log("Disconnected from CommentsChannel")
    },

    received(data) {
      console.log("RECEIVED:", data)

      const comments = document.getElementById("comments")

      console.log("COMMENTS DIV:", comments)

      if (comments) {
        comments.insertAdjacentHTML(
          "beforeend",
          `
            <div>
              <strong>${data.user}</strong>
              <p>${data.content}</p>
              <hr>
            </div>
          `
        )
      }
    }
  }
)