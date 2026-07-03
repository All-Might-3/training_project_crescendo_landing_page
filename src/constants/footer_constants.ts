// src/utils/footer_constants.ts
export const FOOTER = {
  map: {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.898209878467!2d-80.28175932304966!3d25.87282737728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5c53e4ed82b7e89%3A0xdc07092a2c951f28!2sCrescendo%20Digital%20Marketing%20Agency!5e0!3m2!1ses-419!2suk!4v1777396792241!5m2!1ses-419!2suk",
    title: "Crescendo Digital Marketing Agency Location",
  },
  reviews: {
    widgetSrc: "https://reputationhub.site/reputation/widgets/review_widget/sPv1iOp0xhXgwRcQ8cQq",
    scriptSrc: "https://reputationhub.site/reputation/assets/review-widget.js",
  },
  columns: [
    {
      title: "Servicios",
      items: [
        { label: "SEO Local", href: "seo-local.html" },
        { label: "Google Ads y Meta Ads", href: "google-ads.html" },
        { label: "Diseño Web", href: "web-design.html" },
        { label: "Chat IA 24/7", href: "ia-chat-24-7.html" },
        { label: "Social Media", href: "social-media.html" },
        { label: "Reputación Online", href: "reputacion-online.html" },
      ],
    },
    {
      title: "Empresa",
      items: [
        { label: "Nosotros", href: "nosotros.html" },
        { label: "Casos de Éxito", href: "casos-de-exito.html" },
        { label: "Blog", href: "blog.html" },
        { label: "Contacto", href: "index.html#contacto" },
      ],
    },
    {
      title: "Legal",
      items: [
        { label: "Política de Privacidad", href: "privacidad.html" },
        { label: "Términos y Condiciones", href: "terminos.html" },
        { label: "Mapa del Sitio", href: "sitemap.xml" },
      ],
    },
    {
      title: "Contacto",
      items: [
        { label: "(786) 755-6238", href: "tel:+17867556238" },
        { label: "crescendomarketingdigital@gmail.com", href: "mailto:crescendomarketingdigital@gmail.com" },
        { label: "Miami, Florida", href: null },
      ],
    },
  ],
  logo: {
    src: "images/foot-page-crescendo.png", // Ajusta la ruta según tu estructura
    alt: "Crescendo Digital Marketing",
    width: 120,
    height: 32,
  },
  copyright: "© 2026 Crescendo Digital Marketing. Todos los derechos reservados.",
} as const;