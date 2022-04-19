//@ts-check
const connectedPorts = [];
let socket;

// eslint-disable-next-line no-undef
onconnect = function ({ ports }) {
  const port = ports[0];
  connectedPorts.push(port);

  port.onmessage = ({ data }) => {
    const { url, action } = data;

    switch (action) {
      case 'register':
        if (socket === undefined) {
          socket = new WebSocket(url);
          startSocketFunctionality(socket);
          return;
        }

        if (socket.url === url) {
          return;
        }

        socket.close();
        socket = new WebSocket(url);
        startSocketFunctionality(socket);
        break;
      case 'send':
        socket.send(JSON.stringify(url));
        break;
      case 'unload':
        const index = connectedPorts.indexOf(port);
        connectedPorts.splice(index, 1);
        break;
      default:
        break;
    }
  };
};

function startSocketFunctionality(socket) {
  socket.addEventListener('open', () => {
    const data = JSON.stringify({
      time: 123456,
      channel: 'futures.tickers',
      event: 'subscribe',
      payload: ['BTC_USD', 'ETH_USD'],
    });

    socket.send(data);
  });

  // Send data from socket to all open tabs.
  socket.addEventListener('message', ({ data }) => {
    const packageData = JSON.parse(data);
    connectedPorts.forEach((port) => port.postMessage(packageData));
  });
}
