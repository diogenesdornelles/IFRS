/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/categories/categories`; params?: Router.UnknownInputParams; } | { pathname: `/product/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/products/[categoryId]`, params: Router.UnknownInputParams & { categoryId: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/categories/categories`; params?: Router.UnknownOutputParams; } | { pathname: `/product/[id]`, params: Router.UnknownOutputParams & { id: string; } } | { pathname: `/products/[categoryId]`, params: Router.UnknownOutputParams & { categoryId: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/categories/categories${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/categories/categories`; params?: Router.UnknownInputParams; } | `/product/${Router.SingleRoutePart<T>}` | `/products/${Router.SingleRoutePart<T>}` | { pathname: `/product/[id]`, params: Router.UnknownInputParams & { id: string | number; } } | { pathname: `/products/[categoryId]`, params: Router.UnknownInputParams & { categoryId: string | number; } };
    }
  }
}
