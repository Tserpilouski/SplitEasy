/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class EnumBase {
    abstract getClassName(): string;

    static getAll<T>(): T[] {
        const values: T[] = [];
        const keys = Object.keys(this);

        for (const key of keys) {
            const value = (this as any)[key];
            if (typeof value !== 'function' && key !== 'prototype' && key !== 'length' && key !== 'name') {
                values.push(value);
            }
        }

        return values;
    }

    static getKeys(): string[] {
        const keys: string[] = [];
        const allKeys = Object.keys(this);

        for (const key of allKeys) {
            const value = (this as any)[key];
            if (typeof value !== 'function' && key !== 'prototype' && key !== 'length' && key !== 'name') {
                keys.push(key);
            }
        }

        return keys;
    }
}
