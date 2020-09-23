const config = {
  // Site info
  siteTitle: "Flutter Daily - daily tips and trick for Flutterien", // Site title.
  siteTitleShort: "flutterdaily.dev", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Flutter Daily - daily tips and trick for Flutterien", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://flutterdaily.dev", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Flutter Daily - daily tips and trick for Flutterien", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "en",
  siteFBAppID: "2198345126924491", // FB Application ID for using app insights
  googleAnalyticsID: "UA-137554402-1", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 8,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "",
  postInCategories: "",
  postOnDate: "Posted on",
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: "krissio", // Disqus shortname.
  btnLoadComments: "Load comments",
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "Home",
  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", //
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent:
    "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",
  // Use for Google custom search
  searchWidgetTitle: "What your looking for?",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "005328897267550362033:gui3_qqia8k",
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,

  // Use for user info
  userName: "Krissanawat", // Username to display in the author segment.
  userEmail: "wow@kriss.io", // Email used for RSS feed"s author segment
  userTwitter: "flutter_daily", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Chiangmai, Thailand", // User location to display in the author segment.
  userAvatar:
    "https://en.gravatar.com/userimage/155811895/09834b18c86688d77a606ab08b38cec3.png?s=300", // User avatar to display in the author segment.
  userDescription:
    "Flutter Develiper @instaflutter.com, Dart Lover & Blogger @flutter_daily.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Email",
      url: "mailto:wow@flutterdaily.dev",
      iconClassName: "far envelope",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/flutter_daily",
      iconClassName: "fab twitter",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/groups/614234665932028",
      iconClassName: "fab facebook-f",
    },
  ],
  // Use for navigation
  navTitle: "Flutter Daily",
  navLinks: [
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ],
  // Use for footer
  socialLinks: [
    {
      label: "FreeCodeCamp",
      url: "", // Ignore
      iconClassName: "fab free-code-camp",
    },
    {
      label: "GitHub",
      url: "https://github.com/krisnawat",
      iconClassName: "fab github",
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/flutterdaily.dev/",
      iconClassName: "fab facebook-f",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/flutter_daily",
      iconClassName: "fab twitter",
    },
    {
      label: "RSS",
      url: "https://kriss.io/rss.xml",
      iconClassName: "fas rss",
    },
  ],
  footerLinks: [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Terms of Use", url: "/terms" },
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Sitemap", url: "https://flutterdaily.dev/sitemap.xml" },
  ],
  copyright:
    "Copyright © 2019-2020 Chiangmai. Unless otherwise noted, all code MIT license.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
