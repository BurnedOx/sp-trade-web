import { useContext } from 'react';

export function useStore<T> (Context: React.Context<T | undefined>) {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useStore must be used within that StoreProvider');
    }
    return context;
};
