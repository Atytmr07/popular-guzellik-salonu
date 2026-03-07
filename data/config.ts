export type ServiceKey = "laser" | "extensions" | "hair";

type NavItem = {
  label: string;
  href: string;
};

type Cta = {
  label: string;
  href: string;
};

type HeroStat = {
  value: string;
  label: string;
};

type Service = {
  key: ServiceKey;
  title: string;
  description: string;
};

type Review = {
  quote: string;
  author: string;
};

type GalleryItem = {
  title: string;
  treatment: string;
  result: string;
  image: {
    src: string;
    alt: string;
  };
  layout: "feature" | "portrait" | "wide" | "detail";
};

type SalonConfig = {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    instagramHandle: string;
  };
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
    primaryCta: Cta;
    secondaryCta: Cta;
    highlights: string[];
    stats: HeroStat[];
    signatureNote: string;
  };
  claim: {
    kicker: string;
    title: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: Service[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    items: GalleryItem[];
  };
  socialProof: {
    eyebrow: string;
    title: string;
    rating: string;
    ratingLabel: string;
    description: string;
    reviews: Review[];
  };
  contact: {
    title: string;
    description: string;
    address: string;
    phone: string;
    phoneHref: string;
    instagramHref: string;
    mapEmbedSrc: string;
  };
  footerNote: string;
};

