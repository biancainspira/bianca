import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles, 
  Heart, 
  Brain, 
  Infinity as InfinityIcon, 
  ShieldCheck, 
  Truck, 
  Star,
  CheckCircle2,
  XCircle,
  Gem
} from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@assets/PHOTO-2026-03-03-22-24-35_1772589265971.jpg";
import cardImg from "@assets/PHOTO-2026-03-02-13-34-33_1772589412715.jpg";
import orgoniteImg from "@assets/PHOTO-2026-03-02-13-37-04_1772586810843.jpg";

const BUY_LINK = "https://bianca-inspira.pay.yampi.com.br/pay/GC3XRJ0OWW";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF5FF] to-[#F3E8FF] overflow-hidden text-[#2D1B4E]">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl font-semibold text-primary">
            Bianca Inspira
          </div>
          <Button 
            className="hidden md:flex bg-secondary hover:bg-[#D4AF37] text-primary-foreground font-semibold rounded-full px-8 gold-glow transition-all"
            onClick={() => window.open(BUY_LINK, "_blank")}
          >
            Quero o meu Oráculo
          </Button>
        </div>
      </header>

      {/* Botão Flutuante Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Button 
          size="lg"
          className="bg-secondary hover:bg-[#D4AF37] text-primary-foreground font-semibold rounded-full shadow-lg gold-glow h-14 px-8"
          onClick={() => window.open(BUY_LINK, "_blank")}
        >
          Comprar Agora
        </Button>
      </div>

      <main className="pt-24 md:pt-28">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden pt-4 md:pt-8 pb-12 md:pb-16 px-4">
          <motion.div 
            style={{ y: parallaxY }}
            className="absolute inset-0 opacity-20 z-0"
          >
            {/* Background pattern placeholder */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
          </motion.div>
          
          <div className="container relative z-10 max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col text-center lg:text-left z-10 w-full items-center lg:items-center"
            >
              <div className="inline-flex mb-6 md:mb-8 bg-white/40 backdrop-blur-md border border-purple-200/30 text-primary px-3 sm:px-4 md:px-6 py-1.5 md:py-2.5 rounded-full text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase shadow-sm items-center justify-center max-w-[95%] text-center">
                ✨ Oráculo 108 Cartas + Orgonite
              </div>
              
              <div className="w-full flex justify-center">
                <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[5.5rem] font-bold leading-tight md:leading-[1.05] text-primary tracking-tight w-full flex flex-col items-center">
                  <span className="text-center w-full block">Desperte Seu Poder</span>
                  <span className="font-serif italic text-[#D4AF37] font-medium text-center mt-1 sm:mt-2 lg:mt-4 block w-full relative pb-3 md:pb-4 text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[6.5rem]">
                    Interior
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-16 sm:w-24 md:w-40 h-[2px] md:h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full opacity-60"></span>
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mt-4 md:mt-10 max-w-xl text-center font-light mx-auto px-1 sm:px-2">
                Acesse o campo das infinitas possibilidades com nosso oráculo exclusivo e transforme sua jornada de autoconhecimento.
              </p>
              
              <div className="mt-8 md:mt-12 flex justify-center w-full">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-[#D4AF37] text-primary-foreground text-[13px] sm:text-sm md:text-lg h-auto min-h-[3.5rem] md:h-16 py-3 md:py-0 px-4 sm:px-8 md:px-12 rounded-full gold-glow w-full sm:w-auto transition-all duration-300 shadow-2xl shadow-secondary/30 font-bold tracking-wider md:tracking-widest uppercase whitespace-normal text-center leading-tight max-w-xs sm:max-w-none"
                  onClick={() => window.open(BUY_LINK, "_blank")}
                >
                  Quero Expandir Minha Consciência
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:max-w-full mt-6 sm:mt-10 lg:mt-0"
            >
              {/* Imagem principal do oráculo com estilo premium */}
              <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 border border-white/60 aspect-[4/5] group">
                <img 
                  src={heroImg} 
                  alt="Oráculo das Infinitas Possibilidades" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/30 rounded-3xl md:rounded-[2rem]" />
              </div>
              
              {/* Efeitos de luz atrás da imagem */}
              <div className="absolute -inset-4 md:-inset-6 bg-secondary/20 blur-2xl md:blur-3xl -z-10 rounded-[3rem]" />
            </motion.div>
          </div>
        </section>

        {/* 2. Seção Dor da Persona */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="container max-w-5xl">
            <FadeIn>
              <div className="text-center space-y-6 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-primary">
                  Você sente que há algo a mais, mas parece inalcançável?
                </h2>
                <div className="text-lg md:text-xl text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    A ansiedade, os bloqueios emocionais e a sensação de não ser merecedora têm impedido você de viver a vida abundante que o universo reservou.
                  </p>
                  <p>
                    É hora de romper os ciclos de autossabotagem e realinhar sua frequência vibracional.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3. Seção Apresentação do Oráculo */}
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-white to-[#FAF5FF]">
          <div className="container max-w-6xl grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square group">
                {/* Imagem Placeholder: Cartas Abertas */}
                <img 
                  src={cardImg} 
                  alt="Cartas do Oráculo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-serif text-primary">
                  108 Cartas de Pura Luz
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Criadas para guiar seu processo de cura e expansão. Cada carta traz uma mensagem autoral de desbloqueio emocional, elevação do merecimento e manifestação.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Respostas claras para momentos de dúvida",
                    "Exercícios de conexão e afirmações positivas",
                    "Design premium e toque aveludado"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-lg">
                      <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-secondary shrink-0">
                        <Star className="w-6 h-6 fill-current" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4. Seção Orgonite Exclusivo */}
        <section className="py-16 md:py-20 px-4 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="container max-w-6xl relative z-10">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">
                  O Poder do Orgonite
                </h2>
                <p className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto">
                  Um amuleto artesanal exclusivo para transmutar energias densas e elevar sua vibração.
                </p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-12 items-center">
              <FadeIn>
                <div className="space-y-6">
                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                    <h3 className="text-xl font-bold text-secondary mb-2 flex items-center gap-2">
                      <Gem className="w-5 h-5" /> Selenita Branca
                    </h3>
                    <p className="text-purple-100">Purificação profunda e limpeza do campo energético, garantindo clareza mental e paz interior.</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                    <h3 className="text-xl font-bold text-secondary mb-2 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" /> Apatita
                    </h3>
                    <p className="text-purple-100">Desperta a intuição, melhora a comunicação e dissolve a exaustão emocional.</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                    <h3 className="text-xl font-bold text-secondary mb-2 flex items-center gap-2">
                      <InfinityIcon className="w-5 h-5" /> Ametista
                    </h3>
                    <p className="text-purple-100">Transforma energias negativas em amor, elevando a consciência espiritual e a meditação.</p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-square group">
                  <img 
                    src={orgoniteImg} 
                    alt="Orgonite Artesanal" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </FadeIn>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-white text-primary hover:text-primary font-bold text-lg h-16 px-12 rounded-full gold-glow"
                onClick={() => window.open(BUY_LINK, "_blank")}
              >
                Garantir Meu Kit Completo
              </Button>
            </div>
          </div>
        </section>

        {/* 5. Seção Benefícios */}
        <section className="py-16 md:py-20 px-4 bg-[#FAF5FF]">
          <div className="container max-w-6xl">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-center text-primary mb-12">
                Sua Nova Realidade
              </h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: Brain, title: "Clareza Emocional", desc: "Dissolva névoas mentais e encontre respostas dentro de si." },
                { icon: Heart, title: "Alinhamento Interior", desc: "Sintonize suas emoções com seus desejos mais profundos." },
                { icon: Sparkles, title: "Intuição Fortalecida", desc: "Aprenda a ouvir a voz silenciosa da sua sabedoria interior." },
                { icon: InfinityIcon, title: "Expansão de Consciência", desc: "Eleve sua perspectiva e enxergue o panorama maior da vida." },
                { icon: ShieldCheck, title: "Apoio Energético", desc: "Um amuleto constante para manter sua vibração elevada." }
              ].map((ben, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-50 group">
                    <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                      <ben.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-primary">{ben.title}</h3>
                    <p className="text-muted-foreground">{ben.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Seção Como Usar */}
        <section className="py-16 md:py-20 px-4 bg-white">
          <div className="container max-w-5xl">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-center text-primary mb-12">
                O Ritual das Infinitas Possibilidades
              </h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "Conecte-se", desc: "Respire fundo e centre-se no momento presente." },
                { step: "2", title: "Pergunte", desc: "Faça uma pergunta clara ou peça direcionamento." },
                { step: "3", title: "Escolha", desc: "Tire uma carta confiando na sua intuição." },
                { step: "4", title: "Medite", desc: "Absorva a mensagem e a afirmação de poder." },
                { step: "5", title: "Ancore", desc: "Posicione o orgonite próximo para selar a energia." }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 mx-auto bg-primary text-secondary font-serif text-2xl rounded-full flex items-center justify-center mb-6 shadow-lg z-10 relative">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Para Quem É / Não É */}
        <section className="py-16 md:py-20 px-4 bg-[#F3E8FF]">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <FadeIn>
                <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-green-100 h-full">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-green-500" /> Para Quem É
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Mulheres que buscam autoconhecimento profundo",
                      "Quem deseja elevar seu merecimento e prosperidade",
                      "Pessoas que querem uma ferramenta de conexão diária",
                      "Quem busca proteção energética e elevação vibracional"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-red-50 h-full">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                    <XCircle className="w-6 h-6 md:w-8 md:h-8 text-red-400" /> Para Quem Não É
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Quem espera soluções mágicas sem esforço interno",
                      "Pessoas fechadas para a espiritualidade e autoconhecimento",
                      "Quem não está disposto a tirar 5 minutos para si mesmo",
                      "Quem procura apenas um jogo de adivinhação superficial"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 8. Depoimento e Garantia */}
        <section className="py-16 md:py-20 px-4 bg-white relative">
          <div className="container max-w-4xl space-y-16">
            <FadeIn>
              <div className="text-center relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl text-accent opacity-50 font-serif">"</div>
                <p className="text-xl md:text-3xl font-serif text-primary italic leading-relaxed relative z-10 pt-8">
                  Desde que comecei a usar o Oráculo com o orgonite, minha rotina matinal se transformou. Sinto uma clareza que há anos não experimentava e as mensagens parecem ler a minha alma.
                </p>
                <div className="mt-6 md:mt-8 flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-serif font-bold text-primary">M</div>
                  <div className="text-left">
                    <div className="font-bold text-primary">Marina S.</div>
                    <div className="text-sm text-secondary font-medium">Cliente Verificada</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="bg-primary text-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-2xl">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">Garantia de Satisfação</h3>
                  <p className="text-purple-100 text-base md:text-lg">
                    Temos absoluta confiança na qualidade e energia do nosso material. Se por qualquer motivo você não se conectar com o kit, garantimos a devolução dentro do prazo legal.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 10. Informações de Envio */}
        <section className="py-12 md:py-16 px-4 bg-[#FAF5FF] border-y border-purple-100">
          <div className="container max-w-5xl">
            <div className="grid sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-purple-200">
              <FadeIn className="pt-4 sm:pt-0 px-4">
                <Truck className="w-10 h-10 mx-auto text-secondary mb-4" />
                <h4 className="font-bold text-primary mb-2">Envio Nacional</h4>
                <p className="text-sm text-muted-foreground">Entregamos com segurança em todo o Brasil.</p>
              </FadeIn>
              <FadeIn delay={0.1} className="pt-4 sm:pt-0 px-4">
                <Heart className="w-10 h-10 mx-auto text-secondary mb-4" />
                <h4 className="font-bold text-primary mb-2">Produção Artesanal</h4>
                <p className="text-sm text-muted-foreground">Orgonites feitos à mão com intenção e cuidado.</p>
              </FadeIn>
              <FadeIn delay={0.2} className="pt-4 sm:pt-0 px-4">
                <ShieldCheck className="w-10 h-10 mx-auto text-secondary mb-4" />
                <h4 className="font-bold text-primary mb-2">Rastreio Seguro</h4>
                <p className="text-sm text-muted-foreground">Código de rastreio enviado direto para o seu e-mail.</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 11. CTA Final */}
        <section className="pt-16 md:pt-20 pb-8 px-4 relative overflow-hidden bg-primary text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
          
          <div className="container max-w-3xl relative z-10">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                Pronta para acessar o campo das Infinitas Possibilidades?
              </h2>
              <p className="text-lg md:text-xl text-purple-200 mb-8">
                Garanta agora o seu Oráculo + Orgonite Exclusivo e inicie sua jornada de transformação.
              </p>
              
              <div className="bg-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-md border border-white/20 mb-0 relative z-30">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-white text-primary hover:text-primary font-bold text-lg md:text-xl h-16 md:h-20 px-8 md:px-16 rounded-full gold-glow w-full md:w-auto"
                  onClick={() => window.open(BUY_LINK, "_blank")}
                >
                  COMPRAR MEU KIT AGORA
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A0F2E] text-purple-200 pt-8 pb-12 text-center text-sm border-t border-white/10 relative z-20">
        <div className="container">
          <div className="font-serif text-2xl font-semibold text-white mb-6">
            Bianca Inspira
          </div>
          <p className="mb-4">© {new Date().getFullYear()} Bianca Inspira. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4 text-xs opacity-60">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}