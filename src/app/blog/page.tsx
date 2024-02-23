import BlogCard from "@/components/blog/blog-card"
import ProfileCard from "@/components/blog/profile-card"

interface BlogPageProps {
    //children: React.ReactNode;
}

export default function BlogPage() {
    return (
        <>
            <div className="py-8">
                {/* HEADER */}
                <div>
                    <ProfileCard />
                </div>

                {/* FILTERS */}
                <div></div>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2">
                    <BlogCard blog={blogs[0]} />
                </div>
            </div>
        </>
    )
}

const blogs = [
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
    {
        title: "Title of Article",
        date: "Feb 26, 2024",
        content:
            "This is a short description. I will use Go's net/http package to create a simple API .",
        likes: 0,
        comments: 0,
    },
]
