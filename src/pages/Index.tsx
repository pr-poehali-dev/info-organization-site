import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("main");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const programs = [
    {
      title: "Судоводитель",
      description: "Программа подготовки судоводителей для работы на морских судах различных типов",
      duration: "6 месяцев",
      icon: "Ship"
    },
    {
      title: "Судовой механик",
      description: "Обучение эксплуатации и обслуживанию судовых двигателей и механизмов",
      duration: "5 месяцев",
      icon: "Cog"
    },
    {
      title: "Радиооператор",
      description: "Подготовка специалистов по судовой радиосвязи и навигационному оборудованию",
      duration: "4 месяца",
      icon: "Radio"
    },
    {
      title: "Электромеханик",
      description: "Обучение обслуживанию электрооборудования и автоматизированных систем судна",
      duration: "5 месяцев",
      icon: "Zap"
    }
  ];

  const certifications = [
    {
      title: "Сертификат STCW",
      description: "Международная сертификация в соответствии с конвенцией ПДНВ"
    },
    {
      title: "Лицензия Морречфлота",
      description: "Государственная лицензия на право управления судном"
    },
    {
      title: "Повышение квалификации",
      description: "Обновление и продление действующих сертификатов"
    }
  ];

  const documents = [
    { name: "Лицензия на образовательную деятельность", type: "PDF" },
    { name: "Аккредитация учебного центра", type: "PDF" },
    { name: "Устав ДВМТЦ", type: "PDF" },
    { name: "Программа обучения судоводителей", type: "PDF" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Anchor" size={32} className="text-primary-foreground" />
              <div>
                <h1 className="text-xl font-bold">ДВМТЦ</h1>
                <p className="text-xs opacity-90">Дальневосточный морской тренажёрный центр</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => setActiveSection("main")} className="hover:opacity-80 transition-opacity">Главная</button>
              <button onClick={() => setActiveSection("programs")} className="hover:opacity-80 transition-opacity">Программы</button>
              <button onClick={() => setActiveSection("certification")} className="hover:opacity-80 transition-opacity">Сертификация</button>
              <button onClick={() => setActiveSection("documents")} className="hover:opacity-80 transition-opacity">Документы</button>
              <button onClick={() => setActiveSection("contacts")} className="hover:opacity-80 transition-opacity">Контакты</button>
            </nav>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-primary-foreground">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-primary text-primary-foreground border-primary">
                <nav className="flex flex-col gap-6 mt-8">
                  <button onClick={() => handleNavClick("main")} className="text-left text-lg font-semibold hover:opacity-80 transition-opacity">Главная</button>
                  <button onClick={() => handleNavClick("programs")} className="text-left text-lg font-semibold hover:opacity-80 transition-opacity">Программы обучения</button>
                  <button onClick={() => handleNavClick("certification")} className="text-left text-lg font-semibold hover:opacity-80 transition-opacity">Сертификация</button>
                  <button onClick={() => handleNavClick("documents")} className="text-left text-lg font-semibold hover:opacity-80 transition-opacity">Документы</button>
                  <button onClick={() => handleNavClick("contacts")} className="text-left text-lg font-semibold hover:opacity-80 transition-opacity">Контакты</button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {activeSection === "main" && (
        <>
          <section className="relative bg-gradient-to-br from-primary to-secondary text-primary-foreground py-24 animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h2 className="text-5xl font-bold mb-6">Профессиональное обучение специалистов морской отрасли</h2>
                <p className="text-xl mb-8 opacity-95">
                  Дополнительное профессиональное образование и сертификация морских специалистов 
                  в соответствии с международными стандартами STCW
                </p>
                <div className="flex gap-4">
                  <Button onClick={() => setActiveSection("programs")} size="lg" variant="secondary" className="font-semibold">
                    Программы обучения
                  </Button>
                  <Button onClick={() => setActiveSection("contacts")} size="lg" variant="outline" className="bg-transparent border-2 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                    Связаться с нами
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 opacity-10">
              <Icon name="Ship" size={300} />
            </div>
          </section>

          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-center mb-12 animate-fade-in">Ключевые программы</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programs.map((program, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-4 bg-primary/10 rounded-full">
                        <Icon name={program.icon} size={40} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">{program.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                      <p className="text-sm font-semibold text-primary">{program.duration}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <Icon name="Award" size={48} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">25+ лет</h4>
                  <p className="text-muted-foreground">Опыта подготовки морских специалистов</p>
                </div>
                <div>
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <Icon name="Users" size={48} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">15000+</h4>
                  <p className="text-muted-foreground">Выпускников работают по специальности</p>
                </div>
                <div>
                  <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                    <Icon name="Globe" size={48} className="text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Международные</h4>
                  <p className="text-muted-foreground">Стандарты сертификации STCW</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === "programs" && (
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Программы обучения</h2>
            <p className="text-muted-foreground mb-12 max-w-3xl">
              Наши программы разработаны в соответствии с требованиями Международной конвенции ПДНВ (STCW) 
              и утверждены Федеральным агентством морского и речного транспорта
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {programs.map((program, idx) => (
                <Card key={idx} className="p-8 animate-slide-in-right hover:shadow-xl transition-shadow" style={{ animationDelay: `${idx * 0.15}s` }}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary/10 rounded-lg">
                        <Icon name={program.icon} size={48} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">Длительность: {program.duration}</span>
                        <Button>Подробнее</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === "certification" && (
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Сертификация</h2>
            <p className="text-muted-foreground mb-12 max-w-3xl">
              Мы предоставляем услуги по сертификации морских специалистов в соответствии 
              с национальными и международными стандартами
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <Card key={idx} className="p-6 animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="mb-4">
                    <Icon name="FileCheck" size={40} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground mb-4">{cert.description}</p>
                  <Button className="w-full">Получить сертификат</Button>
                </Card>
              ))}
            </div>
            <div className="mt-12 p-8 bg-muted rounded-lg animate-fade-in">
              <h3 className="text-2xl font-bold mb-4">Требования для сертификации</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                  <span>Успешное завершение программы обучения</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                  <span>Прохождение медицинского освидетельствования</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                  <span>Сдача квалификационных экзаменов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                  <span>Подтверждение стажа работы (для некоторых категорий)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {activeSection === "documents" && (
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Документы и лицензии</h2>
            <p className="text-muted-foreground mb-12 max-w-3xl">
              Все необходимые документы, подтверждающие право осуществления образовательной деятельности
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-all cursor-pointer hover:scale-102 animate-slide-in-right" style={{ animationDelay: `${idx * 0.08}s` }}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="FileText" size={32} className="text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold mb-1">{doc.name}</h3>
                      <p className="text-sm text-muted-foreground">{doc.type}</p>
                    </div>
                    <Icon name="Download" size={20} className="text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === "contacts" && (
        <section className="py-16 animate-fade-in">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground mb-12">Свяжитесь с нами для получения консультации</p>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Адрес</h4>
                      <p className="text-muted-foreground">г. Владивосток, ул. Верхнепортовая, 50а</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-muted-foreground">+7 (423) 241-31-31</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@msun.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Режим работы</h4>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input type="email" placeholder="ivan@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea placeholder="Опишите ваш вопрос или интересующую программу" rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">Отправить заявку</Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Anchor" size={32} />
                <h3 className="text-xl font-bold">ДВМТЦ</h3>
              </div>
              <p className="text-sm opacity-90">
                Дальневосточный морской тренажёрный центр - ведущая организация 
                по подготовке морских специалистов на Дальнем Востоке
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Быстрые ссылки</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li><button onClick={() => setActiveSection("programs")} className="hover:opacity-80">Программы обучения</button></li>
                <li><button onClick={() => setActiveSection("certification")} className="hover:opacity-80">Сертификация</button></li>
                <li><button onClick={() => setActiveSection("documents")} className="hover:opacity-80">Документы</button></li>
                <li><button onClick={() => setActiveSection("contacts")} className="hover:opacity-80">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>+7 (423) 241-31-31</li>
                <li>info@msun.ru</li>
                <li>г. Владивосток</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 ДВМТЦ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;