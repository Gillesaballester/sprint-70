const needs = [
  { icon: "🔧", title: "Mon appareil est en panne", text: "Une demande simple, puis nous vous recontactons pour organiser l'intervention.", action: "Prendre rendez-vous" },
  { icon: "◫", title: "Je cherche un appareil", text: "Du neuf et de l'occasion, avec les conseils d'une équipe qui connaît ses produits.", action: "Voir les appareils" },
  { icon: "⚙", title: "Je cherche une pièce", text: "Aidez-nous à identifier votre appareil : nous vous guidons vers la bonne pièce.", action: "Trouver une pièce" },
  { icon: "⌖", title: "Je veux venir au magasin", text: "Retrouvez l'équipe Sprint 70 près de Vesoul, à Pusey.", action: "Nous trouver" },
];

const promises = [
  ["Depuis 1991", "Une expertise locale, construite au fil des réparations."],
  ["Une équipe à vos côtés", "Du conseil avant, pendant et après votre achat."],
  ["Atelier & domicile", "La solution la plus adaptée à votre appareil et à votre situation."],
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <div className="shell nav">
          <a className="brand" href="#top" aria-label="Sprint 70 — accueil"><span>SPRINT</span><b>70</b></a>
          <nav aria-label="Navigation principale">
            <a href="#depannage">Dépannage</a><a href="#appareils">Électroménager</a><a href="#pieces">Pièces</a><a href="#sprint">Sprint 70</a><a href="#contact">Contact</a>
          </nav>
          <a className="button button-primary nav-cta" href="#rdv">Prendre rendez-vous <span>→</span></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div>
            <p className="eyebrow">Dépannage · Vente · Pièces</p>
            <h1>Votre électroménager est entre de bonnes mains.</h1>
            <p className="hero-copy">Réparation, conseils et appareils sélectionnés : un seul interlocuteur pour prendre soin de votre quotidien.</p>
            <div className="hero-actions" id="rdv"><a className="button button-primary" href="#depannage">Prendre rendez-vous <span>→</span></a><a className="button button-secondary" href="#appareils">Voir nos appareils</a></div>
            <p className="hero-note"><span>●</span> Une équipe locale, à Pusey près de Vesoul</p>
          </div>
          <div className="hero-art" aria-label="Illustration d'un atelier de réparation">
            <div className="hero-orb" /><div className="machine"><div className="machine-panel"><i /><i /><i /></div><div className="machine-door"><div /></div></div><div className="tool-card">Depuis<br /><strong>1991</strong></div>
          </div>
        </div>
      </section>

      <section className="section needs" aria-labelledby="needs-title">
        <div className="shell"><div className="section-heading"><p className="eyebrow">Par où commencer ?</p><h2 id="needs-title">Comment pouvons-nous vous aider ?</h2><p>Choisissez votre besoin : on vous guide ensuite sans vous faire perdre de temps.</p></div><div className="need-grid">{needs.map((need) => <a key={need.title} href="#contact" className="need-card"><span className="need-icon">{need.icon}</span><h3>{need.title}</h3><p>{need.text}</p><span className="text-link">{need.action} <b>→</b></span></a>)}</div></div>
      </section>

      <section className="repair" id="depannage"><div className="shell repair-grid"><div><p className="eyebrow">Dépannage</p><h2>Un problème avec votre appareil ?<br />On sait quoi faire.</h2><p>À domicile ou à l'atelier, l'équipe Sprint 70 vous aide à retrouver un appareil qui fonctionne — avec un diagnostic clair et un accompagnement humain.</p><a className="button button-primary" href="#contact">Faire une demande <span>→</span></a></div><ol><li><b>01</b><div><h3>Décrivez votre panne</h3><p>Appareil, marque, symptôme : quelques informations suffisent pour démarrer.</p></div></li><li><b>02</b><div><h3>Choisissez l'intervention</h3><p>À votre domicile ou par dépôt à l'atelier, selon votre appareil.</p></div></li><li><b>03</b><div><h3>Nous vous recontactons</h3><p>Nous confirmons les modalités avec vous, sans calendrier imposé.</p></div></li></ol></div></section>

      <section className="section" id="appareils"><div className="shell split"><div className="display-card"><span>ÉLECTROMÉNAGER</span><strong>Neuf<br />& occasion</strong><small>Des appareils choisis avec soin, et des conseils qui durent.</small></div><div className="split-copy"><p className="eyebrow">Bien choisir</p><h2>Besoin d’un nouvel appareil ?</h2><p>Nous vous aidons à comparer, choisir et prendre soin de votre futur équipement. Pas de catalogue impersonnel : juste les bons conseils, au bon moment.</p><a className="text-link" href="#contact">Découvrir les appareils <b>→</b></a></div></div></section>

      <section className="section muted" id="sprint"><div className="shell"><div className="section-heading"><p className="eyebrow">Pourquoi Sprint 70 ?</p><h2>La proximité d’un atelier, l’expertise d’un vrai spécialiste.</h2></div><div className="promise-grid">{promises.map(([title, text]) => <article key={title}><span className="number">✦</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section contact" id="contact"><div className="shell contact-panel"><div><p className="eyebrow">Un besoin, une question ?</p><h2>Parlons de votre appareil.</h2><p>La prise de rendez-vous, les coordonnées et les horaires seront finalisés avec les informations opérationnelles de Sprint 70.</p></div><a className="button button-primary" href="mailto:contact@sprint-70.fr">Nous contacter <span>→</span></a></div></section>

      <footer><div className="shell footer-row"><a className="brand" href="#top"><span>SPRINT</span><b>70</b></a><p>Réparation · Vente · Pièces détachées</p><p>© {new Date().getFullYear()} Sprint 70</p></div></footer>
    </main>
  );
}
