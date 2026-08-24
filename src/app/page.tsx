const needs = [
  ["🔧", "Mon appareil est en panne", "Dépannage à domicile ou à l’atelier.", "Prendre rendez-vous"],
  ["◫", "Je cherche un appareil", "Neuf et occasion, avec les bons conseils.", "Voir les appareils"],
  ["⚙", "Je cherche une pièce", "Nous vous aidons à identifier la bonne pièce.", "Trouver une pièce"],
  ["⌖", "Je veux venir au magasin", "Retrouvez Sprint 70 à Pusey, près de Vesoul.", "Nous trouver"],
];

export default function Home() {
  return (
    <main>
      <header className="header"><div className="shell nav">
        <a className="brand" href="#top"><span>SPRINT</span><b>70</b></a>
        <nav><a href="#depannage">Dépannage</a><a href="#appareils">Électroménager</a><a href="#pieces">Pièces</a><a href="#contact">Contact</a></nav>
        <a className="button button-primary nav-cta" href="#contact">Prendre rendez-vous →</a>
      </div></header>
      <section className="hero" id="top"><div className="shell hero-grid">
        <div><p className="eyebrow">Dépannage · Vente · Pièces</p><h1>Votre électroménager est entre de bonnes mains.</h1><p className="hero-copy">Réparation, conseils et appareils sélectionnés : un seul interlocuteur pour prendre soin de votre quotidien.</p><div className="hero-actions"><a className="button button-primary" href="#depannage">Prendre rendez-vous →</a><a className="button button-secondary" href="#appareils">Voir nos appareils</a></div><p className="hero-note"><span>●</span>Une équipe locale, à Pusey près de Vesoul</p></div>
        <div className="hero-art" aria-hidden="true"><div className="hero-orb" /><div className="machine"><div className="machine-panel"><i /><i /><i /></div><div className="machine-door"><div /></div></div><div className="tool-card">Depuis<br /><strong>1991</strong></div></div>
      </div></section>
      <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">Par où commencer ?</p><h2>Comment pouvons-nous vous aider ?</h2><p>Choisissez votre besoin : on vous guide ensuite sans vous faire perdre de temps.</p></div><div className="need-grid">{needs.map(([icon, title, text, action]) => <a key={title} className="need-card" href="#contact"><span className="need-icon">{icon}</span><h3>{title}</h3><p>{text}</p><span className="text-link">{action} <b>→</b></span></a>)}</div></div></section>
      <section className="repair" id="depannage"><div className="shell repair-grid"><div><p className="eyebrow">Dépannage</p><h2>Un problème avec votre appareil ? On sait quoi faire.</h2><p>À domicile ou à l’atelier, Sprint 70 vous aide à retrouver un appareil qui fonctionne — avec un diagnostic clair et un accompagnement humain.</p><a className="button button-primary" href="#contact">Faire une demande →</a></div><ol><li><b>01</b><div><h3>Décrivez votre panne</h3><p>Appareil, marque, symptôme : quelques informations suffisent.</p></div></li><li><b>02</b><div><h3>Choisissez l’intervention</h3><p>À domicile ou par dépôt à l’atelier, selon votre appareil.</p></div></li><li><b>03</b><div><h3>Nous vous recontactons</h3><p>Nous confirmons les modalités avec vous.</p></div></li></ol></div></section>
      <section className="section" id="appareils"><div className="shell split"><div className="display-card"><span>ÉLECTROMÉNAGER</span><strong>Neuf<br />& occasion</strong><small>Des appareils choisis avec soin, et des conseils qui durent.</small></div><div className="split-copy"><p className="eyebrow">Bien choisir</p><h2>Besoin d’un nouvel appareil ?</h2><p>Nous vous aidons à comparer, choisir et prendre soin de votre futur équipement.</p><a className="text-link" href="#contact">Découvrir les appareils <b>→</b></a></div></div></section>
      <section className="section muted"><div className="shell"><div className="section-heading"><p className="eyebrow">Pourquoi Sprint 70 ?</p><h2>La proximité d’un atelier, l’expertise d’un vrai spécialiste.</h2></div><div className="promise-grid"><article><span className="number">✦</span><h3>Depuis 1991</h3><p>Une expertise locale, construite au fil des réparations.</p></article><article><span className="number">✦</span><h3>Une équipe à vos côtés</h3><p>Du conseil avant, pendant et après votre achat.</p></article><article><span className="number">✦</span><h3>Atelier & domicile</h3><p>La solution adaptée à votre appareil et à votre situation.</p></article></div></div></section>
      <section className="section contact" id="contact"><div className="shell contact-panel"><div><p className="eyebrow">Un besoin, une question ?</p><h2>Parlons de votre appareil.</h2><p>Les coordonnées, horaires et parcours de demande seront finalisés avec les informations opérationnelles de Sprint 70.</p></div><a className="button button-primary" href="mailto:contact@sprint-70.fr">Nous contacter →</a></div></section>
      <footer><div className="shell footer-row"><a className="brand" href="#top"><span>SPRINT</span><b>70</b></a><p>Réparation · Vente · Pièces détachées</p><p>© 2026 Sprint 70</p></div></footer>
    </main>
  );
}
