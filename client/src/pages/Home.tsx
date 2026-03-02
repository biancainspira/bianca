import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Heart, Brain, Moon, Sun, ShieldCheck, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

// Imagem Principal Anexada
import produtoImagem from "@assets/55069001-5BCE-4CB8-AE51-CB3B2449E42D_1772459776931.png";
import cartaAbertaImagem from "@assets/IMG_E5D92B66-F39C-4F89-909F-1C535901CDF5_1772460112723.jpeg";

const CHECKOUT_LINK = "https://bianca-inspira.pay.yampi.com.br/pay/GC3XRJ0OWW";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCheckout = () => {
    window.open(CHECKOUT_LINK, "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Header Fixo */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center max-w-6xl">
          <div className="font-serif text-xl font-bold text-secondary">
            Bianca Inspira
          </div>
          <Button 
            onClick={handleCheckout}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 transition-all hover:scale-105 box-glow"
          >
            Quero o meu Oráculo
          </Button>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="w-full pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center bg-gradient-to-b from-accent/50 to-background overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
          <FadeIn>
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Física Quântica e Espiritualidade
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
              Acesse o Campo das <br />
              <span className="text-primary">Infinitas Possibilidades</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Expanda sua consciência, desbloqueie seu merecimento e manifeste a vida dos seus sonhos com 108 cartas autorais e um orgonite exclusivo.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-14 px-8 rounded-full shadow-[0_0_20px_rgba(220,175,80,0.4)] hover:shadow-[0_0_30px_rgba(220,175,80,0.6)] transition-all hover:-translate-y-1"
            >
              Garantir Meu Oráculo Agora <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-16 relative">
              {/* Imagem principal com o placeholder requisitado no código, mas usando a imagem fornecida */}
              {/* Substituir por: /images/oraculo-principal.jpg */}
              <img 
                src={produtoImagem} 
                alt="Oráculo das Infinitas Possibilidades" 
                className="max-w-full md:max-w-2xl rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Seção Dor da Persona */}
      <section className="w-full py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Você sente que está vivendo abaixo do seu potencial?
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-secondary-foreground/80 text-lg">
                Muitas vezes, bloqueios emocionais e crenças limitantes nos impedem de acessar a abundância que merecemos. A ansiedade toma conta e a clareza desaparece.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-secondary-foreground/80 text-lg">
                Se você busca respostas, alinhamento interior e uma ferramenta prática para fortalecer sua intuição diariamente, este oráculo foi feito para você.
              </p>
            </FadeIn>
          </div>
          <div className="flex-1">
            <FadeIn delay={0.3}>
              {/* Substituir por: /images/mulher-oficial.jpg */}
              <img 
                src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1000&auto=format&fit=crop" 
                alt="Mulher em reflexão" 
                className="rounded-2xl shadow-lg opacity-80 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-700"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Seção Apresentação do Oráculo */}
      <section className="w-full py-24 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold text-secondary mb-4">O Seu Novo Guia Diário</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Mais do que cartas, um instrumento de cura e manifestação.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              {/* Substituir por: /images/cartas-abertas.jpg */}
              <img 
                src={cartaAbertaImagem} 
                alt="Carta Aberta do Oráculo" 
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow w-full object-cover"
              />
            </FadeIn>
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Sparkles className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">108 Mensagens Poderosas</h3>
                    <p className="text-muted-foreground">Cartas autorais projetadas para expansão de consciência, trazendo clareza instantânea para seus desafios.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Heart className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Desbloqueio Emocional</h3>
                    <p className="text-muted-foreground">Frases de afirmação em cada carta que atuam diretamente no seu subconsciente, liberando amarras.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Sun className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Ativação do Merecimento</h3>
                    <p className="text-muted-foreground">Reconecte-se com sua essência abundante e prepare-se para receber o melhor que o universo tem a oferecer.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Seção Orgonite Exclusivo */}
      <section className="w-full py-24 bg-accent/30 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[80px] z-0" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-4xl font-bold text-secondary mb-4">Acompanha Orgonite Artesanal</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Uma peça exclusiva e feita à mão para transmutar energia e potencializar suas intenções.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
            <div className="w-full lg:w-1/2">
              <FadeIn>
                {/* Substituir por: /images/orgonite-oficial.jpg */}
                <img 
                  src={produtoImagem} 
                  alt="Orgonite Oficial" 
                  className="rounded-3xl shadow-2xl object-cover"
                />
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-1 gap-6">
              <FadeIn delay={0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-accent/50 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-secondary mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" /> Selenita Branca
                  </h3>
                  <p className="text-muted-foreground text-sm">Purificação extrema e limpeza energética. Mantém o orgonite e o ambiente sempre purificados.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-accent/50 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-secondary mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#1A73E8]" /> Apatita
                  </h3>
                  <p className="text-muted-foreground text-sm">Cristal da intuição e da clareza mental. Facilita a comunicação com o plano espiritual.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-accent/50 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-secondary mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#9b5de5]" /> Ametista
                  </h3>
                  <p className="text-muted-foreground text-sm">Transmutação de energias densas, promovendo paz profunda, sabedoria e elevação espiritual.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Seção Benefícios */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-16">
              O que você ganha ao utilizar o Oráculo?
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: Sun, title: "Clareza Emocional", desc: "Respostas diretas para seus momentos de confusão." },
              { icon: Brain, title: "Alinhamento Interior", desc: "Sintonia entre mente, corpo e alma." },
              { icon: Sparkles, title: "Fortalecimento da Intuição", desc: "Aprenda a ouvir e confiar na sua voz interior." },
              { icon: Moon, title: "Expansão da Consciência", desc: "Compreensão mais profunda sobre si e o universo." },
              { icon: Heart, title: "Apoio Energético", desc: "A força combinada das cartas e dos cristais do orgonite." },
              { icon: ShieldCheck, title: "Proteção", desc: "Um campo vibracional elevado e protegido ao seu redor." }
            ].map((beneficio, i) => (
              <FadeIn delay={i * 0.1} key={i}>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-accent/10 hover:bg-accent/20 transition-colors h-full border border-border/50">
                  <beneficio.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-secondary mb-2">{beneficio.title}</h3>
                  <p className="text-muted-foreground">{beneficio.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Seção Como Usar */}
      <section className="w-full py-24 bg-secondary text-secondary-foreground relative">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Seu Ritual Diário</h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {/* Linha conectora desktop */}
            <div className="hidden md:block absolute top-8 left-10 right-10 h-[1px] bg-primary/30 z-0" />
            
            {[
              "Conecte-se",
              "Faça uma pergunta",
              "Escolha uma carta",
              "Medite na mensagem",
              "Posicione o orgonite"
            ].map((passo, i) => (
              <FadeIn delay={i * 0.1} key={i}>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-4 shadow-[0_0_15px_rgba(220,175,80,0.3)]">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold">{passo}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Seção Para Quem É / Não É */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="p-8 rounded-3xl bg-accent/20 border border-primary/20">
                <h3 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                  <Heart className="text-primary" /> Para quem é
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3"><span className="text-primary mt-1">✦</span> Mulheres em busca de autoconhecimento</li>
                  <li className="flex items-start gap-3"><span className="text-primary mt-1">✦</span> Pessoas querendo desenvolver a intuição</li>
                  <li className="flex items-start gap-3"><span className="text-primary mt-1">✦</span> Quem precisa de orientação diária prática</li>
                  <li className="flex items-start gap-3"><span className="text-primary mt-1">✦</span> Amantes de cristais, energia e espiritualidade</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-3xl bg-muted/50 border border-border">
                <h3 className="text-2xl font-bold text-muted-foreground mb-6 flex items-center gap-3">
                  Não é para
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3"><span className="text-muted-foreground/50 mt-1">x</span> Quem procura soluções mágicas sem esforço pessoal</li>
                  <li className="flex items-start gap-3"><span className="text-muted-foreground/50 mt-1">x</span> Pessoas fechadas para a espiritualidade</li>
                  <li className="flex items-start gap-3"><span className="text-muted-foreground/50 mt-1">x</span> Quem não está disposto a olhar para dentro</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. Seção Depoimento */}
      <section className="w-full py-24 bg-accent/30 italic">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FadeIn>
            <Star className="w-12 h-12 text-primary mx-auto mb-8 fill-primary" />
            <p className="text-2xl md:text-3xl text-secondary font-serif leading-relaxed mb-8">
              "Desde que comecei a usar o Oráculo com o orgonite, minha clareza mental e paz interior se multiplicaram. É como ter um conselheiro sábio e acolhedor sempre à disposição."
            </p>
            <div className="font-sans">
              <p className="font-bold text-secondary">Camila S.</p>
              <p className="text-sm text-muted-foreground">Cliente Transformada</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 9. & 10. Garantia e Envio */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="p-8 rounded-2xl bg-white shadow-lg border border-accent flex flex-col items-center text-center">
                <ShieldCheck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-3">Garantia de Satisfação</h3>
                <p className="text-muted-foreground">
                  Seu risco é zero. Se por qualquer motivo você não se conectar com a energia do Oráculo, oferecemos garantia incondicional nos primeiros 7 dias.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-2xl bg-white shadow-lg border border-accent flex flex-col items-center text-center">
                <Truck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-secondary mb-3">Envio para todo Brasil</h3>
                <p className="text-muted-foreground">
                  Produção artesanal com muito amor. Após a confirmação, seu pedido é preparado e você recebe o código de rastreio por e-mail.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 11. CTA Final */}
      <section className="w-full py-32 bg-secondary text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/10 rounded-full blur-[100px] z-0 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronta para expandir sua consciência?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Adquira agora o seu Oráculo das Infinitas Possibilidades + Orgonite Exclusivo.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button 
              onClick={handleCheckout}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl h-16 px-12 rounded-full shadow-[0_0_30px_rgba(220,175,80,0.5)] hover:shadow-[0_0_50px_rgba(220,175,80,0.7)] transition-all hover:scale-105"
            >
              Comprar Agora <ChevronRight className="ml-2 w-6 h-6" />
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Footer Simples */}
      <footer className="w-full py-8 bg-background border-t border-border text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Bianca Inspira. Todos os direitos reservados.</p>
      </footer>

      {/* Botão Flutuante */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: scrolled ? 1 : 0, scale: scrolled ? 1 : 0.8 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50 pointer-events-auto"
        onClick={handleCheckout}
        style={{ pointerEvents: scrolled ? 'auto' : 'none' }}
      >
        <Heart className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
