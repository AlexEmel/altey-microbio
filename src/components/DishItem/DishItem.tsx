import { useAppSelector } from "@/store/store";
import type { ReactNode } from "react";

export function DishItem(): ReactNode {
  const isDishCollapsed = useAppSelector(store => store.microbio.ui);
  
  return <></>
}