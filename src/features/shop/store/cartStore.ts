import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { IItemCard } from "@/features/shop/interfaces/items.dto";

interface CartState {
  items: IItemCard[];

  add: (item: IItemCard) => void;
  remove: (articleId: number) => void;
  removeAll: () => void;
  getTotalItems: () => number;
  getTotalUnits: () => number;
  getTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      add: (item) =>
        set((state) => {
          // some => evalúa una condición sobre los elementos y devuelve true o false
          // si encuentra devuelve true y corta el recorrido
          // si no encuentra fianliza el recorrido y devuelve false
          const exists = state.items.some(
            (cartItem) => cartItem.article_id === item.article_id
          );

          // Sale de la callback add => agrega unidades
          if (exists) {
            return {
              /* map retorna un array con la misma cantidad de 
                 elementos que el original */
              items: state.items.map((cartItem) =>
                cartItem.article_id === item.article_id
                  ? { ...cartItem, units: cartItem.units + item.units }
                  : cartItem
              ),
            };
          }

          // camino alternativo para agregar articulos al carrito
          return {
            items: [...state.items, item],
          };
        }),

      remove: (articleId) =>
        set((state) => ({
          /* Filter => retorna un array con igual, menor o cero 
             elementos que el original si se cumple la condición */
          items: state.items.filter((item) => item.article_id !== articleId),
        })),

      removeAll: () => set({ items: [] }),

      getTotalItems: () => get().items.length,

      getTotalUnits: () =>
        get().items.reduce((acc, item) => acc + (item.units ?? 1), 0),

      getTotal: () =>
        get().items.reduce(
          (total, item) => total + (item.units ?? 1) * (Number(item.price ?? 0)),
          0
        ),
    }),
    {
      name: "itemsStorage", // clave en localStorage
    }
  )
);