import { Split, Users, PieChart } from 'lucide-react';
import { Link } from 'react-router';

export default function Home() {
    const features = [
        {
            icon: Split,
            title: 'Легкое деление расходов',
            description: 'Делите счета поровну или настраивайте индивидуальные доли для каждого участника',
        },
        {
            icon: Users,
            title: 'Групповые поездки',
            description: 'Идеально для путешествий, корпоративов и совместных покупок с друзьями',
        },
        {
            icon: PieChart,
            title: 'Прозрачная статистика',
            description: 'Наглядные графики и автоматический расчет, кто кому и сколько должен',
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4">
                <section className="py-20 md:py-32 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 from-primary to-purple-600 bg-clip-text text-transparent">
                            Делите расходы
                            <br />с друзьями легко
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Забудьте о сложных расчетах в путешествиях и совместных покупках. SplitEasy автоматически
                            считает, кто кому должен.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/dashboard">
                                <button className="text-lg px-8" data-testid="button-get-started">
                                    Начать бесплатно
                                </button>
                            </Link>
                            <button className="text-lg px-8" data-testid="button-demo">
                                Посмотреть демо
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-8 text-center hover-elevate transition-all"
                                data-testid={`card-feature-${index}`}
                            >
                                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                                    <feature.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-center mb-12">Как это работает</h3>
                        <div className="space-y-6">
                            {[
                                'Создайте событие для вашей поездки или встречи',
                                'Пригласите друзей по ссылке',
                                'Добавляйте расходы по мере их появления',
                                'Смотрите, кто кому должен в реальном времени',
                            ].map((step, index) => (
                                <div key={index} className="flex items-start gap-4" data-testid={`step-${index}`}>
                                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="text-lg pt-1.5">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 text-center">
                    <div className="max-w-3xl mx-auto p-12 from-primary/10 to-purple-500/10 rounded-2xl">
                        <h3 className="text-3xl font-bold mb-4">Готовы начать?</h3>
                        <p className="text-xl text-muted-foreground mb-8">
                            Присоединяйтесь к тысячам пользователей, которые уже упростили деление расходов
                        </p>
                        <Link to="/dashboard">
                            <button className="text-lg px-8" data-testid="button-cta">
                                Создать первое событие
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
