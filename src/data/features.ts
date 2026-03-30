import {
  Bird,
  Flame,
  BookOpen,
  Users,
  Handshake,
  Brain,
  ShieldBan,
  Bot,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  tag?: string;
  color: string;
}

export const featuredFeatures: Feature[] = [
  {
    icon: Bird,
    title: "Santuário dos Pássaros",
    tagline: "Cada conquista ganha asas",
    description:
      "Colecione 6 pássaros únicos conforme seu progresso. De Pardal a Fênix — cada evolução é uma conquista sua.",
    color: "#FFC107",
  },
  {
    icon: Brain,
    title: "Exercícios para a Mente",
    tagline: "Cuide da sua mente todos os dias",
    description:
      "Respiração guiada, jogos de memória, diário reflexivo e mais. Exercícios cognitivos pensados para fortalecer você.",
    color: "#3B82F6",
  },
  {
    icon: Users,
    title: "Comunidade",
    tagline: "Você não está sozinho nessa",
    description:
      "Feed social moderado para apoio mútuo. Compartilhe experiências, receba suporte real de quem entende.",
    color: "#4ECDC4",
  },
  {
    icon: BookOpen,
    title: "Devocional",
    tagline: "Fé e ciência caminhando juntas",
    description:
      "Conteúdo espiritual diário que integra fé com técnicas de saúde mental comprovadas pela ciência.",
    color: "#0FB3A3",
  },
];

export const secondaryFeatures: Feature[] = [
  {
    icon: LifeBuoy,
    title: "Botão SOS de Emergência",
    tagline: "Ajuda imediata na hora da tentação",
    description:
      "Usa a câmera frontal para criar um reflexo de auto-consciência, exibe mensagens motivacionais randômicas e alerta sobre as consequências de uma recaída.",
    color: "#EF4444",
  },
  {
    icon: Flame,
    title: "Sequência & XP",
    tagline: "Consistência que recompensa",
    description:
      "Mantenha sua sequência diária e ganhe XP por cada atividade.",
    color: "#FF6B35",
  },
  {
    icon: Handshake,
    title: "Amizades",
    tagline: "Accountability de verdade",
    description:
      "Conecte-se com pessoas na mesma jornada.",
    color: "#9FB3C8",
  },
  {
    icon: ShieldBan,
    title: "Bloqueio de Sites",
    tagline: "Remova os gatilhos",
    description:
      "Bloqueio nativo de sites prejudiciais no seu caminho.",
    color: "#FF4B4B",
  },
  {
    icon: Bot,
    title: "Konsel AI",
    tagline: "Seu coach inteligente",
    description:
      "Coaching por chat com IA treinada em técnicas cognitivo-comportamentais.",
    tag: "Em breve",
    color: "#0FB3A3",
  },
];
