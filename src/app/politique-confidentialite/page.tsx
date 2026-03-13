import { LegalDocumentLayout, LegalSection } from "@/components/LegalDocumentLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentLayout
      title="Politique de Confidentialite"
      subtitle="Cette politique explique comment YADA collecte, utilise, partage et protege les donnees personnelles traitees via le site et l'application."
      meta={
        <>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#D4AF37]">
            Derniere mise a jour
          </p>
          <p className="mt-4 text-sm leading-7 text-white/78">24/10/2025</p>
        </>
      }
    >
      <LegalSection index="01" title="Quelles donnees collectons-nous ?">
        <p>
          Nous collectons plusieurs types d’informations pour fournir et
          ameliorer nos services.
        </p>
        <p className="font-semibold text-[#17120d]">
          A. Donnees fournies directement par vous :
        </p>
        <ul className="space-y-2 pl-5">
          <li>
            Creation de compte (via l’Application) : nom, prenom, adresse
            e-mail, numero de telephone, et eventuellement votre adresse postale
            pour les services a domicile.
          </li>
          <li>
            Reservation d’un service : details de la reservation, preferences de
            service, et adresse pour les services a domicile.
          </li>
          <li>
            Formulaire de contact (sur le Site) : nom, adresse e-mail et contenu
            de votre message.
          </li>
          <li>Inscription a la newsletter (sur le Site) : votre adresse e-mail.</li>
          <li>Temoignages : les informations que vous soumettez (nom, avis).</li>
        </ul>
        <p className="font-semibold text-[#17120d]">
          B. Donnees collectees automatiquement :
        </p>
        <ul className="space-y-2 pl-5">
          <li>
            Donnees de localisation (via l’Application) : afin de proposer des
            coiffeurs a proximite ou pour les services a domicile.
          </li>
          <li>
            Donnees d’utilisation et de connexion : pages visitees, heure
            d’acces, adresse IP, type de navigateur et appareil utilise.
          </li>
          <li>
            Cookies : pour ameliorer l’experience utilisateur, analyser le
            trafic et a des fins de marketing.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="02" title="Comment utilisons-nous vos donnees ?">
        <p>Vos donnees sont utilisees pour les finalites suivantes :</p>
        <ul className="space-y-2 pl-5">
          <li>
            Fourniture de nos services : gerer votre compte, traiter vos
            reservations et vous mettre en relation avec les coiffeurs.
          </li>
          <li>
            Communication : envoyer des confirmations de reservation, des
            rappels, et repondre a vos demandes via le formulaire de contact.
          </li>
          <li>
            Marketing : envoyer la newsletter et des offres promotionnelles,
            uniquement si vous y avez consenti.
          </li>
          <li>
            Amelioration du service : analyser l’utilisation du Site et de
            l’Application pour ameliorer leur fonctionnalite et leur securite.
          </li>
          <li>Obligations legales : respecter nos obligations reglementaires.</li>
        </ul>
      </LegalSection>

      <LegalSection index="03" title="Avec qui partageons-nous vos donnees ?">
        <p>Nous ne vendons pas vos donnees personnelles.</p>
        <p>Nous pouvons les partager uniquement dans les cas suivants :</p>
        <ul className="space-y-2 pl-5">
          <li>
            Les coiffeurs partenaires : les informations necessaires a la
            realisation de la prestation.
          </li>
          <li>
            Fournisseurs de services tiers : hebergement du site, analyse de
            donnees, envoi d’e-mails, uniquement pour executer ces taches en
            notre nom.
          </li>
          <li>
            Autorites legales : si la loi l’exige ou pour proteger nos droits.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="04" title="Securite de vos donnees">
        <p>
          Nous prenons la securite de vos donnees tres au serieux. Nous mettons
          en oeuvre des mesures de securite techniques et organisationnelles,
          telles que le cryptage et les controles d’acces, pour proteger vos
          donnees personnelles contre la destruction, la perte, l’alteration, la
          divulgation non autorisee ou l’acces accidentel ou illegal.
        </p>
      </LegalSection>

      <LegalSection index="05" title="Duree de conservation">
        <p>
          Nous conservons vos donnees personnelles uniquement pour la duree
          necessaire aux finalites pour lesquelles elles ont ete collectees, ou
          pour nous conformer a nos obligations legales.
        </p>
      </LegalSection>

      <LegalSection index="06" title="Cookies">
        <p>
          Notre Site utilise des cookies pour assurer son bon fonctionnement et
          analyser le trafic. Les cookies sont de petits fichiers texte stockes
          sur votre appareil. Lors de votre premiere visite, un bandeau vous
          informe de leur utilisation et vous permet de gerer vos preferences.
        </p>
      </LegalSection>

      <LegalSection index="07" title="Vos droits">
        <p>
          Conformement a la legislation en vigueur, notamment la loi 09-08 au
          Maroc, vous disposez des droits suivants concernant vos donnees
          personnelles :
        </p>
        <ul className="space-y-2 pl-5">
          <li>Droit d’acces : demander une copie des donnees detenues.</li>
          <li>
            Droit de rectification : demander la correction de donnees inexactes
            ou incompletes.
          </li>
          <li>
            Droit d’opposition : vous opposer au traitement de vos donnees a des
            fins de marketing.
          </li>
          <li>
            Droit a l’effacement : demander la suppression de votre compte et de
            vos donnees associees.
          </li>
        </ul>
        <p>Pour exercer ces droits, veuillez nous contacter.</p>
      </LegalSection>

      <LegalSection index="08" title="Modifications de cette politique">
        <p>
          Nous pouvons mettre a jour cette Politique de confidentialite de temps
          a autre. Nous vous informerons de tout changement majeur en publiant la
          nouvelle politique sur cette page et en mettant a jour la date de
          derniere mise a jour en haut du document.
        </p>
      </LegalSection>

      <LegalSection index="09" title="Nous contacter">
        <p>
          Si vous avez des questions concernant cette Politique de
          confidentialite ou la maniere dont nous traitons vos donnees, vous
          pouvez nous contacter :
        </p>
        <ul className="space-y-2 pl-5">
          <li>Par e-mail : contact@yada.ma</li>
          <li>Par telephone : 06 66 48 47 70</li>
          <li>
            Par courrier : N° 48, Appt 1, Avenue Fal Ouled Oumeir, Agdal -
            Rabat
          </li>
        </ul>
      </LegalSection>
    </LegalDocumentLayout>
  );
}
