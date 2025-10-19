// Mock data for static deployment
import logo2 from '../assets/images/logo2.png';
import professionnel1 from '../assets/images/professionnel1.png';
import professionnel2 from '../assets/images/professionnel2.png';
import professionnel3 from '../assets/images/professionnel3.png';
import SWISSCOM from '../assets/images/SWISSCOM.png';
import UBS from '../assets/images/UBS.png';
import TAG from '../assets/images/TAG.png';
import PARTNER from '../assets/images/PARTNER.jpg';
import padel001 from '../assets/images/padel001.png';
import padel1 from '../assets/images/padel1.png';
import padelTennis from '../assets/images/padelTennis.png';

// Event data
export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  place: string;
}

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "Tournoi Swiss Padel Open",
    description: "Le plus grand tournoi de padel de Suisse. Venez assister à des matchs exceptionnels avec les meilleurs joueurs du pays.",
    image: padel001,
    date: "2025-12-15T10:00:00",
    place: "Lausanne Sports Center"
  },
  {
    id: 2,
    title: "Initiation Gratuite Padel",
    description: "Découvrez le padel gratuitement avec nos instructeurs certifiés. Matériel fourni, tous niveaux acceptés.",
    image: padel1,
    date: "2025-11-20T14:00:00",
    place: "Geneva Padel Club"
  },
  {
    id: 3,
    title: "Championnat Corporate",
    description: "Tournoi d'entreprises pour développer la cohésion d'équipe autour du padel. Inscriptions ouvertes aux entreprises suisses.",
    image: padelTennis,
    date: "2025-11-30T09:00:00",
    place: "Zurich Business Center"
  }
];

// Gallery data
export interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const mockGalleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Terrain Professionnel Lausanne",
    image: padel001,
    description: "Notre dernière installation premium à Lausanne, équipée des dernières technologies pour une expérience de jeu optimale."
  },
  {
    id: 2,
    title: "Centre d'Entraînement Geneva",
    image: padel1,
    description: "Centre d'entraînement moderne avec 4 terrains couverts et vestiaires premium pour les joueurs de tous niveaux."
  },
  {
    id: 3,
    title: "Installation Corporate Zurich",
    image: padelTennis,
    description: "Terrain d'entreprise installé pour une grande société zurichoise, avec espace détente et restauration intégrée."
  }
];

// Contact objects data
export interface ContactObject {
  id: number;
  type: string;
}

export const mockContactObjects: ContactObject[] = [
  { id: 1, type: "Demande d'information générale" },
  { id: 2, type: "Installation de terrain" },
  { id: 3, type: "Organisation d'événement" },
  { id: 4, type: "Partenariat commercial" },
  { id: 5, type: "Service après-vente" },
  { id: 6, type: "Formation et cours" }
];

// Professional services data
export interface ProfessionalService {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const mockProfessionalServices: ProfessionalService[] = [
  {
    id: 1,
    title: "INSTALLATION",
    description: "Nous concevons et installons des terrains de padel de haute qualité, adaptés à vos espaces et besoins spécifiques. Nos équipes d'experts vous accompagnent de la planification à la mise en service.",
    image: professionnel1
  },
  {
    id: 2,
    title: "ÉVÉNEMENTS",
    description: "Organisation complète d'événements padel sur mesure : tournois d'entreprise, animations commerciales, initiations publiques. Nous gérons tous les aspects logistiques pour un événement réussi.",
    image: professionnel2
  },
  {
    id: 3,
    title: "SPONSORING",
    description: "Développez votre visibilité grâce à nos solutions de sponsoring innovantes. Associez votre marque à l'univers dynamique du padel et touchez une audience qualifiée et engagée.",
    image: professionnel3
  }
];

// Sponsors data
export interface Sponsor {
  id: number;
  name: string;
  description: string;
  image: string;
  siteUrl: string;
  published: boolean;
}

export const mockSponsors: Sponsor[] = [
  {
    id: 1,
    name: "SWISSCOM",
    description: "Swisscom, leader des télécommunications en Suisse, nous accompagne dans le développement de solutions digitales innovantes pour enrichir l'expérience padel. Ensemble, nous connectons les passionnés de ce sport en pleine expansion.",
    image: SWISSCOM,
    siteUrl: "https://www.swisscom.ch",
    published: true
  },
  {
    id: 2,
    name: "UBS",
    description: "UBS, première banque suisse, partage notre vision d'excellence et d'innovation. Ce partenariat stratégique nous permet de financer des projets ambitieux et de démocratiser l'accès au padel à travers la Suisse.",
    image: UBS,
    siteUrl: "https://www.ubs.com",
    published: true
  },
  {
    id: 3,
    name: "TAG HEUER",
    description: "TAG Heuer, symbole suisse de précision et de performance, s'associe à Swiss Padel Stars pour chronométrer nos événements et célébrer l'esprit de compétition qui anime notre communauté.",
    image: TAG,
    siteUrl: "https://www.tagheuer.com",
    published: true
  }
];

// Partners data
export interface Partner {
  id: number;
  name: string;
  image: string;
  site_url: string;
}

export const mockPartners: Partner[] = [
  {
    id: 1,
    name: "Swiss Padel Federation",
    image: logo2,
    site_url: "https://www.swisspadelstars.ch"
  },
  {
    id: 2,
    name: "Professional Partner",
    image: PARTNER,
    site_url: "https://www.partner.example.com"
  },
  {
    id: 3,
    name: "Swisscom",
    image: SWISSCOM,
    site_url: "https://www.swisscom.ch"
  },
  {
    id: 4,
    name: "UBS",
    image: UBS,
    site_url: "https://www.ubs.com"
  }
];

// Particular services data (if needed)
export interface ParticularService {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const mockParticularServices: ParticularService[] = [
  {
    id: 1,
    title: "Table de Padel Résidentielle",
    description: "Table de padel premium pour usage domestique, design moderne et matériaux haute qualité.",
    image: padel001
  }
];