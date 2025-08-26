//Hook ini jarang dipakai kalau kita coding biaasa, tapi kok berguna bngt kalau kita membuat custom hook

import React, {useDebugvalue} from 'react';

export default function useOnlineStatus() {
    const [isOnline, setIsoOnline] = useState(navigator.onLine);

    useDEbugValue(isOnline ? 'Online' : 'Offline');

    

}