const fastify = require("fastify")({ logger: true });
const uuid = require("uuid");
const powerOutages = [
  {
    id: "5a95f050-c560-4fbc-8d91-76b9f7016345", // generated with uuid.v4()
    address: "123 easy street",
    startDate: new Date(),
    active: true,
  },
];

fastify.get("/outages", async (request, reply) => {
  return powerOutages;
});

const start = async () => {
  try {
    await fastify.listen({ port: 8989, host: "0.0.0.0" });
    console.log(`Server is running at ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
