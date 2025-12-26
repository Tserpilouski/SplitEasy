export class Event {
    title: string;
    description?: string;
    currency: string;

    constructor(title: string, currency: string, description?: string) {
        this.title = title;
        this.currency = currency;
        this.description = description;
    }
}
