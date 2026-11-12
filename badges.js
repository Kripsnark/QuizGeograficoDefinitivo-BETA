// === SISTEMA BADGE E TROFEI ===

const SVG_ICONS = {
    vendicatore: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    conquistatore: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10"/><path d="M17 4v8a5 5 0 0 1-10 0V4"/><path d="M4 4h3v8a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V4h3"/></svg>`,
    maratoneta: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    inarrestabile: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    scheggia: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    fotofinish: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>`,
    grazia: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12a10.06 10.06 1 0 0-20 0Z"></path><path d="M12 12v8a2 2 0 0 0 4 0"></path><path d="M12 2v1"></path></svg>`,
    infermiere: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path><line x1="12" y1="8" x2="12" y2="14"></line><line x1="9" y1="11" x2="15" y2="11"></line></svg>`,
    veterano: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    lucido: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon></svg>`,
    infallibile: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4"></path></svg>`,
    fenice: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c0 0-5 3.5-5 9 0 4.5 3 6.5 5 11 2-4.5 5-6.5 5-11 0-5.5-5-9-5-9z"></path></svg>`,
    cyborg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    sestosenso: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    vololinea: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 4-4 4-2.5-1-1 1 3.5 3.5 3.5 3.5 1-1-1-2.5 4-4 4 6l1.2-.7c.4-.2.7-.6.6-1.1z"/></svg>`,
    blacklist: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>`,
    hub: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    rotta: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 16l4-4-4-4"></path><path d="M20 12H11"></path><path d="M7 12h.01"></path><path d="M3 12h.01"></path></svg>`,
    pendolare: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12A10 10 0 0 0 12 2v4a6 6 0 0 1 6 6h4z"></path><path d="M2 12a10 10 0 0 0 10 10v-4a6 6 0 0 1-6-6H2z"></path><polyline points="2 7 2 12 7 12"></polyline><polyline points="22 17 22 12 17 12"></polyline></svg>`,
    magellano: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>`,
    ascensione: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3l4 8 5-5 5 15H2L8 3z"></path></svg>`,
    cecchino: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`}
};

const BADGE_INFO = {
    vendicatore: { title: "Visto Rinnovato", flavor: "La burocrazia è sistemata.", req: "Azzera i debiti nella modalità Recupero.", tiers: [4, 8, 14] },
    conquistatore: { title: "Esploratore", flavor: "Hai mappato una nuova area.", req: "Vinci una partita superando il punteggio target.", tiers: [1, 3, 10] },
    maratoneta: { title: "Millemiglia", flavor: "Viaggi in continuazione senza stancarti.", req: "Raggiungi un alto numero di risposte esatte in una singola partita.", tiers: [16, 31, 61] },
    inarrestabile: { title: "Senza Scalo", flavor: "Un volo diretto lunghissimo.", req: "Mantieni una lunga serie di risposte esatte consecutive.", tiers: [15, 30, 50] },
    scheggia: { title: "Teletrasporto", flavor: "Non usi l'aereo, ti teletrasporti.", req: "Mantieni un tempo medio di risposta bassissimo a fine partita.", tiers: [15, 10, 5], isInverse: true },
    fotofinish: { title: "Scatto al Gate", flavor: "Passi i controlli all'ultimo secondo.", req: "Salvati dallo scadere del timer negli ultimi istanti per più volte.", tiers: [1, 3, 5] },
    grazia: { title: "Viaggio in Solitaria", flavor: "Fai a meno della guida turistica.", req: "Supera i turni combo senza ricevere Grazie dal sistema.", tiers: [2, 1, 0], isInverse: true },
    infermiere: { title: "Assicurazione di Viaggio", flavor: "Copertura perfetta per gli imprevisti.", req: "Accumula cuori extra totalizzando punti a scaglioni di 750.", tiers: [3, 5, 10] },
    veterano: { title: "Passaporto Pieno", flavor: "Riempi il passaporto di timbri.", req: "Gioca un altissimo numero di domande totali in una partita.", tiers: [36, 80, 150] },
    lucido: { title: "GPS Umano", flavor: "Non passi mai due volte dalla stessa strada.", req: "Gioca almeno 50 domande senza mai subire la penalità pigrizia (Déjà vu).", tiers: [1, 1, 1], isSpecial: true },
    infallibile: { title: "Rotta Perfetta", flavor: "Itinerario calcolato al millimetro.", req: "Vinci una partita senza commettere nessun errore.", tiers: [1, 1, 1], isSpecial: true },
    fenice: { title: "Sopravvissuto", flavor: "Perso nel nulla ma continui ad andare.", req: "Costruisci una serie di risposte esatte avendo un solo cuore rimasto.", tiers: [3, 5, 10] },
    cyborg: { title: "Autopilota", flavor: "La macchina da quiz perfetta.", req: "Ottieni contemporaneamente l'Oro in Senza Scalo e l'Oro in Teletrasporto.", tiers: [1, 1, 1], isSpecial: true, isSecret: true },
    sestosenso: { title: "Volo alla Cieca", flavor: "Navighi a intuito senza guardare.", req: "Ottieni la Vittoria Leggendaria (10.000 pt) nel Livello 7.", tiers: [1, 1, 1], isSpecial: true, isSecret: true },	
    vololinea: { title: "Volo di Linea", flavor: "Prendi sempre la stessa tratta.", req: "Usa la stessa nazione ripetutamente nella stessa partita.", tiers: [4, 7, 10] },
    blacklist: { title: "Blacklist Doganale", flavor: "Ti rifiutano il visto in continuazione.", req: "Ignora la stessa nazione ripetutamente in una singola partita.", tiers: [4, 7, 10] },
    hub: { title: "Hub Principale", flavor: "Tutti i tuoi voli passano da qui.", req: "La nazione più usata in partita deve doppiare la più ignorata (min. 5 usi).", tiers: [1, 1, 1], isSpecial: true },
    rotta: { title: "Rotta Abbandonata", flavor: "Quell'aeroporto ha chiuso i battenti.", req: "Ignora la stessa nazione per 10 partite consecutive (Storico).", tiers: [1, 1, 1], isSpecial: true },
    pendolare: { title: "Pendolare", flavor: "Fai sempre la stessa strada.", req: "Usa la stessa nazione in più partite consecutive (Storico).", tiers: [3, 7, 20] },
    magellano: { title: "Giro del Mondo", flavor: "Hai visto ogni angolo del pianeta.", req: "Usa ogni singola nazione del gioco (Statistica Globale).", tiers: [1, 4, 10] },
    ascensione: { title: "Ascensione Geografica", flavor: "Hai scalato l'Olimpo della perfezione.", req: "Vinci i Livelli 1, 2, 3 e 4 senza mai commettere un singolo errore.", tiers: [1, 1, 1], isSpecial: true, isSecret: true },
    cecchino: { title: "Sestante d'Oro", flavor: "Navighi tra le opzioni con precisione assoluta.", req: "Ottieni punteggio pieno in domande combo da almeno 4 risposte.", tiers: [2, 5, 10] }
;

// --- MAPPATURA TROFEI REGIONALI SEGRETI ---
const CONQUISTE_AREE = {
    "europa": { id: "area_europa", title: "Dominatore del Vecchio Mondo", flavor: "Hai sottomesso l'intero continente antico.", req: "Nomina tutte le nazioni dell'Europa in una singola partita." },
    "asia": { id: "area_asia", title: "Gran Khan", flavor: "Il più vasto impero della storia è tuo.", req: "Nomina tutte le nazioni dell'Asia in una singola partita." },
    "africa": { id: "area_africa", title: "Leone d'Africa", flavor: "Il continente originario si inchina a te.", req: "Nomina tutte le nazioni dell'Africa in una singola partita." },
    "americhe": { id: "area_americhe", title: "Sovrano del Nuovo Mondo", flavor: "Da un polo all'altro, le Americhe sono tue.", req: "Nomina tutte le nazioni delle Americhe in una singola partita." },
    "nord america": { id: "area_nordamerica", title: "Padre Fondatore", flavor: "Padrone incontrastato del grande nord.", req: "Nomina tutte le nazioni del Nord America in una singola partita." },
    "sud america": { id: "area_sudamerica", title: "Libertador Supremo", flavor: "Hai forgiato il destino del continente sud.", req: "Nomina tutte le nazioni del Sud America in una singola partita." },
    "america centrale": { id: "area_centroamerica", title: "Dominatore dell'Istmo", flavor: "Padrone del ponte di terra tra i due mondi.", req: "Nomina tutte le nazioni dell'America Centrale in una singola partita." },
    "oceania": { id: "area_oceania", title: "Navigatore Polinesiano", flavor: "Signore degli atolli e degli oceani sconfinati.", req: "Nomina tutte le nazioni dell'Oceania in una singola partita." },
    "caraibi": { id: "area_caraibi", title: "Re dei Pirati", flavor: "Ogni isola caraibica è il tuo covo.", req: "Nomina tutte le nazioni dei Caraibi in una singola partita." },
    "ande": { id: "area_ande", title: "Sapa Inca", flavor: "Imperatore delle vette sudamericane.", req: "Nomina tutte le nazioni andine in una singola partita." },
    "amazzonia": { id: "area_amazzonia", title: "Sciamano della Selva", flavor: "I segreti del polmone verde sono tuoi.", req: "Nomina tutte le nazioni dell'Amazzonia in una singola partita." },
    "mediterraneo": { id: "area_mediterraneo", title: "Imperatore Romano", flavor: "Hai ripristinato il dominio sul Mare Nostrum.", req: "Nomina tutte le nazioni del bacino Mediterraneo in una singola partita." },
    "balcani": { id: "area_balcani", title: "Zar dei Balcani", flavor: "Hai unificato la polveriera d'Europa.", req: "Nomina tutte le nazioni dei Balcani in una singola partita." },
    "paesi baltici": { id: "area_baltici", title: "Cavaliere Teutonico", flavor: "Conquista le repubbliche del freddo nord.", req: "Nomina tutte le nazioni dei Paesi Baltici in una singola partita." },
    "benelux": { id: "area_benelux", title: "Granduca di Borgogna", flavor: "Le terre basse sono sotto il tuo dominio.", req: "Nomina le nazioni del Benelux in una singola partita." },
    "caucaso": { id: "area_caucaso", title: "Signore delle Montagne", flavor: "Hai domato le cime inespugnabili d'oriente.", req: "Nomina tutte le nazioni del Caucaso in una singola partita." },
    "medio oriente": { id: "area_medioriente", title: "Sultano Supremo", flavor: "Sovrano assoluto della mezzaluna fertile.", req: "Nomina tutte le nazioni del Medio Oriente in una singola partita." },
    "penisola arabica": { id: "area_arabia", title: "Emiro Assoluto", flavor: "Controlla ogni duna della Penisola Arabica.", req: "Nomina tutte le nazioni della Penisola Arabica in una singola partita." },
    "penisola scandinava": { id: "area_scandinavia", title: "Jarl del Nord", flavor: "Le gelide terre vichinghe ti appartengono.", req: "Nomina tutte le nazioni della Penisola Scandinava in una singola partita." },
    "penisola iberica": { id: "area_iberica", title: "Conquistador", flavor: "Padrone incontrastato oltre le Colonne d'Ercole.", req: "Nomina tutte le nazioni della Penisola Iberica in una singola partita." },
    "penisola indocinese": { id: "area_indocina", title: "Re del Mekong", flavor: "Signore delle antiche valli orientali.", req: "Nomina tutte le nazioni della Penisola Indocinese in una singola partita." },
    "subcontinente indiano": { id: "area_india", title: "Maharaja", flavor: "Sovrano indiscusso delle Indie.", req: "Nomina tutte le nazioni del Subcontinente Indiano in una singola partita." },
    "sud-est asiatico": { id: "area_sudestasia", title: "Domatore di Tigri", flavor: "Signore delle giungle e dei monsoni.", req: "Nomina tutte le nazioni del Sud-Est Asiatico in una singola partita." },
    "asia centrale": { id: "area_asiacentrale", title: "Signore della Steppa", flavor: "I signori dei cavalli galoppano per te.", req: "Nomina tutte le nazioni dell'Asia Centrale in una singola partita." },
    "asia orientale": { id: "area_asiaest", title: "Dragone d'Oriente", flavor: "Il Sole sorge e tramonta sul tuo impero.", req: "Nomina tutte le nazioni dell'Asia Orientale in una singola partita." },
    "africa settentrionale": { id: "area_africanord", title: "Faraone del Deserto", flavor: "Domina le immense sabbie del nord.", req: "Nomina tutte le nazioni dell'Africa Settentrionale in una singola partita." },
    "africa occidentale": { id: "area_africaovest", title: "Mansa dell'Impero", flavor: "Signore incontrastato delle rotte dell'oro.", req: "Nomina tutte le nazioni dell'Africa Occidentale in una singola partita." },
    "africa orientale": { id: "area_africaest", title: "Sultano di Zanzibar", flavor: "Domina i venti e i mercati della costa Swahili.", req: "Nomina tutte le nazioni dell'Africa Orientale in una singola partita." },
    "africa meridionale": { id: "area_africasud", title: "Re Zulu", flavor: "Guerriero supremo delle terre del sud.", req: "Nomina tutte le nazioni dell'Africa Meridionale in una singola partita." },
    "africa centrale": { id: "area_africacentro", title: "Signore dell'Equatore", flavor: "Padrone assoluto del cuore selvaggio del continente.", req: "Nomina tutte le nazioni dell'Africa Centrale in una singola partita." },
    "corno d'africa": { id: "area_corno", title: "Negus dei Re", flavor: "Sovrano dei grandi altopiani e del mar Rosso.", req: "Nomina tutte le nazioni del Corno d'Africa in una singola partita." },
    "golfo di guinea": { id: "area_guinea", title: "Oba del Benin", flavor: "Signore indiscusso delle ricche coste d'avorio.", req: "Nomina tutte le nazioni del Golfo di Guinea in una singola partita." }
};

const SVG_CORONA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="2 20 22 20 20 6 16 11 12 4 8 11 4 6 2 20"></polygon></svg>`;

Object.values(CONQUISTE_AREE).forEach(data => {
    SVG_ICONS[data.id] = SVG_CORONA;
    BADGE_INFO[data.id] = { title: data.title, flavor: data.flavor, req: data.req, tiers: [1, 1, 1], isSpecial: true, isSecret: true };
});

let userBadges = JSON.parse(localStorage.getItem('geoQuizBadges')) || {};

window.checkBadges = function(gameData) {
    let { currentLevel, esatte, isVictory, debitiIniziali, debitiRimasti, bestStreak, avgTime, fotofinish, grazie, cuori, domandeTotali, hasDejavu, erroriTotali, bestStreakOneLife, punteggio, maxVoloDiLinea, maxBlacklist, top1UsataVal, top1IgnorataVal, maxPendolare, maxRotta } = gameData;
    let sessionEarned = []; 
    let storicoAggiornato = false;

    const assegnaTier = (id, rawValue, tier, motivo, isInverse = false, isCumulative = false) => {
        let isSandbox = [0, 5, 6, 8].includes(currentLevel) && id !== 'vendicatore';
        let isNewTier = false;

        if (!isSandbox) {
            let oldTier = 0;
            let info = BADGE_INFO[id];
            
            // IL PARACADUTE: Se ti scordi di aggiungere un badge al dizionario, non crasha più!
            if (!info) return; 

            let oldVal = userBadges[id];

            if (oldVal !== undefined && oldVal !== 9999 && oldVal !== 0) {
                if (info.isSpecial) {
                    oldTier = 4;
                } else if (isInverse) {
                    if (oldVal <= info.tiers[2]) oldTier = 3;
                    else if (oldVal <= info.tiers[1]) oldTier = 2;
                    else if (oldVal <= info.tiers[0]) oldTier = 1;
                } else {
                    if (oldVal >= info.tiers[2]) oldTier = 3;
                    else if (oldVal >= info.tiers[1]) oldTier = 2;
                    else if (oldVal >= info.tiers[0]) oldTier = 1;
                }
            }

            if (tier > oldTier) {
                isNewTier = true;
            }

            let currentBest = oldVal !== undefined ? oldVal : (isInverse ? 9999 : 0);
            if (isCumulative) {
                userBadges[id] = currentBest + rawValue;
                storicoAggiornato = true;
            } else if ((!isInverse && rawValue > currentBest) || (isInverse && rawValue < currentBest)) {
                userBadges[id] = rawValue;
                storicoAggiornato = true;
            }
        }
        
        sessionEarned.push({ id, tier, motivo, isNewTier }); 
    };

    // ==========================================
    // 1. TROFEI UNIVERSALI
    // ==========================================
    if (domandeTotali >= 150) assegnaTier('veterano', domandeTotali, 3, "Giocate 150 domande");
    else if (domandeTotali >= 80) assegnaTier('veterano', domandeTotali, 2, "Giocate 80 domande");
    else if (domandeTotali > 35) assegnaTier('veterano', domandeTotali, 1, "Giocate almeno 35 domande");

    if (currentLevel !== 0) {
        if (esatte >= 60) assegnaTier('maratoneta', esatte, 3, "Superate le 60 risposte");
        else if (esatte >= 30) assegnaTier('maratoneta', esatte, 2, "Superate le 30 risposte");
        else if (esatte >= 15) assegnaTier('maratoneta', esatte, 1, "Superate le 15 risposte");
    }

    if (bestStreak >= 50) assegnaTier('inarrestabile', bestStreak, 3, "Serie di 50 risposte");
    else if (bestStreak >= 30) assegnaTier('inarrestabile', bestStreak, 2, "Serie di 30 risposte");
    else if (bestStreak >= 15) assegnaTier('inarrestabile', bestStreak, 1, "Serie di 15 risposte");

    if (isVictory && erroriTotali === 0 && currentLevel !== 0) {
        assegnaTier('infallibile', 1, 4, "Vittoria impeccabile senza errori");
        
        if (currentLevel >= 1 && currentLevel <= 4) {
            let perfectLevels = JSON.parse(localStorage.getItem('geoQuizPerfectLevels')) || [];
            if (!perfectLevels.includes(currentLevel)) {
                perfectLevels.push(currentLevel);
                localStorage.setItem('geoQuizPerfectLevels', JSON.stringify(perfectLevels));
            }
            if (perfectLevels.length === 4) {
                assegnaTier('ascensione', 1, 4, "Hai vinto tutti i livelli principali senza errori!");
            }
        }
    }

    // ==========================================
    // 2. TROFEO ESCLUSIVO LIVELLO 8
    // ==========================================
    if (currentLevel === 8) {
        let debitiSaldati = debitiIniziali - debitiRimasti;
        if (debitiSaldati >= 14) assegnaTier('vendicatore', debitiSaldati, 3, "Saldati 27 debiti");
        else if (debitiSaldati >= 8) assegnaTier('vendicatore', debitiSaldati, 2, "Saldati 15 debiti");
        else if (debitiSaldati >= 4) assegnaTier('vendicatore', debitiSaldati, 1, "Saldati 8 debiti");
    }

    // ==========================================
    // 3. TROFEI STANDARD E COMBO
    // ==========================================
    if (currentLevel !== 8) {
        let perfectCombosCount = 0;
        if (typeof debugGameLog !== 'undefined') {
            let matches = debugGameLog.match(/\[(400|500)pti\]:\s*✅\s*SUPERATA/g);
            if (matches) perfectCombosCount = matches.length;
        }

        if (perfectCombosCount >= 10) assegnaTier('cecchino', perfectCombosCount, 3, "10 Combo Perfette (400/500pt)");
        else if (perfectCombosCount >= 5) assegnaTier('cecchino', perfectCombosCount, 2, "5 Combo Perfette (400/500pt)");
        else if (perfectCombosCount >= 2) assegnaTier('cecchino', perfectCombosCount, 1, "2 Combo Perfette (400/500pt)");

        if (cuori >= 10) assegnaTier('infermiere', cuori, 3, "Guadagnati 10 cuori extra");
        else if (cuori >= 5) assegnaTier('infermiere', cuori, 2, "Guadagnati 5 cuori extra");
        else if (cuori >= 3) assegnaTier('infermiere', cuori, 1, "Guadagnati 3 cuori extra");

        if (esatte >= 10) {
            if (fotofinish >= 5) assegnaTier('fotofinish', fotofinish, 3, "Salvataggi in extremis: 5");
            else if (fotofinish >= 3) assegnaTier('fotofinish', fotofinish, 2, "Salvataggi in extremis: 3");
            else if (fotofinish >= 1) assegnaTier('fotofinish', fotofinish, 1, "Salvataggi in extremis: 1");

            if (avgTime > 0) {
                if (currentLevel === 0) {
                    if (avgTime <= 1.5) assegnaTier('scheggia', avgTime, 3, "Tempo medio ≤ 1.5s (Lv0)", true);
                    else if (avgTime <= 4) assegnaTier('scheggia', avgTime, 2, "Tempo medio ≤ 4s (Lv0)", true);
                    else if (avgTime <= 10) assegnaTier('scheggia', avgTime, 1, "Tempo medio ≤ 10s (Lv0)", true);
                } else {
                    if (avgTime <= 5) assegnaTier('scheggia', avgTime, 3, "Tempo medio ≤ 5s", true);
                    else if (avgTime <= 10) assegnaTier('scheggia', avgTime, 2, "Tempo medio ≤ 10s", true);
                    else if (avgTime <= 15) assegnaTier('scheggia', avgTime, 1, "Tempo medio ≤ 15s", true);
                }
            }
        }

        if ((currentLevel === 4 || currentLevel === 5) && esatte >= 40) {
            if (grazie <= 0) assegnaTier('grazia', grazie, 3, "Nessuna grazia ricevuta", true);
            else if (grazie <= 1) assegnaTier('grazia', grazie, 2, "Solo 1 grazia ricevuta", true);
            else if (grazie <= 2) assegnaTier('grazia', grazie, 1, "Meno di 3 grazie ricevute", true);
        }

        if (maxVoloDiLinea >= 10) assegnaTier('vololinea', maxVoloDiLinea, 3, "Nazione usata 10 volte");
        else if (maxVoloDiLinea >= 7) assegnaTier('vololinea', maxVoloDiLinea, 2, "Nazione usata 7 volte");
        else if (maxVoloDiLinea >= 4) assegnaTier('vololinea', maxVoloDiLinea, 1, "Nazione usata 4 volte");

        if (maxBlacklist >= 10) assegnaTier('blacklist', maxBlacklist, 3, "Nazione ignorata 10 volte");
        else if (maxBlacklist >= 7) assegnaTier('blacklist', maxBlacklist, 2, "Nazione ignorata 7 volte");
        else if (maxBlacklist >= 4) assegnaTier('blacklist', maxBlacklist, 1, "Nazione ignorata 4 volte");

        if (top1UsataVal >= 5 && top1UsataVal >= (top1IgnorataVal * 2)) {
            assegnaTier('hub', 1, 3, "Top 1 usata DOPPIA rispetto alla Top 1 ignorata");
        }

        if (maxRotta >= 10) {
            assegnaTier('rotta', 1, 3, "Nazione ignorata in 10 partite consecutive");
        }

        if (maxPendolare >= 20) assegnaTier('pendolare', maxPendolare, 3, "Nazione usata in 20 partite consecutive");
        else if (maxPendolare >= 7) assegnaTier('pendolare', maxPendolare, 2, "Nazione usata in 7 partite consecutive");
        else if (maxPendolare >= 3) assegnaTier('pendolare', maxPendolare, 1, "Nazione usata in 3 partite consecutive");

        if (isVictory && currentLevel !== 0) {
            let winsAttuali = (userBadges.conquistatore || 0);
            let tierConq = 0;
            let motivoConq = "";
            
            if (winsAttuali + 1 >= 10) { tierConq = 3; motivoConq = "10 Vittorie Assolute"; }
            else if (winsAttuali + 1 >= 3) { tierConq = 2; motivoConq = "3 Vittorie Assolute"; }
            else { tierConq = 1; motivoConq = "Prima Vittoria Assoluta"; }
            
            assegnaTier('conquistatore', 1, tierConq, motivoConq, false, true);
        }

        if (!hasDejavu && domandeTotali >= 50 && currentLevel !== 0 && currentLevel !== 4) {
            assegnaTier('lucido', 1, 4, "Nessun malus dejavu in 50+ domande");
        }

        if (bestStreakOneLife >= 10) assegnaTier('fenice', bestStreakOneLife, 3, "Serie di 10 con 1 sola vita");
        else if (bestStreakOneLife >= 5) assegnaTier('fenice', bestStreakOneLife, 2, "Serie di 5 con 1 sola vita");
        else if (bestStreakOneLife >= 3) assegnaTier('fenice', bestStreakOneLife, 1, "Serie di 3 con 1 sola vita");

        let hasInarrestabileOro = bestStreak >= 50;
        let hasScheggiaOro = (esatte >= 10 && avgTime > 0 && ((currentLevel === 0 && avgTime <= 2.5) || (currentLevel !== 0 && avgTime <= 5)));
        if (hasInarrestabileOro && hasScheggiaOro) {
            assegnaTier('cyborg', 1, 4, "Riflessi inumani (Combo Oro)");
        }

        if (currentLevel === 7 && punteggio >= 10000) {
            assegnaTier('sestosenso', 1, 4, "Leggenda senza mani");
        }

        if (gameData.nazioniDigitate && gameData.nazioniDigitate.length > 0) {
            let sigleGiocate = gameData.nazioniDigitate.map(s => s.toLowerCase());
            for (let areaKey in CONQUISTE_AREE) {
                let dataArea = CONQUISTE_AREE[areaKey];
                let nazioniInArea = globalDb.filter(c => c.aree && c.aree.some(a => a.toLowerCase() === areaKey));
                
                if (nazioniInArea.length > 1) {
                    let conquistata = nazioniInArea.every(c => sigleGiocate.includes(c.sigla.toLowerCase()));
                    if (conquistata) assegnaTier(dataArea.id, 1, 4, dataArea.flavor);
                }
            }
        }
    } 

    // ==========================================
    // 4. GIRO DEL MONDO
    // ==========================================
    let globalNations = typeof allTimeNazioniCount !== 'undefined' ? { ...allTimeNazioniCount } : {};
    
    if (gameData.nazioniDigitateCount) {
        for (let sigla in gameData.nazioniDigitateCount) {
            globalNations[sigla] = (globalNations[sigla] || 0) + gameData.nazioniDigitateCount[sigla];
        }
    }
    
    let minUsoGlobale = 9999;
    if (typeof globalDb !== 'undefined' && globalDb.length > 0) {
        globalDb.forEach(n => {
            let uso = globalNations[n.sigla] || 0;
            if (uso < minUsoGlobale) minUsoGlobale = uso;
        });
    } else {
        minUsoGlobale = 0;
    }

    if (minUsoGlobale >= 10) assegnaTier('magellano', minUsoGlobale, 3, "Hai usato tutte le 253 nazioni almeno 10 volte");
    else if (minUsoGlobale >= 4) assegnaTier('magellano', minUsoGlobale, 2, "Hai usato tutte le 253 nazioni almeno 4 volte");
    else if (minUsoGlobale >= 1) assegnaTier('magellano', minUsoGlobale, 1, "Hai usato tutte le 253 nazioni almeno 1 volta");

    if (storicoAggiornato) localStorage.setItem('geoQuizBadges', JSON.stringify(userBadges));
    
    return sessionEarned; 
};

// Variabile globale per salvare lo stato del modale
window.savedModalState = null;

window.showBadgeDetails = function(badgeId) {
    let info = BADGE_INFO[badgeId];
    let count = userBadges[badgeId];
    let isUnlocked = count !== undefined && count !== 0 && count !== 9999;
    
    if (info.isSecret && !isUnlocked) return; 
    
    let tiersHtml = "";
    if (!info.isSpecial) {
        let opText = info.isInverse ? "Massimo" : "Almeno";
        let formatVal = (val) => badgeId === 'scheggia' ? val + "s" : val;

        tiersHtml = `
        <div style="background:#1a1a1a; padding:10px; border-radius:6px; text-align:left; margin-top:15px; font-size:14px; border:1px solid #333;">
            <div style="color:#cd7f32; margin-bottom:4px;"><strong>BRONZO:</strong> ${opText} ${formatVal(info.tiers[0])}</div>
            <div style="color:#c0c0c0; margin-bottom:4px;"><strong>ARGENTO:</strong> ${opText} ${formatVal(info.tiers[1])}</div>
            <div style="color:#ffd700;"><strong>ORO:</strong> ${opText} ${formatVal(info.tiers[2])}</div>
        </div>`;
    }
    
    let recordHtml = "";
    if (isUnlocked) {
        let recordVal = (badgeId === 'scheggia') ? count + "s" : count;
        recordHtml = `<div style="margin-top:15px; font-size:16px; font-weight:bold; color:#4caf50; letter-spacing:1px;">RECORD ATTUALE: ${recordVal}</div>`;
    } else {
        recordHtml = `<div style="margin-top:15px; font-size:16px; font-weight:bold; color:#f44336; letter-spacing:1px;">NON ANCORA SBLOCCATO</div>`;
    }

    let backBtnHtml = `<button onclick="window.restoreModalState()" style="margin-top:20px; width:100%; padding:12px; background:#333; color:#fff; border:none; border-radius:4px; font-weight:bold; font-size:14px; cursor:pointer;">⬅️ TORNA ALLO STORICO</button>`;

    let html = `
    <div style="text-align:center;">
        <div style="width:80px; height:80px; margin:0 auto; color:#ffd700;">
            ${SVG_ICONS[badgeId]}
        </div>
        <p style="font-style:italic; color:#888; font-size:15px;">"${info.flavor}"</p>
        <hr style="border:0; border-top:1px dashed #444; margin:15px 0;">
        <p style="color:#fff; font-size:15px; line-height:1.4;"><strong>Cosa devi fare:</strong><br>${info.req}</p>
        ${tiersHtml}
        ${recordHtml}
        ${backBtnHtml}
    </div>`;
    
    let modalBody = document.getElementById('modal-body');
    let modalTitle = document.getElementById('modal-title');
    
    if (modalBody && modalTitle) {
        if (!window.savedModalState) {
            window.savedModalState = {
                title: modalTitle.innerText,
                html: modalBody.innerHTML
            };
        }
        modalTitle.innerText = info.title.toUpperCase();
        modalBody.innerHTML = html;
    } else {
        openModal(info.title.toUpperCase(), html);
    }
};

window.restoreModalState = function() {
    if (window.savedModalState) {
        let modalBody = document.getElementById('modal-body');
        let modalTitle = document.getElementById('modal-title');
        if (modalTitle) modalTitle.innerText = window.savedModalState.title;
        if (modalBody) modalBody.innerHTML = window.savedModalState.html;
        window.savedModalState = null; 
    } else {
        if (typeof closeModal === 'function') closeModal();
    }
};

if (typeof window.originalCloseModal === 'undefined' && typeof window.closeModal === 'function') {
    window.originalCloseModal = window.closeModal;
    window.closeModal = function() {
        if (window.savedModalState) {
            window.restoreModalState();
        } else {
            window.originalCloseModal();
        }
    };
}

window.renderBadgeNotification = function(earnedArray) {
    if (!earnedArray || earnedArray.length === 0) return "";
    
    // Filtro vitale: previene i crash grafici se un badge è assente
    let validEarned = earnedArray.filter(b => BADGE_INFO[b.id]);
    if (validEarned.length === 0) return "";
    
    validEarned.sort((a, b) => b.tier - a.tier);
    
    let html = `
    <div class="game-over-section">
        <h3 style="color:#ffd700;">🏆 TROFEI DI SESSIONE</h3>
        <div class="badge-list-container">
    `;
    
    validEarned.forEach(b => {
        let info = BADGE_INFO[b.id];
        let color = b.tier === 4 ? "#4fc3f7" : (b.tier === 3 ? "#ffd700" : (b.tier === 2 ? "#c0c0c0" : "#cd7f32"));
        let bgLight = b.tier === 4 ? "rgba(79, 195, 247, 0.15)" : (b.tier === 3 ? "rgba(255, 215, 0, 0.08)" : (b.tier === 2 ? "rgba(192, 192, 192, 0.08)" : "rgba(205, 127, 50, 0.08)"));
        
        let newTag = (b.isNewTier === true) ? `<span style="background-color:#f44336; color:#fff; font-size:10px; font-weight:bold; padding:2px 5px; border-radius:4px; margin-left:8px; box-shadow:0 0 5px rgba(244,67,54,0.6); vertical-align:middle; display:inline-block; transform:translateY(-1px);">✨ NUOVO</span>` : "";

        html += `
            <div class="session-badge-item" style="background-color:${bgLight}; border-left:4px solid ${color};">
                <div class="session-badge-icon" style="color:${color};">
                    ${SVG_ICONS[b.id]}
                </div>
                <div class="session-badge-text-col">
                    <span class="session-badge-title" style="color:${color};">${info.title} ${newTag}</span>
                    <span class="session-badge-desc">${b.motivo}</span>
                </div>
            </div>
        `;
    });
    
    html += `</div></div>`;
    return html;
};

window.renderMedagliere = function() {
    let html = `<div class="game-over-section" style="padding:15px; margin:0; text-align:center;">
                    <div class="medagliere-grid">`;
    
    Object.keys(BADGE_INFO).forEach(b => {
        let info = BADGE_INFO[b];
        let count = userBadges[b];
        
        if (info.isSecret && (count === undefined || count === 0)) return;
        
        let color = "#333"; let borderColor = "#333"; let opacity = "0.4"; let bg = "#1a1a1a";
        let recordText = count !== undefined && count !== 9999 ? `Record: ${count}` : "Non sbloccato";
        
        if (info.isSpecial) {
            if (count > 0) { 
                color = "#0277bd"; 
                borderColor = "#4fc3f7"; 
                opacity = "1"; 
                bg = "#e1f5fe"; 
                recordText = "Sbloccato"; 
            }
        } else if (info.isInverse) {
            if (count !== undefined && count <= info.tiers[2]) { color = "#121212"; borderColor = "#ffd700"; opacity = "1"; bg = "#ffd700"; } 
            else if (count !== undefined && count <= info.tiers[1]) { color = "#121212"; borderColor = "#c0c0c0"; opacity = "1"; bg = "#c0c0c0"; } 
            else if (count !== undefined && count <= info.tiers[0]) { color = "#121212"; borderColor = "#cd7f32"; opacity = "1"; bg = "#cd7f32"; } 
        } else {
            if (count !== undefined && count >= info.tiers[2]) { color = "#121212"; borderColor = "#ffd700"; opacity = "1"; bg = "#ffd700"; } 
            else if (count !== undefined && count >= info.tiers[1]) { color = "#121212"; borderColor = "#c0c0c0"; opacity = "1"; bg = "#c0c0c0"; } 
            else if (count !== undefined && count >= info.tiers[0]) { color = "#121212"; borderColor = "#cd7f32"; opacity = "1"; bg = "#cd7f32"; } 
        }
        
        let hasBadge = opacity === "1";
        let headerColor = hasBadge ? (info.isSpecial ? "#01579b" : "#121212") : "#888";
        let descColor = hasBadge ? (info.isSpecial ? "#0288d1" : "#333") : "#555";
        
        if (b === 'scheggia' && count !== undefined && count !== 9999) recordText = `Record: ${count}s`;
        
        html += `<div class="medagliere-item" onclick="window.showBadgeDetails('${b}')" style="background-color:${bg}; border:2px solid ${borderColor}; opacity:${opacity}; cursor:pointer; transition:transform 0.1s;">
                    <div class="medagliere-icon" style="color:${color};">${SVG_ICONS[b]}</div>
                    <div class="medagliere-title" style="color:${headerColor};">${info.title}</div>
                    <div class="medagliere-desc" style="color:${descColor};">${info.flavor}</div>
                    <div class="medagliere-record">${recordText}</div>
                 </div>`;
    });
    
    html += `   </div>
              </div>`;
    return html;
};

window.renderLevelBadge = function(bestStreak) {
    if (!bestStreak || bestStreak < BADGE_INFO.inarrestabile.tiers[0]) return "";
    let tier = bestStreak >= BADGE_INFO.inarrestabile.tiers[2] ? 3 : (bestStreak >= BADGE_INFO.inarrestabile.tiers[1] ? 2 : 1);
    let color = tier === 3 ? "#ffd700" : (tier === 2 ? "#c0c0c0" : "#cd7f32");
    let info = BADGE_INFO.inarrestabile;
    
    let html = `<div class="level-badge-row">
                <div class="level-badge-inner" style="border-left:3px solid ${color};">
                    <div class="level-badge-left">
                        <div class="level-badge-icon" style="color:${color};">${SVG_ICONS.inarrestabile}</div>
                        <span class="level-badge-title" style="color:${color};">${info.title}</span>
                        <span class="level-badge-desc">- ${info.flavor}</span>
                    </div>
                    <span class="level-badge-record">Record: ${bestStreak}</span>
                </div></div>`;
    return html;
};