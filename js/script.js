document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileBtn = document.getElementById("mobile_btn");
  const mobileMenu = document.getElementById("mobile_menu");

  mobileBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    const icon = mobileBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
      mobileBtn.querySelector("i").classList.remove("fa-times");
      mobileBtn.querySelector("i").classList.add("fa-bars");
    });
  });

  // Scroll effect for header
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Set active nav item based on scroll position
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.querySelector("a").getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // Initialize ScrollReveal
  ScrollReveal().reveal("header", { duration: 2000 });
  ScrollReveal().reveal(".section-header", {
    origin: "top",
    distance: "30px",
    duration: 1000,
    delay: 200,
  });
  ScrollReveal().reveal(".produto-destaque", {
    interval: 200,
    origin: "bottom",
    distance: "30px",
    duration: 1000,
    delay: 300,
  });
  ScrollReveal().reveal(".carrossel-container", {
    origin: "bottom",
    distance: "30px",
    duration: 1000,
    delay: 400,
  });
  ScrollReveal().reveal(".sobre-content", {
    origin: "left",
    distance: "30px",
    duration: 1000,
    delay: 200,
  });
  ScrollReveal().reveal(".sobre-img", {
    origin: "right",
    distance: "30px",
    duration: 1000,
    delay: 300,
  });
  ScrollReveal().reveal(".endereco-info", {
    origin: "left",
    distance: "30px",
    duration: 1000,
    delay: 200,
  });
  ScrollReveal().reveal(".mapa", {
    origin: "right",
    distance: "30px",
    duration: 1000,
    delay: 300,
  });

  // Product data for popups - ESTRUTURA CORRIGIDA
