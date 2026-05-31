class CommentsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "comments_post_#{params[:post_id]}"
  end

  def unsubscribed
  end
end