class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user

  after_create_commit :broadcast_comment

  private

  def broadcast_comment
    ActionCable.server.broadcast(
      "comments_post_#{post.id}",
      {
        user: user.email,
        content: content
      }
    )
  end
end