const products = {
  1: {
    title: "Eco 400",
    ml: "400ml",
    desc: "O copo Eco é perfeito para quem busca sustentabilidade sem abrir mão do estilo. Feito com materiais duráveis, é ideal para uso diário ou eventos especiais.",
    features: [
      "16 opções de degrade",
      "8 opções de copo comum",
      "Arte colorida ou cor única",
      "Material resistente e durável",
      "Lavável na máquina de lavar louças",
      "Altura: 12cm"
    ],
    image: "./img/descricao/eco.jpg"
  },
  2: {
    title: "Taça de Gin",
    ml: "580ml",
    desc: "A Taça de Gin 580ml é perfeita para quem busca sofisticação sem abrir mão da funcionalidade. Com design que valoriza os aromas e amplia a experiência sensorial, é ideal para drinks premium ou momentos especiais.",
    features: [
      "16 opções de degrade",
      "Arte colorida ou cor única",
      "Formato que realça os aromas",
      "Pé alongado para não aquecer a bebida",
      "Boca larga",
      "Altura: 20cm"
    ],
    image: "./img/descricao/gin.jpg"
  },
  3: {
    title: "Caneca Long",
    ml: "420ml",
    desc: "Caneca de design alongado premium, ideal para cervejas artesanais, cafés gelados ou drinks especiais. Combina estilo e funcionalidade em um material durável.",
    features: [
      "16 opções de degrade para personalização",
      "Arte colorida ou cor única",
      "Formato ergonômico com pegada confortável",
      "Altura: 19cm"
    ],
    image: "./img/descricao/caneca-long.jpg"
  },
  4: {
    title: "Taça de Vinho",
    ml: "300ml",
    desc: "Taça clássica que valoriza aromas e taninos, perfeita para degustação profissional de tintos e brancos. Design que harmoniza tradição e performance enológica.",
    features: [
      "16 opções de degrade para personalização",
      "Arte colorida ou cor única",
      "Formato tulipa para oxigenação ideal",
      "Haste longa para não transferir calor",
      "Boca estreita para concentrar aromas",
      "Altura: 23cm"
    ],
    image: "./img/descricao/vinho.jpg"
  },
  5: {
    title: "Long Drink",
    ml: "350ml",
    desc: "Copo profissional para drinks gelados, com formato alongado que mantém a temperatura ideal e valoriza apresentação de camadas. Ideal para coquetéis, cervejas artesanais ou refrigerantes premium.",
    features: [
      "16 opções de degradê para personalização",
      "Arte colorida ou cor única",
      "Formato alongado ideal para drinks com gelo",
      "Boca larga para decoração de frutas e ervas",
      "Base estável antiderrapante",
      "Altura: 21cm",
      "Material resistente a condensação"
    ],
    image: "./img/descricao/long.jpg"
  },
  6: {
    title: "Caneca",
    ml: "300ml",
    desc: "Caneca versátil para bebidas quentes ou geladas, com design ergonômico e equilíbrio perfeito entre capacidade e conforto. Ideal para cafés especiais, cervejas artesanais ou consumo diário.",
    features: [
      "16 opções de degradê para personalização",
      "Arte colorida ou cor única",
      "Formato clássico com cabo anatômico",
      "Boca larga para fácil limpeza e consumo",
      "Base estável antiderrapante",
      "Altura: 12cm (com cabo)",
      "Material resistente a choques térmicos"
    ],
    image: "./img/descricao/caneca.jpg"
  },
  7: {
    title: "Copo Whisky 350ml",
    ml: "350ml",
    desc: "Copo clássico para degustação de whiskies, com base pesada que garante equilíbrio e formato que libera os aromas gradualmente. Ideal para apreciadores de destilados premium.",
    features: [
      "16 opções de degradê para personalização",
      "Arte colorida ou cor única",
      "Base pesada para melhor estabilidade",
      "Boca estreita que concentra aromas",
      "Altura: 10cm | Diâmetro: 7cm",
      "Espessura reforçada (4mm)"
    ],
    image: "./img/descricao/whisky.jpg"
  },
  8: {
    title: "Tulipa",
    ml: "300ml",
    desc: "Taça profissional para cervejas artesanais, com formato tulipa que aprisiona aromas e mantém a espuma cremosa. Ideal para IPAs, Ales e cervejas de alta complexidade.",
    features: [
      "16 opções de degrade para personalização",
      "Arte colorida ou cor única",
      "Corpo arredondado para desenvolvimento ideal da espuma",
      "Boca curvada que direciona aromas",
      "Altura: 22cm | Diâmetro do bojo: 9cm",
      "Base estreita antiderrapante"
    ],
    image: "./img/descricao/tulipa.jpg"
  },
  9: {
    title: "Rubizinho",
    ml: "200ml",
    desc: "Copo compacto e versátil para shots e drinks curtos, com design que une praticidade e estilo. Ideal para bares, festas temáticas ou como brinde criativo.",
    features: [
      "16 opções de degrade para personalização",
      "Arte colorida ou cor única",
      "Formato ergonômico para fácil manuseio",
      "Base estável antiderrapante",
      "Altura: 8cm | Diâmetro: 6cm",
      "Material resistente a impacto",
      "Empilhável para armazenamento prático"
    ],
    image: "./img/descricao/rubizinho.jpg"
  },
  10: {
    title: "Garrafa Acquabio",
    ml: "475ml",
    desc: "Garrafa premium para hidratação diária, com design ergonômico e tecnologia que mantém líquidos na temperatura ideal. Perfeita para uso esportivo, profissional ou lifestyle.",
    features: [
      "16 opções de degrade para personalização",
      "Arte colorida ou cor única",
      "Tampa anti-vazamento com rosca segura",
      "Boca larga (4cm) para fácil enchimento",
      "Altura: 24cm | Diâmetro: 7cm",
      "Material livre de BPA e atóxico",
      "Resistente a quedas (revestimento duplo)"
    ],
    image: "./img/descricao/garrafa.jpg"
  },
  11: {
    title: "Twister com Tampa",
    ml: "480ml",
    desc: "Copo inteligente com vedação 100% estanque, ideal para smoothies, shakes e bebidas geladas. Design ergonômico que evita vazamentos e mantém a temperatura durante atividades físicas ou deslocamentos.",
    features: [
      "16 opções de degrade para personalização",
      "Arte colorida ou cor única",
      "Altura: 19cm | Diâmetro: 7.5cm",
      "Compatível com canudos reutilizáveis"
    ],
    image: "./img/descricao/twister.jpg"
  },
  12: {
    title: "Balde de Gelo",
    ml: "5000ml",
    desc: "Balde profissional para resfriamento rápido de bebidas, com capacidade generosa para garrafas e latas. Ideal para bares, eventos e churrascos, mantendo drinks gelados por horas.",
    features: [
      "16 opções de degrade para personalização",
      "Arte colorida ou cor única",
      "Alças duplas reforçadas para transporte seguro",
      "Dimensões: 23cm (alt) x 25cm (diâm)",
      "Material plástico atóxico grau alimentício",
      "Empilhável para armazenamento compacto"
    ],
    image: "./img/descricao/balde.jpg"
  }
};

  // Popup functionality
  const popupOverlay = document.getElementById("popupOverlay");
  const popupClose = document.getElementById("popupClose");
  const popupImage = document.getElementById("popupImage");
  const popupTitle = document.getElementById("popupTitle");
  const popupMl = document.getElementById("popupMl");
  const popupDesc = document.getElementById("popupDesc");
  const popupFeatures = document.getElementById("popupFeatures");
  const btnPedidoPopup = document.getElementById("btnPedidoPopup");

  // Open popup when "Mais Informações" button is clicked
  document.querySelectorAll(".btn-info").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-produto-id");
      const product = products[productId];

      popupImage.src = product.image;
      popupImage.alt = product.title;
      popupTitle.textContent = product.title;
      popupMl.textContent = product.ml;
      popupDesc.textContent = product.desc;

      // Clear previous features
      popupFeatures.innerHTML = "";

      // Add new features
      product.features.forEach((feature) => {
        const li = document.createElement("li");
        li.textContent = feature;
        popupFeatures.appendChild(li);
      });

      // Set product name for order button
      btnPedidoPopup.setAttribute("data-produto", product.title);

      // Show popup
      popupOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Close popup
  popupClose.addEventListener("click", function () {
    popupOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  popupOverlay.addEventListener("click", function (e) {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // WhatsApp order functionality
  const whatsappNumber = "5521987654321"; // Replace with your WhatsApp number
  const whatsappMessage = "Olá, gostaria de fazer um pedido do produto: ";

  document
    .querySelectorAll(".btn-pedido, #btnPedidoPopup")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const productName = this.getAttribute("data-produto");
        const encodedMessage = encodeURIComponent(
          whatsappMessage + productName
        );
        window.open(
          `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
          "_blank"
        );
      });
    });
});
