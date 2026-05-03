export default function handler(req, res) {
    res.json([
        {
            id: "home",
            title: "Home",
            slug: "/",
            children: [
                { id: "about-us", title: "About Us", slug: "/" },
                { id: "meet-our-team", title: "Meet Our Team", slug: "/" },
                { id: "upcoming-events", title: "See Upcoming Events", slug: "/" },
            ]
        },
        {
            id: "about",
            title: "About",
            slug: "/about",
            children: [
                { id: "our-mission", title: "Our Mission", slug: "/about" },
                { id: "who-we-serve", title: "Who We Serve", slug: "/about" },
                { id: "by-the-numbers", title: "By the Numbers", slug: "/about" },
            ]
        },
        {
            id: "team",
            title: "Team",
            slug: "/team",
            children: [
                { id: "board-of-directors", title: "Board of Directors", slug: "/team" },
            ]
        },
        {
            id: "schedule",
            title: "Schedule",
            slug: "/schedule",
            children: [
                { id: "upcoming-events", title: "Upcoming Events", slug: "/schedule" },
            ]
        }
    ]);
}