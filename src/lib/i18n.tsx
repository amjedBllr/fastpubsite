import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";

export const translations = {
  en: {
    dir: "ltr" as const,
    arabicFont: false,
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
      startOrder: "Start Order",
    },
    hero: {
      badge: "Premium Printing Agency",
      line1: "FAST IDEAS.",
      line2: "FAST PRINT.",
      line3: "FAST IMPACT.",
      subtitle: "We create bold, unforgettable stickers, packaging, and brand collateral that demands attention. Your product deserves better visuals.",
      cta: "Start Your Order",
      viewPortfolio: "View Portfolio",
      headingSize: "text-4xl md:text-4xl lg:text-[5.2rem]",
    },
    marquee: "PREMIUM DIE-CUT STICKERS · CUSTOM PACKAGING · BRAND COLLATERAL",
    services: {
      heading: "WHAT WE DO",
      subtitle: "We specialize in turning your digital assets into high-quality physical products with vivid colors and perfect cuts.",
      items: [
        {
          title: "Product Stickers",
          desc: "Durable, waterproof vinyl stickers for your products and merchandise.",
          useCase: "Perfect for product labels, laptop stickers, merch drops, and brand giveaways.",
          cta: "Order Stickers",
        },
        {
          title: "Packaging Labels",
          desc: "Roll labels and custom die-cut labels that elevate your unboxing experience.",
          useCase: "Ideal for food & beverage brands, cosmetics, retail packaging, and e-commerce.",
          cta: "Order Labels",
        },
        {
          title: "Brand Identity",
          desc: "Business cards, flyers, and premium paper goods that leave a mark.",
          useCase: "Great for agency collateral, event materials, and high-end brand presentations.",
          cta: "Order Print",
        },
      ],
    },
    portfolio: {
      heading: "RECENT WORK",
      viewAll: "View All Projects",
      projectLabel: "Project",
      categoryLabel: "Sticker Print",
    },
    why: {
      heading: "WHY WE'RE\nDIFFERENT",
      items: [
        { num: "01", title: "Insane Quality", desc: "We use state-of-the-art printers and premium vinyl. Your stickers won't fade, scratch, or peel easily." },
        { num: "02", title: "Lightning Fast", desc: "Ideas shouldn't wait. We offer rapid turnaround times without compromising on the details." },
        { num: "03", title: "Creative Agency DNA", desc: "We aren't just a print shop. We're designers who understand what makes branding effective." },
      ],
    },
    cta: {
      heading: "READY TO PRINT\nSOMETHING",
      highlight: "AWESOME?",
      button: "Start Your Order Now",
    },
    footer: {
      tagline: "Premium printing, die-cut stickers, and packaging solutions for brands that refuse to blend in.",
      explore: "Explore",
      connect: "Connect",
      links: { ourWork: "Our Work", about: "About Fast Pub", contact: "Contact Us", startOrder: "Start an Order" },
      copyright: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    about: {
      heroLine1: "WE ARE",
      heroLine2: "FAST PUB.",
      headingSize: "text-5xl md:text-[7rem]",
      mission: "THE MISSION",
      missionP1: "Fast Pub was born from a simple frustration: finding high-quality, custom-cut printed materials was too slow and too generic. We built a creative printing house that merges agency-level design intuition with cutting-edge manufacturing.",
      missionP2: "Whether you need a run of 50 holographic die-cut stickers for an event, or 50,000 product labels for your new retail line, we deliver with uncompromising quality and speed.",
      stat1Val: "10K+",
      stat1Label: "Projects Delivered",
      stat2Val: "24H",
      stat2Label: "Turnaround Available",
      processTitle: "THE PROCESS",
      processSubtitle: "How we turn your ideas into tangible reality.",
      phaseLabel: "Phase",
      steps: [
        { step: "01", title: "Idea & Setup", desc: "Upload your files or work with our design team. We prep everything for optimal print resolution and perfect cut paths." },
        { step: "02", title: "Material Selection", desc: "Choose from matte, gloss, holographic, clear, or heavy-duty vinyl depending on your application needs." },
        { step: "03", title: "Precision Print", desc: "Our industrial machines lay down rich, vibrant inks that resist UV fading and scratching." },
        { step: "04", title: "Fast Delivery", desc: "We pack it securely and ship it fast so you can start making an impact immediately." },
      ],
    },
    contact: {
      hero: "SAY",
      heroHighlight: "HELLO.",
      callTitle: "Call Us",
      callHours: "Mon - Fri, 9am - 6pm",
      emailTitle: "Email",
      emailReply: "We reply within 24h",
      hqTitle: "Headquarters",
      hqAddress: "74 Fellaoucene Bahia, Local 3\nRond Point Bahia, Oran",
    },
    portfolioPage: {
      hero: "Our",
      heroHighlight: "Work",
      subtitle: "A selection of recent printing and branding projects crafted for those who demand the best.",
      categories: ["All", "Stickers", "Packaging", "Brand Identity"],
      viewProject: "View Project",
      projectDescs: [
        "Holographic die-cut vinyl stickers for a boutique nightlife brand. CMYK-matched against brand guidelines with precision cut paths.",
        "Custom kraft-paper packaging for a specialty coffee roaster. Matte laminate finish with spot UV logo.",
        "Waterproof outdoor stickers for a skate brand. Glossy finish with white ink base for vibrant color on dark decks.",
        "Minimalist tube packaging for a premium skincare line. Tactile soft-touch laminate with embossed logo.",
        "All-in brand identity package: lanyards, badges, programs, and event signage for a 2-day tech festival.",
        "Holographic mylar stickers for a limited-edition product drop. UV-reactive ink with custom cut paths.",
        "Amber bottle roll-labels for a craft beer brand. Waterproof matte finish with screen-printed registration.",
        "Full brand identity for an indie music label: press kits, vinyl sleeve artwork, and promotional stickers.",
      ],
    },
    order: {
      hero: "Start an",
      heroHighlight: "Order",
      subtitle: "Fill out the details below to initiate your print project. This is not a checkout — we believe in reviewing every file manually before billing.",
      step1: "1. Your Details",
      iAm: "I am a...",
      individual: "Individual",
      company: "Company",
      fullName: "Full Name / Company Name",
      fullNamePlaceholder: "John Doe",
      phone: "Phone",
      phonePlaceholder: "+1 (555) 000-0000",
      email: "Email Address",
      emailPlaceholder: "hello@example.com",
      step2: "2. Project Details",
      whatToPrint: "What do you need printed?",
      orderTypes: [
        { value: "product", label: "Product Stickers" },
        { value: "logo", label: "Logo Die-cut Stickers" },
        { value: "packaging", label: "Packaging Labels / Roll Labels" },
        { value: "custom", label: "Custom Print Collateral" },
      ],
      quantity: "Quantity",
      size: "Approximate Size",
      sizePlaceholder: "e.g. 3x3 inches",
      surface: "Material / Surface Finish",
      surfacePlaceholder: "e.g. Glossy vinyl, Matte, Holographic...",
      description: "Describe Your Custom Project",
      descriptionPlaceholder: "Give us all the details...",
      step3: "3. Files & Timeline",
      artwork: "Artwork Upload (Optional)",
      artworkCta: "Click to upload or drag and drop",
      artworkNote: "SVG, AI, PDF, or high-res PNG (Max 50MB)",
      deadline: "Required Deadline",
      notes: "Additional Notes",
      notesPlaceholder: "Anything else we should know?",
      submitNote: "By submitting, you agree to our review process.",
      submit: "Submit Request",
      submitting: "Sending...",
      successTitle: "Request Sent!",
      successMsg: "We've received your order details. A print specialist will review your request and reach out within 24 hours.",
      submitAnother: "Submit Another",
      note: "Our team will contact you to confirm your order details.",
    },
    overlay: {
      close: "Close",
      orderNow: "Order Now",
      useCase: "Use Case",
    },
  },

  fr: {
    dir: "ltr" as const,
    arabicFont: false,
    nav: {
      home: "Accueil",
      portfolio: "Portfolio",
      about: "À propos",
      contact: "Contact",
      startOrder: "Commander",
    },
    hero: {
      badge: "Agence d'Impression Premium",
      line1: "IDÉES RAPIDES.",
      line2: "IMPRESSION RAPIDE.",
      line3: "IMPACT RAPIDE.",
      subtitle: "Nous créons des autocollants audacieux, des emballages et des supports de marque inoubliables qui captent l'attention. Votre produit mérite de meilleurs visuels.",
      cta: "Démarrer votre commande",
      viewPortfolio: "Voir le Portfolio",
      headingSize: "text-4xl md:text-5xl lg:text-[5.25rem]",
    },
    marquee: "STICKERS DÉCOUPE PREMIUM · EMBALLAGE PERSONNALISÉ · SUPPORTS DE MARQUE",
    services: {
      heading: "NOS SERVICES",
      subtitle: "Nous transformons vos supports numériques en produits physiques de haute qualité avec des couleurs éclatantes et des découpes parfaites.",
      items: [
        {
          title: "Autocollants Produit",
          desc: "Autocollants en vinyle durables et imperméables pour vos produits et marchandises.",
          useCase: "Parfaits pour les étiquettes produit, les stickers d'ordinateur, les goodies de marque.",
          cta: "Commander",
        },
        {
          title: "Étiquettes d'Emballage",
          desc: "Étiquettes en rouleau et découpe personnalisée qui subliment votre expérience de déballage.",
          useCase: "Idéales pour l'alimentaire, la cosmétique, l'emballage retail et le e-commerce.",
          cta: "Commander",
        },
        {
          title: "Identité de Marque",
          desc: "Cartes de visite, flyers et supports papier premium qui laissent une trace.",
          useCase: "Parfait pour les supports d'agence, les événements et les présentations haut de gamme.",
          cta: "Commander",
        },
      ],
    },
    portfolio: {
      heading: "TRAVAUX RÉCENTS",
      viewAll: "Voir tous les projets",
      projectLabel: "Projet",
      categoryLabel: "Impression Autocollant",
    },
    why: {
      heading: "POURQUOI\nNOUS CHOISIR",
      items: [
        { num: "01", title: "Qualité Exceptionnelle", desc: "Nous utilisons des imprimantes de pointe et du vinyle premium. Vos autocollants ne se décolorent, ne se rayent ni ne se décollent pas facilement." },
        { num: "02", title: "Ultra Rapide", desc: "Les idées ne devraient pas attendre. Nous offrons des délais d'exécution rapides sans compromettre les détails." },
        { num: "03", title: "ADN d'Agence Créative", desc: "Nous ne sommes pas qu'une imprimerie. Nous sommes des designers qui comprennent ce qui rend une marque efficace." },
      ],
    },
    cta: {
      heading: "PRÊT À IMPRIMER\nQUELQUE CHOSE",
      highlight: "D'INCROYABLE?",
      button: "Démarrer votre commande",
    },
    footer: {
      tagline: "Impression premium, autocollants découpe et solutions d'emballage pour les marques qui refusent de passer inaperçues.",
      explore: "Explorer",
      connect: "Contact",
      links: { ourWork: "Nos Réalisations", about: "À propos de Fast Pub", contact: "Nous contacter", startOrder: "Passer une commande" },
      copyright: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
    about: {
      heroLine1: "NOUS SOMMES",
      heroLine2: "FAST PUB.",
      headingSize: "text-5xl md:text-7xl",
      mission: "NOTRE MISSION",
      missionP1: "Fast Pub est né d'une frustration simple : trouver des supports imprimés de haute qualité, en coupe personnalisée, était trop lent et trop générique. Nous avons créé une maison d'impression créative qui fusionne l'intuition design d'une agence avec une fabrication de pointe.",
      missionP2: "Que vous ayez besoin d'un tirage de 50 stickers holographiques pour un événement ou de 50 000 étiquettes produit pour votre nouvelle ligne retail, nous livrons avec une qualité et une rapidité irréprochables.",
      stat1Val: "10K+",
      stat1Label: "Projets Livrés",
      stat2Val: "24H",
      stat2Label: "Délai Express Disponible",
      processTitle: "LE PROCESSUS",
      processSubtitle: "Comment nous transformons vos idées en réalité tangible.",
      phaseLabel: "Phase",
      steps: [
        { step: "01", title: "Idée & Préparation", desc: "Téléchargez vos fichiers ou travaillez avec notre équipe. Nous préparons tout pour une résolution d'impression optimale." },
        { step: "02", title: "Choix du Matériau", desc: "Choisissez parmi mat, brillant, holographique, transparent ou vinyle résistant selon vos besoins." },
        { step: "03", title: "Impression Précise", desc: "Nos machines industrielles déposent des encres riches et vibrantes résistantes aux UV et aux rayures." },
        { step: "04", title: "Livraison Rapide", desc: "Nous conditionnons soigneusement et expédions rapidement pour que vous puissiez avoir un impact immédiat." },
      ],
    },
    contact: {
      hero: "DITES-NOUS",
      heroHighlight: "BONJOUR.",
      callTitle: "Appelez-nous",
      callHours: "Lun - Ven, 9h - 18h",
      emailTitle: "Email",
      emailReply: "Nous répondons sous 24h",
      hqTitle: "Siège Social",
      hqAddress: "74 Fellaoucene Bahia, Local 3\nRond Point Bahia, Oran",
    },
    portfolioPage: {
      hero: "Nos",
      heroHighlight: "Réalisations",
      subtitle: "Une sélection de projets récents d'impression et de branding conçus pour ceux qui exigent le meilleur.",
      categories: ["Tout", "Stickers", "Emballage", "Identité de Marque"],
      viewProject: "Voir le projet",
      projectDescs: [
        "Autocollants vinyle holographiques en découpe personnalisée pour une marque nightlife boutique. Couleurs CMJN alignées sur la charte avec des tracés de coupe précis.",
        "Packaging en papier kraft sur mesure pour un torréfacteur de café de spécialité. Finition mate laminée avec logo en vernis UV sélectif.",
        "Autocollants extérieurs waterproof pour une marque de skate. Finition brillante avec base d'encre blanche pour des couleurs vives sur supports foncés.",
        "Packaging tubulaire minimaliste pour une ligne de soins premium. Laminage soft-touch tactile avec logo embossé.",
        "Pack d'identité de marque complet : lanyards, badges, programmes et signalétique événementielle pour un festival tech de 2 jours.",
        "Autocollants mylar holographiques pour une sortie produit en édition limitée. Encre réactive aux UV avec tracés de coupe personnalisés.",
        "Étiquettes rouleau ambre pour une marque de bière artisanale. Finition mate waterproof avec repérage sérigraphié.",
        "Identité de marque complète pour un label de musique indépendant : dossiers de presse, artwork de pochettes vinyle et stickers promotionnels.",
      ],
    },
    order: {
      hero: "Passer une",
      heroHighlight: "Commande",
      subtitle: "Remplissez les détails ci-dessous pour initier votre projet d'impression. Ce n'est pas un paiement — nous examinons chaque fichier manuellement avant la facturation.",
      step1: "1. Vos Coordonnées",
      iAm: "Je suis...",
      individual: "Particulier",
      company: "Entreprise",
      fullName: "Nom complet / Nom de l'entreprise",
      fullNamePlaceholder: "Jean Dupont",
      phone: "Téléphone",
      phonePlaceholder: "+33 6 00 00 00 00",
      email: "Adresse Email",
      emailPlaceholder: "bonjour@example.com",
      step2: "2. Détails du Projet",
      whatToPrint: "Que souhaitez-vous imprimer ?",
      orderTypes: [
        { value: "product", label: "Autocollants Produit" },
        { value: "logo", label: "Stickers Logo Découpe" },
        { value: "packaging", label: "Étiquettes d'Emballage / Rouleau" },
        { value: "custom", label: "Impression Personnalisée" },
      ],
      quantity: "Quantité",
      size: "Taille Approximative",
      sizePlaceholder: "ex. 7x7 cm",
      surface: "Matériau / Finition de Surface",
      surfacePlaceholder: "ex. Vinyle brillant, Mat, Holographique...",
      description: "Décrivez votre projet personnalisé",
      descriptionPlaceholder: "Donnez-nous tous les détails...",
      step3: "3. Fichiers & Délais",
      artwork: "Téléchargement du visuel (Optionnel)",
      artworkCta: "Cliquez pour télécharger ou glissez-déposez",
      artworkNote: "SVG, AI, PDF ou PNG haute résolution (Max 50Mo)",
      deadline: "Date Limite Requise",
      notes: "Notes Supplémentaires",
      notesPlaceholder: "Autre chose que nous devrions savoir ?",
      submitNote: "En soumettant, vous acceptez notre processus de vérification.",
      submit: "Envoyer la Demande",
      submitting: "Envoi...",
      successTitle: "Demande Envoyée !",
      successMsg: "Nous avons reçu vos détails de commande. Un spécialiste examinera votre demande et vous contactera sous 24 heures.",
      submitAnother: "Soumettre une autre",
      note: "Notre équipe vous contactera pour confirmer les détails de votre commande.",
    },
    overlay: {
      close: "Fermer",
      orderNow: "Commander",
      useCase: "Cas d'usage",
    },
  },

  ar: {
    dir: "rtl" as const,
    arabicFont: true,
    nav: {
      home: "الرئيسية",
      portfolio: "أعمالنا",
      about: "من نحن",
      contact: "تواصل",
      startOrder: "ابدأ طلبك",
    },
    hero: {
      badge: "وكالة طباعة متميزة",
      line1: "أفكار سريعة.",
      line2: "طباعة سريعة.",
      line3: "تأثير سريع.",
      subtitle: "نصنع ملصقات جريئة ولا تُنسى، وعبوات، ومواد تسويقية تستقطب الانتباه. منتجك يستحق مظهراً بصرياً أفضل.",
      cta: "ابدأ طلبك الآن",
      viewPortfolio: "عرض الأعمال",
      headingSize: "text-4xl md:text-5xl lg:text-6xl",
    },
    marquee: "ملصقات قطع دقيقة فاخرة · تغليف مخصص · هوية بصرية للعلامة التجارية",
    services: {
      heading: "ما نقدمه",
      subtitle: "نتخصص في تحويل أصولك الرقمية إلى منتجات مادية عالية الجودة بألوان زاهية وقصات مثالية.",
      items: [
        {
          title: "ملصقات المنتجات",
          desc: "ملصقات فينيل متينة ومقاومة للماء لمنتجاتك وبضائعك.",
          useCase: "مثالية لملصقات المنتجات، استيكرات اللاب توب، هدايا العلامة التجارية.",
          cta: "اطلب الآن",
        },
        {
          title: "ملصقات التعبئة",
          desc: "ملصقات لفافة وقطع مخصصة ترفع تجربة فتح العبوة.",
          useCase: "مثالية لعلامات الأغذية والمشروبات، مستحضرات التجميل، تعبئة التجزئة والتجارة الإلكترونية.",
          cta: "اطلب الآن",
        },
        {
          title: "هوية العلامة التجارية",
          desc: "بطاقات أعمال وبروشورات ومطبوعات ورقية فاخرة تترك أثراً.",
          useCase: "رائع للمواد التسويقية للوكالات، مواد الفعاليات، والعروض التقديمية الراقية.",
          cta: "اطلب الآن",
        },
      ],
    },
    portfolio: {
      heading: "أحدث أعمالنا",
      viewAll: "عرض جميع المشاريع",
      projectLabel: "مشروع",
      categoryLabel: "طباعة ملصقات",
    },
    why: {
      heading: "لماذا\nنختلف",
      items: [
        { num: "01", title: "جودة استثنائية", desc: "نستخدم أحدث الطابعات والفينيل الفاخر. ملصقاتك لن تبهت أو تُخدش أو تنقشر بسهولة." },
        { num: "02", title: "سرعة البرق", desc: "الأفكار لا تنتظر. نقدم أوقات إنجاز سريعة دون التنازل عن التفاصيل." },
        { num: "03", title: "روح وكالة إبداعية", desc: "لسنا مجرد محل طباعة. نحن مصممون يفهمون ما يجعل العلامة التجارية فعّالة." },
      ],
    },
    cta: {
      heading: "مستعد للطباعة\nشيء",
      highlight: "رائع؟",
      button: "ابدأ طلبك الآن",
    },
    footer: {
      tagline: "طباعة متميزة وملصقات قطع وحلول تغليف للعلامات التجارية التي ترفض أن تمر دون أن تُلاحظ.",
      explore: "استكشف",
      connect: "تواصل",
      links: { ourWork: "أعمالنا", about: "عن Fast Pub", contact: "اتصل بنا", startOrder: "ابدأ طلباً" },
      copyright: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
    },
    about: {
      heroLine1: "نحن",
      heroLine2: "FAST PUB.",
      headingSize: "text-5xl md:text-7xl",
      mission: "مهمتنا",
      missionP1: "وُلد Fast Pub من إحباط بسيط: إيجاد مواد مطبوعة عالية الجودة بقطع مخصصة كان بطيئاً جداً وعاماً جداً. بنينا داراً للطباعة الإبداعية تدمج حدس التصميم على مستوى الوكالة مع التصنيع المتطور.",
      missionP2: "سواء احتجت إلى 50 ملصقاً هولوغرافياً مخصصاً لفعالية أو 50,000 ملصق منتج لخطك التجاري الجديد، نقدم بجودة وسرعة لا تساوم.",
      stat1Val: "+10K",
      stat1Label: "مشروع مسلّم",
      stat2Val: "24H",
      stat2Label: "تسليم سريع متاح",
      processTitle: "عملية العمل",
      processSubtitle: "كيف نحول أفكارك إلى واقع ملموس.",
      phaseLabel: "مرحلة",
      steps: [
        { step: "01", title: "الفكرة والإعداد", desc: "ارفع ملفاتك أو اعمل مع فريقنا. نحضّر كل شيء لدقة طباعة مثالية ومسارات قطع محكمة." },
        { step: "02", title: "اختيار المواد", desc: "اختر من بين مطفي أو لامع أو هولوغرافي أو شفاف أو فينيل متين حسب احتياجاتك." },
        { step: "03", title: "طباعة دقيقة", desc: "تضع آلاتنا الصناعية أحباراً غنية وزاهية تقاوم أشعة UV والخدوش." },
        { step: "04", title: "توصيل سريع", desc: "نعبّئ بأمان ونشحن بسرعة حتى تبدأ في ترك أثرك فوراً." },
      ],
    },
    contact: {
      hero: "قل",
      heroHighlight: "مرحباً.",
      callTitle: "اتصل بنا",
      callHours: "الإثنين - الجمعة، 9ص - 6م",
      emailTitle: "البريد الإلكتروني",
      emailReply: "نرد خلال 24 ساعة",
      hqTitle: "المقر الرئيسي",
      hqAddress: "74 Fellaoucene Bahia, Local 3\nRond Point Bahia, Oran",
    },
    portfolioPage: {
      hero: "أعمالنا",
      heroHighlight: "المميزة",
      subtitle: "مجموعة مختارة من مشاريع الطباعة والعلامة التجارية الأخيرة، صُممت لمن يطلب الأفضل.",
      categories: ["الكل", "ملصقات", "تعبئة", "هوية بصرية"],
      viewProject: "عرض المشروع",
      projectDescs: [
        "ملصقات فينيل هولوغرافية بقص مخصص لعلامة ليلية بوتيك. تمت مطابقة ألوان CMYK مع هوية العلامة مع مسارات قص دقيقة.",
        "تغليف ورق كرافت مخصص لمحمصة قهوة مختصة. تشطيب مطفي مغلف مع شعار بطبقة UV موضعية.",
        "ملصقات خارجية مقاومة للماء لعلامة تزلج. تشطيب لامع مع قاعدة حبر بيضاء لإبراز الألوان على الأسطح الداكنة.",
        "تغليف أنبوبي بسيط لخط عناية بالبشرة فاخر. تغليف soft-touch ملمسي مع شعار بارز.",
        "حزمة هوية بصرية متكاملة: أربطة، بطاقات، برامج ولافتات لفعالية تقنية لمدة يومين.",
        "ملصقات مايلر هولوغرافية لإطلاق منتج بإصدار محدود. حبر متفاعل مع الأشعة فوق البنفسجية مع مسارات قص مخصصة.",
        "ملصقات رول بلون كهرماني لعلامة بيرة حرفية. تشطيب مطفي مقاوم للماء مع تسجيل مطبوع بالشاشة.",
        "هوية بصرية كاملة لعلامة موسيقية مستقلة: ملفات صحفية، تصميم أغلفة فينيل وملصقات ترويجية.",
      ],
    },
    order: {
      hero: "ابدأ",
      heroHighlight: "طلبك",
      subtitle: "أكمل التفاصيل أدناه لبدء مشروع الطباعة الخاص بك. هذا ليس سداداً — نؤمن بمراجعة كل ملف يدوياً قبل الفوترة.",
      step1: "1. بياناتك",
      iAm: "أنا...",
      individual: "فرد",
      company: "شركة",
      fullName: "الاسم الكامل / اسم الشركة",
      fullNamePlaceholder: "محمد أحمد",
      phone: "الهاتف",
      phonePlaceholder: "+966 5X XXX XXXX",
      email: "البريد الإلكتروني",
      emailPlaceholder: "مرحبا@example.com",
      step2: "2. تفاصيل المشروع",
      whatToPrint: "ماذا تريد طباعته؟",
      orderTypes: [
        { value: "product", label: "ملصقات المنتجات" },
        { value: "logo", label: "ملصقات الشعار بقطع مخصصة" },
        { value: "packaging", label: "ملصقات التعبئة / لفائف" },
        { value: "custom", label: "طباعة مخصصة" },
      ],
      quantity: "الكمية",
      size: "الحجم التقريبي",
      sizePlaceholder: "مثال: 7x7 سم",
      surface: "المادة / نوع السطح",
      surfacePlaceholder: "مثال: فينيل لامع، مطفي، هولوغرافي...",
      description: "وصف مشروعك المخصص",
      descriptionPlaceholder: "أعطنا جميع التفاصيل...",
      step3: "3. الملفات والجدول الزمني",
      artwork: "رفع الملف الفني (اختياري)",
      artworkCta: "انقر للرفع أو اسحب وأفلت",
      artworkNote: "SVG، AI، PDF أو PNG عالي الدقة (أقصى 50MB)",
      deadline: "الموعد النهائي المطلوب",
      notes: "ملاحظات إضافية",
      notesPlaceholder: "أي شيء آخر يجب أن نعرفه؟",
      submitNote: "بالإرسال، توافق على عملية المراجعة الخاصة بنا.",
      submit: "إرسال الطلب",
      submitting: "جارٍ الإرسال...",
      successTitle: "تم إرسال طلبك!",
      successMsg: "استلمنا تفاصيل طلبك. سيراجع متخصص الطباعة طلبك ويتواصل معك خلال 24 ساعة.",
      submitAnother: "تقديم طلب آخر",
      note: "سيتواصل فريقنا معك لتأكيد تفاصيل طلبك.",
    },
    overlay: {
      close: "إغلاق",
      orderNow: "اطلب الآن",
      useCase: "حالة الاستخدام",
    },
  },
};

export type Translations = typeof translations.en;

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
  dir: "ltr" | "rtl";
  isAr: boolean;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
  dir: "ltr",
  isAr: false,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem("fp-lang") as Lang) || "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("fp-lang", l);
  };

  const t = translations[lang] as unknown as Translations;
  const dir = (translations[lang] as any).dir as "ltr" | "rtl";
  const isAr = lang === "ar";

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
    if (isAr) {
      document.documentElement.classList.add("lang-ar");
    } else {
      document.documentElement.classList.remove("lang-ar");
    }
  }, [dir, lang, isAr]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir, isAr }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
