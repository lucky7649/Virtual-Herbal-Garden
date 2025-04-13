import React from 'react';

const ThreeeDdata = () => {
  // Plant data
  const [plants] = useState([
    {
      id: 1,
      name: "Neem",
      scientificName: "Azadirachta indica",
      description:
        "Neem is widely used in Ayurveda for its antibacterial and antifungal properties.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXy_SqjyO_pTlfYZ3eFQYJBujFnjV3DmeNPGPFBV0BbW-ay-r9foz7I-_vv4Ig8WjGl0&usqp=CAU",
      botanicalInfo: "Neem tree belongs to the mahogany family.",
      physicalDescription:
        "A fast-growing evergreen tree that can reach up to 30 meters in height.",
      habitat:
        "Native to the Indian subcontinent, prefers hot and arid regions.",
      medicinalMethod:
        "Neem leaves and oil are used in skincare and as natural insect repellents.",
      conventionalComposition: "Contains azadirachtin, nimbin, and nimbidin.",
      chemicalComposition: "Rich in triterpenoids and fatty acids.",
      pharmacologicalEffect:
        "Antibacterial, antifungal, and anti-inflammatory properties.",
      clinicalStudies:
        "Proven effective in managing diabetes and skin conditions.",
      safetyPrecautions:
        "Avoid excessive oral consumption; may affect liver function.",
      culturalSignificance:
        "Revered in Indian culture for its purifying properties.",
      plantSuccess:
        "Neem is widely cultivated for its medicinal and agricultural benefits.",
      referenceLink: "https://en.wikipedia.org/wiki/Azadirachta_indica",
      "3dId": "03edef8009d942d3a3db6fa64cecbe56" ,
    },
    {
      id: 2,
      name: "Aloe Vera",
      scientificName: "Aloe barbadensis miller",
      description:
        "Aloe Vera is known for its healing and moisturizing properties.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3R86NC0EVT9gknS4chFL7s6zIiv4VGhjFw&s",
      botanicalInfo: "A succulent plant species of the genus Aloe.",
      physicalDescription: "Thick, fleshy green leaves with spiny edges.",
      habitat:
        "Native to the Arabian Peninsula, thrives in tropical and arid climates.",
      medicinalMethod:
        "The gel inside leaves is used for skin healing and digestive aid.",
      conventionalComposition: "Contains aloin, vitamins, and minerals.",
      chemicalComposition:
        "Rich in anthraquinones, polysaccharides, and amino acids.",
      pharmacologicalEffect:
        "Soothing, anti-inflammatory, and healing properties.",
      clinicalStudies:
        "Used for wound healing, burn treatment, and as a laxative.",
      safetyPrecautions:
        "Excessive consumption may cause intestinal discomfort.",
      culturalSignificance: "Historically used in Egyptian and Greek medicine.",
      plantSuccess:
        "Aloe is commercially cultivated for cosmetics and pharmaceuticals.",
      referenceLink: "https://en.wikipedia.org/wiki/Aloe_vera",
      "3dId": "5486c62fb4f24234bf911e4e84f2c451" ,

    },
    {
      id: 3,
      name: "Tulsi",
      scientificName: "Ocimum sanctum",
      description:
        "Tulsi, also known as holy basil, is used to support immune function and reduce stress.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQikN2AotsJT44vjUWBdleqGnWGXP2w1oIyFOWgTgba3lHjLt1FHnZEjPX3BUsyZsPJJCU&usqp=CAU",
      botanicalInfo: "A sacred herb in Hinduism, often planted near homes.",
      physicalDescription:
        "A small plant with green or purple leaves and a strong aroma.",
      habitat: "Native to the Indian subcontinent, grows in tropical climates.",
      medicinalMethod:
        "Leaves and seeds are used for teas and herbal remedies.",
      conventionalComposition: "Rich in eugenol, vitamins, and antioxidants.",
      chemicalComposition: "Contains flavonoids and phenolic compounds.",
      pharmacologicalEffect:
        "Adaptogenic, anti-inflammatory, and antimicrobial properties.",
      clinicalStudies:
        "Effective in managing stress, respiratory issues, and infections.",
      safetyPrecautions:
        "Generally safe; may cause mild allergies in sensitive individuals.",
      culturalSignificance: "Worshipped as a goddess in Indian households.",
      plantSuccess:
        "Widely grown in gardens for spiritual and medicinal purposes.",
      referenceLink: "https://en.wikipedia.org/wiki/Ocimum_tenuiflorum",
      "3dId": "c604e8f52c234f2e9259d895fe028819" ,

    },
    {
      id: 4,
      name: "Mint",
      scientificName: "Mentha",
      description:
        "Mint has cooling properties and is widely used for digestive health and soothing the skin.",
      image:
        "https://www.eastsideasianmarket.com/cdn/shop/products/vegetable-mint-per-pk-848445_983x700.jpg?v=1587099008",
      botanicalInfo: "A genus of aromatic herbs in the Lamiaceae family.",
      physicalDescription:
        "Spreading herb with fragrant leaves and small flowers.",
      habitat: "Widely distributed across Europe, Asia, and North America.",
      medicinalMethod:
        "Leaves are used fresh or dried for teas, oils, and balms.",
      conventionalComposition: "Rich in menthol and essential oils.",
      chemicalComposition: "Contains polyphenols, terpenoids, and flavonoids.",
      pharmacologicalEffect: "Cooling, digestive, and calming properties.",
      clinicalStudies: "Used to treat indigestion, headaches, and colds.",
      safetyPrecautions: "Avoid excessive use; may irritate sensitive skin.",
      culturalSignificance:
        "Used in various cuisines and traditional medicine systems.",
      plantSuccess:
        "Easily cultivated and highly valued for culinary and medicinal uses.",
      referenceLink: "https://en.wikipedia.org/wiki/Mentha",
      "3dId": "43564aee96754e989ddb7edf4881f3c4" ,

    },
    {
      id: 5,
      name: "Lavender",
      scientificName: "Lavandula angustifolia",
      description:
        "Lavender is known for its calming effect and is often used to promote relaxation and reduce anxiety.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7prgI4ovR1NGM9DPbCxPtaLgdzjifDFCSI8NBuBzCYxdc0Lw-kpvK_QmUntsan0fopgc&usqp=CAU",
      botanicalInfo: "A flowering plant in the mint family Lamiaceae.",
      physicalDescription:
        "Purple flowers on long stems with a pleasant aroma.",
      habitat: "Native to the Mediterranean region, thrives in sunny areas.",
      medicinalMethod:
        "Oil and dried flowers are used in aromatherapy and teas.",
      conventionalComposition: "Rich in linalool and linalyl acetate.",
      chemicalComposition: "Contains terpenes and essential oils.",
      pharmacologicalEffect:
        "Calming, sleep-inducing, and stress-relieving properties.",
      clinicalStudies:
        "Effective in treating insomnia, anxiety, and headaches.",
      safetyPrecautions:
        "Safe for most; may cause allergies in some individuals.",
      culturalSignificance:
        "Used in perfumes, potpourris, and rituals for centuries.",
      plantSuccess: "Cultivated for essential oils and ornamental purposes.",
      referenceLink: "https://en.wikipedia.org/wiki/Lavender",
      "3dId": "08f35ae30b924678955b4bb483b86a70" ,

    },
    {
      id: 6,
      name: "Chamomile",
      scientificName: "Matricaria chamomilla",
      description:
        "Chamomile is used to relieve stress and promote restful sleep, as well as support digestion.",
      image:
        "https://www.shutterstock.com/image-photo/chamomile-flower-isolated-on-white-600nw-2369669747.jpg",
      botanicalInfo: "A flowering plant in the Asteraceae family.",
      physicalDescription:
        "Small white flowers with a yellow center and feathery leaves.",
      habitat:
        "Native to Europe and Western Asia, thrives in sunny and well-drained soils.",
      medicinalMethod:
        "Used as tea or essential oil for relaxation and soothing digestion.",
      conventionalComposition: "Contains flavonoids, apigenin, and coumarin.",
      chemicalComposition: "Rich in terpenoids and phenolic compounds.",
      pharmacologicalEffect:
        "Sedative, anti-inflammatory, and antispasmodic properties.",
      clinicalStudies:
        "Effective in promoting sleep and alleviating gastrointestinal issues.",
      safetyPrecautions:
        "Generally safe; may cause allergic reactions in sensitive individuals.",
      culturalSignificance:
        "Used historically in herbal remedies and traditional medicine.",
      plantSuccess:
        "Widely cultivated for its therapeutic and ornamental value.",
      referenceLink: "https://en.wikipedia.org/wiki/Matricaria_chamomilla",
      "3dId": "31df46bbac484e3aa549032d8f321b6d" ,

    },
    {
      id: 7,
      name: "Ginger",
      scientificName: "Zingiber officinale",
      description:
        "Ginger is known for its ability to relieve nausea, improve digestion, and reduce inflammation.",
      image:
        "https://img.cdnx.in/372005/GingerBenefits-1717414249417-1717414342413.jpeg?width=600&format=webp",
      botanicalInfo: "A flowering plant with a rhizome used as a spice.",
      physicalDescription:
        "A thick, knotted underground stem with green leafy shoots.",
      habitat: "Native to Southeast Asia, thrives in warm and humid climates.",
      medicinalMethod:
        "Used fresh, dried, or powdered in culinary and medicinal applications.",
      conventionalComposition: "Contains gingerol, shogaol, and zingerone.",
      chemicalComposition: "Rich in phenolic compounds and essential oils.",
      pharmacologicalEffect:
        "Anti-nausea, anti-inflammatory, and antioxidant properties.",
      clinicalStudies:
        "Proven effective in managing nausea, arthritis, and digestive issues.",
      safetyPrecautions: "May cause heartburn or discomfort in high doses.",
      culturalSignificance: "Used in traditional Chinese and Indian medicine.",
      plantSuccess:
        "Cultivated globally for culinary, medicinal, and commercial uses.",
      referenceLink: "https://en.wikipedia.org/wiki/Ginger",
      "3dId": "2023c79497fb4f5f9d2373208a1e77bf" ,

    },
    {
      id: 8,
      name: "Turmeric",
      scientificName: "Curcuma longa",
      description:
        "Turmeric is celebrated for its anti-inflammatory and antioxidant properties.",
      image:
        "https://m.media-amazon.com/images/I/31xjAJjJXLL._AC_UF1000,1000_QL80_.jpg",
      botanicalInfo: "A rhizomatous herbaceous plant in the ginger family.",
      physicalDescription:
        "Bright yellow-orange rhizome with long green leaves.",
      habitat:
        "Native to South Asia, prefers tropical and subtropical climates.",
      medicinalMethod:
        "Powdered root is used in cooking, teas, and medicinal remedies.",
      conventionalComposition:
        "Contains curcumin, demethoxycurcumin, and bisdemethoxycurcumin.",
      chemicalComposition: "Rich in polyphenols and volatile oils.",
      pharmacologicalEffect:
        "Anti-inflammatory, antioxidant, and hepatoprotective properties.",
      clinicalStudies:
        "Effective in managing arthritis, skin conditions, and liver health.",
      safetyPrecautions:
        "Excessive use may cause stomach upset or interfere with medications.",
      culturalSignificance:
        "Used in Indian rituals, cuisine, and Ayurvedic medicine.",
      plantSuccess:
        "Extensively cultivated for culinary, medicinal, and cosmetic applications.",
      referenceLink: "https://en.wikipedia.org/wiki/Turmeric",
      "3dId": "05f6febc74134387901d7bb5aa8d2ffb" ,

    },
  ]);
   

  return (
    <div>
      
    </div>
  );
};

export default ThreeeDdata;
