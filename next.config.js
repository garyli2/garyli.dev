const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
    images: {
        domains: ["cdn.glitch.com", "steps4news.web.app", "semestershare.com"],
    },
    future: {
        webpack5: true,
    },
});
