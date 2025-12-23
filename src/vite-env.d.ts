/// <reference types="vite/client" />

interface Window {
  gtag?: (
    command: string,
    targetId: string,
    config?: Record<string, any>
  ) => void;
  gtag_report_conversion?: (url?: string) => boolean;
  dataLayer?: any[];
}
