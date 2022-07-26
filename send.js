var amqp = require("amqplib/callback_api");
amqp.connect(
  "amqp://guest:guest@localhost:55003/",
  function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }
      var queue = "hello";
      var msg = `${process.argv[2]}`;

      channel.assertQueue(queue, {
        durable: false,
      });

      setInterval(() => {
        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(" [x] Sent %s", msg);
        msg += '1'
      }, 1000);
    });
  }
);
