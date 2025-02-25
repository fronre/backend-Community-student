const prisma = require("../config/prismaClient");

// إنشاء مجتمع جديد
exports.createCommunity = async (req, res) => {
    try {
        const { name, description } = req.body;

        const community = await prisma.community.create({
            data: {
                name,
                description,
                ownerId: req.user.userId, // المالك هو المستخدم المسجل حاليا
            },
        });

        res.status(201).json({ message: "Community created successfully", community });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// جلب جميع المجتمعات
exports.getCommunities = async (req, res) => {
    try {
        const communities = await prisma.community.findMany();
        res.status(200).json(communities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCommunityById = async (req, res) => {
    try {
        const { id } = req.params;

        const community = await prisma.community.findUnique({ where: { id } });

        if (!community) return res.status(404).json({ message: "Community not found" });

        res.status(200).json(community);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
