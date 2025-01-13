"use client"; // Mark this as a Client Component
import { useRef } from 'react'
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../store/index"; // Import your Redux store

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
