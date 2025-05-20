const gavetas = [
  { codigo: "ARM1", localizacao: "1A", itens: ["FORWING", "Parafusos"] },
   { codigo: "Modulo - FERR", localizacao: "4D", itens: ["Chave de Retirada do Trem de Pouso, GEERs"] },
      { codigo: "SUPRI 2", localizacao: "10B", itens: ["ESCOVA DE BORDO"] },
      { codigo: "ARM2", localizacao: "6B", itens: ["ARRUELAS FINAS",] },
  { codigo: "FERRAMENTARIA", localizacao: "Modulo 5-i", itens: ["Omni Drive Professional",] },
      { codigo: "ARM4", localizacao: "9A", itens: ["ARRUELAS", "DIVERSAS MEDIDAS"] },
      { codigo: "ARM1", localizacao: "5B", itens: ["PARAFUSP 1/8", "PHILLIPS"] },
      { codigo: "FERRAMENTAS", localizacao: "MODULO 20F", itens: ["ALICATE VAZADO 6 FUROS", "ALICATE PARA ILHAS"] },
      { codigo: "FERRAMENTAS", localizacao: "CAIXA DE MARTELOS E ALICATE", itens: ["ALICATE DE 6 POSIÇÕES"] },
      { codigo: "SUPRI 2", localizacao: "3C", itens: ["PARAFUSO PEQUENO", "6X32"] },
      { codigo: "SUPRI 2", localizacao: "13C", itens: ["PORCA SEXTAVADA",] },
      { codigo: "SUPRI 2", localizacao: "4C", itens: ["ARUELA 5X32"] },
      { codigo: "FERRAMENTAS", localizacao: "CAIXA ESPECIAL (CINZA)", itens: ["MARTELOS", "ALICATES GERAIS"] },
      { codigo: "FERRAMENTAS", localizacao: "CAIXA ESPECIAL 19C", itens: ["CHAVE AJUSTÁVEL 10-12", "CATRACA 3/4"] },
      { codigo: "PLAT", localizacao: "7A", itens: ["BOLHA", "2 ITENS"] },
      { codigo: "FERRAMENTAS", localizacao: "MECÂNICO 17", itens: ["SOQUETE CURTO", "ALICATE DE FRENO", "9/16", "3/8", "1/2", "11/16", "5/8", "3/4", "7/8", "13/16", "5/16", "7/16"] },
      { codigo: "ARM4", localizacao: "9B", itens: ["PARAFUSO 7X16", "FORWING"] },
      { codigo: "SUPRI 2", localizacao: "7A", itens: ["PARAFUSO 7X16", "FORWING"] },
      { codigo: "ARM4", localizacao: "12F", itens: ["LINHA DE FÉ", "PASTAS"] },
      { codigo: "ARM3", localizacao: "1D", itens: ["ARRUELAS DIVERSAS",] },
  { codigo: "ARM2", localizacao: "6A", itens: ["RIVET 3x32",] },
  { codigo: "ARM1", localizacao: "11D", itens: ["RIVET 1x8",] },
  { codigo: "ARM2", localizacao: "5D", itens: ["PORCA SEXTAVADA",] },
      { codigo: "MODULO", localizacao: "14A", itens: ["DRENO", ""] },
      { codigo: "SUPRI 2", localizacao: "7A", itens: ["PORCAS PEQUENAS", "RUELAS"] },
      { codigo: "SUPRI 2", localizacao: "4A", itens: ["PORCAS PEQUENAS", "RUELAS DE AÇO PEQUENAS"] },
      { codigo: "SUPRI 2", localizacao: "4C", itens: ["PARAFUSOS BOLEADO MEDIDA GROSSA/PEQUENO"] },
      { codigo: "PLAT", localizacao: "4F", itens: ["ENFORCA GATO", "TAREP"] },
       { codigo: "PLAT", localizacao: "11E", itens: ["MANGUEIRA"] },
      { codigo: "PLAT", localizacao: "13B", itens: ["TUBE FUEL", ""] },
      { codigo: "PLAT", localizacao: "8D", itens: ["TUBE TRANSFERE FUEL", ""] },
      { codigo: "PLAT", localizacao: "5E", itens: ["PACKING PREFORMED", "TUBE TRANSFERE FUEL", "GASKET MANIFOLD",] },
  { codigo: "PLAT", localizacao: "8E", itens: ["PROTETOR AURICULAR",] },
      { codigo: "ARM4", localizacao: "5A", itens: ["PORCAS SEXTAVADAS", "PORCA ESPECIAL"] },
      { codigo: "ARM4", localizacao: "9D", itens: ["PARAFUSO SEXTAVADO", "PORCA SEXTAVADA EXTRIADA"] },
   { codigo: "ARM1", localizacao: "1F", itens: ["SCREW DE PLÁSTICO", "PARAFUSO DE PLASTICO"] },
      { codigo: "ARM4", localizacao: "9C", itens: ["CONTRA PINO GRANDE", ""] },
      { codigo: "ARM2", localizacao: "5D", itens: ["PORCA SEXTRAVADA GRANDE", ""] },
      { codigo: "ARM1", localizacao: "3C", itens: ["SEXTAVADO ROSCA TOTAL", "Parafusos"] },
      { codigo: "ARM1", localizacao: "10E", itens: ["SEXTAVADA 5X32", "CASTELO GRANDE"] },
      { codigo: "ARM1", localizacao: "4B", itens: ["SEXTAVADO", "SEXTAVADO COM CORPO"] },
      { codigo: "ARM1", localizacao: "1A,C,D,E", itens: ["BOLEADO COM CORPO", "COM ROSCA"] },
      { codigo: "ARM1", localizacao: "4C,D,E,F", itens: ["PHILLIPS", ""] },
      { codigo: "ARM1", localizacao: "5A,B", itens: ["FORWING", "Parafusos"] },
      { codigo: "ARM1", localizacao: "5C,D,E,F", itens: ["FORWING", ""] },
      { codigo: "ARM2", localizacao: "1A", itens: ["PORCA SEXTAVADA", "6X32"] },
      { codigo: "ARM SUPLI 2", localizacao: "8F", itens: ["PORCA CASTELO", "PORCA/SEXTAVADA"] },
      { codigo: "ARM1", localizacao: "12F", itens: ["CLIPNUT", ""] },
      { codigo: "ARM SUPLI 2", localizacao: "6B", itens: ["PARAFUSO 5X32", "FORWING"] },
      { codigo: "ARM1", localizacao: "5F", itens: ["SCREW", "PARAFUSO ESTRIADO"] },
      { codigo: "ARM1", localizacao: "6A", itens: ["DIVERSOS", ""] },
      { codigo: "ARM1", localizacao: "1B", itens: ["SCREW", "RIVET"] },
      { codigo: "ARM1", localizacao: "3A", itens: ["PARAFUSOS", "BOLT LISOS"] },
      { codigo: "ARM4", localizacao: "8C", itens: ["CLIPNUT", "CLIP DIVERSOS"] },
      { codigo: "ARM4", localizacao: "12F", itens: ["GRAXAS", "COLAS"] },
      { codigo: "ARM4", localizacao: "6B", itens: ["CONTRA PINO"] },
      { codigo: "ARM3 SUPRI 2", localizacao: "3A", itens: ["PARAFUSO ESTRIVADO 5/16", "DIVERSOS 5/32", "ESTRIADO"] },
      { codigo: "ARM3", localizacao: "5B", itens: ["RUELAS", "DIVERSOS TIPOS"] },
      { codigo: "PLAT", localizacao: "6B", itens: ["RIVET 5X32"] }
  
  // Adicione o restante dos dados aqui...
];

