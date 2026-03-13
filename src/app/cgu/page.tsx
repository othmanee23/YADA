import { LegalDocumentLayout, LegalSection } from "@/components/LegalDocumentLayout";

export default function CguPage() {
  return (
    <LegalDocumentLayout
      title="Conditions Generales d'Utilisation"
      subtitle="Ces CGU definissent les regles d'acces, d'utilisation et de navigation sur l'application YADA ainsi que sur le site vitrine associe."
      meta={
        <>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#D4AF37]">
            YADA COIFFURE
          </p>
          <p className="mt-4 text-sm leading-7 text-white/78">
            Application mobile et site vitrine
          </p>
        </>
      }
    >
      <LegalSection index="01" title="Objet">
        <p>
          Les presentes Conditions Generales d’Utilisation (CGU) ont pour objet
          de definir les regles d’acces, d’utilisation et de navigation sur
          l’application YADA (ci-apres « l’Application ») ainsi que sur le site
          vitrine associe.
        </p>
        <p>
          L’Application YADA met en relation des clients recherchant une
          prestation de coiffure et des coiffeurs partenaires proposant leurs
          services.
        </p>
      </LegalSection>

      <LegalSection index="02" title="Acceptation des CGU">
        <p>
          L’utilisation de l’Application implique l’acceptation pleine et
          entiere des presentes CGU.
        </p>
        <p>
          Tout utilisateur s’engage a respecter ces regles des l’inscription et
          pendant toute la duree de son utilisation.
        </p>
      </LegalSection>

      <LegalSection index="03" title="Services proposes">
        <p className="font-semibold text-[#17120d]">Pour les clients :</p>
        <p>
          Recherche et reservation de coiffeurs disponibles a domicile ou en
          salon, consultation des profils et avis, prise de rendez-vous.
        </p>
        <p className="font-semibold text-[#17120d]">Pour les coiffeurs partenaires :</p>
        <p>
          Creation de profil, visibilite aupres des clients, gestion des
          disponibilites et acces aux offres apres rechargement de leur compte.
        </p>
      </LegalSection>

      <LegalSection index="04" title="Inscription et compte utilisateur">
        <ul className="space-y-2 pl-5">
          <li>
            L’acces a certaines fonctionnalites necessite la creation d’un
            compte.
          </li>
          <li>
            L’utilisateur s’engage a fournir des informations exactes, a jour et
            completes.
          </li>
          <li>Chaque compte est personnel et ne peut etre cede a un tiers.</li>
        </ul>
      </LegalSection>

      <LegalSection index="05" title="Modalites de reservation et d'execution">
        <ul className="space-y-2 pl-5">
          <li>
            Les clients reservent via l’Application en choisissant un creneau
            disponible.
          </li>
          <li>
            Le coiffeur s’engage a honorer la prestation reservee selon les
            conditions convenues.
          </li>
          <li>
            Le paiement de la prestation s’effectue directement entre le client
            et le coiffeur, en especes (cash).
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="06" title="Responsabilites">
        <ul className="space-y-2 pl-5">
          <li>YADA agit uniquement comme intermediaire technique.</li>
          <li>
            La Societe n’est pas responsable de la qualite des prestations
            realisees par les coiffeurs, ni des eventuels retards, annulations
            ou litiges.
          </li>
          <li>
            Les coiffeurs sont seuls responsables de leurs engagements vis-a-vis
            des clients.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="07" title="Obligations des utilisateurs">
        <ul className="space-y-2 pl-5">
          <li>Respecter les lois et reglements en vigueur.</li>
          <li>
            Ne pas utiliser l’Application a des fins frauduleuses, abusives ou
            contraires a l’ethique.
          </li>
          <li>
            Respecter les coiffeurs, clients et autres utilisateurs dans toute
            interaction.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="08" title="Conditions financieres">
        <p className="font-semibold text-[#17120d]">Pour les clients :</p>
        <p>
          Le service est gratuit, hors cout de la prestation reglee directement
          au coiffeur.
        </p>
        <p className="font-semibold text-[#17120d]">Pour les coiffeurs :</p>
        <p>
          L’acces aux offres necessite un rechargement en ligne de leur compte.
          Ces recharges sont non remboursables.
        </p>
      </LegalSection>

      <LegalSection index="09" title="Donnees personnelles">
        <p>
          Les informations collectees lors de l’inscription et de l’utilisation
          de l’Application sont traitees conformement a la legislation en
          vigueur.
        </p>
        <p>
          Elles sont utilisees uniquement pour la gestion des comptes, des
          reservations et la mise en relation.
        </p>
      </LegalSection>

      <LegalSection index="10" title="Propriete intellectuelle">
        <p>
          Tous les elements de l’Application et du site (logos, textes,
          graphismes, contenus, logiciels) sont proteges et demeurent la
          propriete exclusive de YADA COIFFURE.
        </p>
        <p>Toute reproduction ou diffusion non autorisee est interdite.</p>
      </LegalSection>

      <LegalSection index="11" title="Suspension et resiliation">
        <p>
          YADA se reserve le droit de suspendre ou de supprimer l’acces d’un
          utilisateur en cas de non-respect des CGU, fraude, ou comportement
          inapproprie.
        </p>
      </LegalSection>

      <LegalSection index="12" title="Modification des CGU">
        <p>
          YADA peut modifier les presentes CGU a tout moment. Les utilisateurs
          seront informes des changements par notification ou mise en ligne sur
          le site/application.
        </p>
      </LegalSection>

      <LegalSection index="13" title="Droit applicable et juridiction">
        <p>Les presentes CGU sont regies par le droit marocain.</p>
        <p>
          Tout litige relatif a leur interpretation ou a leur execution sera
          soumis aux tribunaux competents de Rabat.
        </p>
      </LegalSection>
    </LegalDocumentLayout>
  );
}
