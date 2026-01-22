import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, User } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Sobre
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mais de 17 anos de experiência cuidando da sua saúde e bem-estar
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="space-y-6 max-w-xl w-full">
              <Card className="shadow-card border-0">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-wellness flex items-center justify-center">
                    <User className="h-10 w-10 text-wellness-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary">
                    Kelly Kioko Arakaki Giarola Pereira
                  </CardTitle>
                  <p className="text-lg text-muted-foreground">
                    Fisioterapeuta, Acupunturista e Especialista
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-healing/10 text-healing border-healing/20 text-base px-4 py-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      Desde 2009
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    A Arakaki Terapia Oriental é conduzida com dedicação por Kelly Arakaki (CREFITO-3/132875-F).
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Com seu próprio espaço, Kelly aplica e compartilha seus conhecimentos, sempre com o propósito de promover equilíbrio, saúde e bem-estar às pessoas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;