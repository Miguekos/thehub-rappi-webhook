export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  rabbitmq: {
    host: process.env.RABBIT_URL,
  },
});