export const salonConfig = {
  brand: {
    name: "Popüler Kuaför & Güzellik Salonu",
    shortName: "Popüler Kuaför & Güzellik Salonu",
    tagline: "23 Yıllık Uzmanlık",
    instagramHandle: "@populer_antalya_guzellik",
  },
  nav: [
    { label: "Hizmetler", href: "#services" },
    { label: "Galeri", href: "#gallery" },
    { label: "Yorumlar", href: "#reviews" },
    { label: "İletişim", href: "#contact" },
  ],
  hero: {
    eyebrow: "Kuaför, Saç Kaynak ve Güzellik Salonu",
    title: "23 Yıllık Tecrübeyle, Güzelliğinizin Yeni Zirvesi.",
    description:
      "Lazer epilasyon, saç kaynak ve profesyonel kuaför hizmetlerinde güven veren teknik, güçlü görünüm ve rafine dokunuş.",
    image: {
      src: "/hero-bg.jpg",
      alt: "Popüler Güzellik Salonu İç Mekan Görünümü",
    },
    primaryCta: {
      label: "Randevu Al",
      href: "tel:+902422371015",
    },
    secondaryCta: {
      label: "Instagram'a Git",
      href: "https://www.instagram.com/populer_antalya_guzellik",
    },
    highlights: [
      "VIP Kuaför Deneyimi",
      "Saç Kaynak Merkezi",
      "Kaş Tasarımında İddialı Dokunuş",
    ],
    stats: [
      { value: "23+", label: "Yıllık Tecrübe" },
      { value: "430+", label: "Kadının Tercihi" },
      { value: "4.9/5", label: "Google Değerlendirmesi" },
    ],
    signatureNote:
      "Her görünüm, yüz oranı, ten tonu ve yaşam stiline göre kişisel olarak kurgulanır.",
  },
  claim: {
    kicker: "İmza Dokunuşumuz",
    title: "İddia Ediyoruz. Antalya'da Kaş Bizim İşimiz.",
  },
  services: {
    eyebrow: "İmza Hizmetler",
    title: "Üç güçlü uzmanlık alanı.",
    description:
      "Hızlı değil, rafine sonuç odaklı çalışıyoruz. Her seans; analiz, uygulama ve bitiş kalitesiyle premium salon hissi verir.",
    items: [
      {
        key: "laser",
        title: "Lazer Epilasyon",
        description:
          "Ten tonuna ve seans takvimine dikkat eden, düzenli takipli ve konfor odaklı uygulama planı.",
      },
      {
        key: "extensions",
        title: "Saç Kaynak Merkezi",
        description:
          "Uzunluk, yoğunluk ve doğal geçişi tek kompozisyonda buluşturan premium kaynak uygulamaları.",
      },
      {
        key: "hair",
        title: "Profesyonel Kuaför",
        description:
          "Kesim, renk, fön ve özel gün hazırlıklarında kişiye özel, editoryal kalite hissi veren dokunuşlar.",
      },
    ],
  },
  gallery: {
    eyebrow: "Salon Galerisi",
    title: "Buraya gelen kadınlarda neyi değiştirdiğimizi görün.",
    description:
      "Her uygulama; görünümü yenilemek, yüz ifadesini netleştirmek ve daha güçlü bir duruş yaratmak için planlanır.",
    items: [
      {
        title: "Mikro Kaynak Yenileme",
        treatment: "Saç Kaynak Merkezi",
        result:
          "Uzunluk eklendi, uçlar yoğunlaştırıldı ve geçiş çizgisi görünmez hale getirildi.",
        image: {
          src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=80",
          alt: "Uzun ve parlak saçlara sahip bir kadın portresi",
        },
        layout: "feature",
      },
      {
        title: "Işıltılı Renk Geçişi",
        treatment: "Profesyonel Kuaför",
        result:
          "Sıcak ten alt tonuna uygun parlak röfleler ile daha canlı ve sofistike bir bitiş sağlandı.",
        image: {
          src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=80",
          alt: "Bakımlı saçları ve profesyonel makyajı ile kadın portresi",
        },
        layout: "portrait",
      },
      {
        title: "Kaş Form Dengeleme",
        treatment: "Kaş Tasarımı",
        result:
          "Bakış daha kalkık, yüz hattı daha net ve ifade daha dengeli hale getirildi.",
        image: {
          src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
          alt: "Net kaş formuna ve pürüzsüz cilde sahip kadın yakın planı",
        },
        layout: "detail",
      },
      {
        title: "Lazer Takip Serisi",
        treatment: "Lazer Epilasyon",
        result:
          "Düzenli seans planı ile kısa sürede daha pürüzsüz ve bakımlı bir görünüm hedeflendi.",
        image: {
          src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=80",
          alt: "Güzellik seansı sonrası bakımlı görünüm sunan salon atmosferi",
        },
        layout: "wide",
      },
    ],
  },
  socialProof: {
    eyebrow: "Sosyal Kanıt",
    title: "430+ Kadının Kusursuzluk Tercihi",
    rating: "4.9 / 5",
    ratingLabel: "Google Puanı",
    description:
      "İlk karşılamadan son aynaya bakış anına kadar güven veren, sıcak ama disiplinli bir salon deneyimi.",
    reviews: [
      {
        quote:
          "Saçlarıma resmen yeni bir tarz verdi Hikmet Bey. Çok sıcak ve güler yüzlü bir ekip.",
        author: "Özge Ş.",
      },
      {
        quote:
          "Lazer epilasyon için gidiyorum, kısa sürede çok güzel sonuçlar aldım.",
        author: "Fatma Y.",
      },
    ],
  },
  contact: {
    title: "Adres, telefon ve konum",
    description: "",
    address: "Çankaya Mah. Barış Manço Bulvarı 217D, Masadağı / Kepez",
    phone: "(0242) 237 10 15",
    phoneHref: "tel:+902422371015",
    instagramHref: "https://www.instagram.com/populer_antalya_guzellik",
    mapEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.893228606818!2d30.675757299999997!3d36.9407186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38f4ad6c681cf%3A0x92b5746a85565694!2zUG9ww7xsZXIgS3VhZsO2ciAmIEfDvHplbGxpayBTYWxvbnU!5e0!3m2!1str!2str!4v1772916075686!5m2!1str!2str",
  },
  footerNote:
    "Saç ve güzellikte güven veren sonuçlar, güçlü görünüm ve yılların ustalığı.",
} satisfies SalonConfig;
