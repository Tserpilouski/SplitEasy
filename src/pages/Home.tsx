import { Split, Users, PieChart } from 'lucide-react';
import { Link } from 'react-router';

export default function Home() {
    const features = [
        {
            icon: Split,
            title: 'Easy expense splitting',
            description: 'Split bills equally or customize individual shares for each participant',
        },
        {
            icon: Users,
            title: 'Group trips',
            description: 'Perfect for travels, corporate events and joint purchases with friends',
        },
        {
            icon: PieChart,
            title: 'Transparent statistics',
            description: 'Clear graphs and automatic calculation of who owes whom and how much',
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4">
                <section className="py-20 md:py-32 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 from-primary to-purple-600 bg-clip-text text-transparent">
                            Split expenses
                            <br />with friends easily
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Forget about complex calculations on trips and joint purchases. SplitEasy automatically
                            calculates who owes whom.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/dashboard">
                                <button className="text-lg px-8" data-testid="button-get-started">
                                    Start for free
                                </button>
                            </Link>
                            <button className="text-lg px-8" data-testid="button-demo">
                                Watch demo
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
                        <h3 className="text-3xl font-bold text-center mb-12">How it works</h3>
                        <div className="space-y-6">
                            {[
                                'Create an event for your trip or meeting',
                                'Invite friends via link',
                                'Add expenses as they occur',
                                'See who owes whom in real time',
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
                        <h3 className="text-3xl font-bold mb-4">Ready to start?</h3>
                        <p className="text-xl text-muted-foreground mb-8">
                            Join thousands of users who have already simplified expense splitting
                        </p>
                        <Link to="/dashboard">
                            <button className="text-lg px-8" data-testid="button-cta">
                                Create first event
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
