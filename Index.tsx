import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, Globe, TrendingUp, Star, Clock, Sparkles, ChevronRight, Bot, Waves, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", hotel: "" });
  const [showStickyButton, setShowStickyButton] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Gracias por tu interés!",
      description: "Nos pondremos en contacto contigo pronto para agendar tu demo.",
    });
    setFormData({ name: "", email: "", hotel: "" });
  };

  // Show sticky button after scrolling
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowStickyButton(window.scrollY > 300);
    });
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Amalia</span>
            </div>
            <Button 
              asChild
              variant="outline"
              className="font-medium"
            >
              <a href="https://platform.amalia.travel/" target="_blank" rel="noopener noreferrer">
                Iniciar sesión
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/5 via-background to-background py-20 px-4 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZhOGE1ZCIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjIiLz48L2c+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>AI-powered guest experience system</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Conoce a <span className="text-primary">Amalia</span>,<br />
              tu asistente AI para mejorar la experiencia del huésped
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Automatiza la comunicación con tus huéspedes en WhatsApp. Aumenta ventas con upsell de experiencias y mejora la satisfacción.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                Agenda una demo <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver cómo funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2 animate-slide-up">
              <div className="text-4xl font-bold text-primary">+30%</div>
              <div className="text-muted-foreground">en ventas adicionales</div>
            </div>
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary">3x</div>
              <div className="text-muted-foreground">más experiencias reservadas</div>
            </div>
            <div className="space-y-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary">+90%</div>
              <div className="text-muted-foreground">de preguntas frecuentes respondidas con éxito</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Todo lo que necesitas para <span className="text-primary">conectar</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Amalia se encarga de la comunicación mientras tú te enfocas en crear experiencias memorables
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 space-y-4 hover:shadow-xl transition-all border-2 hover:border-primary/50 bg-card">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Comunicación inteligente</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conecta con huéspedes vía WhatsApp, webchat y mensajes automatizados. 
                Respuestas instantáneas 24/7 en cualquier idioma.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-xl transition-all border-2 hover:border-primary/50 bg-card">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Upsell de Experiencias</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clases de surf, tours en velero, buceo, yoga frente al mar, cenas privadas en la playa. 
                Experiencias auténticas que tus huéspedes compran desde el chat.
              </p>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-xl transition-all border-2 hover:border-primary/50 bg-card">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Mejores reviews</h3>
              <p className="text-muted-foreground leading-relaxed">
                Respuestas en tiempo real, atención inmediata y seguimiento activo del feedback. 
                Aumenta la satisfacción de tus huéspedes y mejora tus calificaciones.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="como-funciona" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Cómo funciona <span className="text-primary">Amalia</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tres pasos simples para transformar la experiencia de tus huéspedes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 space-y-4 hover:shadow-xl transition-all border-2 hover:border-primary/50 bg-background group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Paso 1
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Automatiza la comunicación</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Amalia gestiona conversaciones con tus huéspedes por WhatsApp, chatbot web y mensajes programados.
                </p>
              </div>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-xl transition-all border-2 hover:border-primary/50 bg-background group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Waves className="w-8 h-8 text-accent" />
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Paso 2
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Recomienda experiencias</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ofrece proactivamente tus amenities, actividades y experiencias de partners aliados.
                </p>
              </div>
            </Card>

            <Card className="p-8 space-y-4 hover:shadow-xl transition-all border-2 hover:border-primary/50 bg-background group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  Paso 3
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Mejora la satisfacción</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Recoge feedback en tiempo real y aumenta las reviews positivas de manera orgánica.
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Prueba piloto sin costo
                </h3>
                <p className="text-lg text-muted-foreground">
                  Todo esto ocurre en una prueba piloto gratuita. Solo si vemos resultados, oficializamos la alianza comercial.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Visual/Experience Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Experiencias que <span className="text-accent">venden solas</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tours en velero al amanecer, buceo con tortugas, yoga frente al mar, 
                clases de surf o cenas privadas en la playa. Amalia recomienda y vende 
                las experiencias perfectas para cada huésped.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Upselling automático</h4>
                    <p className="text-muted-foreground">Ofrece upgrades y servicios en el momento perfecto</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Disponible 24/7</h4>
                    <p className="text-muted-foreground">Responde preguntas y gestiona reservas a cualquier hora</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/30 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-card/50 backdrop-blur-sm rounded-2xl border-2 border-primary/30 flex items-center justify-center">
                      <MessageCircle className="w-24 h-24 text-primary/50 animate-float" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Precios flexibles basados en <span className="text-primary">resultados</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Paga solo por tareas automatizadas con éxito, asegurando cero riesgo para tu hotel. 
              Precios basados en resultados, no en promesas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Hostales Plan */}
            <Card className="p-8 space-y-6 hover:shadow-xl transition-all border-2 hover:border-primary/30 bg-card">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Hostales</h3>
                <div className="space-y-1">
                  <p className="text-xl font-semibold text-foreground">A pedido</p>
                  <p className="text-sm text-muted-foreground">/precio basado en éxito</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Para hostales independientes que buscan automatizar tareas repetitivas sin riesgo.
              </p>

              <Button 
                size="lg" 
                variant="outline" 
                className="w-full"
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                Agendar una demo
              </Button>
            </Card>

            {/* Hoteles Boutique - Featured */}
            <Card className="p-8 space-y-6 shadow-2xl transition-all border-2 border-primary bg-gradient-to-b from-primary/10 to-accent/5 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Más popular
                </span>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Hoteles Boutique o Lodges</h3>
                <div className="space-y-1">
                  <p className="text-xl font-semibold text-foreground">A pedido</p>
                  <p className="text-sm text-muted-foreground">/precio basado en éxito</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Para hoteles boutique o lodges en crecimiento que necesitan soluciones escalables.
              </p>

              <Button 
                size="lg" 
                className="w-full"
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                Agendar una demo
              </Button>
            </Card>

            {/* Resorts/Cadenas Plan */}
            <Card className="p-8 space-y-6 hover:shadow-xl transition-all border-2 hover:border-primary/30 bg-card">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Resorts o Cadenas</h3>
                <div className="space-y-1">
                  <p className="text-xl font-semibold text-foreground">A pedido</p>
                  <p className="text-sm text-muted-foreground">/precio basado en éxito</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Para grandes hoteles o cadenas que requieren soporte avanzado y personalizado.
              </p>

              <Button 
                size="lg" 
                variant="outline" 
                className="w-full"
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                Agendar una demo
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Agenda una demo con <span className="text-primary">Amalia</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Descubre cómo Amalia puede transformar la experiencia de tus huéspedes y aumentar tus ingresos
            </p>
          </div>

          <Card className="p-8 md:p-12 shadow-2xl bg-card border-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="hotel" className="text-sm font-medium text-foreground">
                  Nombre del hotel
                </label>
                <Input
                  id="hotel"
                  type="text"
                  placeholder="Hotel Paradise Beach"
                  value={formData.hotel}
                  onChange={(e) => setFormData({ ...formData, hotel: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg">
                Quiero conocer a Amalia
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Sin compromiso. Te contactaremos en menos de 24 horas.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* Sticky CTA Button */}
      {showStickyButton && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <Button
            size="lg"
            className="shadow-2xl hover:shadow-primary/50 px-6 py-6 text-base"
            onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
          >
            Quiero conocer a Amalia
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Index;
