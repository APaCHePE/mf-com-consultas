declare module '@test/mf-utils-modules' {
  export function isSidebarMenuItemsVisible(roles: string[]): boolean;
}

declare module '@prisma/mf-shared-ui' {
  import { Type } from '@angular/core';
  export const SharedButtonComponent: Type<any>;
}