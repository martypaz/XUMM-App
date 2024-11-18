/* Field ==================================================================== */
export const Blob = {
    getter: (self: any, name: string) => {
        return (): string => {
            return self[name];
        };
    },
    setter: (self: any, name: string) => {
        return (value: string): void => {
            if (typeof value === 'undefined') {
                self[name] = undefined;
                return;
            }

            // TODO: valid we are setting hex value
            if (typeof value !== 'string') {
                throw new Error(`field ${name} required type string, got ${typeof value}`);
            }

            self[name] = value;
        };
    },
};