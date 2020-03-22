export { }

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    interface Window {
        AFRAME: any
    }
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            [k: string]: any
        }
    }
}
