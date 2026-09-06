/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV?: string;
  readonly VITE_ENABLE_PERF_MONITOR?: string;
  readonly VITE_ENABLE_LOW_POWER_OVERRIDE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
