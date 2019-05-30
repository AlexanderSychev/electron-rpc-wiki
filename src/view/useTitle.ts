import { useEffect } from 'react';

const useTitle = (title?: string | null | undefined) => {
    useEffect(() => {
        const docTitle = title ? `ElectronRPC - ${title}` : 'ElectronRPC';
        if (document.title !== docTitle) {
            document.title = docTitle;
        }
    }, [title]);
};

export default useTitle;
