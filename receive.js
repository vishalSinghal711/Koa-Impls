var amqp = require("amqplib/callback_api");

//connecting using advanced message queue protocol
amqp.connect(
  //docker image from docker hub url of rabbitmq
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
      var msg = "Hello world";

      channel.assertQueue(queue, {
        durable: false,
      });

      channel.consume(
        queue,
        function (msg) {
          console.log(" [x] Received %s", msg.content.toString());
        },
        {
          noAck: true,
        }
      );
    });
  }
);

// //connecting to amqp(advanced message queue protocol)
// (async function connect() {
//   //awaiting the connect response
//   amqp.connect;
//   amqp.on('error' , )

// })();
