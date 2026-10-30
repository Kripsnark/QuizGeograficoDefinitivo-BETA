// === SISTEMA BADGE E TROFEI ===

const SVG_ICONS = {
    vendicatore: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    conquistatore: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10"/><path d="M17 4v8a5 5 0 0 1-10 0V4"/><path d="M4 4h3v8a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V4h3"/></svg>`,
    maratoneta: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`
};

const BADGE_INFO = {
    vendicatore: { title: "Vendicatore", desc: "Azzera 6+ debiti", tiers: [1, 3, 10] },
    conquistatore: { title: "Conquistatore", desc: "Vinci un livello", tiers: [1, 3, 10] },
    // Ho impostato il Bronzo a 2 per farti testare. Dopo, cambialo in [15, 30, 60]
    maratoneta: { title: "Maratoneta", desc: "Record risposte in partita", tiers: [2, 30, 60] } 
};

let userBadges = JSON.parse(localStorage.getItem('geoQuizBadges')) || { vendicatore: 0, conquistatore: 0, maratoneta: 0 };

window.checkBadges = function(gameData) {
    let { currentLevel, esatte, isVictory, debitiIniziali, debitiRimasti } = gameData;
    let sessionEarned = [];

    // 1. Vendicatore (Conteggio cumulativo di vittorie L8 perfette)
    if (currentLevel === 8 && isVictory && debitiIniziali >= 6 && debitiRimasti === 0) {
        userBadges.vendicatore++;
        // Notifica solo se hai raggiunto esattamente una soglia (1, 3 o 10)
        if (BADGE_INFO.vendicatore.tiers.includes(userBadges.vendicatore)) sessionEarned.push('vendicatore');
    }

    // 2. Conquistatore (Conteggio cumulativo di vittorie standard)
    if (isVictory && currentLevel !== 0 && currentLevel !== 8) {
        userBadges.conquistatore++;
        if (BADGE_INFO.conquistatore.tiers.includes(userBadges.conquistatore)) sessionEarned.push('conquistatore');
    }

    // 3. Maratoneta (Record massimo di una singola sessione)
    let vecchieEsatte = userBadges.maratoneta || 0;
    if (esatte > vecchieEsatte) {
        userBadges.maratoneta = esatte;
        // Controlla se il nuovo record ha scavalcato una delle 3 soglie di metallo
        let oldTier = BADGE_INFO.maratoneta.tiers.filter(t => vecchieEsatte >= t).length;
        let newTier = BADGE_INFO.maratoneta.tiers.filter(t => esatte >= t).length;
        if (newTier > oldTier && newTier > 0) {
            sessionEarned.push('maratoneta');
        }
    }

    if (sessionEarned.length > 0) localStorage.setItem('geoQuizBadges', JSON.stringify(userBadges));
    return sessionEarned;
};

// 1. Notifica neutra post-partita
window.renderBadgeNotification = function(earnedArray) {
    if (!earnedArray || earnedArray.length === 0) return "";
    let html = `<div style="display:flex; gap:10px; justify-content:center; margin-bottom:15px; flex-wrap:wrap;">`;
    earnedArray.forEach(b => {
        html += `<div style="background:#2a2a2a; border:1px solid #555; padding:8px 15px; border-radius:6px; display:flex; align-items:center; gap:8px; color:#fff;">
                    <div style="width:20px; height:20px; color:#ffd700;">${SVG_ICONS[b]}</div>
                    <span style="font-size:12px; font-weight:bold; text-transform:uppercase;">🏆 GRADO SBLOCCATO: ${BADGE_INFO[b].title}</span>
                 </div>`;
    });
    html += `</div>`;
    return html;
};

// 2. Medagliere Modale Storico (Generazione dinamica per Bronzo/Argento/Oro)
window.renderMedagliere = function() {
    let html = `<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:12px;">`;
    Object.keys(BADGE_INFO).forEach(b => {
        let info = BADGE_INFO[b];
        let count = userBadges[b] || 0;
        let tiers = info.tiers;
        
        let color = "#333"; let borderColor = "#333"; let opacity = "0.4"; let bg = "#1a1a1a";
        let nextTarget = tiers[0];
        
        // Verifica dei Tiers per determinare il metallo e lo sfondo
        if (count >= tiers[2]) { color = "#121212"; borderColor = "#ffd700"; opacity = "1"; bg = "#ffd700"; nextTarget = "MAX"; } // ORO
        else if (count >= tiers[1]) { color = "#121212"; borderColor = "#c0c0c0"; opacity = "1"; bg = "#c0c0c0"; nextTarget = tiers[2]; } // ARGENTO
        else if (count >= tiers[0]) { color = "#121212"; borderColor = "#cd7f32"; opacity = "1"; bg = "#cd7f32"; nextTarget = tiers[1]; } // BRONZO
        
        let headerColor = count >= tiers[0] ? "#121212" : "#888";
        let descColor = count >= tiers[0] ? "#333" : "#555";
        
        html += `<div style="background:${bg}; border:2px solid ${borderColor}; opacity:${opacity}; padding:15px 10px; border-radius:8px; text-align:center; box-shadow: inset 0 0 15px rgba(0,0,0,0.5);">
                    <div style="width:40px; height:40px; margin:0 auto 10px auto; color:${color};">${SVG_ICONS[b]}</div>
                    <div style="font-size:12px; font-weight:bold; color:${headerColor}; text-transform:uppercase; margin-bottom:5px;">${info.title}</div>
                    <div style="font-size:10px; color:${descColor}; margin-bottom:8px; line-height:1.2;">${info.desc}</div>
                    <div style="font-size:11px; color:#fff; background:#121212; border-radius:10px; padding:3px 8px; width:fit-content; margin:0 auto; font-weight:bold;">${count} / ${nextTarget}</div>
                 </div>`;
    });
    html += `</div>`;
    return html;
};