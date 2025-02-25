const prisma = require("../config/prismaClient");

// إنشاء منشور جديد
exports.createPost = async (req, res) => {
    try {
        const { title, content, communityId } = req.body;

        const post = await prisma.post.create({
            data: {
                title,
                content,
                communityId,
                authorId: req.user.userId, // صاحب المنشور
            },
        });

        res.status(201).json({ message: "Post created successfully", post });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// جلب جميع المنشورات لمجتمع معين
exports.getPostsByCommunity = async (req, res) => {
    try {
        const { communityId } = req.params;

        const posts = await prisma.post.findMany({ where: { communityId } });

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// جلب تفاصيل منشور معين
exports.getPostById = async (req, res) => {
    try {
        const { id } = req.params;

        const post = await prisma.post.findUnique({ where: { id } });

        if (!post) return res.status(404).json({ message: "Post not found" });

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
