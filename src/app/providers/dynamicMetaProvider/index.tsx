import { createContext, useState } from 'react';

export type DynamicMetaContextType = {
  dynamicMeta: Record<string, string>;
  setDynamicMeta: React.Dispatch<React.SetStateAction<Record<string, string>>>;
};

export const DynamicMetaContext = createContext<DynamicMetaContextType | undefined>(undefined);

export const DynamicMetaProvider = ({ children }: { children: React.ReactNode }) => {
  const [dynamicMeta, setDynamicMeta] = useState<Record<string, string>>({});
  return <DynamicMetaContext.Provider value={{ dynamicMeta, setDynamicMeta }}>{children}</DynamicMetaContext.Provider>;
};