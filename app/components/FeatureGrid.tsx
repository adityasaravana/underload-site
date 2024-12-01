import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Filter, RefreshCcw, Dices } from 'lucide-react'

const features = [
    {
        icon: RefreshCcw,
        title: "Works with Apple Reminders",
        description: "Underload has complete two-way sync with Apple Reminders, so you can still use its integrations with Shortcuts, Siri, and more."
    },
    {
        icon: Filter,
        title: "Filter by List",
        description: "Underload lets you filter tasks by list, so you can focus only on the tasks you need at the moment."
    },
    {
        icon: Dices,
        title: "Random Tasks",
        description: "Underload lets you select a random task to focus on with a single tap."
    }
]

export function FeatureGrid() {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-underload">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <Card key={index} className="flex flex-col">
                                <CardHeader className="flex flex-row items-start space-y-0 pb-2">
                                    <Icon className="w-8 h-8 mr-4 text-underload" />
                                    <CardTitle className="text-xl text-left text-underload">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-left">{feature.description}</CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

