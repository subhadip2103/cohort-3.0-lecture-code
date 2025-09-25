import { useEffect, useRef, useState } from "react";

export function useDebounce(originalfn) {
    const clockReF = useRef();

    function debounceRequest(){
        clearTimeout(clockReF.current);
        
        clockReF.current=setTimeout(originalfn,200)
    }

    return debounceRequest
    

}

