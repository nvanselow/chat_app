class PusherService {
  constructor() {
    Pusher.logToConsole = true;

    this.pusher = new Pusher('b0138a16ac95f1d3dc4e', {
      encrypted: true
    });

    this.channel = this.pusher.subscribe('test_channel');

    this.channel.bind('my_event', function(data) {
      alert(data.message);
    });
  }
}

export default PusherService;
