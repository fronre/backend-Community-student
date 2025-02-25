const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllEvents = async (req, res) => {
  const events = await prisma.event.findMany();
  res.json(events);
};

const createEvent = async (req, res) => {
  const { title, description, date, location, isOnline, organizerId, communityId } = req.body;
  const newEvent = await prisma.event.create({
    data: {
      title,
      description,
      date,
      location,
      isOnline,
      organizerId,
      communityId,
    },
  });
  res.json(newEvent);
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;
  await prisma.event.delete({
    where: { id: parseInt(id) },
  });
  res.json({ message: "Event deleted successfully" });
};

module.exports = {
  getAllEvents,
  createEvent,
  deleteEvent,
};
