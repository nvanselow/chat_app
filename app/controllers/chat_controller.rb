require 'uuid'

class ChatController < ApplicationController
  def create
    Pusher.trigger('message_channel', 'new_message', {
      message: {
        id: UUID.new.generate,
        type: 'received',
        body: "#{params[:message]} to you too!"
      }
    });

    render json: { status: 'ok' }, status: :ok
  end
end
