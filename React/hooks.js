/*
Newer Hooks (React 16.8+)

    1. useEffect(): Replaces componentDidMount, componentDidUpdate, and componentWillUnmount.
    2. useLayoutEffect(): Similar to useEffect, but fires after layout changes.
    3. useMemo(): Memoizes values to avoid unnecessary recalculations.
    4. useCallback(): Memoizes functions to avoid unnecessary re-renders.

    Remember to use the newer hooks (useEffect, useLayoutEffect, useMemo, useCallback) for new projects, as they provide more flexibility and better performance.

    //-------useEffect

    Summary of When useEffect Runs:
        - After every render (if no dependencies are provided).
        - Once after the initial render (if an empty dependency array is provided).
        - When specific dependencies change (if a dependency array is provided).
        - On unmount or before re-running the effect (cleanup phase).

    useEffect(() => {
    // Simulate a data fetch
    const fetchData = async () => {
      const result = await fetch('https://api.example.com/data');
      const json = await result.json();
      setData(json);
    };
    fetchData();
  }, []); // Empty dependency array ensures this runs only once


    //----useLayoutEffect
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        setHeight(divRef.current.offsetHeight); // Measure the height before rendering
    }, []);


    */