const container = document.getElementById('gavetasContainer');
    const detalhes = document.getElementById('detalhes');
    const searchInput = document.getElementById('searchInput');
    const themeToggle = document.getElementById('themeToggle');
    let isDarkMode = false;

    function mostrarGavetas(lista) {
      container.innerHTML = '';
      if (lista.length === 0) {
        container.innerHTML = `<div class="sem-resultados">Nenhum resultado encontrado.</div>`;
        return;
      }
      lista.forEach(g => {
        const div = document.createElement('div');
        div.className = 'gaveta';
        div.innerText = `${g.codigo} (${g.localizacao})`;
        div.onclick = () => mostrarDetalhes(g);
        container.appendChild(div);
      });
    }

    function mostrarDetalhes(gaveta) {
      detalhes.innerHTML = `
        <h3>📍 ${gaveta.codigo} - ${gaveta.localizacao}</h3>
        <ul>
          ${gaveta.itens.filter(item => item).map(item => `<li>🔧 ${item}</li>`).join('')}
        </ul>
      `;
      detalhes.style.display = 'block';
      window.scrollTo({ top: detalhes.offsetTop - 100, behavior: 'smooth' });
    }

    function filtrarGavetas(termo) {
      const termoMin = termo.toLowerCase();
      return gavetas.filter(g =>
        g.codigo.toLowerCase().includes(termoMin) ||
        g.localizacao.toLowerCase().includes(termoMin) ||
        g.itens.some(item => item.toLowerCase().includes(termoMin))
      );
    }

    searchInput.addEventListener('input', () => {
      const termo = searchInput.value.trim();
      const filtradas = filtrarGavetas(termo);
      mostrarGavetas(filtradas);
      detalhes.style.display = 'none';
    });

    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      isDarkMode = !isDarkMode;
      themeToggle.innerText = isDarkMode ? '✈︎' : '👨🏻‍✈️';
    });

    // Exibe todas ao carregar
    mostrarGavetas(gavetas);
