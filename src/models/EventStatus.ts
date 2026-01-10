export default class EventStatus {
    value: string;
    statusName: string;
    style?: string;

    constructor(value: string, statusName: string, style?: string) {
        this.value = value;
        this.statusName = statusName;
        this.style = style;
    }
}
