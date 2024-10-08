// google.identity.d.ts
declare namespace google {
    namespace accounts.id {
      function initialize(options: { client_id: string; callback: Function }): void;
      function renderButton(element: HTMLElement, options: Record<string, unknown>): void;
      function prompt(): void;
    }
  }
  