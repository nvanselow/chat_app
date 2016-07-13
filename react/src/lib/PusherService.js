import PUSHER_PUBLIC_KEY from './PusherPublicKey'

class PusherService {
  constructor(callback) {
    Pusher.logToConsole = true;

    this.pusher = new Pusher(PUSHER_PUBLIC_KEY, {
      encrypted: true
    });

    this.channel = this.pusher.subscribe('message_channel');

    this.channel.bind('new_message', function(data) {
      callback(data.message);
    });
  }
}

export default PusherService;
