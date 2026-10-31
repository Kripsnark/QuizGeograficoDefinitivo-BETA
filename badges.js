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
    lucido: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon></svg>`
};

const BADGE_INFO = {
    vendicatore: { title: "Vendicatore", desc: "Azzera 6+ debiti", tiers: [1, 3, 10] },
    conquistatore: { title: "Conquistatore", desc: "Vinci un livello", tiers: [1, 3, 10] },
    maratoneta: { title: "Maratoneta", desc: "Risposte esatte totali", tiers: [2, 30, 60] },
    inarrestabile: { title: "Inarrestabile", desc: "Serie consecutiva", tiers: [10, 25, 50] },
    scheggia: { title: "Scheggia", desc: "Tempo medio per risposta", tiers: [15, 10, 5], isInverse: true },
    fotofinish: { title: "Fotoreporter", desc: "Salvataggi al fotofinish", tiers: [1, 3, 5] },
    grazia: { title: "Intoccabile", desc: "Meno grazie ricevute", tiers: [2, 1, 0], isInverse: true },
    infermiere: { title: "Croce Rossa", desc: "Cuori extra guadagnati", tiers: [3, 5, 10] },
    veterano: { title: "Veterano", desc: "Domande giocate", tiers: [30, 80, 150] },
    lucido: { title: "Mente Lucida", desc: "Nessun Dejavu", tiers: [1, 1, 1], isSpecial: true } 
};

let userBadges = JSON.parse(localStorage.getItem('geoQuizBadges')) || {};

window.checkBadges = function(gameData) {
    let { currentLevel, esatte, isVictory, debitiIniziali, debitiRimasti, bestStreak, avgTime, fotofinish, grazie, cuori, domandeTotali, hasDejavu } = gameData;
    let sessionEarned = []; 
    let storicoAggiornato = false;

    const assegnaTier = (id, rawValue, tier, motivo, isInverse = false) => {
        sessionEarned.push({ id, tier, motivo });
        
        let currentBest = userBadges[id] !== undefined ? userBadges[id] : (isInverse ? 9999 : 0);
        
        if ((!isInverse && rawValue > currentBest) || (isInverse && rawValue < currentBest)) {
            userBadges[id] = rawValue;
            storicoAggiornato = true;
        }
    };

    if (esatte >= 60) assegnaTier('maratoneta', esatte, 3, "Superate le 60 risposte");
    else if (esatte >= 30) assegnaTier('maratoneta', esatte, 2, "Superate le 30 risposte");
    else if (esatte >= 2) assegnaTier('maratoneta', esatte, 1, "Superate le 2 risposte");

    if (bestStreak >= 50) assegnaTier('inarrestabile', bestStreak, 3, "Serie di 50 risposte");
    else if (bestStreak >= 25) assegnaTier('inarrestabile', bestStreak, 2, "Serie di 25 risposte");
    else if (bestStreak >= 10) assegnaTier('inarrestabile', bestStreak, 1, "Serie di 10 risposte");

    if (domandeTotali >= 150) assegnaTier('veterano', domandeTotali, 3, "Giocate 150 domande");
    else if (domandeTotali >= 80) assegnaTier('veterano', domandeTotali, 2, "Giocate 80 domande");
    else if (domandeTotali >= 30) assegnaTier('veterano', domandeTotali, 1, "Giocate 30 domande");

    if (cuori >= 10) assegnaTier('infermiere', cuori, 3, "Guadagnati 10 cuori extra");
    else if (cuori >= 5) assegnaTier('infermiere', cuori, 2, "Guadagnati 5 cuori extra");
    else if (cuori >= 3) assegnaTier('infermiere', cuori, 1, "Guadagnati 3 cuori extra");

    if (fotofinish >= 5) assegnaTier('fotofinish', fotofinish, 3, "Salvataggi in extremis: 5");
    else if (fotofinish >= 3) assegnaTier('fotofinish', fotofinish, 2, "Salvataggi in extremis: 3");
    else if (fotofinish >= 1) assegnaTier('fotofinish', fotofinish, 1, "Salvataggi in extremis: 1");

    if (esatte >= 5 && avgTime > 0) {
        if (avgTime <= 5) assegnaTier('scheggia', avgTime, 3, "Tempo medio < 5s", true);
        else if (avgTime <= 10) assegnaTier('scheggia', avgTime, 2, "Tempo medio < 10s", true);
        else if (avgTime <= 15) assegnaTier('scheggia', avgTime, 1, "Tempo medio < 15s", true);
    }

    if ((currentLevel === 4 || currentLevel === 5) && domandeTotali >= 10) {
        if (grazie <= 0) assegnaTier('grazia', grazie, 3, "Nessuna grazia ricevuta", true);
        else if (grazie <= 1) assegnaTier('grazia', grazie, 2, "Solo 1 grazia ricevuta", true);
        else if (grazie <= 2) assegnaTier('grazia', grazie, 1, "Meno di 3 grazie ricevute", true);
    }

    if (!hasDejavu && domandeTotali >= 10) {
        assegnaTier('lucido', 1, 4, "Nessun malus dejavu in 10+ domande");
    }

    if (storicoAggiornato) localStorage.setItem('geoQuizBadges', JSON.stringify(userBadges));
    return sessionEarned; 
};

window.renderBadgeNotification = function(earnedArray) {
    if (!earnedArray || earnedArray.length === 0) return "";
    
    let html = `
    <div class="game-over-section">
        <h3 style="color:#ffd700;">🏆 TROFEI DI SESSIONE</h3>
        <div class="badge-list-container">
    `;
    
    earnedArray.forEach(b => {
        let info = BADGE_INFO[b.id];
        let color = b.tier === 4 ? "#9e9e9e" : (b.tier === 3 ? "#ffd700" : (b.tier === 2 ? "#c0c0c0" : "#cd7f32"));
        let bgLight = b.tier === 4 ? "rgba(158, 158, 158, 0.08)" : (b.tier === 3 ? "rgba(255, 215, 0, 0.08)" : (b.tier === 2 ? "rgba(192, 192, 192, 0.08)" : "rgba(205, 127, 50, 0.08)"));
        
        html += `
            <div class="session-badge-item" style="background-color:${bgLight}; border-left:4px solid ${color};">
                <div class="session-badge-icon" style="color:${color};">
                    ${SVG_ICONS[b.id]}
                </div>
                <div class="session-badge-text-col">
                    <span class="session-badge-title" style="color:${color};">${info.title}</span>
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
        let tiers = info.tiers;
        
        let color = "#333"; let borderColor = "#333"; let opacity = "0.4"; let bg = "#1a1a1a";
        let recordText = count !== undefined && count !== 9999 ? `Record: ${count}` : "Non sbloccato";
        
        if (info.isSpecial) {
            if (count > 0) { color = "#121212"; borderColor = "#9e9e9e"; opacity = "1"; bg = "#9e9e9e"; recordText = "Sbloccato"; }
        } else if (info.isInverse) {
            if (count !== undefined && count <= tiers[2]) { color = "#121212"; borderColor = "#ffd700"; opacity = "1"; bg = "#ffd700"; } 
            else if (count !== undefined && count <= tiers[1]) { color = "#121212"; borderColor = "#c0c0c0"; opacity = "1"; bg = "#c0c0c0"; } 
            else if (count !== undefined && count <= tiers[0]) { color = "#121212"; borderColor = "#cd7f32"; opacity = "1"; bg = "#cd7f32"; } 
        } else {
            if (count !== undefined && count >= tiers[2]) { color = "#121212"; borderColor = "#ffd700"; opacity = "1"; bg = "#ffd700"; } 
            else if (count !== undefined && count >= tiers[1]) { color = "#121212"; borderColor = "#c0c0c0"; opacity = "1"; bg = "#c0c0c0"; } 
            else if (count !== undefined && count >= tiers[0]) { color = "#121212"; borderColor = "#cd7f32"; opacity = "1"; bg = "#cd7f32"; } 
        }
        
        let hasBadge = opacity === "1";
        let headerColor = hasBadge ? "#121212" : "#888";
        let descColor = hasBadge ? "#333" : "#555";
        
        if (b === 'scheggia' && count !== undefined && count !== 9999) recordText = `Record: ${count}s`;
        
        html += `<div class="medagliere-item" style="background-color:${bg}; border:2px solid ${borderColor}; opacity:${opacity};">
                    <div class="medagliere-icon" style="color:${color};">${SVG_ICONS[b]}</div>
                    <div class="medagliere-title" style="color:${headerColor};">${info.title}</div>
                    <div class="medagliere-desc" style="color:${descColor};">${info.desc}</div>
                    <div class="medagliere-record">${recordText}</div>
                 </div>`;
    });
    
    html += `   </div>
              </div>`;
    return html;
};

window.renderLevelBadge = function(bestStreak) {
    if (!bestStreak || bestStreak < BADGE_INFO.maratoneta.tiers[0]) return "";
    
    let tier = bestStreak >= BADGE_INFO.maratoneta.tiers[2] ? 3 : (bestStreak >= BADGE_INFO.maratoneta.tiers[1] ? 2 : 1);
    let color = tier === 3 ? "#ffd700" : (tier === 2 ? "#c0c0c0" : "#cd7f32");
    let info = BADGE_INFO.maratoneta;
    
    let html = `<div class="level-badge-row">`;
    html += `<div class="level-badge-inner" style="border-left:3px solid ${color};">
                <div class="level-badge-left">
                    <div class="level-badge-icon" style="color:${color};">${SVG_ICONS.maratoneta}</div>
                    <span class="level-badge-title" style="color:${color};">${info.title}</span>
                    <span class="level-badge-desc">- ${info.desc}</span>
                </div>
                <span class="level-badge-record">Record: ${bestStreak}</span>
             </div></div>`;
    return html;
};