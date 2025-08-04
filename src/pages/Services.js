import React, { useEffect, useRef } from "react";
import saree from "../pictures/saree.jpg";
import saree1 from "../pictures/saree1.webp";
import saree2 from "../pictures/saree2.jpg";
import saree3 from "../pictures/saree3.webp";
import saree4 from "../pictures/saree4.webp";
import readymade from "../pictures/readymade.webp";
import readymade1 from "../pictures/readymade1.jpg";
import readymade2 from "../pictures/readymade2.jpg";
import readymade3 from "../pictures/readymade3.webp";
import readymade4 from "../pictures/readymade4.jpg";
import readymade5 from "../pictures/readymade5.webp";
import embroidery from "../pictures/Embroidery.webp";
import embroidery1 from "../pictures/Embroidery1.jpg";
import embroidery2 from "../pictures/Embroidery2.png";
import embroidery3 from "../pictures/Embroidery3.jpg";
import embroidery4 from "../pictures/Embroidery4.jpg";
import embroidery5 from "../pictures/Embroidery5.jpg";
import jewelry1 from "../pictures/jewelry1.webp";
import jewelry from "../pictures/jewelry.webp";
import jewelry2 from "../pictures/jewelry2.webp";
import jewelry3 from "../pictures/jewelry3.webp";
import jewelry4 from "../pictures/jewelry4.jpg";
import jewelry5 from "../pictures/jewelry5.jpg";
import "../style/services.css";

const Services = () => {
  const sliderRef = useRef(null);

  const images = [saree, saree2, saree1, saree3, saree4];
  const readymadeImages = [readymade, readymade1, readymade2, readymade3, readymade4, readymade5];
  const embroideryImages = [embroidery, embroidery1, embroidery2, embroidery3, embroidery4, embroidery5];
  const jewelryImages = [jewelry, jewelry1, jewelry2, jewelry3, jewelry4, jewelry5];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
        index = (index + 1) % readymadeImages.length;
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [readymadeImages.length]);

  const sections = [
    {
      images: images,
      collection: {
        category: "🧵 Saree Collections",
        items: [
          {
            title: "Kanchipuram Silk Sarees",
            desc: "Premium South Indian sarees made from pure mulberry silk with rich borders, traditional motifs, and grand zari work. Perfect for weddings and temple festivals.",
          },
          {
            title: "Banarasi Silk Sarees",
            desc: "Woven in Varanasi with intricate gold and silver zari. Ideal for bridal and festive occasions with floral and Mughal designs.",
          },
          {
            title: "Chettinad Cotton Sarees",
            desc: "Handwoven sarees with bold checks and temple borders. Lightweight, breathable, and perfect for everyday wear.",
          },
          {
            title: "Georgette & Chiffon Sarees",
            desc: "Soft, flowing sarees embellished with sequins, beads, or stones. Suitable for parties and evening functions.",
          },
        ],
      },
    },
    {
      images: readymadeImages,
      collection: {
        category: "👗 Ready-Made Wear",
        items: [
          {
            title: "Women’s Kurtis & Salwars",
            desc: "Stylish kurtis and salwars in cotton, rayon, and georgette with trendy prints and embroidery. Ready to wear.",
          },
          {
            title: "Men’s Kurta Sets",
            desc: "Ethnic kurta sets for men in cotton and silk blends. Suitable for weddings, festivals, and family functions.",
          },
          {
            title: "Kidswear",
            desc: "Adorable frocks, lehengas, dhotis, and kurta sets for kids aged 1–12 years. Perfect for all occasions.",
          },
        ],
      },
    },
    {
      images: embroideryImages,
      collection: {
        category: "✨ Embroidery Services",
        items: [
          {
            title: "Pencil Embroidery Blouses",
            desc: "Hand-sketched embroidery filled with colorful thread. Great for custom blouses with floral and bridal motifs.",
          },
          {
            title: "Aari & Zardosi Work",
            desc: "Heavy bridal embroidery for blouses, lehengas, and sarees using beads, zari, and sequins.",
          },
          {
            title: "Custom Embroidery",
            desc: "Tailored embroidery for dresses, dupattas, and name initials. Available in hand and machine styles.",
          },
        ],
      },
    },
    {
      images: jewelryImages,
      collection: {
        category: "💎 Gold Covering Jewelry",
        items: [
          {
            title: "Gold Necklace Sets",
            desc: "Imitation bridal sets with temple design and antique polish. Available in various sizes and styles.",
          },
          {
            title: "Earrings – Jhumkas, Studs & Drops",
            desc: "Trendy imitation earrings including jhumkas, studs, and chandbalis decorated with stones and pearls.",
          },
          {
            title: "Bangles, Rings, Anklets",
            desc: "Gold-finish bangles, rings, and anklets suitable for all age groups.",
          },
          {
            title: "Bridal Combo Sets",
            desc: "Complete bridal combos with necklace, earrings, hip belt, maang tikka, and more.",
          },
        ],
      },
    },
  ];

  return (
    <section className="collection-section">
      <section className="collections-section1">
        
        <h2 className="collections-heading">✨ Explore Our Collections</h2>
        <p className="collections-text">
          At <strong>Sangavi Sarees & Collections</strong>, we bring tradition, elegance, and style together.
          From handpicked silk sarees to stunning embroidery and stylish readymade outfits, our collection is crafted
          to make every occasion special.
        </p>
      </section>

      <div className="container">
        {sections.map((section, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">
              <div className="scheme-img">
                <div className="flex flex-wrap justify-center items-center gap-6 py-8">
                  {section.images.map((img, index) => (
                    <div key={index} className="saree-3d-box">
                      <img src={img} alt={`item-${index + 1}`} className="saree-3d-img" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="collection-box">
                <h2 className="collection-title">{section.collection.category}</h2>
                {section.collection.items.map((item, i) => (
                  <div key={i} className="item-box">
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
