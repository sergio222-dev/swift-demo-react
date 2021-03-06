import clsx from 'clsx';

export const useCapitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
};

export function usecustomstyle(customStyle: any, componentStyle: any) {

    if (!customStyle) {
        return componentStyle;
    }

    const customKeys = customStyle ? Object.keys(customStyle) : [];
    const componentKey = componentStyle ? Object.keys(componentStyle) : [];
    const allKeys = customKeys.concat(componentKey);
    const keys = [...new Set(allKeys)];

    const classes: any = {};
    keys.forEach(
        (i) => {
            classes[i] = clsx(
                i in customStyle ? customStyle[i] : false,
                i in componentStyle ? componentStyle[i] : false
            );
        }
    );

    return classes;
}


