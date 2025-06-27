// hooks/useClickOutside.ts
import React, { useEffect, type RefObject } from 'react';

type UseClickOutsideProps = {
    refs: RefObject<HTMLElement>[];
    handler: React.Dispatch<React.SetStateAction<boolean>>
};

const useClickOutside = ({ refs, handler }: UseClickOutsideProps) => {
    useEffect(() => {

        const listener = (event: MouseEvent) => {
            const isInside = refs.some(ref => ref.current?.contains(event.target as Node));
            if (!isInside) {
                handler(false);
            }
        };

        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [refs, handler]);
};

export default useClickOutside;
