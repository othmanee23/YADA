import { LegalDocumentLayout, LegalSection } from "@/components/LegalDocumentLayout";

export default function CgvPage() {
  return (
    <LegalDocumentLayout
      title="Conditions Generales de Vente"
      subtitle="Les presentes CGV encadrent les relations entre YADA COIFFURE, les coiffeurs partenaires et les clients finaux qui utilisent la plateforme."
      meta={
        <>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#D4AF37]">
            YADA COIFFURE
          </p>
          <p className="mt-4 text-sm leading-7 text-white/78">
            N° 48, Appt 1, Avenue Fal Ouled Oumeir, Agdal - Rabat
          </p>
        </>
      }
    >
      <LegalSection index="01" title="Objet">
        <p>
          Les presentes Conditions Generales de Vente (CGV) regissent les
          relations contractuelles entre :
        </p>
        <ul className="space-y-2 pl-5">
          <li>
            La societe YADA COIFFURE (ci-apres « la Societe »), exploitant la
            plateforme de mise en relation entre coiffeurs et clients.
          </li>
          <li>Les coiffeurs partenaires inscrits sur la plateforme.</li>
          <li>
            Les clients finaux qui beneficient des prestations de coiffure a
            domicile ou en salon.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="02" title="Services proposes">
        <p className="font-semibold text-[#17120d]">Aux coiffeurs partenaires :</p>
        <ul className="space-y-2 pl-5">
          <li>Acces a la plateforme en ligne apres inscription.</li>
          <li>
            Possibilite de recharger leur compte en ligne pour souscrire aux
            offres et beneficier de visibilite, d’outils de gestion et de mise
            en relation avec les clients.
          </li>
        </ul>
        <p className="font-semibold text-[#17120d]">Aux clients finaux :</p>
        <ul className="space-y-2 pl-5">
          <li>Mise en relation avec un coiffeur partenaire.</li>
          <li>
            Paiement direct au coiffeur en especes (cash) lors de la prestation,
            que ce soit a domicile ou en salon.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="03" title="Modalites de paiement">
        <p className="font-semibold text-[#17120d]">Coiffeurs partenaires :</p>
        <p>
          Le paiement des recharges de compte s’effectue exclusivement en ligne
          via les moyens securises proposes sur la plateforme (carte bancaire,
          portefeuille electronique, etc.). Ces recharges ne sont pas
          remboursables.
        </p>
        <p className="font-semibold text-[#17120d]">Clients finaux :</p>
        <p>
          Le paiement s’effectue directement aupres du coiffeur, en cash, au
          moment de la prestation. La Societe n’intervient pas dans la
          transaction financiere entre le client et le coiffeur.
        </p>
      </LegalSection>

      <LegalSection index="04" title="Responsabilite">
        <ul className="space-y-2 pl-5">
          <li>
            La Societe agit uniquement comme intermediaire technique de mise en
            relation.
          </li>
          <li>
            Chaque coiffeur est seul responsable de la qualite des prestations,
            du respect des rendez-vous et de l’encaissement du prix convenu avec
            le client.
          </li>
          <li>
            La Societe ne saurait etre tenue responsable en cas de litige relatif
            a l’execution d’une prestation de coiffure.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="05" title="Engagements des coiffeurs">
        <ul className="space-y-2 pl-5">
          <li>Fournir des informations exactes lors de leur inscription.</li>
          <li>Respecter les engagements pris vis-a-vis des clients.</li>
          <li>
            Encaisser directement et integralement le montant convenu aupres des
            clients.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="06" title="Droit de retractation">
        <p>
          Pour les coiffeurs, les recharges de compte constituent une fourniture
          de services numeriques donnant acces immediat aux offres. Aucun droit
          de retractation ni remboursement ne pourra etre demande apres
          validation du paiement.
        </p>
        <p>
          Pour les clients, la relation financiere s’opere directement avec le
          coiffeur. La Societe n’assure pas de remboursement.
        </p>
      </LegalSection>

      <LegalSection index="07" title="Donnees personnelles">
        <p>
          La Societe collecte et traite certaines donnees personnelles (nom,
          prenom, telephone, e-mail, etc.) dans le respect de la loi en vigueur.
          Ces donnees sont utilisees exclusivement pour la gestion des comptes,
          la mise en relation et le bon fonctionnement du service.
        </p>
      </LegalSection>

      <LegalSection index="08" title="Modification des CGV">
        <p>
          La Societe se reserve le droit de modifier les presentes CGV a tout
          moment. Les utilisateurs seront informes des changements par
          notification sur la plateforme.
        </p>
      </LegalSection>

      <LegalSection index="09" title="Loi applicable et juridiction competente">
        <p>Les presentes CGV sont regies par le droit marocain.</p>
        <p>Tout litige sera soumis aux tribunaux competents de Rabat.</p>
      </LegalSection>
    </LegalDocumentLayout>
  );
}
